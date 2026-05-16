import React from 'react';
import {
  View,
  Text,
  SectionList,
  TouchableOpacity,
  Alert,
  Platform,
  SafeAreaView,
  StatusBar,
} from 'react-native';

import dadosAlunos from './src/dados/dados_alunos.json';
import estilo1 from './src/styles/estilo1';

const mostrarDadosAluno = (aluno) => {
  const mensagem =
    `CPF: ${aluno.cpf}\n` +
    `Data de Nascimento: ${aluno.dataNascimento}\n` +
    `Ano de Ingresso: ${aluno.anoIngresso}`;

  if (Platform.OS === 'web') {
    window.alert(`${aluno.nome}\n\n${mensagem}`);
  } else {
    Alert.alert(aluno.nome, mensagem);
  }
};

const keyExtractor = (item) => item.id;

const renderSectionHeader = ({ section: { title } }) => (
  <View style={estilo1.secaoHeader}>
    <Text style={estilo1.secaoHeaderTexto}>{title}</Text>
  </View>
);

const renderItem = ({ item }) => (
  <TouchableOpacity
    style={estilo1.itemContainer}
    onPress={() => mostrarDadosAluno(item)}
    activeOpacity={0.7}
  >
    <Text style={estilo1.itemNome}>{item.nome}</Text>
  </TouchableOpacity>
);

const renderListaVazia = () => (
  <View style={estilo1.listaVazia}>
    <Text style={estilo1.listaVaziaTexto}>Nenhum aluno encontrado.</Text>
  </View>
);

export default function App() {
  return (
    <SafeAreaView style={estilo1.tela}>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />

      <SectionList
        contentContainerStyle={estilo1.lista}
        sections={dadosAlunos}
        keyExtractor={keyExtractor}
        renderSectionHeader={renderSectionHeader}
        renderItem={renderItem}
        ListHeaderComponent={() => (
          <View style={estilo1.cabecalho}>
            <Text style={estilo1.cabecalhoTitulo}>Lista de Alunos por Curso</Text>
          </View>
        )}
        ListEmptyComponent={renderListaVazia}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}
