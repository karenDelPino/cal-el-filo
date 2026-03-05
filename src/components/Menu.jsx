import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Menu.css"; // Importamos el CSS aquí
//
function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);
  return (
    <nav className="navegacion">
      <div>
        <span style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
          CAL EL FILO
        </span>
      </div>
      <div className="container-logo">
        <a href="/">
          <img src={logoImg} alt="Cal El Filo" style={{ height: "70px" }} />
        </a>
      </div>
      <div
        className={`nav_toggle ${isMenuOpen && "open"}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`contenedor-links ${isMenuOpen ? "open" : ""}`}>
        <Link to="/" className="link-menu" onClick={closeMenu}>
          Inicio
        </Link>
        <Link to="/nosotros" className="link-menu" onClick={closeMenu}>
          Nosotros
        </Link>
        <Link to="/productos" className="link-menu" onClick={closeMenu}>
          Productos
        </Link>
        <Link to="/contacto" className="link-menu" onClick={closeMenu}>
          Contacto
        </Link>
      </div>
    </nav>
  );
}

export default Menu;
