import React from 'react';
import { View, Text, FlatList } from 'react-native';

// Importação do arquivo JSON de dados
import dados from '../../dados/paises.json';

import estilos from '../styleSheet/estilos';
import Cabecalho from './Cabecalho';
import Rodape from './Rodape';

// ── Função: chave única de cada item ──────────────────────────
const keyExtractor = (item) => item.id;

// ── Função: renderiza cada item da lista (apenas nome e capital) ─
const renderItem = ({ item }) => (
  <View style={estilos.card}>
    <Text style={estilos.nome}>{item.nome}</Text>
    <Text style={estilos.capital}>Capital: {item.capital}</Text>
  </View>
);

// ── Função: separador entre itens ─────────────────────────────
const renderSeparator = () => (
  <View style={estilos.separador} />
);

// ── Função: cabeçalho da lista ────────────────────────────────
const renderHeader = () => <Cabecalho />;

// ── Função: rodapé da lista ───────────────────────────────────
const renderFooter = () => <Rodape />;

// ── Função: lista vazia ────────────────────────────────────────
const renderListEmpty = () => (
  <View style={{ alignItems: 'center', marginTop: 40 }}>
    <Text style={{ fontSize: 16, color: '#999' }}>
      Nenhum país encontrado.
    </Text>
  </View>
);

// ── Componente principal ──────────────────────────────────────
const Conteudo = () => {
  return (
    <View style={estilos.tela}>
      <FlatList
        contentContainerStyle={estilos.lista}
        data={dados}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        ItemSeparatorComponent={renderSeparator}
        ListHeaderComponent={renderHeader}
        ListFooterComponent={renderFooter}
        ListEmptyComponent={renderListEmpty}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Conteudo;
