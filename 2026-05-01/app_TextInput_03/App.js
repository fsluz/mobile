import React from "react";
import { View } from "react-native";
import Cabecalho from "./Cabecalho";
import Conteudo from "./Conteudo";
import Rodape from "./Rodape";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Cabecalho />
      <Conteudo />
      <Rodape />
    </View>
  );
}