import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Switch,
  TextInput,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const materiaisIniciais = [
  { id: '1', nome: 'Papel', imagem: 'https://cdn-icons-png.flaticon.com/512/1042/1042349.png', selecionado: false, quantidade: '0'  },
  { id: '2', nome: 'Plástico', imagem: 'https://cdn-icons-png.flaticon.com/512/679/679720.png', selecionado: false, quantidade: '0' },
  { id: '3', nome: 'Vidro', imagem: 'https://cdn-icons-png.flaticon.com/512/1042/1042360.png', selecionado: false, quantidade: '0' },
  { id: '4', nome: 'Metal', imagem: 'https://cdn-icons-png.flaticon.com/512/1995/1995608.png', selecionado: false, quantidade: '0' },
  { id: '5', nome: 'Eletrônicos', imagem: 'https://cdn-icons-png.flaticon.com/512/4281/4281693.png', selecionado: false, quantidade: '0' },
  { id: '6', nome: 'Baterias', imagem: 'https://cdn-icons-png.flaticon.com/512/3208/3208728.png', selecionado: false, quantidade: '0' },
];

export default function RecicladosDoador() {
  const navigation = useNavigation();
  const [materiais, setMateriais] = useState(materiaisIniciais);

  const atualizarItem = (id, campo, valor) => {
    const atualizados = materiais.map((item) =>
      item.id === id ? { ...item, [campo]: valor } : item
    );
    setMateriais(atualizados);
  };

  const confirmarAgendamento = () => {
    const selecionados = materiais.filter((item) => item.selecionado);
    navigation.navigate('NovoAgendamento', { agendamento: selecionados });
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.imagem }} style={styles.imagem} />
      <Text style={styles.nome}>{item.nome}</Text>

      <Switch
        value={item.selecionado}
        onValueChange={(valor) => atualizarItem(item.id, 'selecionado', valor)}
      />

      {item.selecionado && (
        <TextInput
          style={styles.input}
          placeholder="Quantidade (kg)"
          keyboardType="numeric"
          value={item.quantidade}
          onChangeText={(texto) => atualizarItem(item.id, 'quantidade', texto)}
        />
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Selecione os materiais e informe a quantidade:</Text>

      <FlatList
        data={materiais}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.linha}
        contentContainerStyle={{ paddingBottom: 100 }}
        ListFooterComponent={
          <TouchableOpacity style={styles.botaoAgendar} onPress={confirmarAgendamento}>
            <Text style={styles.textoBotao}>Confirmar Agendamento</Text>
          </TouchableOpacity>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffacd',
    padding: 20,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#329845',
    marginBottom: 15,
    textAlign: 'center',
  },
  linha: {
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#e0ffe0',
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
    width: (Dimensions.get('window').width - 60) / 2,
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
    marginBottom: 5,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 6,
    marginTop: 8,
    textAlign: 'center',
  },
  botaoAgendar: {
    backgroundColor: '#217a31',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
