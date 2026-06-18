import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text, Switch, TextInput, Image, StyleSheet, ScrollView } from 'react-native';

const Drawer = createDrawerNavigator();

function Garagem({ dark, toggleTheme }) {
  return (
    <View style={[styles.container, dark && styles.dark]}>
      <Text style={[styles.title, dark && styles.textDark]}>
        🚗 Minha Garagem
      </Text>

      <Text style={[styles.text, dark && styles.textDark]}>
        Ativar modo escuro da garagem
      </Text>

      <Switch value={dark} onValueChange={toggleTheme} />
    </View>
  );
}

function CarrosDestaque({ dark }) {
  return (
    <ScrollView contentContainerStyle={[styles.container, dark && styles.dark]}>
      <Text style={[styles.title, dark && styles.textDark]}>
        🏎️ Carros em Destaque
      </Text>

      {/* Ferrari */}
      <View style={[styles.card, dark && styles.cardDark]}>
        <Image
          source={{
            uri: 'https://cdn.shopify.com/s/files/1/0853/0663/8612/files/ferrari_f8_tributo_-_blog_600x600.png?v=1744639730'
          }}
          style={styles.carImage}
        />
        <Text style={[styles.text, dark && styles.textDark]}>
          Ferrari F8 Tributo - Performance extrema
        </Text>
      </View>

      {/* Lamborghini */}
      <View style={[styles.card, dark && styles.cardDark]}>
        <Image
          source={{
            uri: 'https://s3.glbimg.com/v1/AUTH_35862ca5c6ab48b992baf1f1b4f7062e/m-extra-globo-com/incoming/19812352-088-ddc/w488h275-PROP/lamborghini-huracan-options.jpg'
          }}
          style={styles.carImage}
        />
        <Text style={[styles.text, dark && styles.textDark]}>
          Lamborghini Huracán - Design agressivo
        </Text>
      </View>
    </ScrollView>
  );
}

function TestDrive({ dark }) {
  return (
    <View style={[styles.container, dark && styles.dark]}>
      <Text style={[styles.title, dark && styles.textDark]}>
        📅 Agendar Test Drive
      </Text>

      <TextInput
        placeholder="Seu nome"
        placeholderTextColor={dark ? '#aaa' : '#666'}
        style={[styles.input, dark && styles.inputDark]}
      />

      <TextInput
        placeholder="Modelo do carro"
        placeholderTextColor={dark ? '#aaa' : '#666'}
        style={[styles.input, dark && styles.inputDark]}
      />
    </View>
  );
}

function Preferencias({ dark }) {
  return (
    <View style={[styles.container, dark && styles.dark]}>
      <Text style={[styles.title, dark && styles.textDark]}>
        ⚙️ Preferências do Veículo
      </Text>

      <Text style={[styles.text, dark && styles.textDark]}>
        • Combustível: Gasolina / Elétrico
      </Text>
      <Text style={[styles.text, dark && styles.textDark]}>
        • Transmissão: Automático / Manual
      </Text>
      <Text style={[styles.text, dark && styles.textDark]}>
        • Categoria: Esportivo / SUV / Sedan
      </Text>
    </View>
  );
}

export default function App() {
  const [ativo, setAtivo] = useState(false);

  const toggleTheme = () => setAtivo(prev => !prev);

  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: ativo ? '#121212' : '#fff'
          },
          headerTintColor: ativo ? '#fff' : '#000'
        }}
      >
        <Drawer.Screen name="Garagem">
          {props => (
            <Garagem
              {...props}
              dark={ativo}
              toggleTheme={toggleTheme}
            />
          )}
        </Drawer.Screen>

        <Drawer.Screen name="Carros">
          {props => <CarrosDestaque {...props} dark={ativo} />}
        </Drawer.Screen>

        <Drawer.Screen name="Test Drive">
          {props => <TestDrive {...props} dark={ativo} />}
        </Drawer.Screen>

        <Drawer.Screen name="Preferências">
          {props => <Preferencias {...props} dark={ativo} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff'
  },

  dark: {
    backgroundColor: '#121212'
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#000',
    textAlign: 'center'
  },

  text: {
    fontSize: 16,
    marginVertical: 5,
    color: '#333',
    textAlign: 'center'
  },

  textDark: {
    color: '#fff'
  },

  input: {
    width: '100%',
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    marginVertical: 8,
    backgroundColor: '#fff'
  },

  inputDark: {
    backgroundColor: '#333',
    color: '#fff',
    borderColor: '#555'
  },

  carImage: {
    width: 300,
    height: 200,
    borderRadius: 15,
    marginBottom: 10
  },

  card: {
    width: '100%',
    alignItems: 'center',
    padding: 10,
    marginBottom: 20,
    borderRadius: 15,
    backgroundColor: '#f2f2f2'
  },

  cardDark: {
    backgroundColor: '#1e1e1e'
  }
});