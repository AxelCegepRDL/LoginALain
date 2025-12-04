import styles from '../style/styleApp.js';
import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import useFetch from "../hooks/useFetch";
import useAsyncStorage from "../hooks/useAsyncStorage"
const {POST} = useFetch();
const {setItem, getItem} = useAsyncStorage("token");


const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
      try{
        const data = {"username": username, "password": password };
        const response = await POST("/auth/login", data );
        await setItem(response.token);
        navigation.navigate('Home');
      }catch(error){
          Alert.alert(
            "Identifiants incorrecte !",
            "Connexion impossible, vérifiez vos identifiants.",
            [
                { text: "OK", onPress: () => console.log("OK Pressé") }
            ],
            { cancelable: false }
          );
      }
  console.log("=> Token :",response.token);

  }

  const GoHome = () => { navigation.navigate('Home');}

  return (
    <>
    <Text style={styles.titleLogin}>Connexion</Text>
    <View style={styles.container}>

          <TextInput
            placeholder="Non d'utilisateur"
            value={username}
            onChangeText={setUsername}
            accessibilityLabel="usernameInput"
            style={styles.input}
          />
          <TextInput
            placeholder="Mot de passe"
            value={password}
            onChangeText={setPassword}
            accessibilityLabel="passwordInput"
            style={styles.input}
          />
          <Button
            title="Se connecter"
            accessibilityLabel="submitButton"
            onPress={handleLogin}
            style={styles.button}
          />
          <Button
            title="page Home"
            accessibilityLabel="submitButton"
            onPress={GoHome}
            style={styles.button}
          />
    </View>
    </>
  );
};

export default LoginScreen;
