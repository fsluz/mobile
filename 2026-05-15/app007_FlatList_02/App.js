import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import Conteudo from './src/components/Conteudo';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor="#1565c0" barStyle="light-content" />
      <Conteudo />
    </SafeAreaView>
  );
}
