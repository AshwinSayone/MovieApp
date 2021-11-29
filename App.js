import React from 'react';
import Root from './navigator/root';
import StackNav from './navigator/stack';
import {NavigationContainer} from '@react-navigation/native';
const App = () => {
  return (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  );
};
export default App;
