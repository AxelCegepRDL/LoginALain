import styles from '../style/styleApp.js';
import React, { useState } from "react";
import { View, Text, TextInput, Button} from "react-native";

const TheMain = () => {
const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleLogin = () => {
    setSubmitted(true);
  };

  const handleLogout = () => {
    setSubmitted(false);
    setEmail(""); // Optionnel : réinitialiser l'email
  };

  return (
    <View style={styles.container}>
      {!submitted ? (
        <>
          <Text style={styles.title}>Connexion</Text>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            accessibilityLabel="emailInput"
            style={styles.input}
          />
          <Button
            title="Se connecter"
            accessibilityLabel="submitButton"
            onPress={handleLogin}
          />
        </>
      ) : (
        <>
          <Text accessibilityLabel="welcomeText">
            Bienvenue {email}
          </Text>
          <Button
            title="Déconnexion"
            accessibilityLabel="logoutButton" // 👈 utile pour Maestro
            onPress={handleLogout}
          />
        </>
      )}
    </View>
  );
};

export default TheMain;

