
import React from 'react';
import {View,Text,TextInput,TouchableOpacity,StyleSheet} from 'react-native';

export default function Contato(){
 return(
 <View style={styles.container}>
  <Text style={styles.title}>Entre em Contato</Text>

  <View style={styles.card}>
   <Text>Celular: (41) 99999-9999</Text>
   <Text>Email: professor@email.com</Text>
   <Text>LinkedIn: linkedin.com/in/professor</Text>
   <Text>Instagram: @professor.dev</Text>
  </View>

  <TextInput style={styles.input} placeholder="Digite seu nome"/>
  <TextInput style={styles.area} placeholder="Digite sua mensagem" multiline/>

  <TouchableOpacity style={styles.btn}>
   <Text style={{color:'#fff'}}>Enviar</Text>
  </TouchableOpacity>
 </View>
 )
}
const styles=StyleSheet.create({
container:{flex:1,padding:20,backgroundColor:'#DDEBF7'},
title:{fontSize:24,fontWeight:'bold',textAlign:'center',marginBottom:20},
card:{backgroundColor:'#fff',padding:15,borderRadius:12},
input:{backgroundColor:'#fff',padding:15,borderRadius:10,marginTop:20},
area:{backgroundColor:'#fff',padding:15,borderRadius:10,height:120,marginTop:15},
btn:{backgroundColor:'#2E5BFF',padding:15,borderRadius:10,marginTop:20,alignItems:'center'}
});
