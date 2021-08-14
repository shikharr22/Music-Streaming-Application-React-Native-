import Amplify from 'aws-amplify'
import config from './src/aws-exports'
Amplify.configure(config)
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {View,StyleSheet} from 'react-native';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import PlayerWidget from './components/PlayerWidget';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={'dark'} />
        <View style={styles.playerWidget}>
        <PlayerWidget/>
        </View>
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}

const styles=StyleSheet.create({
  playerWidget:{
    position:"absolute",
    bottom:45,
    width:"100%",
    height:80,
    backgroundColor:"#191b1f",
},
});

