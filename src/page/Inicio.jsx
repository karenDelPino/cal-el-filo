import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import { Link } from "react-router-dom";
import "./Inicio.css";
// Productos
import tiposCal from "../assets/image/inicio/tiposCal.png";
import calAerea from "../assets/image/inicio/cal-aérea.jpg";
import calVivaTriturada from "../assets/image/inicio/calviva.jpg";
import calVivaMolida from "../assets/image/inicio/calviva2o.jpg";
import carbonato from "../assets/image/inicio/carbonato.jpg";

// Secciones e Iconos
import manosCaliza from "../assets/image/manos-caliza.png";
import iconPure from "../assets/image/iconPure.png";
import iconTime from "../assets/image/iconTime.png";
import iconManos from "../assets/image/iconManos.png";
import operario from "../assets/operario.png";
// Logos de Empresas (Carrusel)
import logoArquitectos from "../assets/image/logoArquitectos.png";
import logoAusarcos from "../assets/image/logoAusarcos.png";
import logoConstructores from "../assets/image/logoConstructores.png";
import logoGeotecnia from "../assets/image/logoGeotecnia.png";
import logoLosAndes from "../assets/image/logoLosAndes.png";
import logoMaterialesHoy from "../assets/image/logoMaterialesHoy.png";
import logoSanJuanConstruye from "../assets/image/logoSanJuanConstruye.png";

function Inicio() {
  useEffect(() => {
    const sr = ScrollReveal();
    sr.reveal(".contenido-hero", {
      interval: 200,
      origin: "bottom",
      distance: "50px",
      duration: 1000,
    });
    sr.reveal(".hero-container", {
      interval: 200,
      origin: "bottom",
      distance: "50px",
      duration: 1000,
    });
    sr.reveal(".elegirnos", {
      interval: 200,
      origin: "bottom",
      distance: "50px",
      duration: 1000,
    });
    sr.reveal(".contenedor-tipos", {
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
          <h1>CALIDAD CERTIFICADA DESDE SAN JUAN</h1>
          <p>Cal de Alta Pureza para Obras Exigentes</p>
          <div className="hero-buttons">
            <Link to="/productos" className="btn btn-primary">
              Ver productos
            </Link>
            <Link to="/contacto" className="btn btn-secondary">
              Contactanos
            </Link>
          </div>
        </div>
      </section>
      <section>
        <h1 className="title">Nuestros Productos</h1>
        <div>
          <div className="contenedor-tipos">
            <img src={tiposCal} alt="Pureza de Origen" className="icon-tipos" />
          </div>
          <div className="contenedor-tipos">
            <div className="tipos-caja">
              <Link to="/productos">
                <img
                  src={calAerea}
                  alt="Pureza de Origen"
                  className="icon-tipos-cal"
                />
              </Link>
              <h4>CAL AÉREA HIDRATADA</h4>
            </div>

            <div className="tipos-caja">
              <Link to="/productos">
                <img
                  src={calVivaTriturada}
                  alt="Entrega Inmediata"
                  className="icon-tipos-cal"
                />
              </Link>
              <h4>CAL VIVA TRITURADA</h4>
            </div>

            <div className="tipos-caja">
              <Link to="/productos">
                <img
                  src={calVivaMolida}
                  alt="Atención Directa"
                  className="icon-tipos-cal"
                />
              </Link>
              <h4>CAL VIVA MOLIDA</h4>
            </div>
            <div className="tipos-caja">
              <Link to="/productos">
                <img
                  src={carbonato}
                  alt="Atención Directa"
                  className="icon-tipos-cal"
                />
              </Link>
              <h4>CAL VIVA TRITURADA</h4>
            </div>
          </div>
          <div className="hero-buttons">
            <Link to="/productos" className="btn btn-primary">
              Ver productos
            </Link>
          </div>
        </div>
      </section>
      <section className="hero-alt">
        <div className="hero-container">
          <div className="hero-text">
            <span>PRODUCCIÓN INDUSTRIAL</span>
            <h1>Líderes en producción de cal</h1>
            <p>
              Desde San Juan para el mundo. Transformamos recursos naturales con
              la mejor tecnología y un equipo humano comprometido con la
              calidad.
            </p>
            <div>
              <p>Calidad Certificada</p>
            </div>
            <div>
              <Link to="/contacto" className="btn btn-primary">
                Consultar Alcance de Entrega
              </Link>
            </div>
          </div>

          <div class="hero-image">
            <div class="card-large">
              <img src={manosCaliza} alt="mina de cal" class="hero-img-fluid" />
            </div>
          </div>
        </div>
      </section>
      <section className="elegirnos">
        <h2>¿Por qué elegirnos?</h2>

        <div className="contenedor-razones">
          <div className="razon-caja">
            <img src={iconPure} alt="Pureza de Origen" className="icon" />

            <h4>Pureza de Origen</h4>

            <p>
              Extraemos la cal de las mejores canteras de San Juan, garantizando
              un material libre de impurezas.
            </p>
          </div>

          <div className="razon-caja">
            <img src={iconTime} alt="Entrega Inmediata" className="icon" />
            <h4>Entrega Inmediata</h4>
            <p>
              Sabemos que tu obra no puede parar. Contamos con stock permanente
              y logística propia.
            </p>
          </div>

          <div className="razon-caja">
            <img src={iconManos} alt="Atención Directa" className="icon" />
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
          <img src={logoArquitectos} alt="Empresaa 1" />
          <img src={logoAusarcos} alt="Empresa 2" />
          <img src={logoConstructores} alt="Empresa 3" />
          <img src={logoGeotecnia} alt="Empresa 4" />
          <img src={logoLosAndes} alt="Empresa 5" />
          <img src={logoMaterialesHoy} alt="Empresa 6" />
          <img src={logoSanJuanConstruye} alt="Empresa 7" />
          <img src={logoArquitectos} alt="Empresaa 1" />
          <img src={logoAusarcos} alt="Empresa 2" />
          <img src={logoConstructores} alt="Empresa 3" />
          <img src={logoGeotecnia} alt="Empresa 4" />
          <img src={logoLosAndes} alt="Empresa 5" />
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
              <Link to="/contacto" className="btn btn-primary">
                Solicitar Asesoramiento
              </Link>
            </div>
          </div>

          <div class="hero-image">
            <div class="card-large-2">
              <img src={operario} alt="mina de cal" class="hero-img-fluid" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Inicio;
