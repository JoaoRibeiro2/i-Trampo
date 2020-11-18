import React, {useEffect, useState} from 'react';
import { render } from 'react-dom';
import {View, Text, TextInput, TouchableOpacity, StyleSheet, Image, KeyboardAvoidingView, ScrollView } from 'react-native';

export default function Radio(props) {
    return(
            <View style={styles.selectGenero}>

                <TouchableOpacity
                    onPress={() => props.vl(props.label)}
                    style={styles.btn}>
                    <Image
                        source={props.img}
                        style={styles.radio}
                    />
                        <Text style={styles.textButton}>{props.label}</Text>
                    </TouchableOpacity> 
        
                </View>
    )
}

const styles = StyleSheet.create({
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
    },
    textButton: {
        color: '#757880',
        fontSize: 16
    }
  });
  