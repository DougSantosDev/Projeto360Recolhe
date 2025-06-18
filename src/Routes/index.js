import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import { useUser } from '../context/UsarContext';

import Welcome from '../Pages/Welcome';
import Escolha from '../Pages/Escolha';
import SignIn from '../Pages/SignIn';
import SignUp from '../Pages/SignUp';

// DOADOR
import Ingresso from '../Pages/Doador/Home';
import Loja from '../Pages/Doador/Reciclados';
import Notas from '../Pages/Doador/Noticias';
import Risada from '../Pages/Doador/Agendamentos';
import NovoAgendamento from '../Pages/Doador/Agendamentos/NovoAgendamentos';
import NoticiasDetalhes from '../Pages/Doador/Noticias/NoticiasDetalhes';

// COLETOR
import HomeColetor from '../Pages/Coletor/HomeColetor';
import RotasColetor from '../Pages/Coletor/RotasColetor';
import MetasColetor from '../Pages/Coletor/MetasColetor';
import AgendamentoColetor from '../Pages/Coletor/AgendamentoColetor';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

// TabNavigator DOADOR
function TabNavigatorDoador() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={Ingresso}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Reciclados"
        component={Loja}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="trash-2" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Noticias"
        component={Notas}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="book-open" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Agendamentos"
        component={Risada}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="mail" size={size} color={color} />
          ),
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
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Rotas"
        component={RotasColetor}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="map" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Metas"
        component={MetasColetor}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="target" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="AgendamentosColetor"
        component={AgendamentoColetor}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="calendar" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

// Drawer DOADOR
function DrawerNavigatorDoador() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="Meus Dados" component={TabNavigatorDoador} />
    </Drawer.Navigator>
  );
}

// Drawer COLETOR
function DrawerNavigatorColetor() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="HomeColetorTabs" component={TabNavigatorColetor} />
    </Drawer.Navigator>
  );
}

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
        <Stack.Screen name="NovoAgendamento" component={NovoAgendamento} />
         {/* Esta rota deve estar sempre acessível */}
  <Stack.Screen
    name="NoticiasDetalhes"
    component={NoticiasDetalhes}
    options={{ title: 'Detalhes da Notícia' }}
  />


    </Stack.Navigator>
  );
}
