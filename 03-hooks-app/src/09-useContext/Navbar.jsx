import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
      <div className="container-fluid">
        {/* se renderiza como un elemento "a", pero usando el Link no 
          refrezca la página, en el atributo "to" se pueden poner queries y demás */}
        <Link className="navbar-brand" to="/">
          useContext
        </Link>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {/* es un link que se usa en la navegación, cumple la misma función que
              el Link pero tiene un argumento para saber si la ruta está activa o no */}
            <NavLink
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              to="/"
            >
              Home
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              to="/about"
            >
              About
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              to="/Login"
            >
              Login
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};
