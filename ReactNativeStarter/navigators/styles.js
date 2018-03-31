import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    
  },

  topContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },

  middleContainer: {
    flex: 3,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },

  bottomContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: '#ffffff',    
    justifyContent: 'flex-end'
  },

  header: {
    fontSize: 20,
  },

  title: {
    fontSize: 14,
  },

  link: {
    fontSize: 14,
    color: '#0984e3',
    alignSelf: 'center',
  },

  disabledTextInputContainer: {    
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#dfe6e9',
    width: '90%',    
    height: 32
  },

  textInputContainer: {    
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#0984e3',
    width: '90%',    
    height: 32
  },

  textInput: {
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 18,
    width: 200,    
  },

  buttonContainer: {
    padding: 12,
  },

  button: {    
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#0984e3',
    height: 40
  },
  buttonText: {
    color: '#ffffff',
  }


});