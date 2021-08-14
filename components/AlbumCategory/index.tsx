import React from 'react'
import { View, Text, InteractionManager } from 'react-native'
import { FlatList } from 'react-native'
import {AlbumType} from '../../types'
import AlbumComponent, { AlbumProps } from '../Album'
import Album from '../Album'
import styles from './styles'

export type AlbumCategoryProps={
    title:string,
    albums:[AlbumType],
}
const AlbumCategory=(props:AlbumCategoryProps)=>{
    return (
    <View style={styles.container}>
        {/* title of category */}
        <Text style={styles.title}>{props.title} </Text>
        {/* lists of albums */}
        <FlatList
        data={props.albums}
        renderItem={({item})=><AlbumComponent id={item.id} imageUri={item.imageUri} artistsHeadline={item.artistsHeadline}/>}
        keyExtractor={(item)=>item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        />

    </View>
    );
}

export default AlbumCategory;