//J'ai demandé conseil à ChatGPT pour la Structure des fichiers du projet.
//Il m'a conseillé des fichiers de navigation pour pouvoir passer de pages en pages.

import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import MainNavigator from './MainNavigator';

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
}