import { StyleSheet } from 'react-native';

const estilo = StyleSheet.create({
  area_fundo: {
    flex: 1,
    backgroundColor: '#87CEEB',
    padding: 10,
  },
  
  // Estilos do Cabecalho
  area_cabecalho: {
    backgroundColor: '#87CEEB',
    alignItems: 'center',
    paddingVertical: 20,
  },
  
  img_cabecalho: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  
  titulo_cabecalho: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#8B0000',
  },

  // Estilos do Conteúdo
  area_conteudo: {
    flex: 1,
    backgroundColor: '#FFFF00',
    padding: 20,
    justifyContent: 'center',
  },

  texto_conteudo: {
    fontSize: 14,
    marginBottom: 15,
    color: '#000',
  },

  inputNome_conteudo: {
    borderWidth: 2,
    borderColor: '#000',
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#FFF',
    borderRadius: 5,
    fontSize: 16,
  },

  texto_conteudo_bold: {
    fontSize: 14,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#000',
  },

  slider1: {
    width: '100%',
    height: 40,
    marginBottom: 20,
  },

  slider2: {
    width: '100%',
    height: 40,
    marginBottom: 30,
  },

  botao_clique: {
    backgroundColor: '#8B0000',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },

  texto_botao: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },

  // Estilos do Rodapé
  area_rodape: {
    backgroundColor: '#87CEEB',
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  texto_rodape: {
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold',
  },
});

export default estilo;
