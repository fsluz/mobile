import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Bem Vindo(a)</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.subTitle}>Tela Principal</Text>
        <Text style={styles.title}>Stack Navigation</Text>
        <Text style={styles.brand}>Dsv Mobile</Text>

        <Image
          source={require('../../assets/home.jpg')}
          style={styles.image}
        />

        <Text style={styles.section}>Curiosidades</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Carnaval')}>
          <Text style={styles.buttonText}>Carnaval</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Festa Junina')}>
          <Text style={styles.buttonText}>Festa Junina</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Halloween')}>
          <Text style={styles.buttonText}>Halloween</Text>
        </TouchableOpacity>
      </View>

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
    backgroundColor: '#d9d9d9',
  },
  header: {
    backgroundColor: '#000',
    padding: 18,
  },
  headerText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  card: {
    flex: 1,
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 30,
    alignItems: 'center',
    paddingTop: 20,
  },
  subTitle: {
    fontSize: 18,
  },
  title: {
    fontSize: 30,
  },
  brand: {
    fontSize: 18,
    marginBottom: 10,
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
  },
  section: {
    marginTop: 10,
    fontSize: 22,
    marginBottom: 15,
  },
  button: {
    borderWidth: 2,
    borderColor: '#8B0000',
    borderRadius: 30,
    width: '50%',
    padding: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#fff',
  },
});
