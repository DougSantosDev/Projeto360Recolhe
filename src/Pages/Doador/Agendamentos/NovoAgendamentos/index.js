import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Alert } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

export default function NovoAgendamento() {
  const route = useRoute();
  const navigation = useNavigation();
  const { materiais } = route.params || { materiais: [] };

  const confirmarEnvio = () => {
    Alert.alert('Sucesso!', 'Seu agendamento foi enviado com sucesso!');
    navigation.goBack(); // Ou navegue para outra tela principal se quiser
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image
        source={
          // Se for require (número), usa direto. Se for string ou {uri}, converte!
          typeof item.imagem === 'number'
            ? item.imagem
            : typeof item.imagem === 'string'
              ? { uri: item.imagem }
              : item.imagem // cobre o caso de {uri:...}
        }
        style={styles.imagem}
        resizeMode="contain"
      />
      <View style={styles.info}>
        <Text style={styles.nome}>{item.nome}</Text>
        <Text style={styles.quantidade}>{item.quantidade} kg</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>📝 Detalhes do Agendamento</Text>

      <FlatList
        data={materiais}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
      />

      <TouchableOpacity style={styles.botao} onPress={confirmarEnvio}>
        <Icon name="send" size={20} color="#fff" />
        <Text style={styles.textoBotao}>Enviar Agendamento</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 50,
    backgroundColor: '#fffacd',
    padding: 20,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2d6a4f',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
    elevation: 2,
  },
  imagem: {
    width: 50,
    height: 50,
    marginRight: 16,
    resizeMode: 'contain',
  },
  info: {
    flex: 1,
  },
  nome: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1b4332',
  },
  quantidade: {
    fontSize: 14,
    color: '#4c6e54',
    marginTop: 4,
  },
  botao: {
    backgroundColor: '#40916c',
    paddingVertical: 24,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  textoBotao: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
    marginLeft: 8,
  },
});
