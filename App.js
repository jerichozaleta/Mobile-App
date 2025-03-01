import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './Components/HomeScreen';
import AboutScreen from './Components/AboutScreen';
import EducationScreen from './Components/EducationScreen';
import HobbiesScreen from './Components/HobbiesScreen';
import SkillsScreen from './Components/SkillsScreen';
import ContactsScreen from './Components/ContactsScreen';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarStyle: { backgroundColor: 'black' },
          tabBarActiveTintColor: '#1DA1F2',
          tabBarInactiveTintColor: 'gray',
          headerStyle: { backgroundColor: 'black' },
          headerTintColor: 'white',
        }}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen 
          name="About" 
          component={AboutScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen 
          name="Education" 
          component={EducationScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="school" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen 
          name="Hobbies" 
          component={HobbiesScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="heart" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen 
          name="Skills" 
          component={SkillsScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="star" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen 
          name="Contacts" 
          component={ContactsScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="call" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
