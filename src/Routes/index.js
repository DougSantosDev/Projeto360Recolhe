// src/routes/index.js

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import { useUser } from '../context/UsarContext';

// Importando telas
import Welcome from '../Pages/Welcome';
import Escolha from '../Pages/Escolha';
import SignIn from '../Pages/SignIn';
import SignUp from '../Pages/SignUp';
import Configuracoes from '../Pages/configuracoes';
import Sobre from '../Pages/Sobre';
// DOADOR
import HomeDoador from '../Pages/Doador/Home';
import RecicladosDoador from '../Pages/Doador/Reciclados';
import NoticiasDoador from '../Pages/Doador/Noticias';
import AgendamentosDoador from '../Pages/Doador/Agendamentos';
import NovoAgendamento from '../Pages/Doador/Agendamentos/NovoAgendamentos';
import NoticiasDetalhes from '../Pages/Doador/Noticias/NoticiasDetalhes';
import MinhaContaDoador from '../Pages/Doador/minhaArea';

// COLETOR
import HomeColetor from '../Pages/Coletor/HomeColetor';
import RotasColetor from '../Pages/Coletor/RotasColetor';
import MetasColetor from '../Pages/Coletor/MetasColetor';
import AgendamentosColetor from '../Pages/Coletor/AgendamentoColetor';
import MinhaContaColetor from '../Pages/Doador/minhaArea'; // Ajuda pra exemplo, ajuste o caminho se mudar

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

// Drawer customizado com botão Sair
function CustomDrawerContent(props) {
  const { logout } = useUser();

  const handleLogout = () => {
    logout();
  };

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <View style={styles.logoutContainer}>
        <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
          <Text style={styles.logoutText}>Sair</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
}

// TabNavigator DOADOR com nomes únicos
function TabNavigatorDoador() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="HomeTabDoador"
        component={HomeDoador}
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="home" size={size} color={color} />,
          title: 'Início'
        }}
      />
      <Tab.Screen
        name="RecicladosTabDoador"
        component={RecicladosDoador}
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="trash-2" size={size} color={color} />,
          title: 'Reciclados'
        }}
      />
      <Tab.Screen
        name="NoticiasTabDoador"
        component={NoticiasDoador}
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="book-open" size={size} color={color} />,
          title: 'Notícias'
        }}
      />
      <Tab.Screen
        name="AgendamentosTabDoador"
        component={AgendamentosDoador}
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="mail" size={size} color={color} />,
          title: 'Agendamentos'
        }}
      />
    </Tab.Navigator>
  );
}

// TabNavigator COLETOR com nomes únicos
function TabNavigatorColetor() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="HomeTabColetor"
        component={HomeColetor}
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="home" size={size} color={color} />,
          title: 'Início'
        }}
      />
      <Tab.Screen
        name="RotasTabColetor"
        component={RotasColetor}
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="map" size={size} color={color} />,
          title: 'Rotas'
        }}
      />
      <Tab.Screen
        name="MetasTabColetor"
        component={MetasColetor}
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="target" size={size} color={color} />,
          title: 'Metas'
        }}
      />
      <Tab.Screen
        name="AgendamentosTabColetor"
        component={AgendamentosColetor}
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="calendar" size={size} color={color} />,
          title: 'Agendamentos'
        }}
      />
    </Tab.Navigator>
  );
}

// Drawer DOADOR com nomes únicos
function DrawerNavigatorDoador() {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: true }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="HomeDrawerDoador"
        component={TabNavigatorDoador}
        options={{ title: 'Principal' }}
      />
      <Drawer.Screen name="MinhaConta" component={MinhaContaDoador} options={{ title: 'Minha Conta' }} />
      <Drawer.Screen name="Configuracoes" component={Configuracoes} />
      <Drawer.Screen name="Sobre" component={Sobre} />
    </Drawer.Navigator>
  );
}

// Drawer COLETOR com nomes únicos
function DrawerNavigatorColetor() {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: true }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="HomeDrawerColetor"
        component={TabNavigatorColetor}
        options={{ title: 'Principal' }}
      />
      <Drawer.Screen name="MinhaConta" component={MinhaContaColetor} options={{ title: 'Minha Conta' }} />
      <Drawer.Screen name="Configuracoes" component={Configuracoes} />
      <Drawer.Screen name="Sobre" component={Sobre} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  logoutContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  logoutButton: {
    backgroundColor: '#d32f2f',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  logoutText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

// STACK PRINCIPAL COM NOMES ÚNICOS
export default function Routes() {
  const { signed, tipo } = useUser();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!signed ? (
        <>
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Escolha" component={Escolha} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </>
      ) : tipo === 'doador' ? (
        <Stack.Screen name="AppDoadorStack" component={DrawerNavigatorDoador} />
      ) : (
        <Stack.Screen name="AppColetorStack" component={DrawerNavigatorColetor} />
      )}
      <Stack.Screen name="NovoAgendamento" component={NovoAgendamento} />
      <Stack.Screen
        name="NoticiasDetalhes"
        component={NoticiasDetalhes}
        options={{ title: 'Detalhes da Notícia' }}
      />
    </Stack.Navigator>
  );
}
