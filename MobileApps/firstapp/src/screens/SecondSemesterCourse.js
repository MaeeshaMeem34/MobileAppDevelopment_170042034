import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const secondSemCourse = () => {
  let $ = ")";
  const course = [
    { name: "CSE 4211" ,key: "1"},
    { name: "HUM 4201" ,key: "2"},
    { name: "CSE 4209" ,key: "3"},
    { name: "SWE 4225" ,key: "4"},
    { name: "PHY 4220" ,key: "5"},
    { name: "SWE 4231" ,key: "6"},
  ];

  return (
    <View>
      <FlatList
        data={course}
        renderItem={function ({ item }) {
        return <Text style={styles.textStyle}>{item.key}{$} {item.name}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    color: "blue",
    marginTop: 5,
    textAlign: "left",
    paddingLeft: 10,
  },
});

export default secondSemCourse;
