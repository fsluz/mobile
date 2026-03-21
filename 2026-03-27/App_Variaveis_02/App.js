import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

function App() {

  let corFundo = '#4A6FA5';
  let corCard = '#F2F2F2';
  let corTexto = '#333';
  let corTitulo = '#555';
  let tamanhoTitulo = 18;
  let tamanhoTexto = 14;

  let descricao = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet';

  let img1 = 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg';
  let img2 = 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg';
  let img3 = 'https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg';

  return (
    <View style={{ flex: 1, backgroundColor: corFundo }}>

      <ScrollView>

        <View style={{ padding: 20 }}>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

            <Ionicons name="person-circle-outline" size={50} color="white" />

            <View>
              <Ionicons name="notifications-outline" size={30} color="white" />

              <View style={{
                position: 'absolute',
                right: -5,
                top: -5,
                backgroundColor: 'red',
                borderRadius: 10,
                width: 18,
                height: 18,
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <Text style={{ color: 'white', fontSize: 10 }}>3</Text>
              </View>
            </View>

          </View>

          <Text style={{ color: 'white', marginTop: 15 }}>
            {descricao}
          </Text>
        </View>

        <View style={{
          backgroundColor: corCard,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          padding: 20
        }}>

          <Text style={{ fontSize: tamanhoTitulo, color: corTitulo }}>
            Categories
          </Text>

          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 15
          }}>

            <View style={{
              width: 70, height: 70,
              backgroundColor: 'orange',
              borderRadius: 15,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <MaterialCommunityIcons name="cellphone" size={30} color="white" />
            </View>

            <View style={{
              width: 70, height: 70,
              backgroundColor: '#9B8AD6',
              borderRadius: 15,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <MaterialCommunityIcons name="paw" size={30} color="white" />
            </View>

            <View style={{
              width: 70, height: 70,
              backgroundColor: '#20C997',
              borderRadius: 15,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <MaterialCommunityIcons name="calculator" size={30} color="white" />
            </View>

          </View>

          <Text style={{ fontSize: tamanhoTitulo, color: corTitulo }}>
            Technology
          </Text>

          <View style={{ flexDirection: 'row', marginTop: 15 }}>
            <Image source={{ uri: img1 }}
              style={{ width: 80, height: 80, borderRadius: 15 }}
            />
            <Text style={{ flex: 1, marginLeft: 10, fontSize: tamanhoTexto, color: corTexto }}>
              {descricao}
            </Text>
          </View>

          <View style={{
            height: 10,
            backgroundColor: '#ccc',
            borderRadius: 10,
            marginVertical: 10
          }}>
            <View style={{
              width: '70%',
              height: 10,
              backgroundColor: 'gold',
              borderRadius: 10
            }} />
          </View>

          <View style={{ flexDirection: 'row', marginTop: 15 }}>
            <Image source={{ uri: img2 }}
              style={{ width: 80, height: 80, borderRadius: 15 }}
            />
            <Text style={{ flex: 1, marginLeft: 10, fontSize: tamanhoTexto, color: corTexto }}>
              {descricao}
            </Text>
          </View>

          <View style={{
            height: 10,
            backgroundColor: '#ccc',
            borderRadius: 10,
            marginVertical: 10
          }}>
            <View style={{
              width: '40%',
              height: 10,
              backgroundColor: 'orange',
              borderRadius: 10
            }} />
          </View>

          <View style={{ flexDirection: 'row', marginTop: 15 }}>
            <Image source={{ uri: img3 }}
              style={{ width: 80, height: 80, borderRadius: 15 }}
            />
            <Text style={{ flex: 1, marginLeft: 10, fontSize: tamanhoTexto, color: corTexto }}>
              {descricao}
            </Text>
          </View>

          <View style={{
            height: 10,
            backgroundColor: '#ccc',
            borderRadius: 10,
            marginVertical: 10
          }}>
            <View style={{
              width: '85%',
              height: 10,
              backgroundColor: '#4A6FA5',
              borderRadius: 10
            }} />
          </View>

        </View>

      </ScrollView>

    </View>
  );
}

export default App;