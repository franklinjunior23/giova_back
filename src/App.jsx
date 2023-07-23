import Home from "./pages/Home";
import { ShopProvider } from "./context/ShopCon";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductID from "./pages/ProductID";
import Nosotros from "./pages/Nosotros";
import Login from "./pages/Login";
import { DateLoginProvider } from "./context/Auth";

function App() {
  return (
    <>
      <DateLoginProvider>
        <ShopProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="product/:NameProduct" element={<ProductID />} />
              <Route path="Nosotros" element={<Nosotros />} />
              <Route path="Login" element={<Login />} />
              <Route path="*" element={<h3>Error 404</h3>} />
            </Routes>
          </BrowserRouter>
        </ShopProvider>
      </DateLoginProvider>
    </>
  );
}

export default App;
