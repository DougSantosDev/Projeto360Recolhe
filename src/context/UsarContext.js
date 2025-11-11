import React, { createContext, useContext, useState } from 'react';

// Cria o contexto
const UserContext = createContext();

// Provider que envolve sua aplicação
export const UserProvider = ({ children }) => {
  const [tipo, setTipo] = useState(null); // 'doador' ou 'coletor'
  const [signed, setSigned] = useState(false); // usuário logado ou não
  const [coletasConfirmadas, setColetasConfirmadas] = useState(0); // número de coletas feitas

  // Função de login
  const login = (perfil) => {
    setTipo(perfil);
    setSigned(true);
  };

  // Função de logout
  const logout = () => {
    setTipo(null);
    setSigned(false);
    setColetasConfirmadas(0); // zera metas ao sair
  };

  return (
    <UserContext.Provider
      value={{
        tipo,
        setTipo,
        signed,
        login,
        logout,
        coletasConfirmadas,
        setColetasConfirmadas,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

// Hook seguro para usar o contexto
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser deve ser usado dentro de um <UserProvider>');
  }
  return context;
};
