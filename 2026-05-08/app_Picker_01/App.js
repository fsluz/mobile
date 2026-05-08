import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Alert } from 'react-native';
import estilos from './styles/Estilo';
import Cabecalho from './components/Cabecalho';
import Conteudo from './components/Conteudo';

export default function App() {
  const [nome, setNome] = useState('');
  const [linguagem, setLinguagem] = useState('JavaScript');
  const [mensagem, setMensagem] = useState('');
  const [corFundo, setCorFundo] = useState('#ffffff');

  function corDeFoco(focado) {
    setCorFundo(focado ? '#ffa500' : '#ffffff');
  }

  function mostrarMensagem() {
    if (!nome.trim()) {
      Alert.alert('Atenção', 'Digite seu nome antes de confirmar.');
      return;
    }

    const texto = `Olá ${nome.trim()}, você escolheu ${linguagem}.`;
    setMensagem(texto);
  }

  return (
    <View style={estilos.container}>
      <Cabecalho />
      <Conteudo
        nome={nome}
        linguagem={linguagem}
        mensagem={mensagem}
        corFundo={corFundo}
        onNomeChange={setNome}
        onLingChange={setLinguagem}
        onMostrarMensagem={mostrarMensagem}
        onFocusInput={corDeFoco}
        onBlurInput={corDeFoco}
      />
      <StatusBar style="auto" />
    </View>
  );
}
