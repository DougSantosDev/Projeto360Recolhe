import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Switch, StyleSheet, Alert, ScrollView } from 'react-native';

export default function Configuracoes() {
  const [notificacoes, setNotificacoes] = useState(true);
  const [temaEscuro, setTemaEscuro] = useState(false);

  // Simule função de alteração de senha
  const alterarSenha = () => {
    Alert.alert('Futuro', 'Em breve será possível alterar a senha pelo app!');
  };

  // Simule função de suporte/ajuda
  const suporte = () => {
    Alert.alert('Ajuda & Suporte', 'Fale conosco pelo WhatsApp (xx) xxxxx-xxxx');
  };

  // Simule leitura dos termos
  const politica = () => {
    Alert.alert('Política de Privacidade', 'Em breve: link para política ou termos de uso.');
  };

  // Simule envio de feedback
  const feedback = () => {
    Alert.alert('Feedback', 'Manda sua ideia! (Em breve formulário)');
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#fffacd' }} contentContainerStyle={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={styles.card}>
        <Text style={styles.titulo}>Configurações</Text>
        
        {/* Preferências */}
        <View style={styles.secao}>
          <Text style={styles.secaoTitulo}>Preferências</Text>
          <View style={styles.item}>
            <Text style={styles.label}>Notificações</Text>
            <Switch value={notificacoes} onValueChange={setNotificacoes} />
          </View>
          <View style={styles.item}>
            <Text style={styles.label}>Tema Escuro</Text>
            <Switch value={temaEscuro} onValueChange={setTemaEscuro} />
          </View>
        </View>

        {/* Segurança */}
        <View style={styles.secao}>
          <Text style={styles.secaoTitulo}>Segurança</Text>
          <TouchableOpacity style={styles.botao} onPress={alterarSenha}>
            <Text style={styles.textoBotao}>Alterar Senha</Text>
          </TouchableOpacity>
        </View>

        {/* Suporte */}
        <View style={styles.secao}>
          <Text style={styles.secaoTitulo}>Ajuda & Suporte</Text>
          <TouchableOpacity style={styles.botaoSecundario} onPress={suporte}>
            <Text style={styles.textoBotaoSecundario}>Falar com suporte</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botaoSecundario} onPress={feedback}>
            <Text style={styles.textoBotaoSecundario}>Enviar feedback</Text>
          </TouchableOpacity>
        </View>

        {/* Legal */}
        <View style={styles.secao}>
          <Text style={styles.secaoTitulo}>Legal</Text>
          <TouchableOpacity style={styles.botaoSecundario} onPress={politica}>
            <Text style={styles.textoBotaoSecundario}>Política de Privacidade</Text>
          </TouchableOpacity>
        </View>

        {/* Versão */}
        <Text style={styles.versao}>Versão 1.0.0</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '96%',
    backgroundColor: '#fff',
    borderRadius: 25,
    padding: 28,
    elevation: 4,
    marginVertical: 32,
    alignSelf: 'center'
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#329845',
    textAlign: 'center',
    marginBottom: 24,
  },
  secao: {
    marginTop: 18,
    marginBottom: 10,
  },
  secaoTitulo: {
    fontSize: 17,
    color: '#b9b600',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
    paddingHorizontal: 2,
  },
  label: {
    fontSize: 17,
    color: '#444',
  },
  botao: {
    backgroundColor: '#329845',
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 14,
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 17,
  },
  botaoSecundario: {
    backgroundColor: '#e9e9e9',
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  textoBotaoSecundario: {
    color: '#329845',
    fontWeight: 'bold',
    fontSize: 16,
  },
  versao: {
    marginTop: 28,
    color: '#ccc',
    textAlign: 'center',
    fontSize: 14,
  },
});
