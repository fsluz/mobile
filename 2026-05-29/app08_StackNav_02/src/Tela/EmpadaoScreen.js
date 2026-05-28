import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image } from 'react-native';

export default function EmpadaoScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.topCard}>
          <Image
            source={require('../../assets/empadao.jpg')}
            style={styles.topImage}
          />

          <View>
            <Text style={styles.smallTitle}>EMPADÃO DE FRANGO</Text>
            <Text style={styles.bigTitle}>RECEITA</Text>
          </View>
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>Introdução</Text>

          <Text style={styles.text}>
            O empadao de frango é um prato tradicional brasileiro, conhecido por sua deliciosa combinação de sabores e texturas.
            É um prato muito popular em diversas regiões do Brasil e é frequentemente servido em eventos sociais e reuniões familiares.
          </Text>

          <Text style={styles.highlight}>
            Mas, engana-se quem pensa que o empadao é um prato que teve origem no Brasil.
          </Text>

          <Text style={styles.title}>Receita:</Text>

          <Text style={styles.text}>
            Ingredientes:
            - 1 kg de frango desfiado
            - 1 xícara de arroz
            - 1 cebola
            - 2 dentes de alho
            - 1 colher de sopa de manteiga
            - Sal e pimenta a gosto
            Modo de preparo:
            1. Cozinhe o arroz e reserve.
            2. Em uma panela, refogue a cebola e o alho na manteiga até ficarem dourados.
            3. Adicione o frango desfiado à panela e tempere com sal e pimenta. Cozinhe por alguns minutos até que o frango esteja bem temperado.
            4. Em um refratário, faça uma camada com metade do arroz, seguida por uma camada de frango e depois o restante do arroz.
            5. Leve ao forno pré-aquecido a 180°C por cerca de 20 minutos, ou até que o empadao esteja quente e levemente dourado por cima.
            6. Sirva quente e aproveite!
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
    color: '#000',
  },
  content: {
    backgroundColor: '#fff',
    marginHorizontal: 10,
    borderRadius: 25,
    padding: 25,
  },
  title: {
    fontSize: 30,
    color: '#8B0000',
    marginBottom: 15,
  },
  text: {
    fontSize: 18,
    textAlign: 'justify',
    marginBottom: 20,
  },
  highlight: {
    fontSize: 20,
    color: '#8B0000',
    marginBottom: 25,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    padding: 10,
  },
});
