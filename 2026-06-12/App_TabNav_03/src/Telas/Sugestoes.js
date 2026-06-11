import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert, FlatList } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function Sugestoes() {
  const [titulo, setTitulo] = useState('');
  const [genero, setGenero] = useState('');
  const [nota, setNota] = useState(5);
  const [comentario, setComentario] = useState('');

  const [listaSugestoes, setListaSugestoes] = useState([
    {
      id: '1',
      usuario: 'Ana Silva',
      titulo: 'Interestelar',
      genero: 'Ficção Científica',
      nota: 5,
      comentario: 'Incrível! A trilha sonora do Hans Zimmer e a precisão científica criam uma obra-prima inesquecível.',
      data: 'Hoje'
    },
    {
      id: '2',
      usuario: 'Carlos Souza',
      titulo: 'O Labirinto do Fauno',
      genero: 'Fantasia/Drama',
      nota: 4,
      comentario: 'Uma fantasia sombria maravilhosa com direção de arte impecável de Guillermo del Toro.',
      data: 'Ontem'
    }
  ]);

  const handleEnviar = () => {
    if (!titulo.trim() || !genero.trim() || !comentario.trim()) {
      Alert.alert('Ops!', 'Por favor, preencha todos os campos da indicação.');
      return;
    }

    const novaSugestao = {
      id: String(Date.now()),
      usuario: 'Você',
      titulo: titulo,
      genero: genero,
      nota: nota,
      comentario: comentario,
      data: 'Agora mesmo'
    };

    setListaSugestoes([novaSugestao, ...listaSugestoes]);
    Alert.alert('Sucesso!', `Obrigado por indicar "${titulo}"! Sua indicação foi adicionada à lista.`);

    // Reset form
    setTitulo('');
    setGenero('');
    setNota(5);
    setComentario('');
  };

  const renderStars = (count) => {
    return (
      <View style={styles.starsRow}>
        {[1, 2, 3, 4, 5].map((star) => (
          <MaterialIcons
            key={star}
            name={star <= count ? 'star' : 'star-border'}
            color="#F5C518"
            size={16}
          />
        ))}
      </View>
    );
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Indique um Filme</Text>
      <Text style={styles.subtitle}>Compartilhe suas melhores recomendações com a comunidade</Text>

      {/* Formulário */}
      <View style={styles.formCard}>
        <Text style={styles.label}>Título do Filme</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: Matrix, Inception..."
          placeholderTextColor="#6E6E7F"
          value={titulo}
          onChangeText={setTitulo}
        />

        <Text style={styles.label}>Gênero</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: Ação, Sci-Fi, Suspense..."
          placeholderTextColor="#6E6E7F"
          value={genero}
          onChangeText={setGenero}
        />

        <Text style={styles.label}>Sua Avaliação: {nota} Estrelas</Text>
        <View style={styles.ratingSelector}>
          {[1, 2, 3, 4, 5].map((star) => (
            <TouchableOpacity key={star} onPress={() => setNota(star)} style={styles.starTouch}>
              <MaterialIcons
                name={star <= nota ? 'star' : 'star-border'}
                color="#F5C518"
                size={32}
              />
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.label}>Por que você recomenda este filme?</Text>
        <TextInput
          style={styles.textArea}
          placeholder="Escreva um breve comentário sobre o filme..."
          placeholderTextColor="#6E6E7F"
          value={comentario}
          onChangeText={setComentario}
          multiline
          numberOfLines={4}
        />

        <TouchableOpacity style={styles.btn} onPress={handleEnviar}>
          <MaterialIcons name="send" color="#0B0B0F" size={18} />
          <Text style={styles.btnText}>Enviar Indicação</Text>
        </TouchableOpacity>
      </View>

      {/* Lista de Indicações */}
      <Text style={styles.sectionTitle}>Indicações da Galera</Text>
      {listaSugestoes.map((item) => (
        <View key={item.id} style={styles.suggestionCard}>
          <View style={styles.suggestionHeader}>
            <View>
              <Text style={styles.sugUser}>{item.usuario}</Text>
              <Text style={styles.sugTime}>{item.data}</Text>
            </View>
            {renderStars(item.nota)}
          </View>

          <Text style={styles.sugMovieTitle}>
            {item.titulo} <Text style={styles.sugMovieGenre}>• {item.genero}</Text>
          </Text>

          <Text style={styles.sugComment}>"{item.comentario}"</Text>
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
    paddingBottom: 40,
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
    marginBottom: 20,
  },
  formCard: {
    backgroundColor: '#161622',
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: '#232330',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
    marginBottom: 25,
  },
  label: {
    color: '#D1D1D6',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 6,
    marginTop: 12,
  },
  input: {
    backgroundColor: '#0B0B0F',
    color: '#FFFFFF',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#2C2C35',
    fontSize: 14,
  },
  ratingSelector: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  starTouch: {
    padding: 4,
  },
  starsRow: {
    flexDirection: 'row',
  },
  textArea: {
    backgroundColor: '#0B0B0F',
    color: '#FFFFFF',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#2C2C35',
    fontSize: 14,
    height: 100,
    textAlignVertical: 'top',
  },
  btn: {
    flexDirection: 'row',
    backgroundColor: '#F5C518',
    padding: 14,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: '#0B0B0F',
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 15,
    marginTop: 10,
  },
  suggestionCard: {
    backgroundColor: '#161622',
    borderRadius: 12,
    padding: 15,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#232330',
  },
  suggestionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  sugUser: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  sugTime: {
    color: '#6E6E7F',
    fontSize: 11,
    marginTop: 1,
  },
  sugMovieTitle: {
    color: '#F5C518',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  sugMovieGenre: {
    color: '#8E8E9F',
    fontSize: 12,
    fontWeight: 'normal',
  },
  sugComment: {
    color: '#D1D1D6',
    fontSize: 13,
    fontStyle: 'italic',
    lineHeight: 18,
  },
});
