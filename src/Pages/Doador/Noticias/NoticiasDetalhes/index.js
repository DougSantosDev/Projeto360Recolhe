import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

const { width: screenWidth } = Dimensions.get('window');
const imageSize = screenWidth * 0.8;

export default function NoticiasDetalhes({ route }) {
  const { titulo, descricao, imagem } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imagemContainer}>
        {imagem && (
          <Image
            source={typeof imagem === 'number' ? imagem : { uri: imagem }}
            style={styles.imagem}
            resizeMode="cover"
          />
        )}
      </View>

      <View style={styles.conteudo}>
        <Text style={styles.data}>🗓️ Publicado em 24 de junho de 2025</Text>
        <Text style={styles.titulo}>{titulo}</Text>
        <Text style={styles.subtitulo}>🌱 Um passo a mais rumo à sustentabilidade</Text>
        <Text style={styles.descricao}>{descricao}</Text>

        <View style={styles.extraBox}>
          <Feather name="info" size={18} color="#1b4332" />
          <Text style={styles.extra}>
            Reciclar ajuda a reduzir os impactos ambientais e economiza recursos naturais.
          </Text>
        </View>

        <Text style={styles.final}>
          Acompanhe o RECOLHE360 para mais notícias e ações que impactam o planeta! 🌎
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2fdf6',
  },
  imagemContainer: {
    alignItems: 'center',
    paddingTop: 24,
  },
  imagem: {
    width: imageSize,
    height: imageSize,
    borderRadius: 12,
  },
  conteudo: {
    padding: 20,
    alignItems: 'center',
  },
  data: {
    fontSize: 13,
    color: '#888',
    marginBottom: 8,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1b4332',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitulo: {
    fontSize: 16,
    color: '#40916c',
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: 20,
  },
  descricao: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
    textAlign: 'justify',
    marginBottom: 20,
  },
  extraBox: {
    backgroundColor: '#d8f3dc',
    borderRadius: 10,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 20,
  },
  extra: {
    fontSize: 14,
    color: '#1b4332',
    flex: 1,
    lineHeight: 20,
  },
  final: {
    fontSize: 15,
    color: '#555',
    textAlign: 'center',
    marginTop: 10,
    paddingHorizontal: 10,
  },
});
