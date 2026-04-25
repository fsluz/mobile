import React, { useState } from 'react';
import { SafeAreaView, View, Text, Image, TouchableHighlight } from 'react-native';
import { estilos } from './styleSheet/estilo';

export default function App() {
  const [enunciado, setEnunciado] = useState(
    "Clique no Botão para trocar a cor do fundo da tela!"
  );
  const [descricao, setDescricao] = useState("");
  const [corFundo, setCorFundo] = useState("white");

  function alteraState() {
    if (corFundo == "white") {
      setEnunciado(
        "A cor do fundo do Componente Conteudo foi trocada para cinza. Clique novamente para voltar ao estado inicial."
      );
      setDescricao("Texto inserido em tempo real");
      setCorFundo("gray");
    } else {
      setEnunciado(
        "Clique no Botão para trocar a cor do fundo da tela!"
      );
      setDescricao("");
      setCorFundo("white");
    }
  }

  return (
    <SafeAreaView style={estilos.app}>
      <View style={estilos.cabecalho}>
        <Text style={estilos.cabecalhoTitulo}>DSV - MOBILE</Text>
        <Image
          source={"https://tse4.mm.bing.net/th/id/OIP.EtEH7gIfbFbTrMWI45AzwwHaEK?rs=1&pid=ImgDetMain&o=7&rm=3"}
          style={estilos.cabecalhoImagem}
          resizeMode='contain'
        />
      </View>

      <View style={[estilos.conteudo, { backgroundColor: corFundo }]}>      
        <Text style={estilos.titulo}>UseState</Text>
        <Text style={estilos.texto}>{enunciado}</Text>

        <TouchableHighlight
          onPress={alteraState}
          style={estilos.botao}
          underlayColor='#8b0000'
        >
          <Text style={estilos.textoBotao}>CLIQUE AQUI</Text>
        </TouchableHighlight>

        <Text style={estilos.texto}>{descricao}</Text>
      </View>

      <View style={estilos.rodape}>
        <Text style={estilos.rodapeNome}>Felipe Luz</Text>
        <Text style={estilos.rodapeData}>&lt;24/04/2026&gt;</Text>
      </View>
    </SafeAreaView>
)}
