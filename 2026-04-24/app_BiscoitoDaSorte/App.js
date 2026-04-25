import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styleSheet/estilo";

export default function App() {
  const url_esferas = "https://static.wikia.nocookie.net/dragonball/images/6/6d/Dragnballz_Object.png/revision/latest?cb=20141229155632&path-prefix=pt-br"
  const url_sheilong = "https://tse4.mm.bing.net/th/id/OIP.dyilp9kP03mVvnMUpUZI5AHaGE?rs=1&pid=ImgDetMain&o=7&rm=3"

  const [img, setImg] = useState(url_esferas);
  const [textoBotao, setTextoBotao] = useState("Abrir Biscoito");
  const [frase, setFrase] = useState("");

  const frases = [
    "A sorte favorece os corajosos.",
    "Grandes oportunidades estão a caminho.",
    "Você terá um dia incrível.",
    "Algo inesperado vai te surpreender.",
    "Confie no processo da vida.",
  ];

  function alteraStatusBiscoito() {
    if (textoBotao === "Abrir Biscoito") {
      let numeroAleatorio = Math.floor(Math.random() * frases.length);
      setImg(url_sheilong);
      setTextoBotao("Nova Tentativa");
      setFrase(frases[numeroAleatorio]);
    } else {
      setImg(url_esferas);
      setTextoBotao("Abrir Biscoito");
      setFrase("");
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>App Biscoito da Sorte</Text>
      </View>
      <Image source={img} style={styles.imagem} />
      <Text style={styles.frase}>{frase}</Text>
      <TouchableOpacity style={styles.botao} onPress={alteraStatusBiscoito}>
        <Text style={styles.textoBotao}>{textoBotao}</Text>
      </TouchableOpacity>
    </View>
  );
}