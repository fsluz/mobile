
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Tela03({ navigation }) {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Genghis Khan</Text>

      <Image
        source={require('../../assets/khan.webp')}
        style={styles.image}
      />

      <Text style={styles.text}>Genghis Khan foi um conquistador mongol.</Text>

      <Text style={styles.text}>• Ele fundou o Império Mongol, que se tornou o maior império contínuo da história.</Text>
      <Text style={styles.text}>• Sua liderança e estratégias militares foram cruciais para a expansão do império.</Text>
      <Text style={styles.text}>• Genghis Khan é lembrado por sua brutalidade e habilidade em unir tribos nomadas.</Text>
      <Text style={styles.text}>• Ele morreu em 1227, após uma campanha militar na China.</Text>

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
