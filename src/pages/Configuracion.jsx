import { useNavigate } from "react-router-dom";
import { useLogin } from "../context/Auth";
import { useEffect } from "react";

import FormEdit from "../components/Confi/FormEdit";
function Configuracion() {
  
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
      <main className=" max-w-[1250px] px- py-6 mb-6 m-auto">
       
        <FormEdit/>
        
      </main>
    </>
  );
}

export default Configuracion;
