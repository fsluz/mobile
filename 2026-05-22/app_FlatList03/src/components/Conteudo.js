import React, { useState } from 'react';
import { View, Text, Image, FlatList, ActivityIndicator } from 'react-native';

// Importação dos dados JSON
import dados from '../../dados/naves.json';

import estilos from '../styleSheet/estilos';
import Cabecalho from './Cabecalho';
import Rodape from './Rodape';

// ── Chave única de cada item ───────────────────────────────────
const keyExtractor = (item) => item.id;

// ── Componente para carregar imagem com loading ─────────────────
const ImagemCarregavel = ({ uri }) => {
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(false);

  return (
    <View style={{ width: '100%', height: 180, backgroundColor: '#0f3460', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
      {!erro ? (
        <>
          {carregando && (
            <ActivityIndicator size="large" color="#e94560" />
          )}
          <Image
            source={{ uri }}
            style={[estilos.foto, { opacity: carregando ? 0 : 1 }]}
            onLoadEnd={() => setCarregando(false)}
            onError={() => {
              setCarregando(false);
              setErro(true);
            }}
          />
        </>
      ) : (
        <View style={{ alignItems: 'center' }}>
          <Text style={{ fontSize: 48, marginBottom: 8 }}>✈️</Text>
          <Text style={{ color: '#a8b2d8', fontSize: 12 }}>Imagem indisponível</Text>
        </View>
      )}
    </View>
  );
};

// ── Renderização de cada item da lista ────────────────────────
const renderItem = ({ item, index }) => (
  <View style={estilos.card}>

    {/* Foto da nave */}
    <ImagemCarregavel uri={item.foto} />

    {/* Badge do ano (sobre a foto) */}
    <View style={estilos.badgeAno}>
      <Text style={estilos.badgeAnoTexto}>{item.ano}</Text>
    </View>

    {/* Informações textuais */}
    <View style={estilos.cardCorpo}>
      <Text style={estilos.nome}>#{index + 1}  {item.nome}</Text>
      <Text style={estilos.marca}>{item.marca}</Text>
      <Text style={estilos.descricao}>{item.descricao}</Text>

      {/* Linha de dados técnicos */}
      <View style={estilos.infoRow}>
        <View style={estilos.infoItem}>
          <Text style={estilos.infoLabel}>⚙️ Motor</Text>
          <Text style={estilos.infoValor}>{item.motor}</Text>
        </View>

        <View style={estilos.divisorVertical} />

        <View style={estilos.infoItem}>
          <Text style={estilos.infoLabel}>🚀 Vel. Máx.</Text>
          <Text style={estilos.infoValor}>{item.velocidade}</Text>
        </View>
      </View>
    </View>

  </View>
);

// ── Separador entre itens ─────────────────────────────────────
const renderSeparator = () => (
  <View style={estilos.separador} />
);

// ── Cabeçalho da lista ────────────────────────────────────────
const renderHeader = () => <Cabecalho />;

// ── Rodapé da lista ───────────────────────────────────────────
const renderFooter = () => <Rodape />;

// ── Lista vazia ───────────────────────────────────────────────
const renderListEmpty = () => (
  <View style={estilos.listaVazia}>
    <Text style={{ fontSize: 40 }}>🔍</Text>
    <Text style={estilos.listaVaziaTexto}>Nenhuma nave encontrada.</Text>
  </View>
);

// ── Componente principal ──────────────────────────────────────
const Conteudo = () => {
  return (
    <View style={estilos.tela}>
      <FlatList
        style={estilos.lista}
        data={dados}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        ItemSeparatorComponent={renderSeparator}
        ListHeaderComponent={renderHeader}
        ListFooterComponent={renderFooter}
        ListEmptyComponent={renderListEmpty}
        horizontal={false}
        numColumns={1}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Conteudo;
