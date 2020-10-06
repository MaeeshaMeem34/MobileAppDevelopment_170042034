import React from "react";
import { Text, StyleSheet, View } from "react-native";

const profile = () => {
  return (
    <View>
      <Text>my profile</Text>
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

export default profile;
