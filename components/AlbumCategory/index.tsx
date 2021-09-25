import React, { useState ,useEffect } from 'react'
import { View, Text, InteractionManager } from 'react-native'
import { FlatList } from 'react-native'
import {AlbumType} from '../../types'
import AlbumComponent from '../Album'
import Album from '../Album'
import styles from './styles'
import db from '../../firebase.config';
export type AlbumCategoryProps={
    title:string,
    id:string,
}
const AlbumCategory=(props:AlbumCategoryProps)=>{

    const [albums,setAlbums]=useState([] as any);
    
    useEffect(()=>{
        db.collection(`Category ${props.id} Albums`).orderBy('id','asc').onSnapshot(snapshot=>{
            setAlbums(snapshot.docs.map(doc=>doc.data()));
        });
},[]);
    
 
    return (
    <View style={styles.container}>
        {/* title of category */}
        <Text style={styles.title}>{props.title} </Text>
        {/* lists of albums */}
        <FlatList
        data={albums}
        renderItem={({item})=><AlbumComponent id={item.id} imageUri={item.AlbumImage} artistsHeadline={item.AlbumArtist} title={item.AlbumName}/>}
        keyExtractor={(item)=>item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        />

    </View>
    );
}

export default AlbumCategory;