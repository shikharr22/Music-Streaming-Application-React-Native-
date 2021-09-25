import { sortByField } from "@aws-amplify/core";
import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Image,
  Pressable,
} from "react-native";
import '../firebase.config';
import firebase from "firebase";
import { LogBox } from 'react-native';
import {Roboto} from '@expo-google-fonts/dev';
LogBox.ignoreLogs(['Setting a timer']);
const LoginScreen = () => {
  const navigation = useNavigation();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const SignUpUser = (email, password) => {
    try {
      if (password.length < 6) {
        alert("Password should be of length 6 or more");
        return;
      }

      firebase.auth().createUserWithEmailAndPassword(email, password);
    } catch(Error){
        console.log(Error);
    }
  };

  const LoginUser = (email, password) => {
    navigation.navigate("Home Screen");
    // try {
    //   firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
    //       navigation.navigate("Home Screen");
    //     });
    // } catch(Error) {
    
    //   console.log(Error);
    // }
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/images/music.png")}
      />
      <TextInput
        style={[styles.input,{marginTop:60}]}
        onChangeText={(text) => setEmail(text)}
        placeholder="Email"
        placeholderTextColor="white"
      />
      
      <TextInput
        style={styles.input}
        onChangeText={(text) => setPassword(text)}
        placeholder="Password"
        placeholderTextColor="white"
      />
      <Pressable onPress={() => LoginUser(Email, Password)}>
        <Text
          style={{
            textAlign: "center",
            width: 150,
            padding: 10,
            borderRadius: 5,
            borderWidth:2,
            borderColor:"#e61573",
            color: "#e61573",
            fontWeight: "bold",
            fontSize: 15,
            marginTop: 20,
            backgroundColor: "white",
          }}
        >
          Login
        </Text>
      </Pressable>
      <Pressable onPress={() => SignUpUser(Email, Password)}>
        <Text
          style={{
            textAlign: "center",
            width: 150,
            padding: 10,
            borderRadius: 5,
            borderWidth:2,
            borderColor:"#e61573",
            color: "#e61573",
            fontWeight: "bold",
            fontSize: 14,
            marginTop: 14,
            backgroundColor: "white",
          }}
        >
          Sign Up
        </Text>
      </Pressable>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 80,
    left: 70,
  },
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: "white",
    borderBottomColor: "white",
  },
  logo: {
    height: 150,
    width: 150,
  },
});
