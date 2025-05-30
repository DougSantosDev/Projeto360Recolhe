import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Animated,
  Dimensions,
  FlatList,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { LineChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

const conquistas = [
  { id: '1', title: 'Bronze', description: 'Reciclou 10kg', icon: require('../../../../assets/image/download.png') },
  { id: '2', title: 'Prata', description: 'Reciclou 20kg', icon: require('../../../../assets/image/download.png') },
  { id: '3', title: 'Ouro', description: 'Reciclou 30kg', icon: require('../../../../assets/image/download.png') },
];

export default function HomeDoador() {
  const navigation = useNavigation();

  // Animated progress bar value (0 to 1)
  const progress = useRef(new Animated.Value(0)).current;
  const progressPercent = 0.83; // 83% da meta

  useEffect(() => {
    Animated.timing(progress, {
      toValue: progressPercent,
      duration: 1500,
      useNativeDriver: false,
    }).start();
  }, []);

  const progressWidth = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>👋 Olá, Doador!</Text>
        <Text style={styles.subheader}>Veja seu impacto e continue fazendo a diferença 🌱</Text>

        {/* Impacto com barra animada */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>🌍 Seu impacto</Text>
          <Text style={styles.impactText}>
            Você já reciclou <Text style={styles.bold}>25kg</Text> de materiais!
          </Text>
          <View style={styles.progressBar}>
            <Animated.View style={[styles.progressFill, { width: progressWidth }]} />
          </View>
          <Text style={styles.meta}>Meta: 30kg (83%)</Text>
        </View>

        {/* Gráfico da evolução */}
        <View style={[styles.card, { paddingBottom: 0 }]}>
          <Text style={styles.cardTitle}>📈 Evolução semanal</Text>
          <LineChart
            data={{
              labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
              datasets: [
                {
                  data: [2, 3, 4, 5, 6, 5, 7],
                  color: (opacity = 1) => `rgba(82, 183, 136, ${opacity})`, // cor da linha
                  strokeWidth: 3,
                },
              ],
            }}
            width={screenWidth - 60} // largura do gráfico
            height={160}
            chartConfig={{
              backgroundColor: '#f2fdf2',
              backgroundGradientFrom: '#f2fdf2',
              backgroundGradientTo: '#f2fdf2',
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(52, 102, 67, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(76, 110, 84, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: '5',
                strokeWidth: '2',
                stroke: '#52b788',
              },
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
          />
        </View>

        {/* Dica do dia */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>💡 Dica do dia</Text>
          <Text style={styles.tipText}>
            1 tonelada de papel reciclado pode salvar até 20 árvores! 🌳
          </Text>
        </View>

        {/* Última coleta */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>📦 Última coleta</Text>
          <Text style={styles.coletaText}>Confirmada para 25/04: Plástico e papel</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Agendamentos')}>
            <Icon name="calendar" size={18} color="#fff" />
            <Text style={styles.buttonText}>Ver detalhes</Text>
          </TouchableOpacity>
        </View>

        {/* Seção de conquistas */}
        <View style={[styles.card, { paddingBottom: 12 }]}>
          <Text style={styles.cardTitle}>🏅 Conquistas</Text>
          <FlatList
            data={conquistas}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingVertical: 10 }}
            renderItem={({ item }) => (
              <View style={styles.badgeCard}>
                <Image source={item.icon} style={styles.badgeIcon} />
                <Text style={styles.badgeTitle}>{item.title}</Text>
                <Text style={styles.badgeDesc}>{item.description}</Text>
              </View>
            )}
          />
        </View>

        {/* Botão para agendar */}
        <TouchableOpacity
          style={styles.bigButton}
          onPress={() => navigation.navigate('NovoAgendamento')}>
          <Icon name="plus-circle" size={20} color="#fff" />
          <Text style={styles.bigButtonText}>Agendar nova coleta</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#f2fdf2',
  },
  container: {
    padding: 20,
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: '700',
    marginTop: 20,
    marginBottom: 6,
    color: '#1b4332',
    textAlign: 'center',
  },
  subheader: {
    fontSize: 14,
    color: '#4c6e54',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 18,
    width: '100%',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
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
    color: '#333',
  },
  progressBar: {
    height: 10,
    backgroundColor: '#d8f3dc',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 4,
  },
  progressFill: {
    backgroundColor: '#52b788',
    height: '100%',
    width: '0%', // inicializado animado
  },
  meta: {
    fontSize: 13,
    color: '#6c757d',
  },
  tipText: {
    fontSize: 15,
    color: '#333',
  },
  coletaText: {
    fontSize: 16,
    marginBottom: 10,
    color: '#333',
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
    width: '100%',
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
  badgeCard: {
    backgroundColor: '#e6f0e8',
    borderRadius: 12,
    padding: 14,
    marginRight: 16,
    alignItems: 'center',
    width: 120,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
    elevation: 2,
  },
  badgeIcon: {
    width: 48,
    height: 48,
    marginBottom: 8,
    resizeMode: 'contain',
  },
  badgeTitle: {
    fontWeight: '700',
    color: '#2d6a4f',
    marginBottom: 4,
  },
  badgeDesc: {
    fontSize: 12,
    color: '#4c6e54',
    textAlign: 'center',
  },
});
