import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useUser } from '../../context/UsarContext';

export default function SignUp({ navigation }) {
  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const { cadastrar } = useUser();

  const isValidEmail = (email) => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  };

  const handleRegister = async () => {
    if (!nome.trim() || !endereco.trim() || !telefone.trim() || !email.trim() || !password) {
      Alert.alert('Erro', 'Preencha todos os campos.');
      return;
    }

    if (!isValidEmail(email)) {
      Alert.alert('Erro', 'Digite um email válido.');
      return;
    }

    if (password.length < 6) {
      Alert.alert('Erro', 'A senha deve ter pelo menos 6 caracteres.');
      return;
    }

    try {
      setLoading(true);
      await cadastrar(email.trim(), password); // adapte para enviar os dados adicionais se necessário
      Alert.alert('Sucesso', 'Cadastro realizado com sucesso!');
      setNome('');
      setEndereco('');
      setTelefone('');
      setEmail('');
      setPassword('');
      navigation.navigate('SignIn');
    } catch (error) {
      Alert.alert('Erro', error.message || 'Erro ao cadastrar usuário.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: '#329845' }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
            <Text style={styles.message}>Crie sua Conta</Text>
          </Animatable.View>

          <Animatable.View animation="fadeInUp" style={styles.containerForm}>

            <Text style={styles.title}>Nome</Text>
            <TextInput
              placeholder="Nome Completo..."
              style={styles.input}
              autoCapitalize="words"
              autoCorrect={false}
              value={nome}
              onChangeText={setNome}
              returnKeyType="next"
            />

            <Text style={styles.title}>Endereço</Text>
            <TextInput
              placeholder="Rua, número, bairro..."
              style={styles.input}
              autoCapitalize="words"
              autoCorrect={false}
              value={endereco}
              onChangeText={setEndereco}
              returnKeyType="next"
            />

            <Text style={styles.title}>Telefone</Text>
            <TextInput
              placeholder="(11) 9****-****"
              style={styles.input}
              keyboardType="phone-pad"
              autoCapitalize="none"
              autoCorrect={false}
              value={telefone}
              onChangeText={setTelefone}
              returnKeyType="next"
            />

            <Text style={styles.title}>Email</Text>
            <TextInput
              placeholder="Digite um email..."
              style={styles.input}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              value={email}
              onChangeText={setEmail}
              returnKeyType="next"
            />

            <Text style={styles.title}>Senha</Text>
            <TextInput
              placeholder="Digite uma senha (mínimo 6 caracteres)..."
              style={styles.input}
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              returnKeyType="done"
              onSubmitEditing={handleRegister}
            />

            <TouchableOpacity
              style={[styles.button, loading && { backgroundColor: '#1a6b1a' }]}
              onPress={handleRegister}
              disabled={loading}
            >
              {loading ? (
                <ActivityIndicator size="small" color="#fff" />
              ) : (
                <Text style={styles.buttonText}>Cadastrar</Text>
              )}
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonRegister}
              onPress={() => navigation.navigate('SignIn')}
              disabled={loading}
            >
              <Text style={styles.registerText}>Já possui uma conta? Faça login</Text>
            </TouchableOpacity>
          </Animatable.View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#329845',
  },
  containerHeader: {
    marginTop: '14%',
    marginBottom: '8%',
    paddingStart: '5%',
  },
  message: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
  },
  containerForm: {
    flex: 1,
    backgroundColor: '#fffacd',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
    paddingBottom: 40,
  },
  title: {
    fontSize: 20,
    marginTop: 28,
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16,
    paddingHorizontal: 5,
  },
  button: {
    backgroundColor: '#329845',
    width: '100%',
    borderRadius: 4,
    paddingVertical: 12,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 18,
  },
  buttonRegister: {
    marginTop: 14,
    alignSelf: 'center',
  },
  registerText: {
    color: '#444',
  },
});
