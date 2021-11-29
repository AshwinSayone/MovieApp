import React from 'react';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from '../module/homescreen/home';
import MovieScreen from '../module/movieScreen/movieScreen';
import About from '../module/searchScreen/about';
import Contact from '../module/contact';
import Homecopy from '../module/home copy';
import COLORS from '../constant/color/color';
const Tab = createMaterialBottomTabNavigator();

function tabNav() {
  return (
    <Tab.Navigator initialRouteName="Home" activeColor="#fff">
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: COLORS.HEART,
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="MovieScreen"
        component={MovieScreen}
        options={{
          tabBarLabel: 'MovieScreen',
          tabBarColor: COLORS.HEART,
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={25} />
          ),
        }}
      />

      <Tab.Screen
        name="About"
        component={About}
        options={{
          tabBarLabel: 'About',
          tabBarColor: COLORS.HEART,
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="book-multiple"
              color={color}
              size={25}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Contact"
        component={Contact}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: COLORS.HEART,
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" color={color} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default tabNav;
