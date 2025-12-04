import styles from '../style/styleApp.js';
import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, Alert} from "react-native";
import useFetch from "../hooks/useFetch";
import useAsyncStorage from "../hooks/useAsyncStorage"
import { jwtDecode } from "jwt-decode";
const {POST} = useFetch();
const {setItem, getItem, removeItem} = useAsyncStorage("token");

const HomeScreen = ({navigation}) => {
const [isAdmin, setIsAdmin] = useState(false);
const [role, setRole] = useState("");
const [username, setUsername] = useState("");

useEffect(()=> {
    const getToken = async() => {
        const token = await getItem();
        try{
            const payload = jwtDecode(token);
            payload.isAdmin == true ? setIsAdmin(true) : setIsAdmin(false);
            setUsername(payload.username);
        }catch (error) {
            console.log("Erreur décodage JWT :", error);
        }
    };
    getToken();
}, []);

console.log("isAdmin >>> ", isAdmin);

useEffect(()=>{
    isAdmin ? setRole("Amiral Pirate") : setRole("Pirate");
}, [isAdmin]);

console.log("role :", role);

const handleLogout = async() => {
    try{
        await removeItem();
        navigation.navigate('Login');
    }catch (error){
        console.log("Erreur :", error);
    }
}

const handleGoToShipsScreen = async() => {
    try{
        const isTokenHere = await getItem();
        if(isTokenHere != null){navigation.navigate('Ships');}
        else{
             Alert.alert(
                "Erreur !",
                "Veuillez vous connecter pour accéder à cette page.",
                [
                { text: "OK"}
                ],
                { cancelable: false }
             );
        }
    }catch (error){
        console.log("Erreur :", error);
    }
}

return (
    <>
        <View style={styles.header}>
            <Text style={styles.title}>Menu</Text>
            <Text style={styles.text}>Nom d'utilisateur : {username}</Text>
            <Text style={styles.text}>Rôle : {role}</Text>
        </View>
        <View style={styles.container}>
            <Button title="Afficher les bateaux dans le port" onPress={handleGoToShipsScreen} />
        </View>
        <View style={styles.footer}>
            <Button
                title="Déconnexion"
                onPress={handleLogout}
                accessibilityLabel="logoutButton"
            />
        </View>
    </>
    );
};

export default HomeScreen;