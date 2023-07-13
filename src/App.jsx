import { useState } from "react";
import Home from "./pages/Home";
import Categoria from "./pages/Categoria";
import { ShopProvider } from "./context/ShopCon";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductID from "./pages/ProductID";
import Nosotros from "./pages/Nosotros";
import Login from "./pages/Login";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ShopProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="product/:NameProduct" element={<ProductID/>} />
            <Route path="Nosotros" element={<Nosotros />} />
            <Route path="Login" element={<Login />} />
            <Route path="*" element={<h3>Error 404</h3>} />
          </Routes>
        </BrowserRouter>
      </ShopProvider>
    </>
  );
}

export default App;
