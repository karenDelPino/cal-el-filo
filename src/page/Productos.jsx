import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import calAerea from "../assets/image/inicio/cal-aérea.jpg";
import calVivaTriturada from "../assets/image/inicio/calviva.jpg";
import calVivaMolida from "../assets/image/inicio/calviva2o.jpg";
import carbonato from "../assets/image/inicio/carbonato.jpg";
import construccion from "../assets/image/usos/icono-siderurgia-chico.png";
import mineria from "../assets/image/usos/icono-mineria-chico.png";
import cultivos from "../assets/image/usos/icono-agricultura-chico.png";
import "./Productos.css";

/* array de objetos */
const productosData = [
  {
    titulo: "CAL HIDRATADA",
    desc: "Nuestros molinos, combinado con la alta calidad de nuestra cal, nos permiten producir un material de finura excepcionalmente alta.",
    img: calAerea,
  },
  {
    titulo: "CAL VIVA TRITURADA",
    desc: "Ideal para estabilización de suelos y mezclas asfálticas de alta durabilidad.",
    img: calVivaTriturada,
  },
  {
    titulo: "CAL VIVA MOLIDA",
    desc: "Extra fina, ideal para revoques de alta calidad y terminaciones suaves.",
    img: calVivaMolida,
  },
  {
    titulo: "CAL VIVA TRITURADA",
    desc: "Especialmente formulada para la corrección de pH y tratamiento de efluentes.",
    img: carbonato,
  },
];

const presentacionData = [
  {
    nombre: "construcción",
    img: construccion,
  },
  {
    nombre: "minería",
    img: mineria,
  },
  {
    nombre: "cultivos",
    img: cultivos,
  },
];

function Productos() {
  useEffect(() => {
    ScrollReveal().reveal(".producto-card", {
      interval: 150,  //Esto hace que las tarjetas no aparezcan todas juntas, sino en "cascada"
      origin: "bottom",
      distance: "30px",
      duration: 800,
    });
    ScrollReveal().reveal(".pagina-productos", {
      origin: "left",
      distance: "100px",
      duration: 1000,
    });
  }, []);

  return (
    <div className="pagina-productos">
      <h2>Nuestros Productos</h2>
      <p>
        Descubre nuestra amplia gama de productos de calidad para diversas
        aplicaciones.
      </p>
      <div className="contenedor-tarjetas"> {/*El método .map() recorre el array productosData uno por uno. */}
        {productosData.map((prod, index) => (  
          <div className="producto-card" key={index}> {/*React necesita un identificador único para cada elemento de la lista  Al usar el index (la posición del elemento), le das a React una forma de rastrearlos eficientemente.*/}
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
                <div className="linea-decorativa-roja"></div>
              </div>
            </div>

            {/* Descripción */}
            <p className="producto-descripcion">{prod.desc}</p>

            {/* Sección Inferior: Presentación (Iconos pequeños) */}
            <div className="producto-presentacion-seccion">
              <h4>Usos</h4>
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
