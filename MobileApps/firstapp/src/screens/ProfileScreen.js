import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const profile = () => {

  let $ = ":";
  const myself = [
    { value: "Maeesha Tasmeem", key: "Name" },
    {value: "170042034", key: "Id" },
    { value: "306,FHR", key: "RoomNo" },
    { value: "meem@gmail.com", key: "Email" },
    
  ];
  return (
    <View >
      
      <FlatList style={styles.listStyle}
        data={myself}
        renderItem={function ({ item }) {
          return (
            <Text style={styles.textStyle}>
              {item.key}
              {$}  {item.value}
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
  listStyle:
  {
    marginTop:150
  }
});

export default profile;
