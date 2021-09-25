import React from 'react';
import styles from './style';
import {AlbumType} from '../../types'
import { View,Text,Image,StyleSheet,TouchableWithoutFeedback} from 'react-native';
import { useNavigation } from '@react-navigation/core';





const AlbumComponent=(props)=>{

    const navigation=useNavigation();
    
    const onPress=()=>{
        navigation.navigate("Album Screen",{id:props.id,imageUri:props.imageUri,title:props.title});    
    }
    
    return (
        <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.container}>
            {/*Image of the album*/}
            <Image style={styles.image} source={{uri:props.imageUri}}/>
            
            {/* Album info */}
            <View style={{position:"relative",top:125,flexDirection:"column"}}>
            <Text style={{color:"#E6DECB",fontSize:12}}>{props.title}</Text>
        
            <Text style={{color:"#E6DECB",fontSize:10}}>{props.artistsHeadline}</Text>
            </View>
        </View>
        </TouchableWithoutFeedback>
    );
};

export default AlbumComponent;

