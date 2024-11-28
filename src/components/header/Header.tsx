
import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity} from 'react-native';

import { styles } from './HeaderStyle';

import logo from '../../../assets/vTYoUwnF_400x400.png';
import imgEscuro from '../../../assets/icons8-não-perturbe-2-100.png';
import imgClaro from '../../../assets/icons8-sun-100.png';

type ButtonProps = {
  text:string,
  function: () => void
}


export function Header() {
  
  const [temaEscuro,setEscuro] = useState(true);

  function temaEscuroOnOff(){
    setEscuro(!temaEscuro);
  }
  
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo}/>
      <Text style={styles.nome}>Contador</Text>
      <TouchableOpacity onPress={temaEscuroOnOff}>
      <Image source={temaEscuro?imgEscuro:imgClaro} style={styles.tema}/>
      </TouchableOpacity>
    </View>
  );
}