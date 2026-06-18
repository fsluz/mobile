import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text, StyleSheet } from 'react-native';

const Drawer = createDrawerNavigator();

function Tela({ titulo }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{titulo}</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home">{() => <Tela titulo="Tela Home" />}</Drawer.Screen>
        <Drawer.Screen name="Sobre">{() => <Tela titulo="Tela Sobre" />}</Drawer.Screen>
        <Drawer.Screen name="Contato">{() => <Tela titulo="Tela Contato" />}</Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 28, fontWeight: 'bold' }
});