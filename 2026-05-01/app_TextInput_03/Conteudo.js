import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableHighlight,
  StyleSheet,
} from "react-native";

export default function Conteudo() {
    const goku = 'https://recreio.com.br/wp-content/uploads/2024/05/goku_capa-1.jpg'
    const vegeta = 'https://ovicio.com.br/wp-content/uploads/2021/01/20210113-kane-ward-majin-vegeta.jpg'
    const gohan = 'https://conteudo.imguol.com.br/c/entretenimento/9c/2017/07/14/gohan-1500057808905_v2_4x3.jpg'
 
    const personagens = [
    {
      nome: "GOKU",
      img: goku,
    },
    {
      nome: "VEGETA",
      img: vegeta,
    },
    {
      nome: "GOHAN",
      img: gohan,
    },
  ];

  const [indice, setIndice] = useState(
    Math.floor(Math.random() * personagens.length)
  );

  const [texto, setTexto] = useState("");
  const [mensagem, setMensagem] = useState("");

  function verificar() {
    if (texto.toUpperCase() === personagens[indice].nome) {
      setMensagem("Acertou!");
    } else {
      setMensagem("Errou! Tente novamente.");
    }
  }

  function proximo() {
    let novo = Math.floor(Math.random() * personagens.length);
    setIndice(novo);
    setTexto("");
    setMensagem("");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Acerte o Personagem</Text>

      <Image
        source={personagens[indice].img}
        style={styles.img}
      />

      <TextInput
        style={styles.input}
        placeholder="Digite o nome do personagem"
        value={texto}
        onChangeText={setTexto}
      />

      <TouchableHighlight
        style={styles.botaoVerificar}
        onPress={verificar}
      >
        <Text style={styles.textoBotao}>Verificar</Text>
      </TouchableHighlight>

      <Text style={styles.mensagem}>{mensagem}</Text>

      <TouchableHighlight
        style={styles.botaoProximo}
        onPress={proximo}
      >
        <Text style={styles.textoBotao}>Próximo</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#89c7c7",
    paddingTop: 20,
  },

  titulo: {
    fontSize: 22,
    color: "#fff",
    marginBottom: 20,
  },

  img: {
    width: 200,
    height: 200,
    borderWidth: 2,
    marginBottom: 20,
  },

  input: {
    width: "80%",
    backgroundColor: "#eee",
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },

  botaoVerificar: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },

  botaoProximo: {
    backgroundColor: "#2196F3",
    padding: 10,
    borderRadius: 5,
  },

  textoBotao: {
    color: "#fff",
    fontWeight: "bold",
  },

  mensagem: {
    color: "#fff",
    marginBottom: 10,
  },
});