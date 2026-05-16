import React from 'react';
import { View, Text, Image } from 'react-native';
import estilos from '../styleSheet/estilos';
import dados from '../../dados/paises.json';

const Cabecalho = () => {
  const flags = dados.slice(0, 4);

  return (
    <View style={estilos.cabecalhoContainer}>
      <View style={estilos.flagsRow}>
        {flags.map((f) => (
          <Image key={f.id} source={{ uri: f.bandeira }} style={estilos.flagSmall} />
        ))}
      </View>
      <Text style={estilos.cabecalhoTexto}>Países</Text>
    </View>
  );
};

export default Cabecalho;
