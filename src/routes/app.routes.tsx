import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../Screens/Home';
import Teams from '../Screens/Teams';
import Matchs from '../Screens/Games';
import Table from '../Screens/Table';

import { Feather, EvilIcons, Ionicons, AntDesign   } from '@expo/vector-icons';

const RootStack = createBottomTabNavigator();

export function AppRoutes() {
 return (
  <RootStack.Navigator 
  screenOptions={{
    tabBarActiveTintColor: '#9fe801',
    tabBarInactiveTintColor: '#7C7C8A',
    tabBarShowLabel: false,
    headerShown: false,
    tabBarStyle:{
     position: 'absolute',
     backgroundColor: '#171626',
     borderTopWidth: 0,

     bottom: 14,
     left: 14,
     right: 14,
     elevation: 0,
     borderRadius: 4,
     height: 60,
    }
  }}>
   <RootStack.Screen 
    name="Home"
    component={Home}
    options={{
      tabBarIcon: ({ color, size}) => {
       return <Feather name="home" size={size} color={color} />
      }
    }}
   />

   <RootStack.Screen 
    name="Teams"
    component={Teams}
    options={{
      tabBarIcon: ({ color, size}) => {
       return <EvilIcons name="trophy" size={32} color={color} />
      }
    }}
   />

   <RootStack.Screen 
    name="Matchs"
    component={Matchs}
    options={{
      tabBarIcon: ({ color, size}) => {
       return <AntDesign  name="calendar" size={size} color={color} />
      }
    }}
   />

   <RootStack.Screen 
    name="Table"
    component={Table}
    options={{
      tabBarIcon: ({ color, size}) => {
       return <Ionicons  name="pizza-outline" size={size} color={color} />
      }
    }}
   />
  </RootStack.Navigator>
 );
}