// src/Pages/Doador/Agendamentos/index.js

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const agendamentosFicticios = [
  {
    id: '1',
    material: 'Plástico e papelão',
    data: '10/05/2025 às 14h',
    status: 'Pendente',
  },
  {
    id: '2',
    material: 'Vidro',
    data: '08/05/2025 às 10h',
    status: 'Confirmado',
  },
  {
    id: '3',
    material: 'Metal e eletrônico',
    data: '02/05/2025 às 16h',
    status: 'Concluído',
  },
];

export default function Agendamentos() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>📅 Meus Agendamentos</Text>

      <FlatList
        data={agendamentosFicticios}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.material}>{item.material}</Text>
            <Text style={styles.data}>{item.data}</Text>
            <View style={[styles.status, getStatusStyle(item.status)]}>
              <Text style={styles.statusTexto}>{item.status}</Text>
            </View>
          </View>
        )}
        ListFooterComponent={
          <TouchableOpacity
            style={styles.botaoNovo}
            onPress={() => navigation.navigate('Reciclados')}>
            <Text style={styles.textoBotaoNovo}>+ Novo Agendamento</Text>
          </TouchableOpacity>
        }
      />
    </View>
  );
}

const getStatusStyle = (status) => {
  switch (status) {
    case 'Pendente':
      return { backgroundColor: '#f4a261' };
    case 'Confirmado':
      return { backgroundColor: '#2a9d8f' };
    case 'Concluído':
      return { backgroundColor: '#264653' };
    default:
      return { backgroundColor: '#ccc' };
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 50,
    backgroundColor: '#fffacd',
    padding: 16,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2d6a4f',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
    elevation: 2,
  },
  material: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1b4332',
  },
  data: {
    fontSize: 14,
    color: '#555',
    marginVertical: 4,
  },
  status: {
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    marginTop: 6,
  },
  statusTexto: {
    color: '#fff',
    fontWeight: '600',
  },
  botaoNovo: {
    marginTop: 24,
    backgroundColor: '#40916c',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  textoBotaoNovo: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
