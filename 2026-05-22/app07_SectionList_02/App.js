import React, { useState } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import Cabecalho from './src/components/Cabecalho';
import Conteudo from './src/components/Conteudo';
import Rodape from './src/components/Rodape';
import estilos from './src/styles/estilos';

export default function App() {
  // total de tarefas é gerenciado aqui e passado para Rodape
  const [totalTarefas, setTotalTarefas] = useState(0);

  return (
    <SafeAreaView style={estilos.tela}>
      <StatusBar backgroundColor="#2e7d32" barStyle="light-content" />

      {/* Cabeçalho fixo no topo */}
      <Cabecalho />

      {/* Conteúdo: formulário + SectionList */}
      <Conteudo onTotalChange={setTotalTarefas} />

      {/* Rodapé fixo na base */}
      <Rodape total={totalTarefas} />
    </SafeAreaView>
  );
}
