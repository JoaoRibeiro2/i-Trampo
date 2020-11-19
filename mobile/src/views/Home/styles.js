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
    bars: {
        position: 'absolute',
        right: 10,
        top: 35
    },
    label: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#4D4D4D'
    },
    card: {
        width: 330,
        height: 160,
        marginTop: 28,
        borderRadius: 5,
        backgroundColor: '#fff',
        padding: 15,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    avatar: {
        width: 60,
        height: 60
    },
    info: {
        width: 150,
        height: 50,
        position: 'absolute',
        top: 17,
        left: 80,
    },
    nome: {
        width: 100,
        color: '#181818',
        fontWeight: 'bold',
        fontSize: 14,
     },
    link: {
        width: 80,
        height: 30,
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        top: 15,
        right: 15
    },
    button: {
        width: 120,
        height: 35,
        borderRadius: 5,
        backgroundColor: '#0034A3',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 15,
        bottom: 20
    },
    textButton: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 12
    }
})