import React from "react";
import { BrowserRouter as Navegador, Routes, Route } from "react-router-dom";

// Importamos las piezas de la web
import Inicio from "./page/Inicio";
import Nosotros from "./page/Nosotros";
import Productos from "./page/Productos";
import Contacto from "./page/Contacto";
import Menu from "./components/Menu";

function App() {
  return (
    <Navegador>
      {/* El Menú se queda fijo arriba en todas las páginas */}
      <Menu />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </Navegador>
  );
}

export default App;
