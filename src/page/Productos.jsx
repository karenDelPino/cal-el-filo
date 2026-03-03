import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import "./Productos.css";

// Datos de ejemplo para tus 4 productos basados en tu estructura original
const productosData = [
  {
    titulo: "CAL AÉREA hidratada",

    desc: "Nuestros molinos, combinado con la alta calidad de nuestra cal, nos permiten producir un material de finura excepcionalmente alta.",
    // Esta imagen debería ser la de las rocas blancas de cal
    img: "src/assets/image/inicio/cal-aérea.jpg",
  },
  {
    titulo: "CAL VIVA TRITURADA",

    desc: "Ideal para estabilización de suelos y mezclas asfálticas de alta durabilidad.",
    img: "src/assets/image/inicio/calviva.jpg",
  },
  {
    titulo: "CAL VIVA MOLIDA",

    desc: "Extra fina, ideal para revoques de alta calidad y terminaciones suaves.",
    img: "src/assets/image/inicio/calviva2o.jpg",
  },
  {
    titulo: "CAL VIVA TRITURADA",

    desc: "Especialmente formulada para la corrección de pH y tratamiento de efluentes.",
    img: "src/assets/image/inicio/carbonato.jpg",
  },
];

// Datos para la sección de presentación (iconos pequeños abajo)
const presentacionData = [
  {
    nombre: "construcción",
    img: "src/assets/image/usos/icono-siderurgia-chico.png",
  },
  {
    nombre: "Graneles",
    img: "src/assets/image/usos/icono-siderurgia-chico.png",
  },
  {
    nombre: "Bolsones",
    img: "src/assets/image/usos/icono-agricultura-chico.png",
  },
];

function Productos() {
  useEffect(() => {
    ScrollReveal().reveal(".producto-card", {
      interval: 150,
      origin: "bottom",
      distance: "30px",
      duration: 800,
    });
  }, []);

  return (
    <div className="pagina-productos">
      <h2>Nuestros Productos</h2>

      <div className="contenedor-tarjetas">
        {productosData.map((prod, index) => (
          <div className="producto-card" key={index}>
            {/* Sección Superior: Imagen circular y Texto */}
            <div className="producto-encabezado">
              <div className="producto-img-circular-container">
                <img
                  src={prod.img}
                  alt="Textura de Cal"
                  className="producto-img-circular"
                />
              </div>

              <div className="producto-titulos">
                <h3 className="producto-titulo-principal">{prod.titulo}</h3>
                <div className="linea-decorativa-verde"></div>
              </div>
            </div>

            {/* Descripción */}
            <p className="producto-descripcion">{prod.desc}</p>

            {/* Sección Inferior: Presentación (Iconos pequeños) */}
            <div className="producto-presentacion-seccion">
              <h4>PRESENTACIÓN</h4>
              <div className="presentacion-iconos-contenedor">
                {presentacionData.map((pres, i) => (
                  <div key={i} className="presentacion-item">
                    <div className="presentacion-img-circular">
                      <img src={pres.img} alt={pres.nombre} />
                    </div>
                    <span>{pres.nombre}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Productos;
