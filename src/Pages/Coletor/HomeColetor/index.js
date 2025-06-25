import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

export default function HomeColetor() {
  const navigation = useNavigation();

  const agendamentos = [
    {
      id: '1',
      nome: 'João da Silva',
      endereco: 'Rua das Palmeiras, 321 - Bairro Novo',
      data: '29/04/2025',
      horario: '14:00',
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
      materiais: [
        { tipo: 'Vidro', peso: '5kg' },
        { tipo: 'Metal', peso: '1.5kg' },
      ],
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Bem-vindo de volta, Coletor!</Text>

      {/* Impacto ambiental */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>🌱 Seu impacto</Text>
        <Text style={styles.impactText}>
          Você já reciclou <Text style={styles.bold}>25kg</Text> de materiais!
        </Text>
        <View style={styles.progressBar}>
          <View style={styles.progressFill} />
        </View>
        <Text style={styles.meta}>Meta: 30kg</Text>
      </View>

      {/* Dica do dia */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>💡 Dica do dia</Text>
        <Text style={styles.tipText}>
          Você sabia que 1 tonelada de papel reciclado economiza até 20 árvores?
        </Text>
      </View>

      {/* Últimas coletas */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>🗓 Últimas coletas agendadas</Text>

        {agendamentos.map((item) => (
          <View key={item.id} style={{ marginBottom: 12 }}>
            <Text style={styles.agendamentoTexto}>
              📍 {item.endereco}
            </Text>
            <Text style={styles.agendamentoTexto}>
              🗓 {item.data} - {item.horario}
            </Text>
            <Text style={styles.agendamentoTexto}>
              ♻️ Materiais: {item.materiais.map(m => `${m.tipo} (${m.peso})`).join(', ')}
            </Text>
          </View>
        ))}

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('AgendamentosTabColetor')}
        >
          <Icon name="calendar" size={18} color="#fff" />
          <Text style={styles.buttonText}>Ver detalhes</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2fdf2',
    paddingVertical: 50,
    padding: 16,
  },
  header: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 30,
    color: '#2d6a4f',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#40916c',
    marginBottom: 8,
  },
  impactText: {
    fontSize: 16,
    marginBottom: 10,
  },
  progressBar: {
    height: 10,
    backgroundColor: '#d8f3dc',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 4,
  },
  progressFill: {
    width: '83%', // exemplo: 25kg de 30kg
    backgroundColor: '#52b788',
    height: '100%',
  },
  meta: {
    fontSize: 12,
    color: '#6c757d',
  },
  tipText: {
    fontSize: 15,
    color: '#333',
  },
  coletaText: {
    fontSize: 16,
    marginBottom: 10,
  },
  agendamentoTexto: {
    fontSize: 14,
    color: '#333',
    marginBottom: 2,
  },
  button: {
    backgroundColor: '#40916c',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    marginLeft: 8,
    fontWeight: '600',
  },
  bold: {
    fontWeight: 'bold',
    color: '#2d6a4f',
  },
});
