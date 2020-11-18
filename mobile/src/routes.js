import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Login from './views/Login';
import Cadastrar from './views/Cadastrar';

export default function Routes() {
    return(
        <NavigationContainer>
            <Stack.Navigator 
            initialRouteName={"Cadastrar"}
            screenOptions={{headerShown: false}}
            >

                <Stack.Screen    
                    name="Login"
                    component={Login}
                />

                <Stack.Screen 
                    name="Cadastrar"
                    component={Cadastrar}
                />

            </Stack.Navigator>
        </NavigationContainer>
    )
}