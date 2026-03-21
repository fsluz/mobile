import React from 'react';
import { View, Text, Image, TextInput, ScrollView } from 'react-native';

function App() {

  let OPCAO = 'Tela1';

  let corCard = '#ffffff';
  let corAzul = '#4A90E2';
  let corVerde = '#2ecc71';
  let corTexto = '#555';

  let descricao = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit';

  let avatar = 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg';
  let avatar2 = 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg';
  let capa = 'https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg';

  if (OPCAO == 'Tela1')
    return (
      <View style={{ flex: 1, backgroundColor: corCard }}>

        <ScrollView contentContainerStyle={{ padding: 15 }}>

          <View style={{
            backgroundColor: '#ccc',
            borderRadius: 20,
            padding: 10,
            marginBottom: 15
          }}>
            <Text>🔍 Search</Text>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 }}>
            <View style={{ backgroundColor: corAzul, padding: 10, borderRadius: 20 }}>
              <Text style={{ color: 'white' }}>Education</Text>
            </View>
            <View style={{ backgroundColor: '#ddd', padding: 10, borderRadius: 20 }}>
              <Text>+</Text>
            </View>
            <View style={{ backgroundColor: '#ddd', padding: 10, borderRadius: 20 }}>
              <Text>🌱</Text>
            </View>
            <View style={{ backgroundColor: '#ddd', padding: 10, borderRadius: 20 }}>
              <Text>🐾</Text>
            </View>
          </View>

          <Text style={{ marginBottom: 10 }}>300 Results</Text>

          {[1, 2].map((item, i) => (
            <View key={i} style={{ flexDirection: 'row', marginBottom: 15 }}>
              <Image source={{ uri: i === 0 ? avatar : avatar2 }}
                style={{ width: 70, height: 70, borderRadius: 15 }}
              />
              <View style={{ marginLeft: 10, flex: 1 }}>
                <Text style={{ color: corTexto }}>{descricao}</Text>

                <View style={{
                  height: 8,
                  backgroundColor: '#ccc',
                  borderRadius: 10,
                  marginTop: 10
                }}>
                  <View style={{
                    width: i === 0 ? '70%' : '50%',
                    height: 8,
                    backgroundColor: corVerde,
                    borderRadius: 10
                  }} />
                </View>
              </View>
            </View>
          ))}

          <Image
            source={{ uri: capa }}
            style={{ width: '100%', height: 150, borderRadius: 20 }}
          />

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
            <Text style={{ width: '48%' }}>{descricao}</Text>
            <Text style={{ width: '48%' }}>{descricao}</Text>
          </View>

        </ScrollView>

      </View>
    );

  else
    return (
      <View style={{ flex: 1, backgroundColor: corCard }}>

        <View style={{
          backgroundColor: '#2CA6A4',
          height: 220,
          alignItems: 'center',
          justifyContent: 'center',
          borderBottomLeftRadius: 40,
          borderBottomRightRadius: 40
        }}>
          <Text style={{ fontSize: 60 }}>🙂</Text>
        </View>

        <View style={{
          flex: 1,
          padding: 20,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          marginTop: -20,
          backgroundColor: corCard
        }}>

          <Text style={{
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'center',
            color: '#555'
          }}>
            Lorem ipsum dolor
          </Text>

          <Text style={{
            textAlign: 'center',
            marginVertical: 10,
            color: '#777'
          }}>
            {descricao}
          </Text>

          <View style={{
            backgroundColor: '#eee',
            padding: 15,
            borderRadius: 15,
            alignItems: 'center',
            marginVertical: 15
          }}>
            <Text style={{
              color: corVerde,
              fontSize: 28,
              fontWeight: 'bold'
            }}>
              $120.00
            </Text>
          </View>

          <TextInput
            placeholder="ENTER TEXT HERE"
            style={{
              borderWidth: 1,
              borderColor: '#ccc',
              borderRadius: 15,
              padding: 12,
              marginVertical: 10
            }}
          />

          <View style={{
            backgroundColor: corVerde,
            padding: 18,
            borderRadius: 20,
            alignItems: 'center',
            marginTop: 10
          }}>
            <Text style={{
              color: 'white',
              fontSize: 20,
              fontWeight: 'bold'
            }}>
              DONATE
            </Text>
          </View>

        </View>

      </View>
    );
}

export default App;