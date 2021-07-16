
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Router from './Router/router';

const App = () => {
  return(
    <NavigationContainer>
      <Router/>
    </NavigationContainer>
  )
};

const styles = StyleSheet.create({
});

export default App;
