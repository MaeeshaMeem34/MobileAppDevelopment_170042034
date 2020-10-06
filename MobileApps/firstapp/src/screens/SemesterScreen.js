import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const SemesterPage = (props) => {
  return (
    <View style={styles.screenContainer}>
      <Button
        color="#4677DA"
        
        title="Semester 1"
        onPress={function () {
          props.navigation.navigate("1st semester Courses");
        }}
      />
      <Button
        title="Semester 2"
        color="#5221A8"
        onPress={function () {
          props.navigation.navigate("2nd semester Courses");
        }}
      />
      <Button
        title="Semester 3"
        color="#5656B9"
        onPress={function () {
          props.navigation.navigate("3rd semester Courses");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: "flex-start",
    padding: 10,
  },
});

export default SemesterPage;
