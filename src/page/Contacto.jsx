import React, { useRef, useEffect } from "react";
import ScrollReveal from "scrollreveal";
import emailjs from "@emailjs/browser";
import "./Contacto.css";

function Contacto() {
  useEffect(() => {
    ScrollReveal().reveal(".titulo", {
      origin: "left",
      distance: "100px",
      duration: 1000,
    });
    ScrollReveal().reveal(".columna-formulario", {
      interval: 150,
      origin: "left",
      distance: "30px",
      duration: 800,
    });
    ScrollReveal().reveal(".columna-info", {
      interval: 150,
      origin: "right",
      distance: "30px",
      duration: 800,
    });
  }, []);
  const miFormulario = useRef();
  const enviarEmail = (evento) => {
    evento.preventDefault();
    const servicioID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const plantillaID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const llavePublica = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs
      .sendForm(servicioID, plantillaID, miFormulario.current, llavePublica)
      .then(() => {
        alert("¡Mensaje enviado! Nos contactaremos pronto.");
        evento.target.reset(); // Esto limpia el formulario al terminar
      })
      .catch((error) => {
        alert("Hubo un error al enviar: " + error.text);
      });
  };

  return (
    <div className="seccion-contacto">
      <div className="titulo">
        <h2>Impulse su Obra con Nosotros</h2>
        <p>Estamos para asesorarlo en su próximo proyecto.</p>
      </div>

      <di className="contacto-contenedor">
        <div className="columna-formulario">
          <form
            ref={miFormulario}
            onSubmit={enviarEmail}
            className="formulario-caja"
          >
            <div className="grupo-entrada">
              <label>Nombre Completo</label>
              <input type="text" name="usuario_nombre" required />
            </div>

            <div className="grupo-entrada">
              <label>Correo Electrónico</label>
              <input type="email" name="usuario_email" required />
            </div>

            <div className="grupo-entrada">
              <label>Mensaje</label>
              <textarea
                name="mensaje"
                placeholder="¿Cuántas toneladas necesita?"
                required
              />
            </div>
            <div className="btn-enviar">
              <button type="submit" className="btn btn-primary">
              Enviar Mensaje
            </button>
            </div>
            
          </form>
        </div>
        <div className="columna-info">
          <div className="info-item">
            <h3>📍 Dirección</h3>
            <p>Calle Cristobal Garcia s/n, J5431 Los Berros, San Juan</p>
          </div>
          <div className="info-item">
            <h3>📞 Teléfono</h3>
            <p> +54 9 264 153-2584</p>
          </div>
          <div className="info-item">
            <h3>💌 Email</h3>
            <p> contacto@calelfilo.com.ar</p>
          </div>
          <div className="info-item">
            <h3>⏰Horario de Atencion</h3>
            <p>Lunes a Viernes de 9:00 a 18:00</p>
          </div>
          <div className="contenedor-mapa">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3385.3215876680824!2d-68.62973008836866!3d-31.952171273910896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9680d9b5089706c3%3A0xf5f90703fccd5e10!2sCAL%20EL%20FILO!5e0!3m2!1ses!2sar!4v1772470106494!5m2!1ses!2sar"
              width="100%"
              height="200"
              style={{ border: 0, borderRadius: "8px" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </di>
    </div>
  );
}

export default Contacto;
