import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function Classicos() {
  const filmesClassicos = [
    {
      id: 1,
      titulo: 'O Poderoso Chefão',
      tituloOriginal: 'The Godfather',
      ano: '1972',
      diretor: 'Francis Ford Coppola',
      duracao: '2h 55min',
      genero: 'Policial, Drama',
      nota: '9.2',
      sinopse: 'O patriarca envelhecido de uma dinastia do crime organizado transfere o controle de seu império clandestino para seu filho relutante.',
    },
    {
      id: 2,
      titulo: 'Pulp Fiction: Tempo de Violência',
      tituloOriginal: 'Pulp Fiction',
      ano: '1994',
      diretor: 'Quentin Tarantino',
      duracao: '2h 34min',
      genero: 'Policial, Drama',
      nota: '8.9',
      sinopse: 'As vidas de dois assassinos da máfia, um boxeador, a esposa de um gângster e um par de assaltantes de lanchonete se entrelaçam em quatro histórias de violência e redenção.',
    },
    {
      id: 3,
      titulo: 'Forrest Gump: O Contador de Histórias',
      tituloOriginal: 'Forrest Gump',
      ano: '1994',
      diretor: 'Robert Zemeckis',
      duracao: '2h 22min',
      genero: 'Drama, Romance',
      nota: '8.8',
      sinopse: 'As presidências de Kennedy e Johnson, os eventos do Vietnã, Watergate e outras histórias históricas se desenrolam sob a perspectiva de um homem do Alabama com um QI de 75.',
    },
    {
      id: 4,
      titulo: 'Clube da Luta',
      tituloOriginal: 'Fight Club',
      ano: '1999',
      diretor: 'David Fincher',
      duracao: '2h 19min',
      genero: 'Drama',
      nota: '8.8',
      sinopse: 'Um funcionário de escritório insone e um criador de sabonetes desleixado formam um clube de luta subterrâneo que evolui para algo muito maior.',
    }
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Grandes Clássicos</Text>
      <Text style={styles.subtitle}>Obras-primas que marcaram a história do cinema</Text>

      {filmesClassicos.map((filme) => (
        <View key={filme.id} style={styles.card}>
          <View style={styles.cardHeader}>
            <View style={{ flex: 1, paddingRight: 8 }}>
              <Text style={styles.cardTitle}>{filme.titulo}</Text>
              <Text style={styles.cardOriginalTitle}>{filme.tituloOriginal}</Text>
            </View>
            <View style={styles.ratingBox}>
              <MaterialIcons name="star" color="#F5C518" size={16} />
              <Text style={styles.ratingText}>{filme.nota}</Text>
            </View>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.infoText}>{filme.ano}  •  {filme.duracao}</Text>
            <Text style={styles.genreBadge}>{filme.genero}</Text>
          </View>

          <Text style={styles.directorText}>
            <Text style={styles.boldLabel}>Direção: </Text>{filme.diretor}
          </Text>

          <Text style={styles.synopsis}>{filme.synopse}</Text>

          <TouchableOpacity style={styles.actionButton}>
            <MaterialIcons name="play-arrow" color="#0B0B0F" size={16} />
            <Text style={styles.actionButtonText}>Assistir Trailer</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B0B0F',
  },
  content: {
    padding: 16,
    paddingBottom: 32,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#F5C518',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#8E8E9F',
    textAlign: 'center',
    marginBottom: 24,
  },
  card: {
    backgroundColor: '#161622',
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#232330',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  cardOriginalTitle: {
    fontSize: 12,
    color: '#8E8E9F',
    fontStyle: 'italic',
    marginTop: 2,
  },
  ratingBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(245, 197, 24, 0.15)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: 'rgba(245, 197, 24, 0.3)',
  },
  ratingText: {
    color: '#F5C518',
    fontSize: 13,
    fontWeight: 'bold',
    marginLeft: 4,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  infoText: {
    fontSize: 12,
    color: '#8E8E9F',
  },
  genreBadge: {
    fontSize: 10,
    color: '#F5C518',
    backgroundColor: 'rgba(245, 197, 24, 0.08)',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    overflow: 'hidden',
  },
  directorText: {
    fontSize: 13,
    color: '#D1D1D6',
    marginBottom: 10,
  },
  boldLabel: {
    fontWeight: 'bold',
    color: '#A0A0B0',
  },
  synopsis: {
    fontSize: 13,
    color: '#B0B0C0',
    lineHeight: 18,
    marginBottom: 16,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5C518',
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 4,
  },
  actionButtonText: {
    color: '#0B0B0F',
    fontSize: 13,
    fontWeight: 'bold',
    marginLeft: 6,
  },
});
