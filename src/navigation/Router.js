import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
const Stack = createStackNavigator();

import LocationSearch from '../screens/LocationSearch';
import Guests from '../screens/Guest';

import HomeTabNavigator from './HomeTabNavigator';
import HomeScreen from '../screens/Home';

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeTabNavigator}
          options={{headerShown: false, showIcon: true}}
        />

        <Stack.Screen
          name="Search Locations"
          component={LocationSearch}
          options={{title: 'Search For Your Destination'}}
        />

        <Stack.Screen
          name="Guests Screen"
          component={Guests}
          options={{title: 'How Many Guests Are We Expecting?😊'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
