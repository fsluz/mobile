import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
  // ── Tela principal ──────────────────────────────────────────
  tela: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingVertical: 12,
  },

  // ── FlatList ────────────────────────────────────────────────
  lista: {
    paddingHorizontal: 14,
    paddingBottom: 24,
    gap: 8,
  },

  // ── Card de cada país ────────────────────────────────────────
  card: {
    backgroundColor: '#cfeaf9',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 14,
    marginVertical: 6,
  },
  bandeira: {
    width: 70,
    height: 46,
    borderRadius: 6,
    marginRight: 14,
    resizeMode: 'cover',
  },
  infoContainer: {
    flex: 1,
  },
  nome: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0b3558',
    marginBottom: 6,
  },
  capital: {
    fontSize: 13,
    color: '#6f8aa3',
    marginBottom: 2,
  },
  populacao: {
    fontSize: 13,
    color: '#777',
    marginBottom: 1,
  },
  area: {
    fontSize: 13,
    color: '#777',
    marginBottom: 1,
  },
  continente: {
    fontSize: 12,
    color: '#1565c0',
    fontWeight: '600',
    marginTop: 2,
  },

  // ── Separador ────────────────────────────────────────────────
  separador: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginHorizontal: 16,
  },

  // ── Cabeçalho ────────────────────────────────────────────────
  cabecalhoContainer: {
    alignItems: 'center',
    marginBottom: 8,
  },
  flagsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
  },
  flagSmall: {
    width: 38,
    height: 24,
    marginHorizontal: 6,
    resizeMode: 'contain',
  },
  cabecalhoTexto: {
    fontSize: 22,
    fontWeight: '800',
    color: '#123046',
    marginTop: 6,
  },

  // ── Rodapé ──────────────────────────────────────────────────
  rodapeContainer: {
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 18,
  },
  rodapeTexto: {
    fontSize: 13,
    color: '#6f8aa3',
  },
});

export default estilos;
