import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Home from './src/Telas/Home';
import Classicos from './src/Telas/Classicos';
import Sugestoes from './src/Telas/Sugestoes';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#0B0B0F" />
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#F5C518',
          tabBarInactiveTintColor: '#8E8E93',
          tabBarLabelPosition: 'below-icon',
          tabBarLabelStyle: { fontSize: 12, fontWeight: '500' },
          tabBarStyle: {
            backgroundColor: '#161622',
            borderTopColor: '#232330',
            height: 60,
            paddingBottom: 6,
            paddingTop: 6,
          },
          headerStyle: {
            backgroundColor: '#161622',
            shadowColor: 'transparent',
            elevation: 0,
            borderBottomWidth: 1,
            borderBottomColor: '#232330',
          },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 18,
          },
        }}>

        <Tab.Screen
          name="Destaques"
          component={Home}
          options={{
            headerShown: false, // Oculta cabeçalho padrão para usar o cabeçalho customizado lindo do Home
            tabBarLabel: 'Destaques',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="movie" color={color} size={24} />
            )
          }}
        />

        <Tab.Screen
          name="Clássicos"
          component={Classicos}
          options={{
            title: 'Filmes Clássicos',
            tabBarLabel: 'Clássicos',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="star" color={color} size={24} />
            )
          }}
        />

        <Tab.Screen
          name="Indicações"
          component={Sugestoes}
          options={{
            title: 'Sugerir Filme',
            tabBarLabel: 'Indicar',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="rate-review" color={color} size={24} />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
