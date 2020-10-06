import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const thirdSemCourse = () => {
  const course = [
    { name: "SWE 4301" },
    { name: "SWE 4301" },
    { name: "SWE 4301" },
    { name: "SWE 4301" },
  ];

  return (
    <View>
      <FlatList
        data={course}
        renderItem={function ({ item }) {
          return <Text style={styles.textStyle}>{item.name}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 25,
    color: "blue",
    textAlign: "center",
  },
  textStyle2: {
    fontSize: 25,
    color: "red",
  },
});

export default thirdSemCourse;
