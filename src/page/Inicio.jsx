import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import "./Inicio.css";

function Inicio() {
  useEffect(() => {
    // Animación para que las tarjetas de servicio aparezcan una por una
    ScrollReveal().reveal(".razones-caja", {
      interval: 200,
      origin: "bottom",
      distance: "50px",
      duration: 1000,
    });
  }, []);

  return (
    <div>
      {/* Portada Principal */}
      <section className="hero">
        <div className="contenido-hero">
          <h1>CAL EL FILO</h1>
          <p>Líderes en extracción de cal de alta pureza en San Juan.</p>
          <button
            className="boton-contacto"
            onClick={() => (window.location.href = "/contacto")}
          >
            Pedir Presupuesto
          </button>
        </div>
      </section>
      <section className="elegirnos">
        <h2>¿Por qué elegir Cal El Filo?</h2>

        <div className="contenedor-razones">
          <div className="razon-caja">
            <div className="numero">01</div>
            <h4>Pureza de Origen</h4>
            <p>
              Extraemos la cal de las mejores canteras de San Juan, garantizando
              un material libre de impurezas.
            </p>
          </div>

          <div className="razon-caja">
            <div className="numero">02</div>
            <h4>Entrega Inmediata</h4>
            <p>
              Sabemos que tu obra no puede parar. Contamos con stock permanente
              y logística propia.
            </p>
          </div>

          <div className="razon-caja">
            <div className="numero">03</div>
            <h4>Atención Directa</h4>
            <p>
              Sin intermediarios. Trato directo con los dueños para asegurar el
              mejor precio y asesoramiento.
            </p>
          </div>
        </div>
      </section>

      <section className="seccion-clientes">
        <h3
          style={{
            textAlign: "center",
            color: "#999",
            marginBottom: "30px",
            fontSize: "1rem",
          }}
        >
          EMPRESAS QUE CONFÍAN EN NOSOTROS
        </h3>
        <div className="carrusel-track">
          <img src="assets/cliente1.png" alt="Empresa 1" />
          <img src="assets/cliente2.png" alt="Empresa 2" />
          <img src="assets/cliente3.png" alt="Empresa 3" />
          <img src="assets/cliente4.png" alt="Empresa 4" />
          <img src="assets/cliente5.png" alt="Empresa 5" />
          <img src="assets/cliente1.png" alt="Empresa 1" />
          <img src="assets/cliente2.png" alt="Empresa 2" />
        </div>
      </section>
    </div>
  );
}

export default Inicio;
