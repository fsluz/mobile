import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import Conteudo from './src/components/Conteudo';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#0f3460' }}>
      <StatusBar backgroundColor="#0f3460" barStyle="light-content" />
      <Conteudo />
    </SafeAreaView>
  );
}
