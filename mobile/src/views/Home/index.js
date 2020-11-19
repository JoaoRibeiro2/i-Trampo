import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity,FlatList} from 'react-native';
import { Feather, FontAwesome } from '@expo/vector-icons';
import Logo from '../../assets/Logo.png';
import avatar from '../../assets/avatar.png'
import styles from './styles';
import users from '../../services/users';
export default function Home() {

// const [users, setUsers] = useState([])

//     function LoadUsers(){
//         const  api = 'http://192.168.0.107/i-trampo/backend/controllers/ControllerUsuario.php';
//          fetch(api)
//         .then(res => res.json())
//         .then(resp => {
//             setUsers(resp['usuario'])
//         })
//     }
//     LoadUsers()


    return (
        <View>
        <View style={styles.header}>
            <Image source={Logo} style={styles.logo}/>
            <TouchableOpacity style={styles.bars}>
            <Feather name="menu" size={26} color="#fff"/>
            </TouchableOpacity>
        </View>
        <View style={styles.destaques}>
            <Text style={styles.label}>Destaques</Text>
            <FlatList
                style={styles.list}
                keyExtractor={item => item.id}
                data={users}
                renderItem={({item}) => (
                <View style={styles.card}>
                    <Image source={avatar} style={styles.avatar}/>

                    <View style={styles.info}>
                        <Text style={styles.nome} >{item.nome}</Text>
                        <Text style={styles.categoria}>{item.categoria}</Text>
                    </View>
                    <TouchableOpacity style={styles.link}>
                    <View></View>
                            <Text>Ver perfil</Text>
                            <Feather name="arrow-right" color="#000" size={16} />
                    </TouchableOpacity>
                    <View style={styles.line}></View>
                    <View style={styles.avaliacoes}>
                        <Text style={{marginRight: 5}}>{item.avaliacoes}</Text>
                        <FontAwesome name="star" style={{marginRight: 5}} color="#DAC400" size={16} />
                        <FontAwesome name="star" style={{marginRight: 5}} color="#DAC400" size={16} />
                    </View>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.textButton}>Solicitar serviço</Text>
                    </TouchableOpacity>
                </View>
                    )}
                /> 
        </View>
        </View>
    )
}