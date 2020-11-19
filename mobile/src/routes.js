import React from 'react'
import {StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './views/Login';
import Cadastrar from './views/Cadastrar';
import Telas from './telas';
const Stack = createStackNavigator();

export default function Routes(){
    return (
        <NavigationContainer>
            <Stack.Navigator
            initialRouteName="Login" 
            screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen 
                name="Login" 
                component={Login}
                />

                <Stack.Screen   
                    name="Cadastrar" 
                    component={Cadastrar}
                />

                <Stack.Screen   
                    name="Telas" 
                    component={Telas}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}