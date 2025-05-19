import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function NovoAgendamento() {
  const navigation = useNavigation();

  const [material, setMaterial] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [dataHora, setDataHora] = useState('');

  const agendar = () => {
    if (!material || !quantidade || !dataHora) {
      Alert.alert('Erro', 'Preencha todos os campos.');
      return;
    }

    // Simulação de envio do agendamento
    Alert.alert('Sucesso', 'Agendamento realizado com sucesso!');
    navigation.goBack(); // volta para a lista de agendamentos
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>🗓️ Novo Agendamento</Text>

      <Text style={styles.label}>Material reciclável</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: Papelão, Plástico, Vidro"
        value={material}
        onChangeText={setMaterial}
      />

      <Text style={styles.label}>Quantidade (kg)</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: 5"
        value={quantidade}
        onChangeText={setQuantidade}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Data e hora</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: 12/05/2025 às 14h"
        value={dataHora}
        onChangeText={setDataHora}
      />

      <TouchableOpacity style={styles.botao} onPress={agendar}>
        <Text style={styles.textoBotao}>Confirmar Agendamento</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9fefb',
    flex: 1,
    padding: 20,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2d6a4f',
    marginBottom: 24,
  },
  label: {
    fontSize: 16,
    color: '#1b4332',
    marginBottom: 6,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 15,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  botao: {
    backgroundColor: '#52b788',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  textoBotao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
