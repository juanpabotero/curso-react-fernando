import { useReducer } from 'react';
import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';

import { types } from '../types/types';

// const initialState = {
//     logged: false,
// }

const init = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return {
    logged: !!user,
    user: user,
  };
};

/* provee información a todos los componentes hijos que se 
encuentren dentro de él */
export const AuthProvider = ({ children }) => {
  // useReducer: hook que permite manejar un estado y regresar un nuevo estado
  // recibe el reducer, el estado inicial y una función para inicializar el estado
  const [authState, dispatch] = useReducer(authReducer, {}, init);

  const login = (name = '') => {
    const user = { id: 'ABC', name };
    const action = { type: types.login, payload: user };

    localStorage.setItem('user', JSON.stringify(user));

    dispatch(action);
  };

  const logout = () => {
    localStorage.removeItem('user');
    const action = { type: types.logout };
    dispatch(action);
  };

  return (
    // provee la información
    // value: valor que se desea proveer a los componentes hijos
    <AuthContext.Provider
      value={{
        ...authState,

        // Methods
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
