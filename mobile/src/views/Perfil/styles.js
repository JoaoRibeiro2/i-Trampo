import React from 'react';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    header: {
        width: '100%',
        height: 80,
        backgroundColor: '#0034A3',
    },
    logo: {
        top: 30,
        left: 10
    },
    chevron: {
        position: 'absolute',
        left: 10,
        top: 35
    },
    bars: {
        position: 'absolute',
        right: 10,
        top: 35
    },
    perfil: {
        padding: 10,
        marginTop: 40,
        flexDirection: 'row'
    },
    img: {
        width: 80,
        height: 80,
        marginLeft: 20
    },
    monetizacao: {
        flexDirection: 'row',
        height: 90,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: '#c9c9c9',
        borderWidth: 1
    },
    box: {
        width: 150,
        alignItems: 'center'
    },
    nome: {
        fontWeight: 'bold',
        fontSize: 18
    },
    valor: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        color: '#181818'
    },
    total: {
        textAlign: 'center'
    },
    line: {
        height: 90,
        width: 1,
        backgroundColor: '#c9c9c9'
    },

    FlatList: {
        marginLeft: 40,
        marginTop: 24,
        marginBottom: 30
    },

    optionsList: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: -50
    },
    optionStyle: {
        flexDirection: 'row',
        marginBottom: 12
    },
    icon: {
        marginRight: 5
    },
    optionText: {
        fontSize: 16,
        color: '#181818'
    },
    optionTextRed: {
        color: '#BE0000',
        fontSize: 16,
    }

})