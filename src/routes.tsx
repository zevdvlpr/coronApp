import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome, Fontisto, MaterialCommunityIcons  } from '@expo/vector-icons'; 

import Home from './screens/Home';
import Brazil from './screens/Brazil';
import World from './screens/World';


const AppTab = createBottomTabNavigator();
const Routes = () => {
  return (
    <NavigationContainer>
      <AppTab.Navigator      
        tabBarOptions={{          
          activeTintColor: '#61C850',
          inactiveTintColor: '#8EE26B',
        }}
        screenOptions={({ route }) => ({          
          tabBarIcon: ({ focused, color, size }) => {
            let iconType;
            
            if(route.name === 'Home') {
              iconType = <MaterialCommunityIcons name={focused ? 'home-variant' : 'home-variant-outline'} size={size} color={color} />;            
            } else if (route.name === 'Brazil') {
              iconType = <FontAwesome name={focused ? 'flag' : 'flag-o'} size={size} color={color} />
            } else if (route.name === 'World') {
              iconType = <Fontisto name={focused ? 'world' : 'world-o'} size={size} color={color} />;
            }
            
            return iconType;
          }
        })}
      >
        <AppTab.Screen name='Home' component={Home} />
        <AppTab.Screen name='Brazil' component={Brazil} />
        <AppTab.Screen name='World' component={World} />
      </AppTab.Navigator>
    </NavigationContainer>
  )
}

export default Routes;