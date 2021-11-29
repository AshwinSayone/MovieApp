import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {TouchableOpacity, Image, View, Text} from 'react-native';
import Stack from '../navigator/stack';
import MovieScreen from '../module/movieScreen/movieScreen';
import About from '../module/searchScreen/about';
import Contact from '../module/contact';
import Notification from '../asset/noti.png';
import Message from '../asset/message.png';
import Netflix from '../asset/netflix.png';
const Drawer = createDrawerNavigator();

function Root() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTitle: () => (
          <Image
            source={Netflix}
            style={{width: 100, height: 60, margin: 10}}
          />
        ),
        headerRight: () => (
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() => {
                alert('This is a button.');
              }}>
              <Image
                source={Notification}
                style={{width: 30, height: 30, margin: 10}}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                alert('This is a button.');
              }}>
              <Image
                source={Message}
                style={{width: 30, height: 30, margin: 10}}
              />
            </TouchableOpacity>
          </View>
        ),
      }}>
      <Drawer.Screen name="Home Screen" component={Stack} />
      <Drawer.Screen name="Movie Search" component={About} />
    </Drawer.Navigator>
  );
}

export default Root;
