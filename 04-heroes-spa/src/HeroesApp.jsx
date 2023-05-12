import { AuthProvider } from './auth';
import { AppRouter } from './router/AppRouter';

export const HeroesApp = () => {
  return (
    // provee la información a todos los componentes hijos
    <AuthProvider>
      {/* mostrar las paginas segun las rutas definidas */}
      <AppRouter />
    </AuthProvider>
  );
};
