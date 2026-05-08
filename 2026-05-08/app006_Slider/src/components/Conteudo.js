import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import Slider from '@react-native-community/slider';
import estilo from './../styleSheet/estilo';

function Conteudo() {
  const [nomeUsr, setNomeUsr] = useState('');
  const [slider1Value, setSlider1Value] = useState(0);
  const [slider2Value, setSlider2Value] = useState(0);
  const [corFundo, setCorFundo] = useState('#FFFF00');
  const [corTexto, setCorTexto] = useState('#000');

  // Função para gerar cor aleatória
  const gerarCorAleatoria = () => {
    const cores = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF', '#FFA500', '#800080', '#FFC0CB', '#A52A2A'];
    return cores[Math.floor(Math.random() * cores.length)];
  };

  // Função para deslizar Slider 1
  const deslizaSlider1 = (valor) => {
    setSlider1Value(valor);
    setCorFundo(gerarCorAleatoria());
  };

  // Função para deslizar Slider 2
  const deslizaSlider2 = (valor) => {
    setSlider2Value(valor);
    setCorTexto(gerarCorAleatoria());
  };

  // Função para verificar entrada
  const verifica = () => {
    if (nomeUsr === '') {
      Alert.alert('Você precisa digitar o nome na caixa de texto correspondente!');
    } else {
      Alert.alert('Olá ' + nomeUsr + '... Experimente deslizar os Sliders abaixo e verificar o que acontece!');
    }
  };

  return (
    <View style={[estilo.area_conteudo, { backgroundColor: corFundo }]}>
      <Text style={[estilo.texto_conteudo, { color: corTexto }]}>
        O componente Slider permite que o usuário escolha um valor de um intervalo predefinido de valores, arrastando um botão ao longo da linha do controle deslizante
      </Text>

      <Text style={estilo.texto_conteudo}>Dígite seu nome:</Text>

      <TextInput
        style={estilo.inputNome_conteudo}
        onFocus={() => setNomeUsr('')}
        onBlur={() => console.log('Input blur')}
        value={nomeUsr}
        onChangeText={(text) => setNomeUsr(text)}
      />

      <Text style={estilo.texto_conteudo_bold}>Deslize o slider 1:</Text>

      <Slider
        style={estilo.slider1}
        id="Slider1"
        step={5}
        minimumValue={0}
        maximumValue={100}
        minimumTrackTintColor="white"
        maximumTrackTintColor="red"
        onValueChange={deslizaSlider1}
      />

      <Text style={estilo.texto_conteudo_bold}>Deslize o slider 2:</Text>

      <Slider
        style={estilo.slider2}
        id="Slider2"
        step={10}
        minimumValue={0}
        maximumValue={100}
        minimumTrackTintColor="white"
        maximumTrackTintColor="red"
        onValueChange={deslizaSlider2}
      />

      <TouchableOpacity style={estilo.botao_clique} onPress={verifica}>
        <Text style={estilo.texto_botao}>CLIQUE AQUI</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Conteudo;
