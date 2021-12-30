import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CreateEvent from './components/CreateEvent';
import Events from './components/Events';
import Profile from './components/Profile';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        // Styling for tab icons. 
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Events') {
              iconName = 'ios-basketball'
            } else if (route.name === 'CreateEvent') {
              iconName = 'md-add-circle'
            } else if (route.name === 'Profile') {
              iconName = 'md-person';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen
          name="Events"
          component={Events}
          options={{ title: 'Events' }}
        />
        <Tab.Screen
          name="CreateEvent"
          component={CreateEvent}
          options={{ title: 'Create Event' }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{ title: 'Profile' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
