import { StyleSheet } from 'react-native';
import { useFonts, OpenSans_400Regular, OpenSans_700Bold } from '@expo-google-fonts/open-sans';

export default StyleSheet.create({
  FontGrande: {
    fontSize: 32,
    fontFamily: 'OpenSans_700Bol',
    color: '#026873',
    marginBottom: 10,
  },
  FontMedia: {
    fontSize: 18,
    fontFamily: 'OpenSans_400Regular',
    color: '#027368',
  },
  contadorText: {
    fontSize: 16,
    fontFamily: 'OpenSans_400Regular',
    color: '#026873',
    marginVertical: 3,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10, 
    backgroundColor: '#588A87',
    borderRadius: 10,
    width: '90%',
  },
    Acerto: {
    fontSize: 28,
    fontFamily: 'OpenSans_400Regular',
    color: '#006400',
  },
  Erro: {
    fontSize: 28,
    fontFamily: 'OpenSans_400Regular',
    color: '#d22e2e',
  },
  Botao: {
    fontSize: 20,
    fontFamily: 'OpenSans_400Regular',
    backgroundColor: '#9AA697',
    color: '#E3F2DF',
    padding: 10,
    borderRadius: 5,
    textAlign: 'center',
    marginTop: 20,
  },
});