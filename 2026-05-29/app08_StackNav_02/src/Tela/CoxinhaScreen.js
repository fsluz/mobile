import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image } from 'react-native';

export default function CoxinhaScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.topCard}>
          <Image
            source={require('../../assets/coxinha_mandioca.jpeg')}
            style={styles.topImage}
          />

          <View>
            <Text style={styles.smallTitle}>Coxinha de Mandioca</Text>
            <Text style={styles.bigTitle}>Receita</Text>
          </View>
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>Introdução:</Text>

          <Text style={styles.text}>
            A coxinha de mandioca é um delicioso prato típico brasileiro, preparado com mandioca ralada e recheada com carne moída ou frango desfiado.
          </Text>

          <Text style={styles.title}>Origens</Text>

          <Text style={styles.text}>
            A coxinha de mandioca tem suas raízes na culinária brasileira, especialmente na região Nordeste do país, onde a mandioca é um ingrediente amplamente utilizado.
          </Text>

          <Text style={styles.title}>Curiosidades: Mandioca</Text>

          <Text style={styles.text}>
            A mandioca é um ingrediente fundamental na culinária brasileira e tem sido utilizado por séculos.
          </Text>

             <Text style={styles.title}>Receita:</Text>

          <Text style={styles.text}>
            Ingredientes:
            - 500g de mandioca ralada
            - 300g de carne moída ou frango desfiado
            - 1 cebola picada
            - 2 dentes de alho picados
            - Sal e pimenta a gosto
            Modo de preparo:
            1. Cozinhe a mandioca ralada em água fervente até ficar macia. Escorra e reserve.
            2. Em uma panela, refogue a cebola e o alho até ficarem dourados. Adicione a carne moída ou frango desfiado e tempere com sal e pimenta. Cozinhe até que a carne esteja bem cozida.
            3. Pegue pequenas porções da mandioca cozida e molde em formato de coxinha, fazendo um buraco no centro para colocar o recheio.
            4. Recheie cada coxinha com a carne moída ou frango desfiado e feche bem.
            5. Frite as coxinhas em óleo quente até que fiquem douradas e crocantes. Escorra em papel absorvente e sirva quente.
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
