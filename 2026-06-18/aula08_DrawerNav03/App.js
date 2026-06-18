import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function Tela({ titulo }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{titulo}</Text>
    </View>
  );
}

function Tabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home">
        {() => <Tela titulo="Home" />}
      </Tab.Screen>

      <Tab.Screen name="Perfil">
        {() => <Tela titulo="Perfil" />}
      </Tab.Screen>

      <Tab.Screen name="Configurações">
        {() => <Tela titulo="Configurações" />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

function DrawerRoutes() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Início" component={Tabs} />

      <Drawer.Screen
        name="Home"
        children={() => <Tela titulo="Home (Drawer)" />}
      />

      <Drawer.Screen
        name="Perfil"
        children={() => <Tela titulo="Perfil (Drawer)" />}
      />

      <Drawer.Screen
        name="Config"
        children={() => <Tela titulo="Configurações (Drawer)" />}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <DrawerRoutes />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 28,
    fontWeight: 'bold'
  }
});