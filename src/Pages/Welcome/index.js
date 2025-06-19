import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

export default function Welcome() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Logo animada */}
      <View style={styles.containerLogo}>
        <Animatable.Image
          animation="flipInY"
          source={require('../../../assets/image/download.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* Parte inferior com botão */}
      <Animatable.View
        delay={600}
        animation="fadeInUp"
        style={styles.containerForm}
      >
        <Text style={styles.title}>Bem-vindo</Text>
        <Text style={styles.title}>RECOLHE360</Text>
        <Text style={styles.paragraph}>Faça o login para começar</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Escolha')}
        >
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
    paddingHorizontal: '5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 5,
    color: '#333',
  },
  paragraph: {
    marginTop: 95,
    color: '#666',
    fontSize: 15,
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
