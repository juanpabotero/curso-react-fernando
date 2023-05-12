import { useMemo } from 'react';
import { HeroCard } from './';
import { getHeroesByPublisher } from '../helpers';

export const HeroList = ({ publisher }) => {
  // useMemo: memoriza el resultado de la función, solo se ejecuta cuando
  // el id cambia. Se recomienda usarlo cuando se tiene una función que
  // consume muchos recursos (llamado a una API, leer localStorages, etc),
  // porq el cuerpo del componente se ejecuta cada vez que este se renderiza
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
      {heroes.map((hero) => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </div>
  );
};
