import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    scrollView:{
        // paddingVertical: 20
    },
    container: {
        backgroundColor: '#F0F4FD',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        position:'relative'
    },
    image: {
        marginTop: 60
    },
    title: {
        color: '#333333',
        fontWeight: 'bold',
        fontSize: 30,
        marginTop: 30,
        marginBottom: 55
    },
    label: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#4D4D4D',
        width: 300,
        marginTop: 5
    },
    input: {
        width: 300,
        height: 50,
        backgroundColor: '#D3D9E5',
        paddingLeft: 10,
        marginTop: 10,
        borderRadius: 5,
        color: '#757880'
    },
    input_date:{
        width: 180,
        height: 50,
        backgroundColor: '#D3D9E5',
        paddingLeft: 10,
        marginTop: 10,
        borderRadius: 5,
        color: '#757880',
        marginRight: 120
    },
    localidade:{
        width: 300,
        flexDirection: 'row',
        marginTop: 10,
    },
    city: {
        width: 180,
        height: 80,
        flexDirection: 'row',
        flexDirection: 'column',

    },
    label_city: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#4D4D4D',
        marginTop: 5,
    },
    input_city: {
        width: 180,
        height: 50,
        backgroundColor: '#D3D9E5',
        paddingLeft: 10,
        marginTop: 5,
        borderRadius: 5,
        color: '#757880'
    },
    uf: {
        width: 110,
        marginLeft: 10,
        height: 80,
        flexDirection: 'row',
        flexDirection: 'column',
    },
    label_uf: {
        width: 70,
        fontWeight: 'bold',
        fontSize: 18,
        color: '#4D4D4D',
        marginTop: 5
    },
    input_uf: {
        height: 50,
        paddingLeft: 10,
        marginTop: 10,  
        backgroundColor: '#D3D9E5',
        paddingLeft: 10,
        marginTop: 5,
        borderRadius: 5,
        color: '#757880'
    },
    button: {
        width: 300,
        height: 50,
        marginTop: 60,
        backgroundColor: '#004DF1',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 30
    },
    textButton: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
        
    },

})