import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet, Image, KeyboardAvoidingView, ScrollView } from 'react-native';

import {Feather} from '@expo/vector-icons'
import { Formik } from 'formik';

import avatar from '../../assets/avatar.png';
import inputRadio from '../../assets/inputRadio.png'

import Radio from '../../components/Radio';
import styles from './styles';

import Cadastro from '../../services/cadastrar'

export default function Cadastrar() {
    return (

        
        <View style={styles.container}>
                <Image source={avatar} style={styles.image} />
                <Text style={styles.title}>Cadastrar</Text>
            {/* <KeyboardAvoidingView contentContainerStyle={styles.box} behavior="position" enabled> */}
                <ScrollView style={styles.scrollView}>
                    <Form />
                </ScrollView>
        {/* </KeyboardAvoidingView> */}

            </View>

    )
}

function Form({checked}) {

    const [gender, setGender] = useState('');

    useEffect(() => {
        console.log(gender)
    })
    return(
        <Formik
            initialValues={{
                nome: '',
                email: '',
                senha: '',
                cpf: '',
                tel: '',
                dt_nasc: '',
                cidade: '',
                estado: '',
                genero: '',
                foto: '',
                desc: ''
            }}
            onSubmit={values => {
                const user = {
                    "usuario": [{
                    nome: `${values.nome}`,
                    email: `${values.email}`,
                    senha: `${values.senha}`,
                    cpf: `${values.cpf}`,
                    tel: `995412354`,
                    dt_nasc: `${values.dt_nasc}`,
                    cidade: `${values.cidade}`,
                    estado: `${values.estado}`,
                    genero: `${gender.genero}`,
                    foto: `1234`,
                    desc: `111`
                    }]
                }
                // Cadastro(user)
                console.log(user)
            }}>
            {({values, handleChange, handleSubmit, errors}) => (
            <>
                <Text style={styles.label}>Nome</Text>
                <TextInput
                style={styles.input}
                placeholder="Digite seu nome"
                value={values.nome}
                onChangeText={handleChange('nome')}
                />

                <Text style={styles.label}>E-mail</Text>
                <TextInput
                style={styles.input}
                placeholder="ex: email@exemplo.com"
                value={values.email}
                onChangeText={handleChange('email')}
                />

                <Text style={styles.label}>CPF</Text>
                <TextInput
                style={styles.input}
                placeholder="000.000.000.00"
                value={values.cpf}
                onChangeText={handleChange('cpf')}
                />

                <Text style={styles.label}>Data de nascimento</Text>
                <TextInput
                style={styles.input_date}
                placeholder="00/00/0000"
                value={values.dt_nasc}
                onChangeText={handleChange('dt_nasc')}
                />
                
                <View style={styles.localidade}>
                    <View style={styles.city}>
                        <Text style={styles.label_city}>Cidade</Text>
                        <TextInput
                        style={styles.input_city}
                        placeholder="Selecione a cidade"
                        value={values.cidade}
                        onChangeText={handleChange('cidade')}
                        />
                    </View>

                    <View style={styles.uf}>
                        <Text style={styles.label_uf}>Estado</Text>
                        <TextInput
                        style={styles.input_uf}
                        placeholder="estado"
                        value={values.estado}
                        onChangeText={handleChange('estado')}
                        />
                    </View>
                </View>
                <View style={styles.genero}>
                <Text style={styles.label}>Genero</Text>
                    <Radio 
                    img={inputRadio} 
                    vl={setGender} 
                    value={values.genero}
                    label="Masculino"
                    onChangeText={handleChange('genero')}
                    />
                </View>

                <Text style={styles.label}>Senha</Text>
                <TouchableOpacity>
                </TouchableOpacity>
                <TextInput
                style={styles.input}
                placeholder="2345"
                value={values.senha}
                onChangeText={handleChange('senha')}
                />

                <Text style={styles.label}>Confirmar Senha</Text>
                <TextInput
                style={styles.input}
                placeholder=""/>

            <TouchableOpacity 
            style={styles.button}
            onPress={handleSubmit}>
                <Text style={styles.textButton}>Cadastrar</Text>
            </TouchableOpacity>

            </>
            )}
        </Formik>
    )
}

const style = StyleSheet.create({
    selectGenero:{

        flexDirection: 'row',
    },
    radio: {
      flexDirection: 'row',
      marginRight: 10
    },
    btn: {
      flexDirection: 'row',
      alignItems: 'center',
      width: 250,
      height: 40,
      marginTop: 10,
    }
  });