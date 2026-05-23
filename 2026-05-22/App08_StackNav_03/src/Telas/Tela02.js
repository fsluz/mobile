
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Tela02({ navigation }) {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Vênus</Text>

      <Image
        source={require('../../assets/venus.jpg')}
        style={styles.image}
      />

      <Text style={styles.text}>Vênus é o planeta mais próximo do Sol.</Text>

      <Text style={styles.text}>• Vênus possui uma atmosfera extremamente densa.</Text>
      <Text style={styles.text}>• Um ano em Vênus dura apenas 88 dias terrestres.</Text>
      <Text style={styles.text}>• O planeta gira no sentido contrário da maioria dos planetas.</Text>
      <Text style={styles.text}>• É conhecido como a “estrela d’alva”.</Text>

      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>VOLTAR</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Tela03')}>
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
