import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const noticias = [
  {
    id: '1',
    titulo: 'Brasil bate recorde de reciclagem de alumínio',
    descricao:
      'Mais de 98% das latinhas foram recicladas em 2024, colocando o país como líder mundial.',
    imagem: require('../../../../assets/image/lata.jpeg'),
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
  const largura = Dimensions.get('window').width;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>🗞️ Notícias Recentes</Text>

      <View style={styles.destaque}>
        <Image
          source={
            typeof noticias[0].imagem === 'number'
              ? noticias[0].imagem
              : { uri: noticias[0].imagem }
          }
          style={styles.imagemDestaque}
        />
        <View style={styles.textoDestaque}>
          <Text style={styles.tituloDestaque}>{noticias[0].titulo}</Text>
          <Text style={styles.descricaoDestaque}>{noticias[0].descricao}</Text>
          <TouchableOpacity
            style={styles.botao}
            onPress={() => navigation.navigate('NoticiasDetalhes', noticias[0])}
          >
            <Text style={styles.textoBotao}>Ler mais</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.subtitulo}>Outras notícias</Text>

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
              style={styles.imagemMini}
            />
            <View style={styles.info}>
              <Text style={styles.tituloMini}>{item.titulo}</Text>
              <Text style={styles.descricaoMini}>{item.descricao}</Text>
              <TouchableOpacity
                style={styles.botaoMini}
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
    backgroundColor: '#fff',
    paddingVertical: 32,
    paddingHorizontal: 16,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2d6a4f',
    marginBottom: 20,
    textAlign: 'center',
  },
  destaque: {
    backgroundColor: '#e8f7ee',
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 30,
  },
  imagemDestaque: {
    width: '100%',
    height: 200,
  },
  textoDestaque: {
    padding: 16,
  },
  tituloDestaque: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1b4332',
    marginBottom: 6,
  },
  descricaoDestaque: {
    fontSize: 15,
    color: '#444',
    marginBottom: 10,
  },
  botao: {
    backgroundColor: '#40916c',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
  textoBotao: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2d6a4f',
    marginBottom: 10,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 10,
    marginBottom: 16,
    elevation: 1,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
  },
  imagemMini: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 10,
  },
  info: {
    flex: 1,
    justifyContent: 'center',
  },
  tituloMini: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1b4332',
  },
  descricaoMini: {
    fontSize: 13,
    color: '#555',
    marginVertical: 4,
  },
  botaoMini: {
    alignSelf: 'flex-start',
    backgroundColor: '#52b788',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 6,
  },
});
