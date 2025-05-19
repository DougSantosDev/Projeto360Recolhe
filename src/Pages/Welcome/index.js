import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

export default function Welcome() {
  const navigation = useNavigation();
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
        <Text style={styles.title}>{'Bem vindo  '}</Text>
        <Text style={styles.title}>{'RECOLHE360'}</Text>

        <Text style={styles.paragraph}>{'Faça o login para começar'}</Text>

        <TouchableOpacity
          onPress={() => navigation.navigate('Escolha')}
          style={styles.button}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#329845',
  },
  containerLogo: {
    flex: 0.9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '70%',
    height: 150,
  },
  containerForm: {
    flex: 1,
    backgroundColor: '#fffacd',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 5,
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 5,
  },
  paragraph: {
    marginTop: 95,
    justifyContent: 'center',
    alignSelf: 'center',
    color: '#a1a1a1',
  },

  button: {
    position: 'absolute',
    backgroundColor: '#329845',
    borderRadius: 50,
    paddingVertical: 8,
    width: '60%',
    alignSelf: 'center',
    bottom: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});
