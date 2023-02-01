import PropTypes from "prop-types";

/* Lo que no va a cambiar cuando se use el componente,
lo puedo poner afuera de la función principal para evitar
que se vuelva a ejecutar esa parte que no va a cambiar */
const getTitle = (title) => {
  return title;
};

/* props son las propiedades que recibe el componente,  
  es un objeto, pero normalmente se desestructura para usar dentro  
  de la función. Sirven para pasar información del componente  
  padre al componente hijo. */
export const FirstApp = ({ name, age }) => {
  return (
    /* esto es un fragmento y se usa para devolver varios elementos */
    <>
      {/* Puedo usar {} para poner expresiones validas de JavaScript,  
      recordar que las expresiones devuelven un valor */}
      <h1>{getTitle("Este es el FirstAppComponent")}</h1>
      <p>
        Hola, mi nombre es {name} y tengo {age}
      </p>
    </>
  );
};

/* definir los tipos para las props */
FirstApp.propTypes = {
  age: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

/* definir los valores por defecto */
FirstApp.defaultProps = {
  age: 0,
  name: "No hay nombre",
};
