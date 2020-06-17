import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,  
    paddingHorizontal: 15,
    paddingTop: 50,
  },
  
  recoveredBox: {
    marginTop: 15,
    paddingHorizontal: 15,
    height: 100,
    alignItems: 'flex-start',
    backgroundColor: '#1da584',
    borderStyle: 'solid',
    borderColor: '#dbe9f5',
    borderWidth: 1,    
  },
  
  recoveredTitle: { 
    marginTop: 15,        
    color: 'rgba(255,255,255, 0.5)',
    fontSize: 15,
    fontFamily: 'Ubuntu_700Bold',
    maxWidth: 260    
  },
  
  recoveredSize: {  
    marginTop: 7.5,
    color: '#fff',
    fontSize: 25,  
    fontFamily: 'Roboto_500Medium',    
  },
  
  casesBox: {
    marginTop: 15,
    paddingHorizontal: 15,
    height: 115,
    alignItems: 'flex-start',
    backgroundColor: '#ffffff',
    borderStyle: 'solid',
    borderColor: '#dbe9f5',
    borderWidth: 1,    
  },
  
  casesTitle: { 
    marginTop: 15,        
    color: '#1da584',
    fontSize: 15,
    fontFamily: 'Ubuntu_700Bold',
    maxWidth: 260, 
    textTransform: 'uppercase'
  },
  
  casesSize: {  
    marginTop: 15,
    fontSize: 15,  
    fontFamily: 'Roboto_500Medium',    
  },
  
  casesSubTitle: {
    color: 'rgba(0, 0, 0, 0.5)'
  },
  
  deathsBox: {
    marginTop: 15,
    paddingHorizontal: 15,
    height: 115,
    alignItems: 'flex-start',
    backgroundColor: '#ffffff',
    borderStyle: 'solid',
    borderColor: '#dbe9f5',
    borderWidth: 1,    
  },
  
  deathsTitle: { 
    marginTop: 15,        
    color: '#9a36bb',
    fontSize: 15,
    fontFamily: 'Ubuntu_700Bold',
    maxWidth: 260, 
    textTransform: 'uppercase'
  },
  
  deathsSize: {  
    marginTop: 15,
    fontSize: 15,  
    fontFamily: 'Roboto_500Medium',    
  },
  
  deathsSubTitle: {
    color: 'rgba(0, 0, 0, 0.5)'
  }
});

export default styles;