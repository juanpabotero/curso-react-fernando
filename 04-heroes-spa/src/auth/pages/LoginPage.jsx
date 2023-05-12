import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export const LoginPage = () => {
  // acceder al contexto (debe ser un componente hijo del provider)
  const { login } = useContext(AuthContext);

  /* custom hook de react-router para ayudar con la navegación */
  const navigate = useNavigate();

  const onLogin = () => {
    const lastPath = localStorage.getItem('lastPath') || '/';

    login('Juanpa');

    /* navega a la ruta que indiquemos */
    navigate(lastPath, {
      /* replace: reemplaza la ruta en la que estaba, evita que la 
      persona pueda regresar al historial anterior */
      replace: true,
    });
  };

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <button className="btn btn-primary" onClick={onLogin}>
        Login
      </button>
    </div>
  );
};
