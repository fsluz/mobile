import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "#f5f5f5", padding: 20, justifyContent: "space-between" }}>

      {/* Parte de cima */}
      <View style={{ alignItems: "center", marginTop: 40 }}>
        
        <Image
          source={require('./img/universo_observavel.jpeg')}
          style={{ width: 200, height: 400}}
          resizeMode="contain"
        />

        <Text style={{ fontSize: 22, fontWeight: "bold", textAlign: "center", marginBottom: 10 }}>
          Informação sobre o universo observável.
        </Text>

        <Text style={{ fontSize: 14, textAlign: "center", color: "#555", paddingHorizontal: 10 }}>
         O universo observável é a porção do cosmos visível da Terra, limitada pela idade do universo (
bilhões de anos) e pela velocidade da luz. Devido à expansão cósmica, seu raio atual é de aproximadamente
bilhões de anos-luz, formando uma esfera de
bilhões de anos-luz de diâmetro com a Terra no centro. 
        </Text>

      </View>

      {/* Botões */}
      <View style={{ flexDirection: "row", justifyContent: "center"}}>
        
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: "#4f83cc",
            paddingVertical: 10,
            paddingHorizontal: 25,
            borderRadius: 25,
            marginRight: 10
          }}
        >
          <Text style={{ color: "#4f83cc" }}>Pular</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: "#4f83cc",
            paddingVertical: 10,
            paddingHorizontal: 25,
            borderRadius: 25
          }}
        >
          <Text style={{ color: "white" }}>Próximo</Text>
        </TouchableOpacity>

      </View>

      {/* Indicador de páginas */}
      <View style={{ flexDirection: "row", justifyContent: "center", marginBottom: 20 }}>
        <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: "#4f83cc", margin: 4 }} />
        <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: "#ccc", margin: 4 }} />
        <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: "#ccc", margin: 4 }} />
      </View>

    </View>
  );
}

export default App;