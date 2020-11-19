import React from 'react';
import {View, Text, TextInput, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';
import { useNavigation} from '@react-navigation/native';
import styles from './styles';
import avatar from '../../assets/avatar.png';

import Auth from '../../services/auth';

import {Feather} from '@expo/vector-icons'
import { Formik } from 'formik';
import { FlatList } from 'react-native-gesture-handler';


export default function Login() {
    const navigation = useNavigation();
    function Cadastrar(){
        navigation.navigate('Cadastrar');
    }

    return (
        <KeyboardAvoidingView contentContainerStyle={styles.box} behavior="position" enabled>
        <View style={styles.container}>
            <Image source={avatar} style={styles.image}/>

                <Text style={styles.title}>Login</Text>

            <Form />

            <View style={styles.span2}>
                <Text style={styles.span2text}>Ainda não possue uma conta?</Text>
                <TouchableOpacity onPress={Cadastrar}>
                    <Text style={styles.link}>Criar conta <Feather name="arrow-right" size={16} /></Text> 
                </TouchableOpacity>
            </View>
        </View>
        </KeyboardAvoidingView>
    )
}


function Form(){
    const navigation = useNavigation();

    function Telas(){
        navigation.navigate('Telas');
    }
    


    return(
        <Formik
        initialValues={{
            email: '',
            senha: '',
        }}
        onSubmit={values => {
            const user = {
                "usuario": [
                    values
                ]
            }

            Auth(user)
        }}>
            {({values, handleChange, handleSubmit, errors}) => (
            <>
            <Text style={styles.label}>E-mail</Text>
            <TextInput 
                placeholder="E-mail"
                style={styles.input}
                value={values.email}
                onChangeText={handleChange('email')}
            />

            <TouchableOpacity>
                <Text style={styles.label}>Senha</Text>
            </TouchableOpacity>
            <TextInput 
                placeholder="Senha"
                secureTextEntry={true}
                style={styles.input}
                value={values.senha}
                onChangeText={handleChange('senha')}
            />

            <Text style={styles.span}>Esqueci minha senha</Text>

            <TouchableOpacity 
            style={styles.button}
            onPress={Telas}>

                <Text style={styles.textButton}>Entrar</Text>
            </TouchableOpacity>
            </>
            )}
        </Formik>
    )
}
data = {
    "usuario": [
      {
        "nome": "Aline Ribeiro",
        "email": "aline@gmail.com",
        "senha": "$2y$10$aUYC4q2PnYPiLjc1JMe1k.jHI5nZ8wOKm.z3W0oXFGIw8kEWu6wQm",
        "cpf": "123.456.789.22",
        "tel": "997623050",
        "dt_nasc": "1993-06-10",
        "cidade": "Peruíbe",
        "estado": "SP",
        "genero": "masculino",
        "foto": "img/imagem.png",
        "desc": "i-tramper"
      }  
    ]}