import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import AlbumComponent from '../components/Album';
import AlbumCategory from '../components/AlbumCategory';
import albumCategories from '../SpotifyAssets/data/albumCategories';


export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <FlatList
      data={albumCategories}
      renderItem={({item})=><AlbumCategory title={item.title} albums={item.albums}/>}
      />
     
    </View>
  );
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
  }
});