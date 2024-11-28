import React, { useState } from 'react';
import { View, Text, Button, Pressable } from 'react-native';

import {styles} from './ContentStyle'

export function Content() {
    const [Indice, setIndice] = useState(0);





    function contadorSoma(){
        if(Indice >= 0){
            setIndice(Indice+1)
        }
    }
    function contadorSubtracao(){
        if(Indice > 0){
            setIndice(Indice-1)
        }
    }

  return (
    <View style={styles.container}>
        <Text style={styles.indice}> {Indice} </Text>
        <View style={styles.botoes}>

            <Pressable style={styles.botao} onPress ={contadorSubtracao}>
                <Text style={styles.text}>-</Text>
            </Pressable>
            
            <Pressable style={styles.botao} onPress={contadorSoma} >
                <Text style={styles.text}>+</Text>
            </Pressable>

        </View>
        
    </View>
  );
}