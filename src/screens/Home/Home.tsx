import React from 'react';

import { StatusBar } from 'react-native';
import { View, ScrollView, SafeAreaView} from 'react-native';
import { Header } from '../../components/header/Header';
import { styles } from './HomeStyle';
import { Content } from "../../components/content/content";
import { Footer } from "../../components/footer/Footer";


export function Home() {
  
  return (
    
      <SafeAreaView style = {styles.container}>
        <StatusBar/>
        <Header/>
        <Content />
        <Footer />
      </SafeAreaView>

  );
}