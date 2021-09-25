import React from "react";
import { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Pressable,
} from "react-native";
import { useRoute } from "@react-navigation/core";
import { Entypo } from "@expo/vector-icons";
import { ActivityIndicator } from "react-native";
import firebase from "firebase";
import db from "../firebase.config";
import PlayerWidget from "../components/PlayerWidget";
import { updateSong } from "../src/graphql/mutations";

export type SongItemProps = {
  imageUri: string;
  title: string;
  artists: string;
  key: string;
};

const SongItem = (props: SongItemProps) => {
  return (
    <View style={styles.songItem}>
      <Image style={styles.image} source={{ uri: props.imageUri }} />
      <View style={{ flexDirection: "column" }}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.artist}>{props.artists}</Text>
      </View>
    </View>
  );
};

const AlbumScreen = ({ route }) => {
  const [songs, setSongs] = useState({
    title: "",
    image: "",
    artist: "",
    
  } as any);

  const { id, imageUri, title } = route.params;

  const [currSong, setCurrSong] = useState({title: "",
  image: "",
  artist: "",
  });


  const updatedSong={ title: "",
  image: "",
  artist: "",
  };

  useEffect(() => {
    db.collection(`Album ${id}`)
      .orderBy("id", "asc")
      .onSnapshot((snapshot) => {
        setSongs(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  return (
    <View style={styles.container}>
      {/* Header containing info of albums */}
      <View style={styles.header}>
        <Image style={{ width: 150, height: 150 }} source={{ uri: imageUri }} />
        <Text
          style={{
            position: "absolute",
            top: 160,
            fontWeight: "bold",
            fontSize: 20,
            color: "white",
          }}
        >
          {title}
        </Text>
        <TouchableOpacity
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <View style={styles.button}>
            <Text style={{ fontSize: 20, color: "#ffffff", fontWeight: "700" }}>
              Play
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.list}>
        <FlatList
          data={songs}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Pressable
              onPress={() =>{
                updatedSong.image=item.SongImage;
                updatedSong.artist=item.SongArtist;
                updatedSong.title=item.SongName;
                setCurrSong(updatedSong);
                
              }}>
              <SongItem
                imageUri={item.SongImage}
                title={item.SongName}
                artists={item.SongArtist}
                key={item.id}
              />
            </Pressable>
          )}
          ListFooterComponent={<View style={{ height: 20 }} />}
        />
      </View>
      <View style={styles.playerWidget}>
        <PlayerWidget title={currSong.title} image={currSong.image} artist={currSong.artist}  /> 
      </View>
    </View>
  );
};

export default AlbumScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    position: "absolute",
    top: 40,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: 120,
    height: 40,
    backgroundColor: "#05ab21",
    position: "absolute",
    top: 50,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  songItem: {
    flexDirection: "row",
    width: "100%",
    height: "5%",
    marginTop: 20,
    paddingBottom: 50,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 5,
  },
  title: {
    marginTop: 10,
    marginLeft: 5,
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
  artist: {
    marginLeft: 8,
    color: "white",
    fontSize: 10,
  },
  list: {
    width: "100%",
    top: 290,
    left: 7,
    bottom: 20,
    padding: 5,
  },
  playerWidget: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 70,
    backgroundColor: "#191b1f",
  },
});
