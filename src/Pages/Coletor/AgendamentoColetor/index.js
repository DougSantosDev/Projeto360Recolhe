import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

export default function AgendamentosColetor() {
  const [agendamentos, setAgendamentos] = useState([
    {
      id: '1',
      nome: 'João da Silva',
      endereco: 'Rua das Palmeiras, 321 - Bairro Novo',
      data: '29/04/2025',
      horario: '14:00',
      concluido: false,
      materiais: [
        { tipo: 'Papelão', peso: '3kg' },
        { tipo: 'Plástico', peso: '2kg' },
      ],
    },
    {
      id: '2',
      nome: 'Maria Oliveira',
      endereco: 'Av. Central, 765 - Centro',
      data: '30/04/2025',
      horario: '09:30',
      concluido: false,
      materiais: [
        { tipo: 'Vidro', peso: '5kg' },
        { tipo: 'Metal', peso: '1.5kg' },
      ],
    },
  ]);

  const marcarComoConcluido = (id) => {
    setAgendamentos((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, concluido: true } : item
      )
    );
    Alert.alert('Sucesso', 'Agendamento marcado como concluído!');
  };

  const renderMateriais = (materiais) =>
    materiais.map((m, index) => (
      <Text key={index} style={styles.material}>
        • {m.tipo} — {m.peso}
      </Text>
    ));

  const renderItem = ({ item }) => (
    <View style={[styles.item, item.concluido && styles.itemConcluido]}>
      <View style={styles.info}>
        <Text style={styles.nome}>{item.nome}</Text>
        <Text style={styles.texto}>{item.endereco}</Text>
        <Text style={styles.texto}>
          Data: {item.data} - {item.horario}
        </Text>
        <Text style={styles.subtitulo}>Materiais:</Text>
        {renderMateriais(item.materiais)}
      </View>
      {!item.concluido ? (
        <TouchableOpacity
          style={styles.botao}
          onPress={() => marcarComoConcluido(item.id)}
        >
          <Feather name="check" size={20} color="#fff" />
          <Text style={styles.textoBotao}>Concluir</Text>
        </TouchableOpacity>
      ) : (
        <Text style={styles.concluido}>✔ Concluído</Text>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Agendamentos</Text>
      <FlatList
        data={agendamentos}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
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
    fontSize: 24,
    fontWeight: 'bold',
    color: '#329845',
    marginBottom: 20,
    textAlign: 'center',
  },
  item: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  itemConcluido: {
    backgroundColor: '#e0ffe0',
    borderColor: '#329845',
  },
  info: {
    marginBottom: 10,
  },
  nome: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  texto: {
    fontSize: 14,
    color: '#555',
  },
  subtitulo: {
    marginTop: 8,
    fontWeight: 'bold',
    color: '#444',
  },
  material: {
    fontSize: 14,
    color: '#444',
    marginLeft: 10,
  },
  botao: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#329845',
    padding: 8,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 6,
  },
  concluido: {
    color: '#329845',
    fontWeight: 'bold',
  },
});
