import React from 'react';

import {View, Text, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import {ListItem, Avatar, Icon} from 'react-native-elements';
import { Feather, FontAwesome } from '@expo/vector-icons';

import Logo from '../../assets/Logo.png';
import styles from './styles';
import avatar from '../../assets/avatar.png'

import users from '../../services/users';


export default function Perfil() {
    return (
        <View>
            <View style={styles.header}>
            <TouchableOpacity style={styles.chevron}>
                <Feather name="chevron-left" size={26} color="#fff"/>
 
            </TouchableOpacity>    
            <TouchableOpacity style={styles.bars}>
            <Feather name="more-vertical" size={26} color="#fff"/>
            </TouchableOpacity>
            </View>
            <FlatList
                keyExtractor={users => users.id.toString()}
                data={users}
                renderItem={ListUsers}
            />
        </View>
    )
}




function ListUsers({item: users}){
    return(
        <ListItem key={users.id} bottomDivider>
            <Image source={avatar} style={styles.avatar}/>
            <ListItem.Content>
                <ListItem.Title>{users.nome}</ListItem.Title>
                <ListItem.Subtitle>{users.email}</ListItem.Subtitle>
            </ListItem.Content>

        </ListItem>
    )
}