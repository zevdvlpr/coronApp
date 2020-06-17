import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
} from 'react-native';

import styles from "./styles";

import api from "../../services/api";

interface ICountry {
  data: {
    country: string;
    cases: number;
    confirmed: number;
    deaths: number;
    recovered: number;
    updated_at: string;
  }
}

const Brazil = () => {
  const [country, setCountry] = useState<ICountry>();  
  
  useEffect(() => {    
    api.get<ICountry>('/brazil').then((response) => {
      return setCountry(response.data);
    });        
  }, []);        
  
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={styles.container}>
          <Text>
            Verifique as estatísticas do estado onde você mora, e fique por dentro da situação na palma da sua mão.        
          </Text>
          <View style={styles.recoveredBox}>
            <Text style={styles.recoveredTitle}>Casos recuperados</Text>
            <Text style={styles.recoveredSize}>{Number(country?.data.recovered).toLocaleString()}</Text>          
          </View>
          <View style={styles.casesBox}>
            <Text style={styles.casesTitle}>Casos Confirmados</Text>
            <Text style={styles.casesSize}>{Number(country?.data.cases).toLocaleString()}</Text>
            <Text style={styles.casesSubTitle}>Acumulado</Text>
          </View>
          <View style={styles.deathsBox}>
            <Text style={styles.deathsTitle}>Óbitos Confirmados</Text>
            <Text style={styles.deathsSize}>{Number(country?.data.deaths).toLocaleString()}</Text>
            <Text style={styles.deathsSubTitle}>Óbitos acumulados</Text>
          </View>
        </View>
      </ScrollView>      
    </SafeAreaView>     
  )
}

export default Brazil;