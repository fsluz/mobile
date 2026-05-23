import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image } from 'react-native';

export default function CarnavalScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.topCard}>
          <Image
            source={require('../../assets/carnaval.jpg')}
            style={styles.topImage}
          />

          <View>
            <Text style={styles.smallTitle}>CARNAVAL</Text>
            <Text style={styles.bigTitle}>Curiosidades</Text>
          </View>
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>Introdução:</Text>

          <Text style={styles.text}>
            O carnaval brasileiro é muito mais do que uma simples festa;
            é uma expressão cultural que impulsiona a economia e o turismo do país.
            Com seu poder de atrair turistas de todo o mundo e gerar empregos e receita,
            o carnaval se tornou uma peça fundamental no cenário econômico brasileiro.
          </Text>

          <Text style={styles.highlight}>
            Mas, engana-se quem pensa que o carnaval é uma festa que teve origem no Brasil.
          </Text>

          <Text style={styles.title}>Origens</Text>

          <Text style={styles.text}>
            Para dar início às controvérsias, encontramos relatos de especialistas que associam
            os ritos carnavalescos a dez mil anos antes de Cristo. Conforme alguns estudiosos,
            a grande celebração era relacionada aos louvores dos antigos para boas colheitas agrárias.
          </Text>

          <Text style={styles.title}>Curiosidades: Egito</Text>

          <Text style={styles.text}>
            Entre pirâmides e esfinges, a origem do Carnaval pode estar ligada às antigas festas egípcias.
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
    color: '#000',
  },
  content: {
    backgroundColor: '#fff',
    marginHorizontal: 10,
    borderRadius: 25,
    padding: 25,
  },
  title: {
    fontSize: 30,
    color: '#8B0000',
    marginBottom: 15,
  },
  text: {
    fontSize: 18,
    textAlign: 'justify',
    marginBottom: 20,
  },
  highlight: {
    fontSize: 20,
    color: '#8B0000',
    marginBottom: 25,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    padding: 10,
  },
});
