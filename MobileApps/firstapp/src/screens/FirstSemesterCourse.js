import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const firstSemCourse = () => {
  let $ = ")";
  const course = [
    { name: "SWE 4101" ,key: "1"},
    { name: "CSE 4205",key: "2" },
    { name: "SWE 4109" ,key: "3"},
    { name: "SWE 4108" ,key: "4"},
    { name: "EEE 4102" ,key: "5"},
    { name: "HUM 4128" ,key: "6"},
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

export default firstSemCourse;
