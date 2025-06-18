import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default function HomeColetor() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Bem-vindo de volta, Coletor!</Text>

      {/* Impacto ambiental */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>🌱 Seu impacto</Text>
        <Text style={styles.impactText}>Você já reciclou <Text style={styles.bold}>25kg</Text> de materiais!</Text>
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

      {/* Última coleta */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>🗓 Última coleta</Text>
        <Text style={styles.coletaText}>Confirmada para 25/04 - Plástico e papel</Text>
        <TouchableOpacity style={styles.button}>
          <Icon name="calendar" size={18} color="#fff" />
          <Text style={styles.buttonText}>Ver detalhes</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    //   {/* Botão de nova coleta */}
    //   <TouchableOpacity style={styles.bigButton}>
    //     <Icon name="plus-circle" size={20} color="#fff" />
    //     <Text style={styles.bigButtonText}>Agendar nova coleta</Text>
    //   </TouchableOpacity>
    // </ScrollView>
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
  button: {
    backgroundColor: '#40916c',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    marginLeft: 8,
    fontWeight: '600',
  },
  bigButton: {
    backgroundColor: '#2d6a4f',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    borderRadius: 14,
    marginTop: 10,
    marginBottom: 30,
  },
  bigButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
    marginLeft: 8,
  },
  bold: {
    fontWeight: 'bold',
    color: '#2d6a4f',
  },
});
