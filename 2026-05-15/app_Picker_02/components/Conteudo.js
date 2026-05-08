import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import estilos from '../styles/Estilo';

export default function Conteudo({
  nome,
  produto,
  mensagem,
  corFundo,
  onNomeChange,
  onProdutoChange,
  onMostrarMensagem,
  onFocusInput,
  onBlurInput,
}) {
  return (
    <View style={estilos.formBox}>
      <Text style={estilos.label}>Endereço de Entrega</Text>
      <TextInput
        style={[estilos.input, { backgroundColor: corFundo }]}
        placeholder="Digite seu endereço"
        value={nome}
        onChangeText={onNomeChange}
        onFocus={() => onFocusInput(true)}
        onBlur={() => onBlurInput(false)}
      />

      <Text style={estilos.label}>Categoria do Produto</Text>
      <View style={estilos.picker}>
        <Picker
          selectedValue={produto}
          onValueChange={onProdutoChange}
          mode="dropdown"
        >
          <Picker.Item label="Eletrônicos" value="Eletrônicos" />
          <Picker.Item label="Livros" value="Livros" />
          <Picker.Item label="Alimentos" value="Alimentos" />
          <Picker.Item label="Roupas" value="Roupas" />
        </Picker>
      </View>

      <TouchableOpacity style={estilos.button} onPress={onMostrarMensagem}>
        <Text style={estilos.buttonText}>Pedir Entrega por Drone</Text>
      </TouchableOpacity>

      {mensagem ? <Text style={estilos.resultText}>{mensagem}</Text> : null}
    </View>
  );
}
