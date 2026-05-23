
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Tela03({ navigation }) {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Marte</Text>

      <Image
        source={require('../../assets/marte.webp')}
        style={styles.image}
      />

      <Text style={styles.text}>Marte é conhecido como o planeta vermelho.</Text>

      <Text style={styles.text}>• A coloração avermelhada é causada por óxido de ferro.</Text>
      <Text style={styles.text}>• Marte possui o maior vulcão do Sistema Solar.</Text>
      <Text style={styles.text}>• Cientistas estudam a possibilidade de vida antiga no planeta.</Text>
      <Text style={styles.text}>• Missões espaciais investigam Marte constantemente.</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>VOLTAR</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4a1f1f',
    padding: 20,
  },
  title: {
    color: '#fff',
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30,
  },
  image: {
    width: 180,
    height: 180,
    alignSelf: 'center',
    marginVertical: 20,
  },
  text: {
    color: '#fff',
    fontSize: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 12,
    alignSelf: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
