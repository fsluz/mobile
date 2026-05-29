
import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

export default function Home(){
 return(
  <View style={styles.container}>
   <View style={styles.card}>
    <Text style={styles.title}>Página Home</Text>
    <Text style={styles.sub}>Bem-vindo(a)</Text>
    <Text>COMPONENTE</Text>
    <Text style={styles.blue}>Tab Navigation</Text>
   </View>
   <View style={styles.footer}>
    <Text style={styles.footerText}>Felipe Luz • 29/05/2026</Text>
   </View>
  </View>
 )
}
const styles=StyleSheet.create({
container:{flex:1,backgroundColor:'#08122F',padding:10},
card:{flex:1,backgroundColor:'#D9DEE7',borderRadius:30,justifyContent:'center',alignItems:'center'},
title:{fontSize:28,fontWeight:'bold'},
sub:{fontSize:18,marginVertical:20},
blue:{fontSize:22,fontWeight:'bold',color:'#2E5BFF'},
footer:{backgroundColor:'#182744',padding:15,borderRadius:15,marginVertical:10},
footerText:{color:'#fff',textAlign:'center'}
});
