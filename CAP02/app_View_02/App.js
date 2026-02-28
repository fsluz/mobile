// importar a biblioteca geral do React
import React from 'react';

// importar os componentes utilizados
import { View, Text } from 'react-native';

function App() {
  return (
    <View style={{ paddingHorizontal: 20, marginTop: 50 }}>

      <View style={{ 
        backgroundColor: 'red',
        height: 50  ,
        borderColor: 'black',
        borderWidth: 2,
        marginBottom: 5,
        paddingHorizontal: 10,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
      }}>
        <Text>COMPONENTE VIEW</Text>
      </View>

      <View style={{ 
        backgroundColor: 'yellow',
        borderColor: 'black',
        borderWidth: 2,
        marginBottom: 5,
        paddingHorizontal: 10,
        height: 150,
      }}>
        <Text>CONTEÚDO</Text>
      </View>

      <View style={{ 
        backgroundColor: 'gray',
        borderColor: 'black',
        borderWidth: 2,
        paddingHorizontal: 10,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
      }}>
        <Text>SEU NOME</Text>
        <Text>dd/mm/aaaa</Text>
      </View>

    </View>
  );
}

export default App;