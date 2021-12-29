import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, View } from 'react-native';
import { initializeApp } from 'firebase/app';
import CreateEvent from './components/CreateEvent';
import Events from './components/Events';

const Stack = createNativeStackNavigator();

const firebaseConfig = {
  apiKey: "AIzaSyDNwqSPGYOhvM0_EzM4GfGX6JG4FW1e1rc",
  authDomain: "floc-9ebcf.firebaseapp.com",
  projectId: "floc-9ebcf",
  storageBucket: "floc-9ebcf.appspot.com",
  messagingSenderId: "390997444310",
  appId: "1:390997444310:web:f93a11bcc2978a91a02b77",
  measurementId: "G-VWTE2QG3DN"
};
initializeApp(firebaseConfig);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Events"
          component={Events}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen
          name="CreateEvent"
          component={CreateEvent}
          options={{ title: 'You can create an event here' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
