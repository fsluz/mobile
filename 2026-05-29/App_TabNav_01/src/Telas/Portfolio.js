
import React from 'react';
import {View,Text,StyleSheet,ScrollView} from 'react-native';

export default function Portfolio(){
 return(
 <ScrollView style={styles.container}>
  <Text style={styles.title}>Meu Portfólio</Text>
  <Text style={styles.header}>Acadêmicos</Text>

  <View style={styles.card}>
   <Text style={styles.cardTitle}>Engenharia Eletrônica</Text>
   <Text>- UTFPR (Graduação)</Text>
   <Text>- 10/03/2000</Text>
  </View>

  <View style={styles.card}>
   <Text style={styles.cardTitle}>Administração de TI</Text>
   <Text>- FAE Business School</Text>
   <Text>- 30/04/2005</Text>
  </View>

  <View style={styles.card}>
   <Text style={styles.cardTitle}>Educação e Novas Tecnologias</Text>
   <Text>- UNINTER (Mestrado)</Text>
   <Text>- 11/06/2016</Text>
  </View>
 </ScrollView>
 )
}
const styles=StyleSheet.create({
container:{flex:1,padding:20,backgroundColor:'#DDEBF7'},
title:{fontSize:24,fontWeight:'bold',textAlign:'center',marginBottom:20},
header:{fontSize:18,fontWeight:'bold',color:'#29499A'},
card:{backgroundColor:'#fff',padding:15,borderRadius:12,marginVertical:10},
cardTitle:{fontSize:18,fontWeight:'bold'}
});
