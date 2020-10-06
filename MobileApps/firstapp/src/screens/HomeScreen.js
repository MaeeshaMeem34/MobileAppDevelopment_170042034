import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity,Image } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

const homeScreen = (props) => {
  return (
    <View>



      
      <Text style={styles.textStyle1}> Department Of CSE </Text>
      <Text style={styles.textStyle2}> Program: Software Engineering </Text>

     

      <TouchableOpacity
      style={styles.ButtonContainer}
        onPress={function () {
          props.navigation.navigate("Profile");
        }}
      >
        <Text style={styles.text}> Profile </Text>
      </TouchableOpacity>

      <Button 
      
        title="Semester wise course list"
        color="red"
        onPress={function () {
          props.navigation.navigate("Semesters");
        }}
      />

      <Button
        title="List of Faculty Member"
        onPress={function () {
          props.navigation.navigate("FacultyList");
        }}
      />

      <Image>
        so
      </Image>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle1: {
    fontSize: 25,
    color: "blue",
    marginTop: 200,
    textAlign: "center",
    paddingBottom: 5
  },

  textStyle2: {
    
    fontSize: 25,
    color: "blue",
    marginTop: 5,
    paddingBottom: 80,
    textAlign: "center",
  },

  text: {
    fontSize: 15,
    color: "#fff",
    alignSelf: "center",
    textTransform: "uppercase"
    
  },
  ButtonContainer:{
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    

  },
});

export default homeScreen;
