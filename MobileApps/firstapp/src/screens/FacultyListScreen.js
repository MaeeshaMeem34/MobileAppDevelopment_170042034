import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const FacultyList = () => {
  let $ = ")";
  const teacher = [
    { name: "Tasnim Ahmed", key: "1" },
    { name: "Sabbir Ahmed", key: "2" },
    { name: "Bakhtiar hasan", key: "3" },
    { name: "Mohayminul islam", key: "4" },
    { name: "Tajkia Toma", key: "5" },
  ];

  return (
    <View>
      <FlatList
        data={teacher}
        renderItem={function ({ item }) {
          return (
            <Text style={styles.textStyle}>
              {item.key}
              {$} {item.name}
            </Text>
          );
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

export default FacultyList;
