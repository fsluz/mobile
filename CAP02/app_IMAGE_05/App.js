import React from 'react';
import { View, Text, Image } from 'react-native';

function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "#ffffff" }}>

      {/* Barra superior */}
      <View style={{ backgroundColor: "#005218", paddingVertical: 20, alignItems: "center" }}>
        <Text style={{ color: "white", fontSize: 22, fontWeight: "bold" }}>
          DinDin
        </Text>
        <Text style={{ color: "white", fontSize: 12 }}>
          PARA SEU BOLSO, PARA SUA VIDA
        </Text>
      </View>

      {/* Barra roxa clara */}
      <View style={{ backgroundColor: "#29a303", height: 30 }} />

      {/* Conteúdo */}
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center", padding: 20 }}>

        <Image
          source={require('./img/pig.jpg')}
          style={{ width: 180, height: 180, marginBottom: 30 }}
        />

        <Text style={{
          fontSize: 24,
          textAlign: "center",
          color: "#222",
          lineHeight: 34
        }}>
          Cada gasto,{"\n"}
          sob controle, {"\n"}
          cada sonho {"\n"}
          mais perto.{"\n"}
        </Text>

      </View>

      {/* Barra inferior */}
      <View style={{ backgroundColor: "#005218", height: 40 }} />

    </View>
  );
}

export default App;