import React from "react";
import {Text,StyleSheet,View,Button,TouchableOpacity,Image,} from "react-native";


const homeScreen = (props) => {
  return (
    <View>
      <Image
        style={styles.imageStyle}
        source={require("./../../assets/iutlogo.png")}
      />

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
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle1: {
    fontSize: 25,
    color: "blue",
    textAlign: "center",
    paddingBottom: 5,
    paddingTop: 10,
  },

  textStyle2: {
    fontSize: 25,
    color: "blue",
    marginTop: 5,
    paddingBottom: 80,
    textAlign: "center",
  },
  imageStyle: {
    height: 200,
    width: 150,
    alignSelf: "center",
    marginTop: 10,
    resizeMode: "contain",
  },

  text: {
    fontSize: 15,
    color: "#fff",
    alignSelf: "center",
    textTransform: "uppercase",
  },
  ButtonContainer: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
});

export default homeScreen;
