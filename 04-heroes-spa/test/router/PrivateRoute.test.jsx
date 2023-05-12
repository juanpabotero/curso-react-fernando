import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../src/auth';
import { PrivateRoute } from '../../src/router/PrivateRoute';

describe('Pruebas en el <PrivateRoute />', () => {
  test('debe de mostrar el children si está autenticado', () => {
    // definir la simulacion para el localStorage
    Storage.prototype.setItem = jest.fn();

    const contextValue = {
      logged: true,
      user: {
        id: 'abc',
        name: 'Juan Carlos',
      },
    };

    render(
      <AuthContext.Provider value={contextValue}>
        {/* para simular las rutas, deberia crear minimo 2 rutas
        porq podria crear un ciclo infinito */}
        <MemoryRouter initialEntries={['/search?q=batman']}>
          <PrivateRoute>
            <h1>Ruta privada</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText('Ruta privada')).toBeTruthy();
    expect(localStorage.setItem).toHaveBeenCalledWith(
      'lastPath',
      '/search?q=batman'
    );
  });
});
