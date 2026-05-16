import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({

  // ── Tela ──────────────────────────────────────────────────────
  tela: {
    flex: 1,
    backgroundColor: '#1a1a2e',
  },

  // ── Lista ─────────────────────────────────────────────────────
  lista: {
    flex: 1,
    paddingHorizontal: 14,
    paddingTop: 8,
  },

  // ── Card ──────────────────────────────────────────────────────
  card: {
    backgroundColor: '#16213e',
    borderRadius: 14,
    marginVertical: 8,
    overflow: 'hidden',
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    borderLeftWidth: 4,
    borderLeftColor: '#e94560',
  },
  foto: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
  },
  badgeAno: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#e94560',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },
  badgeAnoTexto: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '700',
  },
  cardCorpo: {
    padding: 14,
  },
  nome: {
    fontSize: 18,
    fontWeight: '800',
    color: '#ffffff',
    marginBottom: 2,
  },
  marca: {
    fontSize: 13,
    color: '#e94560',
    fontWeight: '700',
    marginBottom: 8,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  descricao: {
    fontSize: 13,
    color: '#a8b2d8',
    marginBottom: 10,
    lineHeight: 19,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#0f3460',
    borderRadius: 8,
    padding: 10,
  },
  infoItem: {
    alignItems: 'center',
    flex: 1,
  },
  infoLabel: {
    fontSize: 10,
    color: '#8892b0',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 2,
  },
  infoValor: {
    fontSize: 12,
    color: '#ccd6f6',
    fontWeight: '700',
    textAlign: 'center',
  },
  divisorVertical: {
    width: 1,
    backgroundColor: '#1a1a2e',
    marginHorizontal: 4,
  },

  // ── Separador ─────────────────────────────────────────────────
  separador: {
    height: 2,
    backgroundColor: '#e9456022',
    marginHorizontal: 20,
  },

  // ── Cabeçalho ─────────────────────────────────────────────────
  cabecalho: {
    backgroundColor: '#0f3460',
    paddingTop: 28,
    paddingBottom: 20,
    paddingHorizontal: 20,
    borderBottomWidth: 3,
    borderBottomColor: '#e94560',
  },
  cabecalhoEmoji: {
    fontSize: 36,
    textAlign: 'center',
    marginBottom: 6,
  },
  cabecalhoTitulo: {
    fontSize: 22,
    fontWeight: '800',
    color: '#ffffff',
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  cabecalhoSubtitulo: {
    fontSize: 13,
    color: '#8892b0',
    textAlign: 'center',
    marginTop: 4,
  },

  // ── Rodapé ────────────────────────────────────────────────────
  rodape: {
    backgroundColor: '#0f3460',
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderTopWidth: 3,
    borderTopColor: '#e94560',
    marginTop: 8,
  },
  rodapeTexto: {
    color: '#8892b0',
    fontSize: 13,
    textAlign: 'center',
  },
  rodapeDestaque: {
    color: '#e94560',
    fontWeight: '700',
  },

  // ── Lista vazia ───────────────────────────────────────────────
  listaVazia: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 60,
  },
  listaVaziaTexto: {
    color: '#8892b0',
    fontSize: 16,
    marginTop: 12,
  },
});

export default estilos;
