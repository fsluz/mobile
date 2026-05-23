import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image } from 'react-native';

export default function FestaJuninaScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.topCard}>
          <Image
            source={require('../../assets/junina.jpg')}
            style={styles.topImage}
          />

          <View>
            <Text style={styles.smallTitle}>FESTA JUNINA</Text>
            <Text style={styles.bigTitle}>Curiosidades</Text>
          </View>
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>Introdução:</Text>

          <Text style={styles.text}>
            Festas juninas no Brasil, também conhecidas como festas de São João,
            celebram a natividade de São João Batista.
          </Text>

          <Text style={styles.title}>Origens</Text>

          <Text style={styles.text}>
            A origem da festa junina é pagã, ou seja, é contrária à doutrina cristã,
            porque as festas que deram origem às festas juninas homenageavam os deuses
            da natureza e da fertilidade.
          </Text>

          <Text style={styles.title}>
            Qual é o significado da festa de São João?
          </Text>

          <Text style={styles.text}>
            As festas do mês de junho fazem referência a três santos:
            Santo Antônio, São João e São Pedro.
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
