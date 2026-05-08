import React from 'react';
import { View } from 'react-native';
import estilo from './src/styleSheet/estilo';
import Cabecalho from './src/components/Cabecalho';
import Conteudo from './src/components/Conteudo';
import Rodape from './src/components/Rodape';

export default function App() {
  return (
    <View style={estilo.area_fundo}>
      <Cabecalho />
      <Conteudo />
      <Rodape />
    </View>
  );
}
