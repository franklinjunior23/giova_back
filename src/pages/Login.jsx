import { useGoogleLogin } from "@react-oauth/google";
import { useLogin } from "../context/Auth";
import axios from "axios";
import { useState } from "react";
import axiosInstance from "../api/ConfigApi";

function Login() {
  const { AddUser } = useLogin();
  const [CambioXit, setCambioXit] = useState(false);

  const HandleLogin = useGoogleLogin({
    onSuccess: async (respose) => {
      try {
        const respues = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${respose.access_token}`,
            },
          }
        );
        AddUser(respues.data);
        const resp = await axiosInstance.post(
          "/api/Auth/LoginGoogle",
          respues.data
        );
        if (resp.data.loged) {
          localStorage.setItem("token", resp.data.token);
          setCambioXit(!CambioXit);
        }
      } catch (err) {
        console.log(err);
      }
    },
  });

  const HandleSubmitDefault = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <main
        className="flex items-center justify-center  bg-cover bg-center py-10  "
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/3965551/pexels-photo-3965551.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        }}
      >
        <section className="bg-white p-5 rounded-lg shadow-lg w-[80%] md:w-[450px]">
          <h2 className="text-xl text-center">Iniciar Sesion</h2>
          <form onSubmit={HandleSubmitDefault}>
            <div className="grid ">
              <label htmlFor="usuario" className="py-2">
                Usuario
              </label>
              <input
                type="text"
                placeholder="Usuario ..."
                className="py-2 focus:outline-none rounded-lg indent-3"
              />
            </div>
            <div className="grid ">
              <label htmlFor="Contraseña" className="py-2">
                Contraseña
              </label>
              <input
                type="password"
                placeholder="Usuario ..."
                className="py-2 focus:outline-none rounded-lg indent-3"
              />
            </div>
            <button
              type="submit"
              className="text-white bg-blue-600 text-center p-3 text-base font-semibold rounded-md w-full mt-10"
            >
              Iniciar Sesion
            </button>
          </form>
          <button
            onClick={() => HandleLogin()}
            className="text-white px-3 py-3 bg-black flex justify-center items-center gap-2 rounded-md text-base font-semibold w-full mt-3"
          >
            <img
              width="26"
              alt='Google "G" Logo'
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
            />
            Iniciar Sesion
          </button>
        </section>
      </main>
    </>
  );
}

export default Login;
