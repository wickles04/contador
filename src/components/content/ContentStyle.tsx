import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
  height:680,
  alignItems:"center",
  justifyContent:"center",
  gap:60
  },
  botoes:{
    flexDirection:"row",
    gap:10
  },
  botao:{
    backgroundColor:"#5880b3",
    width:80,
    height:50,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:8,
    
  },
  text:{
    fontSize:40
  },
  indice:{
    fontSize:60
  }
});