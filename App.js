import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home Page" component={HomePage}/>
      <Stack.Screen name="About Page" component={AboutPage}/>
      <Stack.Screen name="Contact Page" component={ContactPage}/>
    </Stack.Navigator>
  </NavigationContainer>
  )
}