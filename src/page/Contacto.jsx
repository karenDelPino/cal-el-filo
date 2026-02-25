import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contacto.css";

function Contacto() {
  const miFormulario = useRef();

  const enviarEmail = (evento) => {
    evento.preventDefault();

    // Estos datos los sacas de tu panel de EmailJS
    const servicioID = "service_q7x1n2w";
    const plantillaID = "template_c71r9fv";
    const llavePublica = "CGkVNX6KxwzZWwkPV";

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
      <h2>Contactanos</h2>
      <p>Dejanos tu consulta sobre venta y distribución de cal.</p>

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

        <button type="submit" className="boton-enviar">
          Enviar Mensaje
        </button>
      </form>
    </div>
  );
}

export default Contacto;
