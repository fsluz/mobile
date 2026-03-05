import React from 'react';
//importar os componentes utilizados
import { View, Text } from 'react-native';

function App() {
  return (
    <View style={{
      flex: 1, marginBottom: 50, flexDirection: 'column',
      justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ width: 70, height: 70, backgroundColor: 'green' }}>
      </View>
      <View style={{ width: 70, height: 70, backgroundColor: 'red' }}>
      </View>
      <View style={{ width: 70, height: 70, backgroundColor: 'black' }}>
      </View>
    </View>
  );
}

export default App;