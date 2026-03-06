import React, { useEffect } from "react";
import "./Nosotros.css";
import historiaImg from "../assets/hisoria-1.jpg";
import historiaCaldera from "../assets/historia-2.jpg";
import historiaIso from "../assets/historia-isopng.png";
import ScrollReveal from "scrollreveal";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Nosotros() {
  useEffect(() => {
    const sr = ScrollReveal();

    sr.reveal(".texto-nosotros", {
      origin: "left",
      distance: "100px",
      duration: 1000,
    });
    sr.reveal(".imagen-nosotros", {
      origin: "right",
      distance: "100px",
      duration: 1000,
    });
  }, []);

  return (
    <div className="pagina-nosotros">
      {/* Sección de presentación */}
      <div className="contenedor-nosotros">
        <div className="texto-nosotros">
          <h2>Nuestra Trayectoria</h2>
          <p>
            Desde las entrañas de San Juan, Cal El Filo ha crecido junto a la
            industria argentina, manteniendo la pureza y el compromiso en cada
            entrega.
          </p>
        </div>
      </div>

      {/* Línea de Tiempo de la Empresa */}
      <VerticalTimeline lineColor="#D32F2F">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="1995"
          iconStyle={{ background: "#D32F2F", color: "#fff" }}
        >
          <p>
            En 1995 se construye el primer horno con una capacidad instalada de
            50 toneladas por día de cal viva.
          </p>
        </VerticalTimelineElement>

        {/* Hito 2: Crecimiento */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2010"
          iconStyle={{ background: "#1A1A1A", color: "#fff" }} // Icono Negro para variar
        >
          <img
            src={historiaImg}
            alt="Maquinaria industrial"
            className="imagen-nosotros"
          />

          <p>
            Incorporamos tecnología de trituración para ofrecer cal micronizada
            y cal hidratada de alta pureza.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022"
          iconStyle={{ background: "#D32F2F", color: "#fff" }} // Icono Negro para variar
        >
          <img
            src={historiaIso}
            alt="Maquinaria industrial"
            className="imagen-nosotros"
          />
          <p>
            Fuimos certificados con las normas internacionales ISO 9001, 14001 y
            45001 en sistema de gestión de Calidad, Medio Ambiente, Seguridad y
            Salud Laboral
          </p>
        </VerticalTimelineElement>
        {/* Hito 3: Actualidad */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Hoy"
          iconStyle={{ background: "#D32F2F", color: "#fff" }}
        >
          <img
            src={historiaCaldera}
            alt="Maquinaria industrial"
            className="imagen-nosotros"
          />

          <p>
            Proveemos cal a las principales obras viales y mineras de todo el
            país desde nuestro corazón en San Juan.
          </p>
        </VerticalTimelineElement>

        {/* Cierre de la línea */}
        <VerticalTimelineElement
          iconStyle={{ background: "#1A1A1A", color: "#fff" }}
        />
      </VerticalTimeline>
    </div>
  );
}

export default Nosotros;
