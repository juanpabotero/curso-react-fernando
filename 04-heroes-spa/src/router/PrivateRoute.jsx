import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../auth';

export const PrivateRoute = ({ children }) => {
  // acceder al contexto (debe ser un componente hijo del provider)
  const { logged } = useContext(AuthContext);
  // obtiene la información de la url actual
  const { pathname, search } = useLocation();

  const lastPath = pathname + search;
  localStorage.setItem('lastPath', lastPath);

  /* Navigate: navega a la ruta que le digamos */
  return logged ? children : <Navigate to="/login" />;
};
