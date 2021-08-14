import React from 'react';
import { useEffect } from 'react';
import {View ,Text,Image,StyleSheet,FlatList,Button, TouchableOpacity,SafeAreaView} from 'react-native';
import { useRoute } from '@react-navigation/core';
import { Entypo } from '@expo/vector-icons';

import PlayerWidget from '../components/PlayerWidget';

const album={
  id: '40',
  name: 'Good vibes',
  by: 'Spotify',
  numberOfLikes: 38,
  imageUri: 'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
  artistsHeadline: 'Taylor Swift, Kygo, Avicii',

  songs: [{
    id: '1',
    imageUri: 'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
    title: 'High on You',
    artist: 'Helen',
  },{
    id: '2',
    imageUri: 'https://cdn6.f-cdn.com/contestentries/1485199/27006121/5ca3e39ced7f1_thumb900.jpg',
    title: 'Lorem Ipsum',
    artist: 'Artist 2',
  },{
    id: '3',
    imageUri: 'https://images-na.ssl-images-amazon.com/images/I/61F66QURFyL.jpg',
    title: 'Hello from the other side',
    artist: 'Helen',
  },{
    id: '4',
    imageUri: 'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
    title: 'High on You',
    artist: 'Helen',
  },]
}
export type SongItemProps={
    imageUri:string,
    title:string,
    artists:string,
};

const SongItem=(props:SongItemProps)=>{
    return (
        <View style={styles.songItem}>
            <Image  style={styles.image}source={{uri:props.imageUri}}/>
            <View style={{flexDirection:'column'}}>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.artist}>{props.artists}</Text>
            </View>
            <Entypo name="dots-three-vertical" color="white" size={14} style={{ position:"absolute", right:20, marginTop:15,}}/>
        </View>
    );
}




const AlbumScreen=(props)=>{  
    const onPress=()=>console.warn("Button Pressed");

    return (
        <View style={styles.container}>
           {/* Header containing info of albums */}
           <View style={styles.header}>
               <Image  style={{width:150,
        height:150,}}source={{uri:album.imageUri}}/>
        <Text style={{color:"#ffffff",position:"absolute",top:160,fontSize:20 , fontWeight:"bold"}}>{album.name}</Text>
        <Text style={{color:"#ffffff",position:"absolute",top:190,fontSize:10 , fontWeight:"500",textTransform:"uppercase"}}>BY {album.by} . {album.numberOfLikes}K Likes</Text>
        <TouchableOpacity style={{justifyContent:"center",alignItems:"center"}}>
        <View style={styles.button}><Text style={{fontSize:20,color:"#ffffff",fontWeight:"700"}}>Play</Text></View>
        </TouchableOpacity>
           </View>
           {/* List of the songs of albums */}
        <SafeAreaView style={styles.list}> 
           <FlatList
           data={album.songs}
           renderItem={({item})=><SongItem imageUri={item.imageUri} title={item.title} artists={item.artist}
           />} showsVerticalScrollIndicator={false} 
           />
        
        </SafeAreaView>
        </View> 
    );
}



export default AlbumScreen;



const styles=StyleSheet.create({
    container:{
        justifyContent:"center",
        alignItems:"center",
    },
    header:{
        position:"absolute",
        top:40,
        width:"100%",
        justifyContent:"center",
        alignItems:"center",
        

    },
    button:{
        width:120,
        height:40,
        backgroundColor:"#05ab21",
        position:"absolute",
        top:69,
        borderRadius:20,
        justifyContent:"center",
        alignItems:"center"
    },
    songItem:{
        
        flexDirection:"row",
        width:"100%",
        height:"10%",
        marginTop:20,
        paddingBottom:50,
    },
    image:{
        width:60,
        height:60,
        borderRadius:5,
    },
    title:{
        marginTop:10,
        marginLeft:15,
        color:"white",
        fontSize:17,
        fontWeight:"bold",
    },
    artist:{
        marginLeft:15,
        color:"white",
        fontSize:10,
    },
    list:{
        position:"absolute",
        width:"100%",
        height:300,
        justifyContent:"space-between",
        top:300,
        left:7,
        padding:10,
    
    },
    playerWidget:{
        backgroundColor:"#191b1f",


    },
});