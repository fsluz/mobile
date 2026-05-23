
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Tela01({ navigation }) {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Mercúrio</Text>

      <Image
        source={require('../../assets/mercurio.jpg')}
        style={styles.image}
      />

      <Text style={styles.text}>Mercúrio é o planeta mais próximo do Sol.</Text>

      <Text style={styles.text}>• É o menor planeta do Sistema Solar.</Text>
      <Text style={styles.text}>• Um ano em Mercúrio dura apenas 88 dias terrestres.</Text>
      <Text style={styles.text}>• Durante o dia, a temperatura pode ultrapassar 400°C.</Text>
      <Text style={styles.text}>• À noite, a temperatura pode chegar a -180°C.</Text>

      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>VOLTAR</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Tela02')}>
          <Text style={styles.buttonText}>PROXIMO PLANETA</Text>
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
