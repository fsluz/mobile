
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Tela01({ navigation }) {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Napoleão Bonaparte</Text>

      <Image
        source={require('../../assets/napoleon.webp')}
        style={styles.image}
      />

      <Text style={styles.text}>Napoleon Bonaparte foi um general e imperador francês.</Text>

      <Text style={styles.text}>• Ele liderou as forças francesas durante as Guerras Napoleônicas.</Text>
      <Text style={styles.text}>• Em 1804, ele foi coroado imperador da França.</Text>
      <Text style={styles.text}>• Suas batalhas influenciaram profundamente a história da Europa.</Text>
      <Text style={styles.text}>• Em 1815, ele foi derrotado na Batalha de Waterloo.</Text>

      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>VOLTAR</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Tela02')}>
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
