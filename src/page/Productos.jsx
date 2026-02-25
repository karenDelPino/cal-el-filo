import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import "./Productos.css";

function Productos() {
  useEffect(() => {
    ScrollReveal().reveal(".producto-detalle", {
      interval: 200,
      origin: "bottom",
      distance: "50px",
    });
  }, []);

  return (
    <div className="pagina-productos">
      <h2>Catálogo de Productos</h2>

      <h2>Nuestros Productos</h2>
      <div className="grilla-servicios">
        <div className="tarjeta-servicio">
          <h3>Cal Hidratada</h3>
          <p>
            Ideal para la construcción y terminaciones finas, garantizando
            máxima adherencia.
          </p>
        </div>

        <div className="tarjeta-servicio">
          <h3>Cal Viva</h3>
          <p>
            Utilizada en procesos industriales y mineros con los más altos
            estándares de calidad.
          </p>
        </div>

        <div className="tarjeta-servicio">
          <h3>Logística</h3>
          <p>
            Contamos con flota propia para asegurar que el producto llegue a
            tiempo a su destino.
          </p>
        </div>

        <div className="producto-detalle">
          <div className="producto-info-ext">
            <span className="uso-badge">INDUSTRIAL / MINERÍA</span>
            <h3>Cal Viva en Terrón</h3>
            <p>
              Cal virgen de alta reactividad química. Utilizada en fundiciones y
              procesos mineros complejos.
            </p>
            <ul>
              <li>Alto contenido de óxido de calcio.</li>
              <li>Granulometría controlada.</li>
              <li>Despacho a granel.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Productos;
