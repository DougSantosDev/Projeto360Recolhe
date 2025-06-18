import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const noticias = [
  {
    id: '1',
    titulo: 'Brasil bate recorde de reciclagem de alumínio',
    descricao:
      'Mais de 98% das latinhas foram recicladas em 2024, colocando o país como líder mundial.',
    imagem: require('../../../../assets/image/lata.jpeg'), // imagem local
  },
  {
    id: '2',
    titulo: 'Coleta seletiva cresce nas periferias',
    descricao:
      'Iniciativas comunitárias têm ampliado a conscientização sobre descarte correto.',
    imagem: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
  },
  {
    id: '3',
    titulo: 'Reciclagem reduz emissão de CO₂',
    descricao:
      'Estudo aponta que reciclar papel e plástico evita a liberação de toneladas de gases poluentes.',
    imagem: 'https://cdn-icons-png.flaticon.com/512/3063/3063829.png',
  },
];

export default function Noticias() {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>📰 Notícias sobre Reciclagem</Text>

      {/* Destaque */}
      <View style={styles.destaque}>
        <Image
          source={
            typeof noticias[0].imagem === 'number'
              ? noticias[0].imagem
              : { uri: noticias[0].imagem }
          }
          style={styles.imagemDestaque}
        />
        <Text style={styles.tituloDestaque}>{noticias[0].titulo}</Text>
        <Text style={styles.descricaoDestaque}>{noticias[0].descricao}</Text>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => navigation.navigate('NoticiasDetalhes', noticias[0])}
        >
          <Text style={styles.textoBotao}>Ver mais</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.subtitulo}>Últimas notícias</Text>

      <FlatList
        data={noticias.slice(1)}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image
              source={
                typeof item.imagem === 'number'
                  ? item.imagem
                  : { uri: item.imagem }
              }
              style={styles.imagem}
            />
            <View style={{ flex: 1 }}>
              <Text style={styles.tituloCard}>{item.titulo}</Text>
              <Text style={styles.descricao}>{item.descricao}</Text>
              <TouchableOpacity
                style={styles.botao}
                onPress={() => navigation.navigate('NoticiasDetalhes', item)}
              >
                <Text style={styles.textoBotao}>Ver mais</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fffacd',
    paddingVertical: 40,
    padding: 16,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2d6a4f',
    marginBottom: 12,
  },
  destaque: {
    backgroundColor: '#e0f7e9',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
  },
  imagemDestaque: {
    width: '100%',
    height: 160,
    borderRadius: 10,
    marginBottom: 10,
  },
  tituloDestaque: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1b4332',
    marginBottom: 4,
  },
  descricaoDestaque: {
    fontSize: 14,
    color: '#444',
    marginBottom: 10,
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
    color: '#40916c',
  },
  card: {
    flexDirection: 'row',
    marginBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    elevation: 1,
    gap: 10,
  },
  imagem: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },
  tituloCard: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1b4332',
  },
  descricao: {
    fontSize: 13,
    color: '#555',
    marginTop: 4,
    marginBottom: 4,
  },
  botao: {
    alignSelf: 'flex-start',
    paddingVertical: 4,
    paddingHorizontal: 8,
    backgroundColor: '#52b788',
    borderRadius: 6,
  },
  textoBotao: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
});
