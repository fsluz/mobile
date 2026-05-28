import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image } from 'react-native';

export default function BoloCenouraScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.topCard}>
          <Image
            source={require('../../assets/bolodecenoura.jpg')}
            style={styles.topImage}
          />

          <View>
            <Text style={styles.smallTitle}>BOLO DE CENOURA</Text>
            <Text style={styles.bigTitle}>Receita</Text>
          </View>
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>Introdução:</Text>

          <Text style={styles.text}>
            O bolo de cenoura é um clássico da culinária brasileira, conhecido por sua textura úmida e sabor adocicado.
          </Text>

          <Text style={styles.title}>Origens</Text>

          <Text style={styles.text}>
            Acredita-se que o bolo de cenoura tenha sido introduzido no Brasil por imigrantes europeus, especialmente italianos e portugueses, que trouxeram suas receitas tradicionais de bolos e tortas.
          </Text>

          <Text style={styles.title}>
            Receita:
          </Text>

          <Text style={styles.text}>
            Ingredientes:
            - 3 cenouras médias raladas
            - 4 ovos
            - 1 xícara de óleo
            - 2 xícaras de açúcar
            - 2 e 1/2 xícaras de farinha de trigo
            - 1 colher de sopa de fermento em pó
            Modo de preparo:
            1. Preaqueça o forno a 180°C e unte uma forma com manteiga e farinha.
            2. No liquidificador, bata as cenouras raladas, os ovos, o óleo e o açúcar até obter uma mistura homogênea.
            3. Em uma tigela, misture a farinha de trigo e o fermento em pó.
            4. Adicione a mistura do liquidificador à tigela com os ingredientes secos e misture delicadamente até incorporar.
            5. Despeje a massa na forma preparada e leve ao forno por cerca de 40-45 minutos, ou até que um palito inserido no centro do bolo saia limpo.
            6. Deixe o bolo esfriar antes de desenformar e servir.
          </Text>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Text>Felipe Santos da Luz</Text>
        <Text>22/05/2026</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7b0000',
  },
  topCard: {
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 25,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  topImage: {
    width: 120,
    height: 120,
    marginRight: 20,
    resizeMode: 'contain',
  },
  smallTitle: {
    color: '#8B0000',
    fontSize: 22,
  },
  bigTitle: {
    fontSize: 28,
  },
  content: {
    backgroundColor: '#fff',
    marginHorizontal: 10,
    borderRadius: 25,
    padding: 25,
  },
  title: {
    fontSize: 28,
    color: '#8B0000',
    marginBottom: 15,
  },
  text: {
    fontSize: 18,
    textAlign: 'justify',
    marginBottom: 20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    padding: 10,
  },
});
