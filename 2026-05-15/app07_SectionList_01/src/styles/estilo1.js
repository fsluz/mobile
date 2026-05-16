import { StyleSheet, Platform } from 'react-native';

const estilo1 = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  cabecalho: {
    paddingTop: Platform.OS === 'ios' ? 50 : 30,
    paddingBottom: 18,
    paddingHorizontal: 20,
    alignItems: 'flex-start',
    backgroundColor: '#ffffff',
  },
  cabecalhoTitulo: {
    fontSize: 26,
    fontWeight: '800',
    color: '#111111',
    letterSpacing: 0.15,
  },

  lista: {
    paddingHorizontal: 20,
    paddingBottom: 24,
  },

  secaoHeader: {
    backgroundColor: '#e0e0e0',
    paddingVertical: 10,
    paddingHorizontal: 14,
    marginTop: 20,
    marginBottom: 8,
    borderRadius: 8,
  },
  secaoHeaderTexto: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111111',
  },

  itemContainer: {
    paddingVertical: 10,
    paddingHorizontal: 4,
  },
  itemNome: {
    fontSize: 16,
    color: '#111111',
    fontWeight: '500',
  },

  listaVazia: {
    alignItems: 'center',
    marginTop: 60,
  },
  listaVaziaTexto: {
    color: '#777777',
    fontSize: 16,
  },
});

export default estilo1;
