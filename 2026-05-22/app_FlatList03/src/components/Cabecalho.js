import React from 'react';
import { View, Text } from 'react-native';
import estilos from '../styleSheet/estilos';

const Cabecalho = () => {
  return (
    <View style={estilos.cabecalho}>
      <Text style={estilos.cabecalhoEmoji}>✈️</Text>
      <Text style={estilos.cabecalhoTitulo}>Melhores Naves Aeronáuticas</Text>
      <Text style={estilos.cabecalhoSubtitulo}>10 lendas do ar</Text>
    </View>
  );
};

export default Cabecalho;
