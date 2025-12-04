import styles from '../style/styleApp.js';
import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Button, Alert, TouchableOpacity, FlatList } from "react-native";
import useFetch from "../hooks/useFetch";
const {GET} = useFetch();

const ShipsScreen = ({navigation}) => {
    const [rowSelected, setRowSelected] = useState([]);
    const [ships, setShips] = useState([]);
    const shipsInDB = [];

    useEffect(()=>{
        const getShips = async () => {
            try{
                const shipsInDB = await GET("/ships");
                setShips(shipsInDB);
            } catch (error){
                console.log("Erreur :", error);
            }
        };
        getShips();
    }, []);

//console.log("ships : ", ships);

    const toggleSelectRow = (shipsId) => {
        if (rowSelected.includes(shipsId)) {
            setRowSelected(rowSelected.filter((item) => item !== shipsId));
        } else {
            setRowSelected([...rowSelected, shipsId]);
        }
    };

    const makeRow = ({item}) => {
        const ship = item;
        const isRowSelected = rowSelected.includes(ship.id);

        return (
            <TouchableOpacity
                onPress={()=> toggleSelectRow(ship.id)}
                onLongPress={()=> toggleSelectRow(ship.id)}
                style={[styles.row, isRowSelected && styles.rowSelected]}
            >
                <Text style={[styles.cell, isRowSelected && styles.textSelected]}>
                    {ship.name}
                </Text>
                <Text style={[styles.cell, isRowSelected && styles.textSelected]}>
                    {ship.captain}
                </Text>
                <Text style={[styles.cell, isRowSelected && styles.textSelected]}>
                    {ship.crewSize}
                </Text>
                <Text style={[styles.cell, isRowSelected && styles.textSelected]}>
                    {ship.goldCargo}
                </Text>
            </TouchableOpacity>
            );
        };

   return (
        <>
       <Text style={styles.titleShip}>Tableau des bateaux dans le port</Text>
       <View style={styles.table}>
             <View style={styles.headerRow}>
               <Text style={[styles.cell, styles.header]}>Nom</Text>
               <Text style={[styles.cell, styles.header]}>Capitaine</Text>
               <Text style={[styles.cell, styles.header]}>Taille d'équipage</Text>
               <Text style={[styles.cell, styles.header]}>Or transporté</Text>
             </View>

             <FlatList
               data={ships}
               keyExtractor={(item) => item.id}
               renderItem={makeRow}
             />
       </View>
       <View style={styles.footer}>
            <Button title="Retour" onPress={() => navigation.goBack()} />
       </View>
       </>
       );

};

export default ShipsScreen;