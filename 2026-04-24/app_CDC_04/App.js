import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { Header } from './components/Header';
import { NewsList } from './components/NewsList';
import { Footer } from './components/Footer';
import { newsData } from './data/newsData';
import { globalStyles } from './styles/estilo';

export default function App() {
  return (
    <View style={globalStyles.container}>
      <Header title="VEJA MAIS NO PORTAL" />
      <NewsList news={newsData} />
      <Footer />
      <StatusBar style="auto" />
    </View>
  );
}
