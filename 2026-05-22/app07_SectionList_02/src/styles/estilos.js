import { StyleSheet, Platform } from 'react-native';

const estilos = StyleSheet.create({

  // ── Tela ──────────────────────────────────────────────────
  tela: {
    flex: 1,
    backgroundColor: '#5f7b61',
  },

  // ── Cabeçalho ─────────────────────────────────────────────
  cabecalho: {
    backgroundColor: '#5f7b61',
    paddingTop: Platform.OS === 'ios' ? 50 : 28,
    paddingBottom: 24,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  cabecalhoTitulo: {
    fontSize: 26,
    fontWeight: '800',
    color: '#ffffff',
    letterSpacing: 2,
  },
  headerIconBox: {
    width: 100,
    height: 100,
    backgroundColor: '#4d6f54',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 14,
  },
  headerIcon: {
    fontSize: 40,
  },
  cabecalhoSubtitulo: {
    fontSize: 18,
    color: '#ffd56b',
    marginTop: 4,
    fontWeight: '700',
  },

  // ── Área de entrada (formulário) ──────────────────────────
  formulario: {
    backgroundColor: '#f7e07a',
    marginHorizontal: 22,
    marginTop: 18,
    marginBottom: 10,
    borderRadius: 18,
    padding: 18,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.14,
    shadowRadius: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#e9cf57',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: Platform.OS === 'ios' ? 14 : 12,
    fontSize: 16,
    color: '#3b2f0f',
    backgroundColor: '#fff1b8',
    marginBottom: 12,
  },
  botao: {
    backgroundColor: '#6e0d0d',
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    elevation: 4,
  },
  botaoTexto: {
    color: '#ffe5b0',
    fontSize: 16,
    fontWeight: '800',
    letterSpacing: 1,
  },

  // ── SectionList ────────────────────────────────────────────
  lista: {
    flex: 1,
    paddingHorizontal: 22,
  },

  // ── Cabeçalho de seção (data) ─────────────────────────────
  secaoHeader: {
    backgroundColor: '#e8e8e8',
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginTop: 14,
    marginBottom: 4,
    borderRadius: 12,
    alignItems: 'center',
  },
  secaoHeaderTexto: {
    fontSize: 15,
    fontWeight: '700',
    color: '#333333',
  },

  // ── Item de tarefa ────────────────────────────────────────
  itemContainer: {
    backgroundColor: '#f3f3f3',
    paddingVertical: 16,
    paddingHorizontal: 18,
    marginVertical: 3,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  itemIcone: {
    fontSize: 20,
    marginRight: 12,
  },
  itemTexto: {
    fontSize: 15,
    color: '#2b3a31',
    fontWeight: '500',
    flex: 1,
  },
  itemExcluir: {
    fontSize: 18,
    color: '#a04a4a',
    paddingLeft: 8,
  },

  // ── Separador ─────────────────────────────────────────────
  separador: {
    height: 1,
    backgroundColor: '#dcdcdc',
    marginHorizontal: 10,
  },

  // ── Lista vazia ───────────────────────────────────────────
  listaVazia: {
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 20,
  },
  listaVaziaEmoji: {
    fontSize: 48,
    marginBottom: 10,
  },
  listaVaziaTexto: {
    fontSize: 15,
    color: '#a5d6a7',
    textAlign: 'center',
  },

  // ── Rodapé ────────────────────────────────────────────────
  rodape: {
    paddingVertical: 18,
    paddingHorizontal: 22,
  },
  rodapeCard: {
    backgroundColor: '#ffffff',
    borderRadius: 18,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.12,
    shadowRadius: 5,
  },
  logoCircle: {
    width: 56,
    height: 56,
    borderRadius: 16,
    backgroundColor: '#1a3f2c',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  logoTexto: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '800',
    textTransform: 'uppercase',
  },
  rodapeInfo: {
    flex: 1,
  },
  rodapeNome: {
    fontSize: 16,
    fontWeight: '700',
    color: '#25332a',
  },
  rodapeData: {
    fontSize: 14,
    color: '#7b7b7b',
    marginTop: 4,
  },
});

export default estilos;
