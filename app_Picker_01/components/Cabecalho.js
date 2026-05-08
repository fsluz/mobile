import React from 'react';
import { View, Text } from 'react-native';
import estilos from '../styles/Estilo';

export default function Cabecalho() {
  return (
    <View style={estilos.headerBox}>
      <View style={estilos.headerTopBar} />
      <View style={estilos.headerContent}>
        <View style={estilos.iconBox}>
          <Text style={estilos.iconEmoji}>💬</Text>
        </View>
        <Text style={estilos.headerTitle}>Componente Picker</Text>
      </View>
    </View>
  );
}
