import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from '../Screens/Home';
import Teams from '../Screens/Teams';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
 return (
  <Navigator screenOptions={{ headerShown: false}}>
   <Screen 
    name="Home"
    component={Home}
   />

   <Screen 
    name="Teams"
    component={Teams}
   />
  </Navigator>
 );
}