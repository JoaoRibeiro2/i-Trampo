import React from 'react';
import {StyleSheet} from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import {MaterialIcons, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons'

const Tab = createMaterialBottomTabNavigator();

import Login from './views/Login';
import Cadastrar from './views/Cadastrar';

import Home from './views/Home';
import Chat from './views/Chat';
import Notifications from './views/Notifications';
import Perfil from './views/Perfil';

export default function Telas() {
    return(
            <Tab.Navigator
                inactiveColor="#B2CBFF"
                activeColor="#fff"
                barStyle={style.bar}
            >
                <Tab.Screen name="Home" 
                component={Home} 
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({color}) => (
                        <FontAwesome name="home" color={color} size={26} />
                    )
                }}
                />

                <Tab.Screen name="Chat" 
                component={Chat}
                options={{
                    tabBarLabel: 'Chat',
                    tabBarIcon: ({color}) => (
                        <MaterialCommunityIcons name="chat-processing" size={26} color={color} />
                    )
                }}
                />

                <Tab.Screen name="Notifications" 
                component={Notifications} 
                options={{
                    tabBarLabel: 'Notificações',
                    tabBarIcon: ({color}) => (
                        <MaterialIcons name="notifications" color={color} size={26} />
                    )
                }}
                />

                <Tab.Screen name="Perfil" 
                component={Perfil} 
                options={{
                    tabBarLabel: 'Perfil',
                    tabBarIcon: ({color}) => (
                        <MaterialIcons name="account-circle" color={color} size={26} />
                    )
                }}
                />
            </Tab.Navigator>        
    )
}

const style = StyleSheet.create({
    bar: {
        height: 70,
        backgroundColor: '#0034A3',
        justifyContent: 'center'
    }
})