import { StyleSheet, Platform } from 'react-native';

const estilo = StyleSheet.create({
  area_fundo: {
    flex: 1,
    backgroundColor: '#7ac6f2',
    padding: 10,
  },
  
  // Estilos do Cabecalho
  area_cabecalho: {
    alignItems: 'center',
    paddingVertical: 24,
  },
  
  img_cabecalho: {
    width: 60,
    height: 60,
    marginBottom: 12,
  },
  
  titulo_cabecalho: {
    fontSize: 26,
    fontWeight: '800',
    color: '#232f34',
  },

  // Estilos do Conteúdo
  area_conteudo: {
    flex: 1,
    backgroundColor: '#9ad7f5',
    borderRadius: 24,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 12,
    elevation: 6,
  },

  area_conteudo_wrapper: {
    padding: 20,
    paddingBottom: 30,
  },

  label: {
    color: '#0f3460',
    fontWeight: '700',
    marginBottom: 8,
    fontSize: 16,
  },

  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#d1d9e6',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: Platform.OS === 'ios' ? 14 : 10,
    marginBottom: 18,
    fontSize: 16,
    color: '#172b4d',
  },

  textArea: {
    minHeight: 100,
    textAlignVertical: 'top',
  },

  pickerContainer: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#d1d9e6',
    borderRadius: 12,
    marginBottom: 24,
    overflow: 'hidden',
  },

  picker: {
    width: '100%',
    color: '#172b4d',
    ...(Platform.OS === 'android' ? { height: 48 } : {}),
  },

  pickerItem: {
    height: 48,
  },

  medalhaContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },

  medalhaCorpo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#f9c74f',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 6,
    borderColor: '#f9844a',
  },

  medalhaEstrela: {
    color: '#fff',
    fontSize: 36,
    fontWeight: '900',
  },

  medalhaFitaEsq: {
    position: 'absolute',
    bottom: -16,
    left: 24,
    width: 24,
    height: 48,
    backgroundColor: '#f94144',
    borderRadius: 12,
    transform: [{ rotate: '-20deg' }],
  },

  medalhaFitaDir: {
    position: 'absolute',
    bottom: -16,
    right: 24,
    width: 24,
    height: 48,
    backgroundColor: '#f94144',
    borderRadius: 12,
    transform: [{ rotate: '20deg' }],
  },

  slider: {
    width: '100%',
    height: 40,
    marginBottom: 22,
  },

  botao: {
    backgroundColor: '#ff6f3c',
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 20,
  },

  botaoTexto: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '800',
  },

  resumoContainer: {
    backgroundColor: '#e2f1fb',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#c6deef',
  },

  resumoTexto: {
    color: '#102a43',
    fontSize: 15,
    marginBottom: 6,
  },

  // Estilos do Rodapé
  area_rodape: {
    alignItems: 'center',
    paddingVertical: 10,
  },

  texto_rodape: {
    fontSize: 14,
    color: '#102a43',
    fontWeight: '600',
  },
});

export default estilo;
