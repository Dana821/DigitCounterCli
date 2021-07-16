import React from 'react'
import { StyleSheet, View,Text, Image, StatusBar } from 'react-native'

const Splash = ({navigation}) => {

    React.useEffect(() => {
        setTimeout(() => {
            navigation.replace('Main');
        }, 2000);
    }, [])

    return (
        <View style={styles.Splash}>
            <StatusBar barStyle="dark-content"/>
            <View style={styles.Title}>
                <Text style={{fontSize: 30, fontFamily: 'Roboto-Thin', color: '#000', position: 'relative', right: 15,}}>Infinite</Text>
                <Text style={{fontSize: 40, fontFamily: 'Roboto-Light', color: '#000', marginBottom: '20%'}}>DigitCounter</Text>
            </View>
            <Image source={require('../../assets/Image/logo.png')} style={{width: 120, height: 50,position: 'absolute', bottom: 20,}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    Splash: {
        flex: 3,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Splash
