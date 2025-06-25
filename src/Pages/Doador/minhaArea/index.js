import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useUser } from '../../../context/UsarContext';

export default function MinhaArea() {
  const { user, setUser } = useUser();
  const [editMode, setEditMode] = useState(false);

  // Cria estados locais para edição
  const [nome, setNome] = useState(user?.nome || '');
  const [email, setEmail] = useState(user?.email || '');
  const [telefone, setTelefone] = useState(user?.telefone || '');
  const [endereco, setEndereco] = useState(user?.endereco || '');

  const handleSalvar = async () => {
    try {
      setUser({ ...user, nome, email, telefone, endereco });
      setEditMode(false);
      Alert.alert('Sucesso', 'Dados atualizados com sucesso!');
    } catch (err) {
      Alert.alert('Erro', 'Não foi possível atualizar os dados.');
    }
  };

  return (
    <View style={styles.background}>
      <View style={styles.card}>
        <Text style={styles.titulo}>Minha Área</Text>
        {editMode ? (
          <>
            <Text style={styles.label}>Nome</Text>
            <TextInput style={styles.input} value={nome} onChangeText={setNome} placeholder="Nome" />
            <Text style={styles.label}>Email</Text>
            <TextInput style={styles.input} value={email} editable={false} />
            <Text style={styles.label}>Telefone</Text>
            <TextInput style={styles.input} value={telefone} onChangeText={setTelefone} placeholder="Telefone" />
            <Text style={styles.label}>Endereço</Text>
            <TextInput style={styles.input} value={endereco} onChangeText={setEndereco} placeholder="Endereço" />
            <TouchableOpacity style={styles.botao} onPress={handleSalvar}>
              <Text style={styles.textoBotao}>Salvar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelar} onPress={() => setEditMode(false)}>
              <Text style={styles.cancelarTexto}>Cancelar</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <View style={styles.infoBox}>
              <Text style={styles.infoLabel}>Nome:</Text>
              <Text style={styles.infoValue}>{nome}</Text>
            </View>
            <View style={styles.infoBox}>
              <Text style={styles.infoLabel}>Email:</Text>
              <Text style={styles.infoValue}>{email}</Text>
            </View>
            <View style={styles.infoBox}>
              <Text style={styles.infoLabel}>Telefone:</Text>
              <Text style={styles.infoValue}>{telefone}</Text>
            </View>
            <View style={styles.infoBox}>
              <Text style={styles.infoLabel}>Endereço:</Text>
              <Text style={styles.infoValue}>{endereco}</Text>
            </View>
            <TouchableOpacity style={styles.botao} onPress={() => setEditMode(true)}>
              <Text style={styles.textoBotao}>Editar Dados</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#fffacd', // cor de fundo padrão do app
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  card: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 25,
    padding: 28,
    elevation: 4,
    shadowColor: '#329845',
    shadowOpacity: 0.12,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 8 },
    marginVertical: 32,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#329845',
    textAlign: 'center',
    marginBottom: 26,
    letterSpacing: 0.6,
  },
  label: {
    fontSize: 17,
    color: '#329845',
    fontWeight: '600',
    marginBottom: 3,
    marginTop: 14,
  },
  input: {
    borderWidth: 1,
    borderColor: '#d6d6d6',
    borderRadius: 10,
    backgroundColor: '#fffacd',
    padding: 10,
    fontSize: 16,
    marginBottom: 6,
  },
  infoBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f6ffe7',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e2e8cf',
  },
  infoLabel: {
    color: '#329845',
    fontWeight: 'bold',
    width: 90,
    fontSize: 16,
  },
  infoValue: {
    color: '#444',
    fontSize: 16,
    flexShrink: 1,
  },
  botao: {
    backgroundColor: '#329845',
    borderRadius: 12,
    paddingVertical: 14,
    marginTop: 18,
    alignItems: 'center',
    elevation: 2,
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    letterSpacing: 0.5,
  },
  cancelar: {
    marginTop: 10,
    alignItems: 'center',
  },
  cancelarTexto: {
    color: '#d32f2f',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
