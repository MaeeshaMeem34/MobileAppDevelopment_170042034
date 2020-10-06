import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

const homeScreen = (props) => {
  return (
    <View>
      <Text style={styles.textStyle1}> Computer and Science Engineering </Text>
      <Text style={styles.textStyle2}> Program: Software Engineering </Text>

      <TouchableOpacity
        onPress={function () {
          props.navigation.navigate("Profile");
        }}
      >
        <Text style={styles.text}>Profile</Text>
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
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle1: {
    fontSize: 25,
    color: "blue",
    marginTop: 150,

    textAlign: "center",
  },

  textStyle2: {
    fontSize: 25,
    color: "blue",
    marginTop: 5,

    textAlign: "center",
  },

  text: {
    fontSize: 25,
    color: "blue",
    borderWidth: 1,
    textAlign: "center",
    padding: 25,
    borderColor: "black",
    backgroundColor: "red",
  },
});

export default homeScreen;
