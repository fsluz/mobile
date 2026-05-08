import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Alert } from 'react-native';
import estilos from './styles/Estilo';
import Cabecalho from './components/Cabecalho';
import Conteudo from './components/Conteudo';

export default function App() {
  const [nome, setNome] = useState('');
  const [produto, setProduto] = useState('Eletrônicos');
  const [mensagem, setMensagem] = useState('');
  const [corFundo, setCorFundo] = useState('#ffffff');

  function corDeFoco(focado) {
    setCorFundo(focado ? '#FFE600' : '#ffffff');
  }

  function mostrarMensagem() {
    if (!nome.trim()) {
      Alert.alert('Atenção', 'Digite seu endereço antes de confirmar.');
      return;
    }

    const texto = `Entrega de ${produto} para ${nome.trim()} confirmada! 🚁`;
    setMensagem(texto);
  }

  return (
    <View style={estilos.container}>
      <Cabecalho />
      <Conteudo
        nome={nome}
        produto={produto}
        mensagem={mensagem}
        corFundo={corFundo}
        onNomeChange={setNome}
        onProdutoChange={setProduto}
        onMostrarMensagem={mostrarMensagem}
        onFocusInput={corDeFoco}
        onBlurInput={corDeFoco}
      />
      <StatusBar style="auto" />
    </View>
  );
}
