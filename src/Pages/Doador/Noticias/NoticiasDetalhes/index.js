import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function NoticiasDetalhes({ route }) {
  const { titulo, descricao, imagem } = route.params;

  return (
    <ScrollView style={styles.container}>
      {imagem && (
        <Image
          source={typeof imagem === 'number' ? imagem : { uri: imagem }}
          style={styles.imagem}
        />
      )}
      <Text style={styles.titulo}>{titulo}</Text>
      <Text style={styles.descricao}>{descricao}</Text>
      {/* Você pode adicionar mais texto ou conteúdo aqui futuramente */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingVertical: 50,
    backgroundColor: '#f9fefb',
  },
  imagem: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 16,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2d6a4f',
    marginBottom: 12,
  },
  descricao: {
    fontSize: 16,
    color: '#444',
  },
});
