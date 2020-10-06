import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const thirdSemCourse = () => {
  let $ = ")";
  const course = [
    { name: "SWE 4309" , key: "1" },
    { name: "HUM 4322" , key: "2"},
    { name: "CSE 4305" , key: "3"},
    { name: "SWE 4301" , key: "4"},
    { name: "CSE 4318" ,key: "5"},
    { name: "SWE 4338" ,key: "6"},
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

export default thirdSemCourse;
