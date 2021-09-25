import React , {useState,useEffect}  from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Text, View,Image,ScrollView,Button } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import AlbumComponent from '../components/Album';
import AlbumCategory from '../components/AlbumCategory';
import albumCategories from '../SpotifyAssets/data/albumCategories';
import db from '../firebase.config';


export default function TabOneScreen() {

  
    const [albumCategories,setAlbumCategories]=useState([] as any);
    

    useEffect(()=>{
             db
             .collection("Album Categories").orderBy("id","asc")
             .onSnapshot(snapshot=>{
                 setAlbumCategories(snapshot.docs.map(doc=>doc.data()));
             });
    },[]);

  return (
    
      <ScrollView>
      <SafeAreaView style={styles.container}>
      <View style={{flexDirection:"row",flex:1}}>
      <Image
        style={styles.logo}
        source={require("../assets/images/music.png")}
      />
     
      <Text style={{position:"absolute",top:60,left:75,fontWeight:"bold",fontSize:18,color:"white"}}>Stream Your Music</Text>
      </View>
      <View style={styles.flist}>
      <FlatList 
      data={albumCategories}
      renderItem={({item})=><AlbumCategory title={item.AlbumCategoryName} id={item.id}/>}
      />
      </View>
      </SafeAreaView>
      </ScrollView>
    
  );

}

const styles=StyleSheet.create({
  container:{
    justifyContent:"center", 
    flex:1,
    position:"relative",
    top:10,
  },
  logo: {
    position:"absolute",
    top:50,
    left:20,
    height: 50,
    width: 50,
  },
  flist:{
    position:"relative",
    left:20,
    top:120
  }
});