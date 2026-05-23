
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/Telas/HomeScreen';
import Tela01 from './src/Telas/Tela01';
import Tela02 from './src/Telas/Tela02';
import Tela03 from './src/Telas/Tela03';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Principal"
          component={HomeScreen}
        />

        <Stack.Screen
          name="Tela01"
          component={Tela01}
        />

        <Stack.Screen
          name="Tela02"
          component={Tela02}
        />

        <Stack.Screen
          name="Tela03"
          component={Tela03}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
