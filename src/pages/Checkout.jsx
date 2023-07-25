import { useEffect } from "react";
import { useLogin } from "../context/Auth"
import { useNavigate } from "react-router-dom";

const Checkout = () => {
    const { UsuarioLog } = useLogin();
    const navi = useNavigate()

    useEffect(() => {
      if (UsuarioLog.length === 0) {
        // Si el UsuarioLog está vacío (el usuario no está logeado), redirigir a la página de inicio de sesión
        navi("/Login");
      }
    }, [UsuarioLog, navi]);
  return (
    <>
      carrito de compras
    </>
  )
}

export default Checkout
