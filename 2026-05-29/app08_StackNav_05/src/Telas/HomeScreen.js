
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Stack Navigation - Desafio 5</Text>

      <Image
        source={require('../../assets/alexanderthegreatndn.jpg')}
        style={styles.image}
      />

      <Text style={styles.subtitle}>Maiores Generais da história</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Tela01')}>
        <Text style={styles.buttonText}>ENTENDER A HISTÓRIA</Text>
      </TouchableOpacity>

      <Text style={styles.footer}>DSV MOBILE</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#efefef',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
  },
  subtitle: {
    fontSize: 28,
    marginTop: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 12,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  footer: {
    color: 'blue',
    marginTop: 50,
    fontSize: 20,
  },
});
