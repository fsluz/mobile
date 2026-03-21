import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';


export default function App() {
  const TITULO = 'Fissão nuclear'
  const PARAGRAFO = 'Fissão nuclear, na física nuclear, é a quebra do núcleo de um átomo instável em dois núcleos menores pelo bombardeamento de partículas como nêutrons. Os isótopos formados pela divisão têm massa parecida, no entanto geralmente seguem a proporção de massa de 3 para 2.'
  const RODAPÉ1 = 'Felipe Santos da Luz'
  const RODAPÉ2 = '2026'

  return (
  <View style={{
    flex: 1, backgroundColor: 'powderblue',
    paddingVertical: 30, paddingHorizontal: 20
  }}>
    <View style={{ flexDirection: 'column', height: '20%', width: '100%', backgroundColor: 'skyblue', justifyContent: 'center' }}>
      <Text style={{ fontSize: 26, fontFamily: "Times", textAlign: "center" }}>{TITULO}</Text>
    </View>

    <View style={{ height: '70%', marginTop: '10px', backgroundColor: 'skyblue', padding: '10%' }}>
      <Text style={{ fontSize: 20, textAlign: "justify" }}>{PARAGRAFO}</Text>
    </View>

    <View style={{ height: '10%', flexDirection: 'row', justifyContent: "space-around", backgroundColor: "skyblue", marginTop: "10px", alignItems: "center" }}>
      <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'red' }}>{RODAPÉ1}</Text>
      <Text style={{ fontSize: 30, fontStyle: 'italic' }}>{RODAPÉ2}</Text>
    </View>
  </View>
);
}
