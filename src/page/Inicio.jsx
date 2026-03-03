import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import "./Inicio.css";

function Inicio() {
  useEffect(() => {
    const sr = ScrollReveal();
    sr.reveal(".contenido-hero", {
      // Corregido el nombre de la clase
      interval: 200,
      origin: "bottom",
      distance: "50px",
      duration: 1000,
    });
    sr.reveal(".hero-container", {
      // Corregido el nombre de la clase
      interval: 200,
      origin: "bottom",
      distance: "50px",
      duration: 1000,
    });
    sr.reveal(".razon-caja", {
      // Corregido el nombre de la clase
      interval: 200,
      origin: "bottom",
      distance: "50px",
      duration: 1000,
    });

    sr.reveal(".cifra-item", {
      interval: 200,
      scale: 0.8,
      duration: 1000,
    });
  }, []);

  return (
    <div>
      {/* Portada Principal */}
      <section className="hero">
        <div className="contenido-hero">
          <h1>CALIDAD CERTIFICADA DESDE SAN JUAN</h1>
          <p>Cal de Alta Pureza para Obras Exigentes</p>
          <div className="hero-buttons">
            <a href="/Productos" className="btn btn-primary">
              Ver productos
            </a>
            <a href="/contacto" className="btn btn-secondary">
              Contactanos
            </a>
          </div>
        </div>
      </section>
      <section>
        <h1 className="title">Nuestros Productos</h1>
        <div>
          <div className="contenedor-tipos">
            <img
              src="src/assets/image/inicio/tiposCal.png"
              alt="Pureza de Origen"
              className="icon-tipos"
            />
          </div>
          <div className="contenedor-tipos">
            <div className="tipos-caja">
              <a href="/Productos">
                <img
                  src="src/assets/image/inicio/cal-aérea.jpg"
                  alt="Pureza de Origen"
                  className="icon-tipos-cal"
                />
              </a>
              <h4>CAL AÉREA HIDRATADA</h4>
            </div>

            <div className="tipos-caja">
              <a href="/Productos">
                <img
                  src="src/assets/image/inicio/calviva.jpg"
                  alt="Entrega Inmediata"
                  className="icon-tipos-cal"
                />
              </a>
              <h4>CAL VIVA TRITURADA</h4>
            </div>

            <div className="tipos-caja">
              <a href="/Productos">
                <img
                  src="src/assets/image/inicio/calviva2o.jpg"
                  alt="Atención Directa"
                  className="icon-tipos-cal"
                />
              </a>
              <h4>CAL VIVA MOLIDA</h4>
            </div>
            <div className="tipos-caja">
              <a href="/Productos">
                <img
                  src="src/assets/image/inicio/carbonato.jpg"
                  alt="Atención Directa"
                  className="icon-tipos-cal"
                />
              </a>
              <h4>CAL VIVA TRITURADA</h4>
            </div>
          </div>
          <div className="hero-buttons">
            <a href="/Productos" className="btn btn-primary">
              Ver productos
            </a>
          </div>
        </div>
      </section>
      <section className="hero-alt">
        <div className="hero-container">
          <div className="hero-text">
            <span>Del Corazón de San Juan a su Obra</span>
            <h1>Líderes en producción de cal</h1>
            <p>
              Desde San Juan para el mundo. Transformamos recursos naturales con
              la mejor tecnología y un equipo humano comprometido con la
              calidad.
            </p>
            <div>
              <p>Producción Industrial</p>
              <p>Calidad Certificada</p>
            </div>
            <div class="btn-group">
              <button
                class="btn btn-primary"
                onClick={() => (window.location.href = "/contacto")}
              >
                Consultar Alcance de Entrega
              </button>
            </div>
          </div>

          <div class="hero-image">
            <div class="card-large">
              <img
                src="src/assets/image/manos-caliza.png"
                alt="mina de cal"
                class="hero-img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="elegirnos">
        <h2>¿Por qué elegirnos?</h2>

        <div className="contenedor-razones">
          <div className="razon-caja">
            <img
              src="src/assets/image/iconPure.png"
              alt="Pureza de Origen"
              className="icon"
            />

            <h4>Pureza de Origen</h4>

            <p>
              Extraemos la cal de las mejores canteras de San Juan, garantizando
              un material libre de impurezas.
            </p>
          </div>

          <div className="razon-caja">
            <img
              src="src/assets/image/iconTime.png"
              alt="Entrega Inmediata"
              className="icon"
            />
            <h4>Entrega Inmediata</h4>
            <p>
              Sabemos que tu obra no puede parar. Contamos con stock permanente
              y logística propia.
            </p>
          </div>

          <div className="razon-caja">
            <img
              src="src/assets/image/iconManos.png"
              alt="Atención Directa"
              className="icon"
            />
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
            marginBottom: "40px",
            fontSize: "1.4rem",
          }}
        >
          EMPRESAS QUE CONFÍAN EN NOSOTROS
        </h3>
        <div className="carrusel-track">
          <img src="src/assets/image/logoArquitectos.png" alt="Empresaa 1" />
          <img src="src/assets/image/logoAusarcos.png" alt="Empresa 2" />
          <img src="src/assets/image/logoConstructores.png" alt="Empresa 3" />
          <img src="src/assets/image/logoGeotecnia.png" alt="Empresa 4" />
          <img src="src/assets/image/logoLosAndes.png" alt="Empresa 5" />
          <img src="src/assets/image/logoMaterialesHoy.png" alt="Empresa 6" />
          <img
            src="src/assets/image/logoSanJuanConstruye.png"
            alt="Empresa 7"
          />
          <img src="src/assets/image/logoArquitectos.png" alt="Empresaa 1" />
          <img src="src/assets/image/logoAusarcos.png" alt="Empresa 2" />
          <img src="src/assets/image/logoConstructores.png" alt="Empresa 3" />
          <img src="src/assets/image/logoGeotecnia.png" alt="Empresa 4" />
          <img src="src/assets/image/logoLosAndes.png" alt="Empresa 5" />
        </div>
      </section>
      <section class="hero-alt">
        <div class="hero-container">
          <div class="hero-text">
            <span>ASESORAMIENTO PERSONALIZADO</span>
            <h1>¿TENÉS DUDAS SOBRE TU PROYECTO?</h1>
            <p>
              Nuestro equipo de expertos está listo para ayudarte a elegir el
              tipo de cal adecuado y coordinar la logística que mejor se adapte
              a tus tiempos.
            </p>

            <div class="btn-group">
              <button
                class="btn btn-primary"
                onClick={() => (window.location.href = "/contacto")}
              >
                Solicitar Asesoramiento
              </button>
            </div>
          </div>

          <div class="hero-image">
            <div class="card-large-2">
              <img
                src="src/assets/operario.png"
                alt="mina de cal"
                class="hero-img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Inicio;
