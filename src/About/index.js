//About Screen
import { Link } from '@react-navigation/native';
import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Linking,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const About = ({navigation}) => {
  return (
    <View style={styles.About}>
      <View style={styles.Header}>
        <TouchableOpacity onPress={() => navigation.navigate('Main')}>
          <Ionicons
            name="arrow-back"
            size={24}
            color="#3498db"
            style={{marginLeft: 20}}
          />
        </TouchableOpacity>

        <Text style={styles.Title}>About</Text>
      </View>
      <View style={styles.Content}>
        <Text style={styles.HowTo}>How to Use DigitCounter: </Text>
        <Text style={styles.ContentAbout}>
          1. To add numbers, tap the screen or press the + . button {'\n'} 2. To
          subtract a number, double tap the screen or press the - button {'\n'} 3. To
          reset the number to 0, long tap the screen or press the reset button
          above
        </Text>
        <View style={styles.Footer}>
            <Text style={{fontSize: 20, fontFamily: 'Roboto-Thin'}}>Thanks for using our product!</Text>
            <Text style={{fontSize: 15, fontFamily: 'Roboto-Thin', marginTop: 10}}>Created by Dyaksa, CEO of Infinite Corp. </Text>
            <Image source={require('../../assets/Image/logo.png')} style={styles.Infinite}/>
            <TouchableOpacity style={{width: 200, height: 60, borderRadius: 10, backgroundColor: '#3498db', marginTop: 10, justifyContent: 'center'}} onPress={() => {Linking.openURL('https://www.infinitestudiocorp.wordpress.com')}}>
                <Text style={{fontSize: 20, fontFamily: 'Roboto-Light', textAlign: 'center', color: '#fff'}}>
                    Website
                </Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  About: {
    flex: 10,
    backgroundColor: '#fff',
  },
  Header: {
    flex: 1,
    width: '95%',
    height: 60,
    marginTop: 10,
    flexDirection: 'row',
  },
  Title: {
    fontSize: 20,
    color: 'black',
    fontFamily: 'Roboto-Light',
    paddingLeft: 20,
  },
  Content: {
    flex: 10,
    width: width,
  },
  HowTo: {
    fontSize: 25,
    fontFamily: 'Roboto-Regular',
    paddingLeft: 20,
  },
  ContentAbout:{
      fontSize: 18,
      fontFamily: 'Roboto-Light',
      paddingTop: 15,
      paddingLeft: 20,
  },
  Footer:{
      width: width,
      height: height,
      alignItems: 'center',
      marginTop: 25,
  },
  Infinite:{
      width: 205,
      height: 55,
      marginTop: 20,
  }
});

export default About;
