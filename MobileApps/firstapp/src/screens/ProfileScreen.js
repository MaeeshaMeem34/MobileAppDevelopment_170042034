import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const profile = () => {
  let $ = ":";
  const myself = [
    { value: "Maeesha Tasmeem", key: "Name" },
    { value: "170042034", key: "Id" },
    { value: "306,FHR", key: "RoomNo" },
    { value: "meem@gmail.com", key: "Email" },
  ];
  return (
    <View>
      <Image
        style={styles.imageStyle}
        source={require("./../../assets/own.png")}
      />

      <FlatList
        data={myself}
        renderItem={function ({ item }) {
          return (
            <Text style={styles.textStyle}>
              {item.key}
              {$} {item.value}
            </Text>
          );
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
    paddingLeft: 30,
  },

  imageStyle: {
    height: 300,
    width: 150,
    alignSelf: "center",
    resizeMode: "contain",
  },
});

export default profile;
