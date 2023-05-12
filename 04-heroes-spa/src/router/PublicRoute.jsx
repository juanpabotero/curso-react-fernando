import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../auth';

export const PublicRoute = ({ children }) => {
  const { logged } = useContext(AuthContext);

  /* Navigate: navega a la ruta que le digamos */
  return !logged ? children : <Navigate to="/marvel" />;
};
