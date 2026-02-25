import { React, useEffect } from "react";
import "./Nosotros.css";
import historiaImg from "../assets/historia.jpg"; // Asegúrate de tener una imagen en esta ruta
import ScrollReveal from "scrollreveal";
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
    <div className="contenedor-nosotros">
      {/* Columna de Texto */}
      <div className="texto-nosotros">
        <h2>Nuestra Historia</h2>
        <p>
          En <strong>Cal El Filo</strong>, nos dedicamos con orgullo a la
          extracción y comercialización de cal de la más alta pureza en la
          provincia de San Juan.
        </p>
        <p>
          Nuestra empresa nace de la montaña, con el compromiso de proveer un
          insumo esencial para la industria y la construcción argentina,
          respetando siempre los estándares de calidad y seguridad minera.
        </p>
        <p>
          Trabajamos día a día para que el fruto de nuestra tierra llegue a cada
          rincón del país con eficiencia y profesionalismo.
        </p>
      </div>

      {/* Columna de Imagen */}
      <div className="imagen-nosotros">
        {/* Aquí puedes poner una foto de la calera o de las montañas de San Juan */}
        <img src={historiaImg} alt="Extracción de cal en San Juan" />
      </div>
    </div>
  );
}

export default Nosotros;
