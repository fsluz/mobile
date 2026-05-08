import React from 'react';
import { View, Text } from 'react-native';
import estilo from './../styleSheet/estilo';

function Rodape() {
  let autor = 'Felipe Luz';
  let data = '08/05/2026';

  return (
    <View style={estilo.area_rodape}>
      <Text style={estilo.texto_rodape}>{autor}</Text>
      <Text style={estilo.texto_rodape}>{data}</Text>
    </View>
  );
}

export default Rodape;
