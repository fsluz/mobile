import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Rodape() {
  return (
    <View style={styles.container}>
      <Text>Felipe Luz</Text>
      <Text>01/04/2026</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
});