import React from 'react';

import {View, Text, Image, Alert, TouchableOpacity, ScrollView } from 'react-native';
import { Feather, FontAwesome } from '@expo/vector-icons';

import Logo from '../../assets/Logo.png';
import { useNavigation} from '@react-navigation/native';
import styles from './styles';
import avatar from '../../assets/avatar.png'
import { FlatList } from 'react-native-gesture-handler';


export default function Perfil() {
    const navigation = useNavigation();



    function Logout(){
        Alert.alert('Logout', 'Deseja mesmo sair?',[
            {
                text: 'Sim',
                onPress(){
                    navigation.navigate('Login');
                }
            },
            {
                text: 'Não'
            }
        ])
    }
    
    function deleteUser(){
        Alert.alert('Excluir Usuario ', 'Deseja mesmo exluir sua conta?',[
            {
                text: 'Sim',
                onPress(){
                    navigation.navigate('Login');
                }
            },
            {
                text: 'Não'
            }
        ])
    }
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
            <ScrollView>

        <View style={styles.perfil}>
            <Image 
                source={avatar}
                style={styles.img}
                />
            <View style={{marginLeft: 10}}>
                <Text style={styles.nome}>Joao Vitor Silva Ribeiro</Text>
                <Text>Tecnologia</Text>
            </View>
        </View>

        <View style={styles.monetizacao}>
            <View style={styles.box}>
                <Text style={styles.valor}>$ 1400</Text>
                <Text>Monetização</Text>
            </View>
            <View style={styles.line}></View>
            <View style={styles.box}>
                <Text style={styles.valor}>240</Text>
                <Text style={styles.total}>Total de serviços realizados</Text>
            </View>
        </View>
            <View style={styles.FlatList}>
                <TouchableOpacity style={styles.optionStyle}>
                    <Feather name="edit" size={18} color="#000" style={styles.icon}/>   
                    <Text style={styles.optionText}>Alterar dados do Usuário</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.optionStyle}>
                    <Feather name="trending-up" size={18} color="#000" style={styles.icon}/>   
                    <Text style={styles.optionText}>Serviços Realizados</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.optionStyle}>
                    <Feather name="credit-card" size={18} color="#000" style={styles.icon}/>   
                    <Text style={styles.optionText}>Categorias</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.optionStyle}>
                    <Feather name="dollar-sign" size={18} color="#000" style={styles.icon}/>   
                    <Text style={styles.optionText}>Configurações de pagamento</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.optionStyle}>
                    <Feather name="bookmark" size={18} color="#000" style={styles.icon}/>   
                    <Text style={styles.optionText}>Diretrizes da comunidade</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.optionStyle}>
                    <Feather name="send" size={18} color="#000" style={styles.icon}/>   
                    <Text style={styles.optionText}>Enviar Feedback</Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                style={styles.optionStyle}
                onPress={Logout}
                >
                    <Feather name="power" size={18} color="#BE0000" style={styles.icon}/>   
                    <Text style={styles.optionTextRed}>Sair</Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                style={styles.optionStyle}
                onPress={deleteUser}
                >
                    <Feather name="trash-2" size={18} color="#BE0000" style={styles.icon}/>   
                    <Text style={styles.optionTextRed}>Apagar conta</Text>
                </TouchableOpacity>
            </View>

            
        </ScrollView>
        </View>


    )
}
