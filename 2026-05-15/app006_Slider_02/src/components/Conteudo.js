import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Platform,
  ScrollView,
} from 'react-native';
import Slider from '@react-native-community/slider';
import { Picker } from '@react-native-picker/picker';
import estilo from './../styleSheet/estilo';

function Conteudo() {
  const [nomeUsr, setNomeUsr] = useState('Luiz');
  const [filme, setFilme] = useState('Matrix');
  const [nota, setNota] = useState(8);
  const [comentario, setComentario] = useState('Muito Bom');
  const [resultado, setResultado] = useState(null);

  const filmes = ['Matrix', 'Vingadores', 'Batman'];

  const avaliar = () => {
    if (!nomeUsr.trim()) {
      Alert.alert('Atenção', 'Digite seu nome antes de avaliar.');
      return;
    }

    setResultado({
      nome: nomeUsr.trim(),
      filme,
      nota: nota.toFixed(1),
      comentario: comentario.trim() || 'Sem comentário',
    });
  };

  return (
    <ScrollView
      style={estilo.area_conteudo}
      contentContainerStyle={estilo.area_conteudo_wrapper}
      showsVerticalScrollIndicator={false}
    >
      <Text style={estilo.label}>Nome:</Text>
      <TextInput
        style={estilo.input}
        value={nomeUsr}
        onChangeText={setNomeUsr}
        placeholder="Digite seu nome"
        placeholderTextColor="#6b787f"
      />

      <Text style={estilo.label}>Escolha o filme:</Text>
      <View style={estilo.pickerContainer}>
        <Picker
          selectedValue={filme}
          onValueChange={(value) => setFilme(value)}
          style={estilo.picker}
          dropdownIconColor="#000"
          itemStyle={estilo.pickerItem}
        >
          {filmes.map((item) => (
            <Picker.Item key={item} label={item} value={item} />
          ))}
        </Picker>
      </View>

      <View style={estilo.medalhaContainer}>
        <View style={estilo.medalhaCorpo}>
          <Text style={estilo.medalhaEstrela}>★</Text>
        </View>
        <View style={estilo.medalhaFitaEsq} />
        <View style={estilo.medalhaFitaDir} />
      </View>

      <Text style={estilo.label}>Nota: {nota.toFixed(1)}</Text>
      <Slider
        style={estilo.slider}
        step={0.5}
        minimumValue={0}
        maximumValue={10}
        minimumTrackTintColor="#15a388"
        maximumTrackTintColor="#c4c4c4"
        thumbTintColor="#0f766e"
        value={nota}
        onValueChange={setNota}
      />

      <Text style={estilo.label}>Comentário:</Text>
      <TextInput
        style={[estilo.input, estilo.textArea]}
        multiline
        numberOfLines={4}
        value={comentario}
        onChangeText={setComentario}
      />

      <TouchableOpacity style={estilo.botao} onPress={avaliar}>
        <Text style={estilo.botaoTexto}>Avaliar</Text>
      </TouchableOpacity>

      {resultado && (
        <View style={estilo.resumoContainer}>
          <Text style={estilo.resumoTexto}>Nome: {resultado.nome}</Text>
          <Text style={estilo.resumoTexto}>Filme: {resultado.filme}</Text>
          <Text style={estilo.resumoTexto}>Nota: {resultado.nota}</Text>
          <Text style={estilo.resumoTexto}>Comentário: {resultado.comentario}</Text>
        </View>
      )}
    </ScrollView>
  );
}

export default Conteudo;
