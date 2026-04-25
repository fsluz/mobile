import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Cabecalho() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Capítulo 06 - Componentes UI
      </Text>
      <Text style={styles.subtitulo}>
        TouchableHighlight || TextInput
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0000AA",
    padding: 20,
    alignItems: "center",
  },
  titulo: {
    color: "#fff",
    fontWeight: "bold",
  },
  subtitulo: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});