import React from "react"; //Importamos la librería base para poder utilizar la sintaxis de componentes y JSX.
// Cambiamos BrowserRouter por HashRouter
import { HashRouter as Navegador, Routes, Route } from "react-router-dom";

import Inicio from "./page/Inicio";
import Nosotros from "./page/Nosotros";
import Productos from "./page/Productos";
import Contacto from "./page/Contacto";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

function App() { //Definimos el componente raíz de nuestra aplicación. Todo lo que esté aquí dentro será lo que finalmente se inyecte en el DOM.
  return (
    <Navegador>
      <Menu /> {/* El componente Menu se renderiza en todas las páginas, ya que está fuera de las rutas. */}
      <Routes>
        <Route index element={<Inicio />} /> {/* La ruta index se utiliza para definir la página de inicio, es decir, la que se muestra cuando el usuario accede a la raíz del sitio. */}
        <Route path="/" element={<Inicio />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="*" element={<Inicio />} /> {/* Esta es la Ruta Comodín. Si el usuario escribe cualquier cosa que no existe en la URL, la aplicación lo redirige automáticamente al Inicio en lugar de mostrar una pantalla en blanco o un error 404. */}
      </Routes>
      <Footer /> {/* Al igual que el menú, está fuera de las rutas, por lo que siempre se muestra al final de cada página. */}
    </Navegador>
  );
}

export default App;
