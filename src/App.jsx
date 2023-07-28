import Home from "./pages/Home";
import { ShopProvider } from "./context/ShopCon";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductID from "./pages/ProductID";
import Nosotros from "./pages/Nosotros";
import Login from "./pages/Login";
import { DateLoginProvider } from "./context/Auth";
import Checkout from "./pages/Checkout";
import User from "./view/User";
import CerrarSeccion from "./pages/CerrarSeccion";
import Configuracion from "./pages/Configuracion";

function App() {
 
  return (
    <>
      <DateLoginProvider>
        <ShopProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<User />}>
              <Route index element={<Home />} />
                <Route path="product/:NameProduct" element={<ProductID />} />
                <Route path="Nosotros" element={<Nosotros />} />
                <Route path="Login" element={<Login />} />
                <Route path="Checkout" element={<Checkout />} />
                <Route path="CerrarSeccion" element={ <CerrarSeccion/> } />
                <Route path="Configuracion" element={<Configuracion />} />
              </Route>
              <Route path="*" element={<h3>Error 404</h3>} />
            </Routes>
          </BrowserRouter>
        </ShopProvider>
      </DateLoginProvider>
    </>
  );
}

export default App;
