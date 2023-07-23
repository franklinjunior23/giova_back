import { useGoogleLogin } from "@react-oauth/google";
import User from "../view/User";
import { UseLogin } from "../context/Auth";
import axios from "axios";

function Login() {
  const { UsuarioLog,AddUser  } = UseLogin()

  const HandleLogin = useGoogleLogin({
    onSuccess: async (respose) => {
      try {
        const res = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${respose.access_token}`,
            },
          }
        );
        const respuesta = await axios.post("http://localhost:3000/api/Auth/LoginGoogle",res.data);
        AddUser(res.data)
        console.log(respuesta);
      } catch (err) {
        console.log(err);
      }
    },
  });
  return (
    <User>
      {
        UsuarioLog && (<h1><img src={UsuarioLog.picture} alt="" /> {UsuarioLog.given_name} </h1>)
      }
      <button onClick={() => HandleLogin()}>Iniciar Seccion</button>
    </User>
  );
}

export default Login;
