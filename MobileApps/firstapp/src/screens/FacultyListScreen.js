import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const FacultyList = () => {
  const teacher = [
    { name: "Sabbir Ahmed" },
    { name: "Bakhtiar hasan" },
    { name: "mohayminul islam" },
  ];

  return (
    <View>
      <FlatList
        data={teacher}
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
    marginTop: 5,

    textAlign: "left",
    paddingLeft: 10,
  },
});

export default FacultyList;
