import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/Tela/HomeScreen';
import EmpadaoScreen from './src/Tela/EmpadaoScreen';
import BoloCenouraScreen from './src/Tela/BoloCenouraScreen';
import CoxinhaScreen from './src/Tela/CoxinhaScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Empadao"
          component={EmpadaoScreen}
          options={{
            headerStyle: {
              backgroundColor: 'red',
            },
            headerTintColor: '#fff',
          }}
        />

        <Stack.Screen
          name="Bolo de Cenoura"
          component={BoloCenouraScreen}
          options={{
            headerStyle: {
              backgroundColor: 'orange',
            },
            headerTintColor: '#fff',
          }}
        />

        <Stack.Screen
          name="Coxinha"
          component={CoxinhaScreen}
          options={{
            headerStyle: {
              backgroundColor: 'yellow',
            },
            headerTintColor: '#000',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
