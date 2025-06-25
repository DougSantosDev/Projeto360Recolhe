import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import { useUser } from '../context/UsarContext';

// Importando suas telas
import Welcome from '../Pages/Welcome';
import Escolha from '../Pages/Escolha';
import SignIn from '../Pages/SignIn';
import SignUp from '../Pages/SignUp';
import Configuracoes from '../Pages/configuracoes';
import Sobre from '../Pages/Sobre';
// DOADOR
import Ingresso from '../Pages/Doador/Home';
import Loja from '../Pages/Doador/Reciclados';
import Notas from '../Pages/Doador/Noticias';
import Risada from '../Pages/Doador/Agendamentos';
import NovoAgendamento from '../Pages/Doador/Agendamentos/NovoAgendamentos';
import NoticiasDetalhes from '../Pages/Doador/Noticias/NoticiasDetalhes';
import MinhaArea from '../Pages/Doador/minhaArea'; // <-- Aqui importa sua tela de perfil

// COLETOR
import HomeColetor from '../Pages/Coletor/HomeColetor';
import RotasColetor from '../Pages/Coletor/RotasColetor';
import MetasColetor from '../Pages/Coletor/MetasColetor';
import AgendamentoColetor from '../Pages/Coletor/AgendamentoColetor';

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

// TabNavigator DOADOR
function TabNavigatorDoador() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={Ingresso}
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="home" size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Reciclados"
        component={Loja}
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="trash-2" size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Noticias"
        component={Notas}
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="book-open" size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Agendamentos"
        component={Risada}
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="mail" size={size} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}

// TabNavigator COLETOR
function TabNavigatorColetor() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="HomeColetor"
        component={HomeColetor}
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="home" size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Rotas"
        component={RotasColetor}
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="map" size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Metas"
        component={MetasColetor}
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="target" size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="AgendamentosColetor"
        component={AgendamentoColetor}
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="calendar" size={size} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}

// Drawer DOADOR
function DrawerNavigatorDoador() {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: true }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={TabNavigatorDoador} options={{ title: 'Principal' }} />
      <Drawer.Screen name="Minha Conta" component={MinhaArea} />
      <Drawer.Screen name="Configurações" component={Configuracoes} />
      <Drawer.Screen name="Sobre" component={Sobre} />
    </Drawer.Navigator>
  );
}

// Drawer COLETOR
function DrawerNavigatorColetor() {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: true }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={TabNavigatorColetor} options={{ title: 'Principal' }} />
      <Drawer.Screen name="Minha Conta" component={MinhaArea} />
      <Drawer.Screen name="Configurações" component={Configuracoes} />
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

// STACK PRINCIPAL
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
        <Stack.Screen name="AppDoador" component={DrawerNavigatorDoador} />
      ) : (
        <Stack.Screen name="AppColetor" component={DrawerNavigatorColetor} />
      )}

      {/* Rotas acessíveis sempre */}
      <Stack.Screen name="NovoAgendamento" component={NovoAgendamento} />
      <Stack.Screen
        name="NoticiasDetalhes"
        component={NoticiasDetalhes}
        options={{ title: 'Detalhes da Notícia' }}
      />
    </Stack.Navigator>
  );
}
