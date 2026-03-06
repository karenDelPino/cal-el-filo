import ScrollReveal from "scrollreveal";

const configBase = {
  distance: "50px",
  duration: 1000,
  delay: 200,
  reset: false, // Para que la animación pase una sola vez
};

export const revelarImagen = (clase) => {
  ScrollReveal().reveal(clase, { ...configBase, origin: "left" });
};

export const revelarTexto = (clase) => {
  ScrollReveal().reveal(clase, { ...configBase, origin: "bottom" });
};
