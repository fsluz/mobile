import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/Tela/HomeScreen';
import CarnavalScreen from './src/Tela/CarnavalScreen';
import FestaJuninaScreen from './src/Tela/FestaJuninaScreen';
import HalloweenScreen from './src/Tela/HalloweenScreen';

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
          name="Carnaval"
          component={CarnavalScreen}
          options={{
            headerStyle: {
              backgroundColor: 'red',
            },
            headerTintColor: '#fff',
          }}
        />

        <Stack.Screen
          name="Festa Junina"
          component={FestaJuninaScreen}
          options={{
            headerStyle: {
              backgroundColor: 'blue',
            },
            headerTintColor: '#fff',
          }}
        />

        <Stack.Screen
          name="Halloween"
          component={HalloweenScreen}
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
