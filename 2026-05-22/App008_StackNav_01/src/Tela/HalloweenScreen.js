import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image } from 'react-native';

export default function HalloweenScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.topCard}>
          <Image
            source={require('../../assets/halloween.jpg')}
            style={styles.topImage}
          />

          <View>
            <Text style={styles.smallTitle}>HALLOWEEN</Text>
            <Text style={styles.bigTitle}>Curiosidades</Text>
          </View>
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>Introdução:</Text>

          <Text style={styles.text}>
            O significado de 'Halloween' está relacionado ao sentido da própria data em si.
            De acordo com Tupá Guerra, o nome teria vindo da expressão 'All Hallows Eve'.
          </Text>

          <Text style={styles.title}>Origens</Text>

          <Text style={styles.text}>
            Os historiadores apontam que a provável origem do Halloween tenha sido
            um festival praticado pelos celtas chamado Samhain.
          </Text>

          <Text style={styles.title}>Curiosidades: Bruxas</Text>

          <Text style={styles.text}>
            Bruxas sempre aparecem como símbolo do Halloween.
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
