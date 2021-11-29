import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import tabNav from './tab';
import HomeScreen from '../module/homescreen/home';
import MovieScreen from '../module/movieScreen/movieScreen';

const Stack = createStackNavigator();

function stackNav() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="MovieScreen" component={MovieScreen} />
    </Stack.Navigator>
  );
}
export default stackNav;
