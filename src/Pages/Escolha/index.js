import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { useUser } from '../../context/UsarContext';

export default function Escolha() {
  const navigation = useNavigation();
  const { setTipo } = useUser();

  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Animatable.Image
          animation="flipInY"
          source={require('../../../assets/image/download.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <Animatable.View
        delay={600}
        animation="fadeInUp"
        style={styles.containerForm}>
        <Text style={styles.title}>Bem-vindo</Text>
        <Text style={styles.title}>RECOLHE360</Text>
        <Text style={styles.paragraph}>Escolha uma opção para continuar</Text>

        <TouchableOpacity
          onPress={() => {
            setTipo('coletor');
            navigation.navigate('SignIn', { tipo: 'coletor' }); // 👈 passando param
          }}
          style={styles.button}>
          <Text style={styles.buttonText}>Sou Coletor</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setTipo('doador');
            navigation.navigate('SignIn', { tipo: 'doador' }); // 👈 passando param
          }}
          style={[
            styles.button,
            { backgroundColor: '#2e7d32', marginTop: 15 },
          ]}>
          <Text style={styles.buttonText}>Sou Doador</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#329845',
    justifyContent: 'center',
  },
  containerLogo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '100%',
    height: 200,
  },
  containerForm: {
    flex: 1,
    backgroundColor: '#fffacd',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 5,
    marginBottom: 5,
  },
  paragraph: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#329845',
    borderRadius: 50,
    paddingVertical: 12,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});
