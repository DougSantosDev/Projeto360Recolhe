import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const materiaisReciclaveis = [
  { id: '1', nome: 'Papel', imagem: 'https://cdn-icons-png.flaticon.com/512/1042/1042349.png' },
  { id: '2', nome: 'Plástico', imagem: 'https://cdn-icons-png.flaticon.com/512/679/679720.png' },
  { id: '3', nome: 'Vidro', imagem: 'https://cdn-icons-png.flaticon.com/512/1042/1042360.png' },
  { id: '4', nome: 'Metal', imagem: 'https://cdn-icons-png.flaticon.com/512/1995/1995608.png' },
  { id: '5', nome: 'Eletrônicos', imagem: 'https://cdn-icons-png.flaticon.com/512/4281/4281693.png' },
  { id: '6', nome: 'Baterias', imagem: 'https://cdn-icons-png.flaticon.com/512/3208/3208728.png' },
];

export default function RecicladosDoador() {
  const navigation = useNavigation();

  const abrirNovoAgendamento = () => {
    navigation.navigate('NovoAgendamento');
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.imagem }} style={styles.imagem} />
      <Text style={styles.nome}>{item.nome}</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Materiais que você pode reciclar:</Text>

      <FlatList
        data={materiaisReciclaveis}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.linha}
        scrollEnabled={false}
      />

      <TouchableOpacity style={styles.botaoAgendar} onPress={abrirNovoAgendamento}>
        <Text style={styles.textoBotao}>Agendar Coleta</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffacd',
    padding: 20,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#329845',
    marginBottom: 20,
  },
  linha: {
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#e0ffe0',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    width: (Dimensions.get('window').width - 60) / 2, // duas colunas com margem
  },
  imagem: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  nome: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  botaoAgendar: {
    backgroundColor: '#217a31',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 30,
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
