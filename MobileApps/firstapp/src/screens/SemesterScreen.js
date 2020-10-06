import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const SemesterPage = (props) => {
  return (
    <View>
      <Button
        title="Semester 1"
        color="red"
        onPress={function () {
          props.navigation.navigate("Course1");
        }}
      />
      <Button
        title="Semester 2"
        color="blue"
        onPress={function () {
          props.navigation.navigate("Course2");
        }}
      />
      <Button
        title="Semester 3"
        color="green"
        onPress={function () {
          props.navigation.navigate("Course3");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 25,
    color: "blue",
    marginTop: 5,

    textAlign: "left",
    paddingLeft: 10,
  },
});

export default SemesterPage;
