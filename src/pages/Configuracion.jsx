import { useNavigate } from "react-router-dom";
import { useLogin } from "../context/Auth";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import FormEdit from "../components/Confi/FormEdit";
function Configuracion() {
  const [DatosPersonales, setDatosPersonales] = useState({
    nombre: "",
    apellido: "",
    dni: 0,
    correo: "",
    distrito: "",
    celular: 0,
  });
  const { UsuarioLog } = useLogin();
  const navi = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "dni" && value.length > 7) {
      return;
    }
    setDatosPersonales({ ...DatosPersonales, [name]: value });
  };
  useEffect(() => {
    if (UsuarioLog.length === 0) {
      // Si el UsuarioLog está vacío (el usuario no está logeado), redirigir a la página de inicio de sesión
      navi("/Login");
    } else {
      // Actualizar el estado DatosPersonales con los datos del usuario logeado
      setDatosPersonales({
        nombre: UsuarioLog.given_name || "",
        apellido: UsuarioLog.family_name || "",
        correo: UsuarioLog.email || "",
        // Agrega aquí los demás campos de UsuarioLog que quieras mostrar en el formulario
      });
    }
  }, [UsuarioLog, navi]);

  
  const { handleSubmit ,register } = useForm();

  const EditarUsuario = async () => {};

  return (
    <>
      <main className=" max-w-[1250px] px- py-6 mb-6 m-auto">
        
       
        <FormEdit/>
        
      </main>
    </>
  );
}

export default Configuracion;
