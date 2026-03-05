import React from "react";
// Cambiamos BrowserRouter por HashRouter
import { HashRouter as Navegador, Routes, Route } from "react-router-dom";

import Inicio from "./page/Inicio";
import Nosotros from "./page/Nosotros";
import Productos from "./page/Productos";
import Contacto from "./page/Contacto";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

function App() {
  return (
    // Con HashRouter NO necesitas el basename, funciona solo
    <Navegador>
      <Menu />
      <Routes>
        <Route index element={<Inicio />} />
        <Route path="/" element={<Inicio />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="*" element={<Inicio />} />
      </Routes>
      <Footer />
    </Navegador>
  );
}

export default App;
