import { useEffect } from 'react';
import { useLogin } from '../context/Auth';
import { useNavigate } from 'react-router-dom';

function CerrarSeccion() {
    const {UsuarioLog,  CerrarSeccion} = useLogin();
    const navi = useNavigate()
    useEffect(() => {
        // Llamamos a la función CerrarSesion al montar el componente
        CerrarSeccion();
      }, [CerrarSeccion]);
    
      // Redirigir a la página de login si el usuario no está logeado
      useEffect(() => {
        if (UsuarioLog.length === 0) {
          navi('/Login');
        }
      }, [UsuarioLog, navi]);
  return null
   
}

export default CerrarSeccion