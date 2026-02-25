import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css"; // Importamos el CSS aquí
import logoImg from "../assets/logo.png"; // Asegúrate de tener un logo en esta ruta
function Menu() {
  return (
    <nav className="navegacion">
      <div>
        <span style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
          CAL EL FILO
        </span>
      </div>
      <div className="container-logo">
        <img src={logoImg} alt="Cal El Filo" style={{ height: "70px" }} />
      </div>
      <div className="contenedor-links">
        <Link to="/" className="link-menu">
          Inicio
        </Link>
        <Link to="/nosotros" className="link-menu">
          Nosotros
        </Link>
        <Link to="/productos" className="link-menu">
          Productos
        </Link>
        <Link to="/contacto" className="link-menu">
          Contacto
        </Link>
      </div>
    </nav>
  );
}

export default Menu;
