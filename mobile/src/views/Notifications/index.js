import React from 'react';

import {View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Feather, FontAwesome } from '@expo/vector-icons';

import Logo from '../../assets/Logo.png';
import styles from './styles';
import avatar from '../../assets/avatar.png'
import { FlatList } from 'react-native-gesture-handler';


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
        <ScrollView style={{
            marginBottom: 100
        }}>
        <Text style={styles.total}>Total de servços realizados</Text>


        <View style={styles.services}> 
            <Text style={styles.statusService}>Serviços em andamento</Text>

            <View style={styles.card}>
                <Image source={avatar} style={styles.avatar}/>
                <View style={styles.titleName}>
                    <Text style={styles.title}>Consertar carro</Text>
                    <Text>Bettoven</Text>
                </View>

                <TouchableOpacity style={styles.link}>
                    <Text style={styles.textLink}>Ver detalhes</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.finalizar}>
                    <Text style={styles.textButton}>Finalizar</Text>
                </TouchableOpacity>
            </View>




            <Text style={styles.statusService}>Serviços Solicitados</Text>

            <View style={styles.card}>
                <Image source={avatar} style={styles.avatar}/>
                <View style={styles.titleName}>
                    <Text style={styles.title}>Consertar fusca</Text>
                    <Text>Mario Bento</Text>
                </View>

                <TouchableOpacity style={styles.link}>
                    
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>Ver mais</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.card}>
                <Image source={avatar} style={styles.avatar}/>
                <View style={styles.titleName}>
                    <Text style={styles.title}>Escort quebrado</Text>
                    <Text>Arnaldo Ribeiro</Text>
                </View>

                <TouchableOpacity style={styles.link}>
                    
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>Ver mais</Text>
                </TouchableOpacity>
            </View>


            <View style={styles.card}>
                <Image source={avatar} style={styles.avatar}/>
                <View style={styles.titleName}>
                    <Text style={styles.title}>Motor quebrado</Text>
                    <Text>Aline Silva</Text>
                </View>

                <TouchableOpacity style={styles.link}>
                    
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>Ver mais</Text>
                </TouchableOpacity>
            </View>

        </View>
        </ScrollView>
        </View>
        )
}