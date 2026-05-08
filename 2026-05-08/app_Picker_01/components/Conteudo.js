import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import estilos from '../styles/Estilo';

export default function Conteudo({
  nome,
  linguagem,
  mensagem,
  corFundo,
  onNomeChange,
  onLingChange,
  onMostrarMensagem,
  onFocusInput,
  onBlurInput,
}) {
  return (
    <View style={estilos.formBox}>
      <Text style={estilos.label}>Nome</Text>
      <TextInput
        style={[estilos.input, { backgroundColor: corFundo }]}
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={onNomeChange}
        onFocus={() => onFocusInput(true)}
        onBlur={() => onBlurInput(false)}
      />

      <Text style={estilos.label}>Escolha uma linguagem</Text>
      <View style={estilos.picker}>
        <Picker
          selectedValue={linguagem}
          onValueChange={onLingChange}
          mode="dropdown"
        >
          <Picker.Item label="Java" value="Java" />
          <Picker.Item label="JavaScript" value="JavaScript" />
          <Picker.Item label="Python" value="Python" />
          <Picker.Item label="C#" value="C#" />
        </Picker>
      </View>

      <TouchableOpacity style={estilos.button} onPress={onMostrarMensagem}>
        <Text style={estilos.buttonText}>Confirmar</Text>
      </TouchableOpacity>

      {mensagem ? <Text style={estilos.resultText}>{mensagem}</Text> : null}
    </View>
  );
}
