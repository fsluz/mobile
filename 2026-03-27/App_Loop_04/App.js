import React from 'react';
import { View, Text, Image } from 'react-native';

function App() {

  let listaMenu = [
    { nome: 'Appointments', icone: 'https://img.icons8.com/ios-filled/50/clock.png' },
    { nome: 'Trips', icone: 'https://img.icons8.com/ios-filled/50/airplane-take-off.png' },
    { nome: 'Passwords', icone: 'https://img.icons8.com/ios-filled/50/lock.png' },
    { nome: 'Pitches', icone: 'https://img.icons8.com/ios-filled/50/light-on.png' },
    { nome: 'Updates', icone: 'https://img.icons8.com/ios-filled/50/refresh.png' }
  ];

  let listaPessoas = [
    { nome: 'Amy Farha', cargo: 'Vice President', foto: 'https://randomuser.me/api/portraits/women/1.jpg' },
    { nome: 'Chris Jackson', cargo: 'Vice Chairman', foto: 'https://randomuser.me/api/portraits/men/2.jpg' },
    { nome: 'Amanda Martin', cargo: 'CEO', foto: 'https://randomuser.me/api/portraits/women/3.jpg' },
    { nome: 'Christy Thomas', cargo: 'Lead Developer', foto: 'https://randomuser.me/api/portraits/women/4.jpg' },
    { nome: 'Melissa Jones', cargo: 'CTO', foto: 'https://randomuser.me/api/portraits/women/5.jpg' }
  ];

  let elementos = null;
  let i = 0;

  while (i < listaMenu.length) {
    elementos = (
      <>
        {elementos}
        <View style={{
          padding: 15,
          borderBottomWidth: 1,
          borderColor: '#ddd',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image source={{ uri: listaMenu[i].icone }} style={{ width: 20, height: 20, marginRight: 10 }} />
            <Text>{listaMenu[i].nome}</Text>
          </View>
          <Text>›</Text>
        </View>
      </>
    );
    i++;
  }

  let pessoas = null;
  let j = 0;

  while (j < listaPessoas.length) {
    pessoas = (
      <>
        {pessoas}
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          padding: 10,
          borderBottomWidth: 1,
          borderColor: '#ddd'
        }}>
          <Image
            source={{ uri: listaPessoas[j].foto }}
            style={{ width: 40, height: 40, borderRadius: 20 }}
          />

          <View style={{ marginLeft: 10, flex: 1 }}>
            <Text style={{ fontWeight: 'bold' }}>{listaPessoas[j].nome}</Text>
            <Text style={{ color: 'gray', fontSize: 12 }}>{listaPessoas[j].cargo}</Text>
          </View>

          <Text>›</Text>
        </View>
      </>
    );
    j++;
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#eee' }}>

      <View style={{
        backgroundColor: '#fff',
        padding: 15,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#ccc'
      }}>
        <Text style={{ fontWeight: 'bold' }}>REACTNATIVE ELEMENTS</Text>
      </View>

      <View style={{ backgroundColor: '#f8f8f8' }}>
        {elementos}
      </View>

      <View style={{ backgroundColor: '#fff', marginTop: 10 }}>
        {pessoas}
      </View>

      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
        borderTopWidth: 1,
        borderColor: '#ccc',
        backgroundColor: '#fff'
      }}>

        <Image source={{ uri: 'https://img.icons8.com/ios-filled/50/fire-element.png' }}
          style={{ width: 25, height: 25 }} />

        <Image source={{ uri: 'https://img.icons8.com/ios-filled/50/laptop.png' }}
          style={{ width: 25, height: 25 }} />

        <Image source={{ uri: 'https://img.icons8.com/ios-filled/50/user.png' }}
          style={{ width: 25, height: 25 }} />

        <Image source={{ uri: 'https://img.icons8.com/ios-filled/50/money.png' }}
          style={{ width: 25, height: 25 }} />

        <View style={{ alignItems: 'center' }}>
          <Image source={{ uri: 'https://img.icons8.com/ios-filled/50/menu.png' }}
            style={{ width: 25, height: 25 }} />
          <Text style={{ fontSize: 10 }}>MORE</Text>
        </View>

      </View>

    </View>
  );
}

export default App;