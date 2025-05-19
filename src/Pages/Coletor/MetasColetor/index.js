import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  ProgressBarAndroid,
  ProgressViewIOS,
  Image,
} from 'react-native';

import { useUser } from '../../../context/UsarContext';
import Feather from 'react-native-vector-icons/Feather';

export default function MetasColetor() {
  const { coletasConfirmadas } = useUser();

  const nivel = coletasConfirmadas;
  const max = 10;
  const progresso = Math.min(nivel / max, 1);

  const getNivelTexto = () => {
    if (nivel === 0) return 'Iniciante';
    if (nivel < 5) return 'Confiável';
    if (nivel < 10) return 'Experiente';
    return 'Mestre da Reciclagem';
  };

  const getCorNivel = () => {
    if (nivel === 0) return '#999';
    if (nivel < 5) return '#6BA368';
    if (nivel < 10) return '#377B44';
    return '#FFD700';
  };

  const getIconeNivel = () => {
    if (nivel === 0) return <Feather name="user" size={50} color="#999" />;
    if (nivel < 5) return <Feather name="star" size={50} color="#6BA368" />;
    if (nivel < 10) return <Feather name="award" size={50} color="#377B44" />;
    return <Feather name="shield" size={50} color="#FFD700" />;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Suas Metas</Text>

      <View style={styles.seloContainer}>
        {getIconeNivel()}
        <Text style={[styles.nivel, { color: getCorNivel() }]}>
          {getNivelTexto()}
        </Text>
      </View>

      <Text style={styles.contador}>Coletas confirmadas: {nivel} / {max}</Text>

      {Platform.OS === 'android' ? (
        <ProgressBarAndroid
          styleAttr="Horizontal"
          indeterminate={false}
          progress={progresso}
          color={getCorNivel()}
          style={styles.barra}
        />
      ) : (
        <ProgressViewIOS
          progress={progresso}
          trackTintColor="#ccc"
          progressTintColor={getCorNivel()}
          style={styles.barra}
        />
      )}

      <Text style={styles.textoMeta}>
        Faça mais coletas para alcançar o próximo nível e mostrar seu impacto na reciclagem!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffacd',
    padding: 24,
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#329845',
    textAlign: 'center',
  },
  seloContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  nivel: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  contador: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#555',
  },
  barra: {
    height: 20,
    borderRadius: 10,
    marginHorizontal: 10,
    marginBottom: 20,
  },
  textoMeta: {
    textAlign: 'center',
    fontSize: 14,
    color: '#555',
    marginTop: 10,
  },
});
