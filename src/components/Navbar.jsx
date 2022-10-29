import { Link } from "react-router-dom";

export const Navbar = ({ rol }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        {rol === "admin" ? (
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to={"/admin"}>Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/add"}>Agregar</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/update"}>
                Actualizar
              </Link>
            </li>
          </ul>
        ) : (
          <ul className="navbar-nav">
            <li className="nav-item active">
            <Link className="nav-link" to={"/user"}>
                Inicio
              </Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to={"/list"}>
                Listar
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};