//importar a biblioteca geral do React
import React from 'react';

//importar os componentes utilizados
import { View, Text } from 'react-native';

function App() {
  return (
    <View style={{ backgroundColor: 'gray', height: '100%', width: '100%' }}>
      <Text style={{ color: 'black', fontSize: 14, textAlign: 'center', padding: 40, fontFamily: 'Impact, Charcoal, sans-serif', borderColor: 'black', borderWidth: 4 }}>
        Mercúrio é o planeta mais próximo do Sol e possui temperaturas extremas.
        Vênus é conhecido por sua atmosfera muito quente e densa.
        A Terra é o único planeta conhecido com vida.
        Marte é chamado de planeta vermelho por causa da cor de sua superfície. </Text>
      <View style={{ backgroundColor: 'blue', height: '20%', width: '100%', borderColor: 'red', borderWidth: 4 }}>
        <Text style={{ color: '#ffa200', fontSize: 14, textAlign: 'center', padding: 10, fontFamily: 'Courier New ,Courier,Freemono, Nimbus Mono L,monospace' }}>
          A Earth é o terceiro planeta a partir do Sol e o único conhecido até hoje que possui vida. Ela possui uma atmosfera rica em oxigênio, água em estado líquido e condições climáticas que permitem o desenvolvimento de milhões de espécies de seres vivos. Cerca de 71% da superfície do planeta é coberta por oceanos, enquanto o restante é formado por continentes e ilhas. A Terra também possui um satélite natural chamado Lua, que influencia as marés e ajuda a estabilizar o eixo de rotação do planeta. Seu movimento de rotação gera o dia e a noite, enquanto o movimento de translação ao redor do Sol determina as estações do ano
        </Text>
      </View>

      <View style={{ backgroundColor: '#291408', height: '20%', width: '100%', borderColor: 'yellow', borderWidth: 4 }}>
        <Text style={{ color: '#e608ff', fontSize: 14, textAlign: 'center', padding: 10, fontFamily: 'Brush Script MT' }}>
          Júpiter é o maior planeta do Sistema Solar e possui uma grande tempestade chamada
          Grande Mancha Vermelha. Saturno é famoso por seus anéis impressionantes, formados
          principalmente por gelo e poeira.
        </Text>
      </View>

      <View style={{ backgroundColor: '#9cdcff', height: '100%', width: '100%', borderColor: 'greens', borderWidth: 4 }}>
        <Text style={{
          color: '#0800ff', fontSize: 14, textAlign: 'center', padding: 10, fontFamily: 'Webdings, sans-serif'
        }}>
          Urano é um planeta gigante de gelo que gira de lado em relação aos outros planetas.
          Netuno é o planeta mais distante do Sol e possui ventos extremamente fortes e
          temperaturas muito baixas.
        </Text>
      </View>

    </View>
  );
}

export default App;