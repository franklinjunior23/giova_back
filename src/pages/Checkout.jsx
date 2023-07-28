import { useEffect } from "react";
import { useLogin } from "../context/Auth";
import { useNavigate } from "react-router-dom";
import CheckForm from "../components/Checkout/CheckForm";

const Checkout = () => {
  const { UsuarioLog } = useLogin();
  const navi = useNavigate();

  useEffect(() => {
    if (UsuarioLog.length === 0) {
      // Si el UsuarioLog está vacío (el usuario no está logeado), redirigir a la página de inicio de sesión
      navi("/Login");
    }
  }, [UsuarioLog, navi]);
  return (
    <>
      <main className="py-5 px-6">
        <CheckForm />
      </main>
    </>
  );
};

export default Checkout;
