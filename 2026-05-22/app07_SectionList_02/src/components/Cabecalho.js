import React from 'react';
import { View, Text } from 'react-native';
import estilos from '../styles/estilos';

const Cabecalho = () => {
  return (
    <View style={estilos.cabecalho}>
      <Text style={estilos.cabecalhoTitulo}>SECTIONLIST</Text>

      <View style={estilos.headerIconBox}>
        <Text style={estilos.headerIcon}>✅</Text>
      </View>

      <Text style={estilos.cabecalhoSubtitulo}>Lista de Tarefas</Text>
    </View>
  );
};

export default Cabecalho;
