
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Tela02({ navigation }) {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Júlio César</Text>

      <Image
        source={require('../../assets/cesar.webp')}
        style={styles.image}
      />

      <Text style={styles.text}>Júlio César foi um general e imperador romano.</Text>

      <Text style={styles.text}>• Ele liderou as forças romanas durante as Guerras Civis.</Text>
      <Text style={styles.text}>• Em 44 a.C., ele foi assassinado em uma conspiração política.</Text>
      <Text style={styles.text}>• É conhecido por sua frase "Veni, vidi, vici" (veni, vidi, vici).</Text>
      <Text style={styles.text}>• Sua morte marcou o fim da República Romana.</Text>

      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>VOLTAR</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Tela03')}>
          <Text style={styles.buttonText}>PROXIMO GENERAL</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
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
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 12,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
