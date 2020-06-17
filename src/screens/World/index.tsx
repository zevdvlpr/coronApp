import React from 'react';
import {
  View,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';

import { Feather } from '@expo/vector-icons'; 

import { useNavigation } from '@react-navigation/native';

import styles from "./styles";

const World = () => {
  const navigation = useNavigation();

  function handleNavigateBack() {
    navigation.goBack();
  }
  
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TouchableOpacity onPress={handleNavigateBack}>
          <Feather name="arrow-left" color="#1da584" size={24} />          
        </TouchableOpacity>
      </View>
    </SafeAreaView>    
  )
}

export default World;