import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
  Linking,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { useUser } from '../../../context/UsarContext';

export default function RotasColetor() {
  const [rotas, setRotas] = useState([
    {
      id: '1',
      endereco: 'Rua das Flores, 123 - Bairro Verde',
      confirmado: false,
      data: '28/04',
      hora: '10:00',
    },
    {
      id: '2',
      endereco: 'Avenida Brasil, 456 - Centro',
      confirmado: false,
      data: '28/04',
      hora: '14:00',
    },
    {
      id: '3',
      endereco: 'Travessa da Paz, 789 - Jardim Azul',
      confirmado: false,
      data: '29/04',
      hora: '09:00',
    },
  ]);

  const [mostrarConfirmadas, setMostrarConfirmadas] = useState(false);

  const { coletasConfirmadas, setColetasConfirmadas } = useUser();

  const confirmarColeta = (id) => {
    setRotas((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, confirmado: true } : item
      )
    );
    setColetasConfirmadas(coletasConfirmadas + 1);
    Alert.alert('Confirmado', 'Coleta confirmada com sucesso!');
  };

  const verNoMapa = (endereco) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(endereco)}`;
    Linking.openURL(url);
  };

  const filtradas = rotas.filter((r) => r.confirmado === mostrarConfirmadas);

  const renderItem = ({ item }) => (
    <View style={[styles.item, item.confirmado && styles.itemConfirmado]}>
      <Text style={styles.endereco}>{item.endereco}</Text>
      <Text style={styles.dataHora}>
        Agendado para: {item.data} às {item.hora}
      </Text>

      <TouchableOpacity
        onPress={() => verNoMapa(item.endereco)}
        style={styles.mapaBotao}
      >
        <Feather name="map-pin" size={16} color="#329845" />
        <Text style={styles.mapaTexto}>Ver no mapa</Text>
      </TouchableOpacity>

      {!item.confirmado ? (
        <TouchableOpacity
          style={styles.botao}
          onPress={() => confirmarColeta(item.id)}
        >
          <Feather name="check-circle" size={20} color="#fff" />
          <Text style={styles.textoBotao}>Confirmar</Text>
        </TouchableOpacity>
      ) : (
        <Text style={styles.confirmado}>✔ Coleta feita</Text>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Rotas de Coleta</Text>

      <View style={styles.filtros}>
        <TouchableOpacity
          style={[
            styles.filtroBotao,
            !mostrarConfirmadas && styles.filtroAtivo,
          ]}
          onPress={() => setMostrarConfirmadas(false)}
        >
          <Text>Pendentes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.filtroBotao,
            mostrarConfirmadas && styles.filtroAtivo,
          ]}
          onPress={() => setMostrarConfirmadas(true)}
        >
          <Text>Confirmadas</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={filtradas}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListEmptyComponent={
          <Text style={{ textAlign: 'center', marginTop: 30 }}>
            Nenhuma rota {mostrarConfirmadas ? 'confirmada' : 'pendente'}.
          </Text>
        }
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
    marginBottom: 10,
    color: '#329845',
  },
  filtros: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 15,
  },
  filtroBotao: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginHorizontal: 5,
    backgroundColor: '#eee',
  },
  filtroAtivo: {
    backgroundColor: '#c0efc0',
  },
  item: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  itemConfirmado: {
    backgroundColor: '#e6ffe6',
    borderColor: '#329845',
  },
  endereco: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  dataHora: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  mapaBotao: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  mapaTexto: {
    marginLeft: 6,
    color: '#329845',
    fontWeight: 'bold',
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
    marginLeft: 8,
  },
  confirmado: {
    color: '#329845',
    fontWeight: 'bold',
    marginTop: 5,
  },
});
