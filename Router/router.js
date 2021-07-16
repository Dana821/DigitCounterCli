import React from 'react';
import {createStackNavigator, CardStyleInterpolators} from '@react-navigation/stack';
import MainPage from '../src/MainPage';
import About from '../src/About';
import Splash from '../src/Splash';

const Stack = createStackNavigator();

const router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}}/>
            <Stack.Screen name="Main" component={MainPage} options={{headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} headerMode = 'fade'/>
            <Stack.Screen name="About" component={About} options={{cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, headerShown: false}}/>
        </Stack.Navigator>
    )
}

export default router;
