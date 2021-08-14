import React from 'react';
import styles from './style';
import {AlbumType} from '../../types'
import { View,Text,Image,StyleSheet,TouchableWithoutFeedback} from 'react-native';
import { useNavigation } from '@react-navigation/core';
export type AlbumProps={
    id:string;
    imageUri:string;
    artistsHeadline:string;
}

const AlbumComponent=(props:AlbumProps)=>{

    const navigation=useNavigation();
    
    
    const onPress=()=>{
        navigation.navigate("Album Screen",{id:props.id});    
    }


    return (
        <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.container}>
            {/*Image of the album*/}
           
            <Image style={styles.image} source={{uri:props.imageUri}}/>
            
            {/*Artist info*/}
            <Text style={styles.text}>{props.artistsHeadline}</Text>
           
        </View>
        </TouchableWithoutFeedback>
    );
};

export default AlbumComponent;

