import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,  
    alignItems: "center",
    justifyContent: 'center'
  },
  
  main: {
    flex: 1,
    justifyContent: 'center'
  },
  
  title: {
    color: '#61C850',
    fontSize: 32,
    fontFamily: 'Ubuntu_700Bold',
    maxWidth: 260,    
  },
  
  description: {
    color: '#6C6C80',
    fontSize: 16,
    marginTop: 16,
    fontFamily: 'Roboto_400Regular',
    maxWidth: 260,
    lineHeight: 24,
  }
});

export default styles;