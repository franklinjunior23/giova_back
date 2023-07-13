import React from "react";
import User from "../view/User";
import Carrusel from "../components/Carrusel";
import Products from "../components/Products";

import Abaut from "../components/Abaut";

function Home() {
  return (
    <User>
      <Carrusel/>
      <Products/>
      <Abaut/>
      
    </User>
  );
}

export default Home;
