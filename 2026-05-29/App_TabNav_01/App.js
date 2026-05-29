import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Home from './src/Telas/Home';
import Portfolio from './src/Telas/Portfolio';
import Contato from './src/Telas/Contato';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="darkblue" />
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
          tabBarLabelPosition: 'below-icon',
          tabBarLabelStyle: { fontSize: 12 }
        }}>

        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({color,size}) => (
              <MaterialIcons name="home" color={color} size={22} />
            )
          }}
        />

        <Tab.Screen
          name="Portfolio"
          component={Portfolio}
          options={{
            tabBarIcon: () => (
              <MaterialIcons name="dashboard" color="purple" size={22} />
            )
          }}
        />

        <Tab.Screen
          name="Contato"
          component={Contato}
          options={{
            tabBarIcon: () => (
              <MaterialIcons name="person" color="darkred" size={22} />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
