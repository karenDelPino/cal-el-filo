import React from "react";
import { Link } from "react-router-dom";
import logoFooter from "../assets/logo.png";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-industrial">
      <div className="footer-contenido">
        {/* Columna 1: Logo y Resumen */}
        <div className="footer-col">
          <img src={logoFooter} alt="Cal El Filo" className="logo-footer" />
          <p>
            Líderes en extracción y procesamiento de cal de alta pureza en San
            Juan para todo el país.
          </p>
        </div>

        {/* Columna 2: Enlaces Rápidos */}
        <div className="footer-col">
          <h4>Navegación</h4>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/productos">Productos</Link>
            </li>
            <li>
              <Link to="/nosotros">Nosotros</Link>
            </li>
            <li>
              <Link to="/contacto">Contacto</Link>
            </li>
          </ul>
        </div>

        {/* Columna 3: Contacto Directo */}
        <div className="footer-col">
          <h4>Contacto</h4>
          <p>📍 San Juan, Argentina</p>
          <p>📞 +54 9 264 153-2584</p>
          <p>✉️ contacto@calelfilo.com.ar</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Cal El Filo - Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
