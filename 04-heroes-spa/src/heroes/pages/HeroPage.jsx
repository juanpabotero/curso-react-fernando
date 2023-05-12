import { useMemo } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getHeroById } from '../helpers';

export const HeroPage = () => {
  // sirve para obtener los parametros de la url
  const { id } = useParams();
  // ayuda con la navegación entre rutas
  const navigate = useNavigate();

  // useMemo: memoriza el resultado de la función, solo se ejecuta cuando
  // el id cambia. Se recomienda usarlo cuando se tiene una función que
  // consume muchos recursos (llamado a una API, leer localStorages, etc),
  // porq el cuerpo del componente se ejecuta cada vez que este se renderiza
  const hero = useMemo(() => getHeroById(id), [id]);

  const onNavigateBack = () => {
    // navega a la página anterior
    navigate(-1);
  };

  if (!hero) {
    return <Navigate to="/marvel" />;
  }

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={`/heroes/${id}.jpg`}
          alt={hero.superhero}
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>

      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            {' '}
            <b>Alter ego:</b> {hero.alter_ego}{' '}
          </li>
          <li className="list-group-item">
            {' '}
            <b>Publisher:</b> {hero.publisher}{' '}
          </li>
          <li className="list-group-item">
            {' '}
            <b>First appearance:</b> {hero.first_appearance}{' '}
          </li>
        </ul>

        <h5 className="mt-3"> Characters </h5>
        <p>{hero.characters}</p>

        <button className="btn btn-outline-primary" onClick={onNavigateBack}>
          Regresar
        </button>
      </div>
    </div>
  );
};
