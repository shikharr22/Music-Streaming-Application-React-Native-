import React,{useEffect,useState} from 'react';
import {View , Text ,Image,Button,ActivityIndicator, Pressable} from 'react-native';
import styles from './styles'
import { AntDesign, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { Audio } from 'expo-av';
import { SongItemProps } from '../../screens/AlbumScreen';
import { getNativeSourceAndFullInitialStatusForLoadAsync } from 'expo-av/build/AV';


export type playerWidgetProps={
  title:string,
  image:string,
  artist:string,
  url:string,
}



const PlayerWidget= (props:playerWidgetProps)=>{
    const [Loaded,SetLoaded]=React.useState(false);
    const [Loading,SetLoading]=React.useState(false);
    const sound=React.useRef(new Audio.Sound);
    const [flag,setFlag]=useState(false);
    const[durationMillis,setDurationMillis]=React.useState(null);
    const[positionMillis,setPositionMillis]=React.useState(null);
    const sample=require("../../SpotifyAssets/data/raatan.mp3");
    React.useEffect(()=>{
        LoadAudio();
    },[])

    const onPlaybackStatusUpdate=(status)=>{
        setDurationMillis(status.durationMillis);
        setPositionMillis(status.positionMillis);
    }

    sound.current.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);



    
    const PlayPauseAudio = async () => {
        try {
          const result = await sound.current.getStatusAsync();
          if (result.isLoaded) {
            if (result.isPlaying === false) {
              sound.current.playAsync();
              setFlag(true);
            }
            else
            {
              sound.current.pauseAsync();
              setFlag(false);
            }
          }
        } catch (error) {}
      };
    

      const LoadAudio = async () => {
        SetLoading(true);
        const checkLoading = await sound.current.getStatusAsync();
        if (checkLoading.isLoaded === false) {
          try {
            const result = await sound.current.loadAsync(sample, {}, true);
            if (result.isLoaded === false) {
              SetLoading(false);
              console.log('Error in Loading Audio');
            } else {
              SetLoading(false);
              SetLoaded(true);
            }
          } catch (error) {
            console.log(error);
            SetLoading(false);
          }
        } else {
          SetLoading(false);
        }
      };

    const progress=()=>{
      if(sound==null || durationMillis==null || positionMillis==null)
       { return 0;}
      
       return(positionMillis/durationMillis)*100

    }
   
    return (
        <View style={styles.songItem}>
            <View style={[styles.progress,{width:`${progress()}%`}]}></View>
            <Image  style={styles.image} source={{uri:props.image}}/>
            <View style={{flexDirection:'column'}}>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.artist}>{props.artist}</Text>
            </View>
            <View style={styles.widgetIcons}>
            <Pressable onPress={PlayPauseAudio} style={styles.play}>
            <AntDesign name={flag?"pause":"caretright"} size={32} color="white"/>
            </Pressable>   
            </View>
        </View>
    );
}




export default PlayerWidget;