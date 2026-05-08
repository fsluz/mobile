import React from 'react';
import { View, Text, Image } from 'react-native';
import estilo from './../styleSheet/estilo';

function Cabecalho() {
  let img_logo = require('./../../assets/home.png');
  let titulo = 'Avaliação de Filmes';

  return (
    <View style={estilo.area_cabecalho}>
      <Image source={img_logo} style={estilo.img_cabecalho} />
      <Text style={estilo.titulo_cabecalho}>{titulo}</Text>
    </View>
  );
}

export default Cabecalho;
