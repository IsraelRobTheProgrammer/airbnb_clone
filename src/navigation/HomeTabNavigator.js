import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from '../screens/Home';

import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import Guests from '../screens/Guest';
import LocationSearch from '../screens/LocationSearch';
import Post from '../components/Post';

const Tab = createBottomTabNavigator();

const HomeTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Explor"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => {
            <Fontisto name={'search'} size={30} color={color} />;
          },
          headerShown: false,
          tabBarActiveTintColor: '#f15454',
          showIcon: true,
        }}
      />

      <Tab.Screen
        name="Saved"
        component={Guests}
        options={{
          tabBarIcon: ({color}) => {
            <FontAwesome name="heart-o" size={25} color={color} />;
          },
          headerShown: false,
          tabBarActiveTintColor: '#f15454',
          showIcon: true,
        }}
      />

      <Tab.Screen
        name="Airbnb"
        component={LocationSearch}
        options={{
          tabBarIcon: ({}) => {
            <FontAwesome5 name="airbnb" size={25} />;
          },
          headerShown: false,
          tabBarActiveTintColor: '#f15454',
          showIcon: true,
        }}
      />

      <Tab.Screen
        name="Messages"
        component={LocationSearch}
        options={{
          tabBarIcon: ({color}) => {
            <Feather name="message-square" size={25} color={color} />;
          },
          headerShown: false,
          tabBarActiveTintColor: '#f15454',
          showIcon: true,
        }}
      />

      <Tab.Screen
        name="Profile"
        component={LocationSearch}
        options={{
          tabBarIcon: ({color}) => {
            <EvilIcons name={'user'} size={25} />;
          },
          headerShown: false,
          tabBarActiveTintColor: '#f15454',
          showIcon: true,
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTab;
