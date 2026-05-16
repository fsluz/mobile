import React from 'react';
import { View, Text } from 'react-native';
import estilos from '../styles/estilos';

const Rodape = () => {
  return (
    <View style={estilos.rodape}>
      <View style={estilos.rodapeCard}>
        <View style={estilos.logoCircle}>
          <Text style={estilos.logoTexto}>ifc</Text>
        </View>
        <View style={estilos.rodapeInfo}>
          <Text style={estilos.rodapeNome}>Felipe Luz</Text>
          <Text style={estilos.rodapeData}>15/05/2026</Text>
        </View>
      </View>
    </View>
  );
};

export default Rodape;
