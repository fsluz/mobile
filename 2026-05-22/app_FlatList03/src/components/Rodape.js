import React from 'react';
import { View, Text } from 'react-native';
import estilos from '../styleSheet/estilos';


const Rodape = () => {
  return (
    <View style={estilos.rodape}>
      <Text style={estilos.rodapeTexto}>
        <Text style={estilos.rodapeDestaque}>app_FlatList03</Text>
        {'  •  '}Desenvolvimento Mobile
      </Text>
      <Text style={[estilos.rodapeTexto, { marginTop: 4 }]}>
        Total: <Text style={estilos.rodapeDestaque}>10 naves</Text> cadastradas
      </Text>
    </View>
  );
};

export default Rodape;
