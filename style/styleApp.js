import {StyleSheet} from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  footer:{
    alignItems: "center",
    marginBottom: 40,
  },
  header:{
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginTop: 20,
  },
  title: {
    fontSize: 42,
    marginLeft: 140,
    marginTop: 20,
    marginBottom: 5,
    fontWeight: "bold",
  },
  titleLogin: {
      fontSize: 42,
      marginLeft: 100,
      marginTop: 20,
      marginBottom: 5,
      fontWeight: "bold",
    },
    titleShip: {
          fontSize: 32,
          marginLeft: 20,
          marginRight: 20,
          marginTop: 20,
          marginBottom: 5,
          fontWeight: "bold",
        },
  text:{
    marginLeft: 50,
    fontSize: 20,
  },
  input: {
    width: "80%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  button: {
    marginTop: 100,
  },
  navbar: {
  width: "100%",
  height:"100px",
  },
  table: {
      margin: 20,
      borderWidth: 1,
      borderColor: "#444",
      borderRadius: 5,
      overflow: "hidden",
    },
    headerRow: {
      flexDirection: "row",
      backgroundColor: "#ddd",
      borderBottomWidth: 1,
    },
    row: {
      flexDirection: "row",
      paddingVertical: 12,
      borderBottomWidth: 1,
      borderColor: "#aaa",
    },
    rowSelected: {
      backgroundColor: "#4a90e2",
    },
    cell: {
      flex: 1,
      paddingHorizontal: 10,
    },
    header: {
      fontWeight: "bold",
    },
    textSelected: {
      color: "white",
      fontWeight: "bold",
    },
});
