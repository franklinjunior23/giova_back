import { useNavigate } from "react-router-dom";
import { useLogin } from "../context/Auth";
import { useEffect, useState } from "react";

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
        nombre: UsuarioLog.given_name||'',
        apellido: UsuarioLog.family_name||'',
        correo: UsuarioLog.email||'',
        // Agrega aquí los demás campos de UsuarioLog que quieras mostrar en el formulario
      });
    }
  }, [UsuarioLog, navi]);
  console.log(DatosPersonales)
  return (
    <>
      <main className="p-5">
        <form>
          <section className="grid">
            <label htmlFor="Nombre">Nombre</label>
            <input
              type="text"
              name="nombre"
              value={DatosPersonales.nombre}
              onChange={handleChange}
            />
          </section>
          <section className="grid">
            <label htmlFor="Apellido">Apellido</label>
            <input
              type="text"
              name="apellido"
              value={DatosPersonales.apellido}
              onChange={handleChange}
            />
          </section>
          <section className="grid">
            <label htmlFor="Correo">Correo</label>
            <input
              type="text"
              name="correo"
              value={DatosPersonales.correo}
              onChange={handleChange}
            />
          </section>
          <section className="grid">
            <label htmlFor="dni">dni</label>
            <input
              type="number"
              name="dni"
              value={DatosPersonales.dni||0}
              onChange={handleChange}
             
            />
          </section>
          <section className="grid">
            <label htmlFor="distrito">distrito</label>
            <input
              type="number"
              name="distrito"
              value={DatosPersonales.distrito||''}
              onChange={handleChange}
             
            />
          </section>
          <section className="grid">
            <label htmlFor="celular">Celular</label>
            <input
              type="number"
              name="celular"
              value={DatosPersonales.celular||0}
              onChange={handleChange}
             
            />
          </section>
          
        </form>
      </main>
    </>
  );
}

export default Configuracion;
