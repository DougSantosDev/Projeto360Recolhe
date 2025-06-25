import React from 'react';
import { View, Text, StyleSheet, Linking, TouchableOpacity, Image } from 'react-native';

export default function Sobre() {
  return (
    <View style={styles.background}>
      <View style={styles.card}>
        {/* Opcional: Logo do app */}
        {/* <Image source={require('../../../assets/logo.png')} style={styles.logo} /> */}

        <Text style={styles.titulo}>Sobre o RECOLHE360</Text>
        <Text style={styles.texto}>
          O RECOLHE360 nasceu com o propósito de conectar doadores e coletores para dar destino inteligente e sustentável aos resíduos recicláveis.
        </Text>
        <Text style={styles.textoPequeno}>
          {"\n"}Versão 1.0.0{'\n'}
          Desenvolvido por Douglas Santos{'\n'}
        </Text>
        <TouchableOpacity
          style={styles.link}
          onPress={() => Linking.openURL('https://github.com/DougSantosDev')}
        >
          <Text style={styles.linkText}>GitHub do Douglas Santos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.link}
          onPress={() => Linking.openURL('mailto:seu@email.com')}
        >
          <Text style={styles.linkText}>Fale conosco</Text>
        </TouchableOpacity>
        <Text style={styles.creditos}>
          © {new Date().getFullYear()} RECOLHE360. Todos os direitos reservados.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1, backgroundColor: '#fffacd', justifyContent: 'center', alignItems: 'center' },
  card: {
    width: '96%',
    backgroundColor: '#fff',
    borderRadius: 25,
    padding: 28,
    elevation: 4,
    marginVertical: 32,
    alignItems: 'center',
  },
  logo: { width: 88, height: 88, marginBottom: 20 },
  titulo: { fontSize: 24, fontWeight: 'bold', color: '#329845', textAlign: 'center', marginBottom: 12 },
  texto: { fontSize: 17, color: '#444', marginBottom: 10, textAlign: 'center' },
  textoPequeno: { fontSize: 15, color: '#888', textAlign: 'center' },
  link: { marginTop: 10, marginBottom: 4 },
  linkText: { color: '#329845', fontWeight: 'bold', fontSize: 16, textDecorationLine: 'underline' },
  creditos: { marginTop: 18, fontSize: 13, color: '#bbb', textAlign: 'center' },
});
