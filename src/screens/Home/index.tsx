import React from 'react';
import {
  View,
  Text
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import styles from "./styles";

const Home = () => {
  const navigation = useNavigation();

  function handleNavigateToBrazil() {
    navigation.navigate('Brazil');
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.main}>                  
        <Text style={styles.title}>
          Covid Agora
        </Text>
        <Text style={styles.description}>
          Veja como anda o coronavírus no brasil e no mundo.
        </Text>        
      </View>
    </View>
  )
}

export default Home;