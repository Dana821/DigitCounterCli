//MainPage
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  Dimensions,
  Pressable,
  TouchableOpacity,
  Vibration
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import EviIcons from 'react-native-vector-icons/EvilIcons';
import react from 'react';
import { count } from 'yargs';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const MainPage = ({navigation}) => {
    const [counter, setCounter] = React.useState(0);

  return (
    <View style={styles.MainPage}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <View style={styles.Header}>
        <Text style={styles.Title}>DigitCounter</Text>
        <View style={{flexDirection: 'row', marginRight: 2}}>
          <TouchableOpacity onPress={() => navigation.navigate('About') }>
            <Feather name="info" color="#3498db" size={24} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setCounter(0)}>
            <EviIcons
              name="redo"
              size={34}
              color="#3498db"
              style={{position: 'relative', left: 5, bottom: 1}}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Pressable style={styles.Content} onPress={() =>  setCounter(counter + 1)} onLongPress={() => setCounter(0)}>
        <View style={{marginBottom: '30%', alignItems: 'center', flex: 3, justifyContent: 'center'}}>
          <Text style={{fontSize: 95, fontFamily: 'Roboto-Regular', textAlign: 'center', }}>{counter}</Text>
          <Text style={{fontSize: 20, fontFamily: 'Roboto-Light', textAlign: 'center'}}>
            Counter
          </Text>
        </View>
      </Pressable>
      <View style={{position: 'absolute', bottom: 0, width: width, height: '13%',  flexDirection: 'row', flex: 3,}}>
          <TouchableOpacity style={{width: '50%', height: '100%', backgroundColor: '#fff', borderRadius: 5, borderWidth: 2, borderColor: '#3498db', flex: 3,}} onPress={() => setCounter(counter - 1)}>
              <Text style={{fontSize: 50, fontFamily: 'Roboto-Regular', color: '#3498db', textAlign: 'center'}}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{width: '50%', height: '100%', backgroundColor: '#3498db', borderRadius: 5, borderWidth: 2, borderColor: '#3498db', flex: 3,}} onPress={() => setCounter(counter + 1)}>
              <Text style={{fontSize: 50, fontFamily: 'Roboto-Regular', color: '#fff', textAlign: 'center'}}>+</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  MainPage: {
    flex: 10,
    backgroundColor: '#fff',
  },
  Header: {
    flex: 1,
    width: '95%',
    height: 60,
    marginTop: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  Content: {
    flex: 10,
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Title: {
    fontSize: 20,
    color: 'black',
    fontFamily: 'Roboto-Light',
    paddingLeft: 20,
  },
});

export default MainPage;
