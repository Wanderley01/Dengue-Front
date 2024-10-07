import React from "react";
import { Routes, Route } from "react-router-dom";

//Importando as páginas:
//import Home from './src/pages/Home.jsx';
//<Home/>  ---> Pagina em pages é chamada assim, e dentro de path é o nome dela
//e element é o nome da pagina já chamada a component.

function Routes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default Routes;