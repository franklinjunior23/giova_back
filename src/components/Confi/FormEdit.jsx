import { useLogin } from "../../context/Auth";
import { Link, Outlet } from "react-router-dom";

function FormEdit() {
  const LinksUser = ({ Name, link }) => {
    return (
      <>
        <li className="h-auto py-1">
          <Link to={link} className=" text-sm font-light tracking-wider	">
            {Name}
          </Link>
        </li>
      </>
    );
  };

  const { UsuarioLog } = useLogin();
  return (
    <main className="md:grid md:grid-cols-2 px-4">
      <main className="">
        <section className="py-5 w-f">
          <h2 className="text-2xl font-light pb-6">Configuracion de Perfil</h2>
          <img src={UsuarioLog.picture} alt="" className=" rounded-full" />
        </section>
        <section className="mt-4 mb-8 md:mb-0">
          <ul className="">
            <LinksUser Name={"Pedidos"} link={"Pedidos"} />
            <LinksUser Name={"Detalles de la cuenta"} link={"edit"} />
          </ul>
        </section>
      </main>
      <main>
        <Outlet />
      </main>
    </main>
  );
}

export default FormEdit;
