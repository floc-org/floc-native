import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateEvent from './components/CreateEvent';
import Events from './components/Events';

const Stack = createNativeStackNavigator();

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
