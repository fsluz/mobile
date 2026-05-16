import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SectionList,
  Alert,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import estilos from '../styles/estilos';

// ─────────────────────────────────────────────────────────────
// Função auxiliar: converte "DD/MM/AAAA" em Date para ordenação
// ─────────────────────────────────────────────────────────────
const dataParaOrdenacao = (dataStr) => {
  const partes = dataStr.split('/');
  if (partes.length !== 3) return new Date(0);
  // formato DD/MM/AAAA → new Date(AAAA, MM-1, DD)
  return new Date(
    parseInt(partes[2]),
    parseInt(partes[1]) - 1,
    parseInt(partes[0])
  );
};

// ─────────────────────────────────────────────────────────────
// Função auxiliar: agrupa array de tarefas em seções por data,
// ordenadas de forma crescente
// ─────────────────────────────────────────────────────────────
const agruparPorData = (tarefas) => {
  // Monta um objeto { "DD/MM/AAAA": [tarefa, tarefa, ...] }
  const mapa = {};
  tarefas.forEach((t) => {
    if (!mapa[t.data]) mapa[t.data] = [];
    mapa[t.data].push(t);
  });

  // Transforma em array de seções e ordena as datas de forma crescente
  const secoes = Object.keys(mapa).map((data) => ({
    title: data,
    data: mapa[data],
  }));

  secoes.sort(
    (a, b) => dataParaOrdenacao(a.title) - dataParaOrdenacao(b.title)
  );

  return secoes;
};

// ─────────────────────────────────────────────────────────────
// Componente principal: Conteudo
// ─────────────────────────────────────────────────────────────
const Conteudo = ({ onTotalChange }) => {
  // Estados dos campos de entrada
  const [nomeTarefa, setNomeTarefa] = useState('');
  const [dataTarefa, setDataTarefa] = useState('');

  // Estado com a lista de tarefas
  const [tarefas, setTarefas] = useState([]);

  // Contador para gerar IDs únicos
  const [proximoId, setProximoId] = useState(1);

  // Notifica o App.js sempre que o total de tarefas muda
  useEffect(() => {
    if (onTotalChange) onTotalChange(tarefas.length);
  }, [tarefas]);

  // ── Adicionar tarefa ──────────────────────────────────────
  const adicionarTarefa = () => {
    // Validações básicas
    if (nomeTarefa.trim() === '') {
      exibirAviso('Atenção', 'Digite o nome da tarefa.');
      return;
    }
    if (dataTarefa.trim() === '') {
      exibirAviso('Atenção', 'Digite a data da tarefa (DD/MM/AAAA).');
      return;
    }
    // Validação simples do formato de data
    const regexData = /^\d{2}\/\d{2}\/\d{4}$/;
    if (!regexData.test(dataTarefa.trim())) {
      exibirAviso('Formato inválido', 'Use o formato DD/MM/AAAA.');
      return;
    }

    const novaTarefa = {
      id: String(proximoId),
      nome: nomeTarefa.trim(),
      data: dataTarefa.trim(),
    };

    setTarefas((anterior) => [...anterior, novaTarefa]);
    setProximoId((n) => n + 1);

    // Limpa os campos após adicionar
    setNomeTarefa('');
    setDataTarefa('');
  };

  // ── Excluir tarefa (com confirmação) ─────────────────────
  const confirmarExclusao = (tarefa) => {
    const pergunta = `Deseja excluir a tarefa?\n\n"${tarefa.nome}"`;

    if (Platform.OS === 'web') {
      // No navegador usamos window.confirm
      const confirmado = window.confirm(pergunta);
      if (confirmado) {
        excluirTarefa(tarefa.id);
      }
    } else {
      // No Android/iOS usamos Alert com dois botões
      Alert.alert(
        'Excluir Tarefa',
        pergunta,
        [
          {
            text: 'Não',
            style: 'cancel',
          },
          {
            text: 'Sim',
            style: 'destructive',
            onPress: () => excluirTarefa(tarefa.id),
          },
        ]
      );
    }
  };

  const excluirTarefa = (id) => {
    setTarefas((anterior) => anterior.filter((t) => t.id !== id));
  };

  // ── Exibir aviso simples ──────────────────────────────────
  const exibirAviso = (titulo, mensagem) => {
    if (Platform.OS === 'web') {
      window.alert(`${titulo}\n\n${mensagem}`);
    } else {
      Alert.alert(titulo, mensagem);
    }
  };

  // ── Seções agrupadas por data ─────────────────────────────
  const secoes = agruparPorData(tarefas);

  // ── Renderização do cabeçalho de cada seção (data) ───────
  const renderSectionHeader = ({ section: { title } }) => (
    <View style={estilos.secaoHeader}>
      <Text style={estilos.secaoHeaderTexto}>{title}</Text>
    </View>
  );

  // ── Renderização de cada tarefa ───────────────────────────
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={estilos.itemContainer}
      onPress={() => confirmarExclusao(item)}
      activeOpacity={0.7}
    >
      <Text style={estilos.itemIcone}>📌</Text>
      <Text style={estilos.itemTexto}>{item.nome}</Text>
      <Text style={estilos.itemExcluir}>🗑</Text>
    </TouchableOpacity>
  );

  // ── Separador entre itens ─────────────────────────────────
  const renderSeparador = () => <View style={estilos.separador} />;

  // ── Mensagem de lista vazia ───────────────────────────────
  const renderListaVazia = () => (
    <View style={estilos.listaVazia}>
      <Text style={estilos.listaVaziaEmoji}>📋</Text>
      <Text style={estilos.listaVaziaTexto}>
        Nenhuma tarefa adicionada ainda.{'\n'}
        Use o formulário acima para começar!
      </Text>
    </View>
  );

  // ── Formulário (cabeçalho da SectionList) ─────────────────
  const renderFormulario = () => (
    <View style={estilos.formulario}>
      <TextInput
        style={estilos.input}
        placeholder="Digite a tarefa"
        placeholderTextColor="#7a5b16"
        value={nomeTarefa}
        onChangeText={setNomeTarefa}
        maxLength={80}
      />

      <TextInput
        style={estilos.input}
        placeholder="Data (ex: 10/05/2026)"
        placeholderTextColor="#7a5b16"
        value={dataTarefa}
        onChangeText={setDataTarefa}
        keyboardType="numeric"
        maxLength={10}
      />

      <TouchableOpacity
        style={estilos.botao}
        onPress={adicionarTarefa}
        activeOpacity={0.8}
      >
        <Text style={estilos.botaoTexto}>Adicionar</Text>
      </TouchableOpacity>
    </View>
  );

  // ─────────────────────────────────────────────────────────
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <SectionList
        style={estilos.lista}

        // Seções agrupadas e ordenadas por data
        sections={secoes}

        // Chave única de cada tarefa
        keyExtractor={(item) => item.id}

        // Cabeçalho de seção = data da tarefa
        renderSectionHeader={renderSectionHeader}

        // Cada item = uma tarefa
        renderItem={renderItem}

        // Separador entre tarefas
        ItemSeparatorComponent={renderSeparador}

        // Formulário no topo da lista
        ListHeaderComponent={renderFormulario}

        // Lista vazia
        ListEmptyComponent={renderListaVazia}

        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      />
    </KeyboardAvoidingView>
  );
};

export default Conteudo;
