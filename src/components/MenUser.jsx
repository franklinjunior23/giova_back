import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function MenUser({ datos }) {
  const [ActiveMenu, setActiveMenu] = useState(false);
  const activar = () => {
    setActiveMenu(!ActiveMenu);
  };
  return (
    <>
      {/** funciones para que haga hover, segun jsx
       *  onMouseEnter={setActiveMenu} onMouseLeave={activar} */}
      <div
        className="flex justify-center items-center gap-2 p-1 px-3 border rounded-xl text-sm cursor-pointer relative"
        onClick={activar}
      >
        <h1 className="hidden md:block">{datos.given_name}</h1>
        <img className="rounded-full" width={30} src={datos.picture} alt="" />
        {ActiveMenu && (
          <div
            className="absolute -bottom-[150px]
           md:left-10 md:  -left-20 z-30  w-36 shadow-md"
          >
            <ul className=" bg-white  rounded-2xl overflow-hidden text-black  text-center">
              <li className="text-base hover:bg-black/5 py-2 px-4">
                <Link to={"/Pedidos"}>Pedidos</Link>
              </li>
              <li className="text-base hover:bg-black/5 py-2 px-4">
                <Link to={"/my-account"}>Mi cuenta</Link>
              </li>
              <li className="text-base  hover:bg-black/5 py-2 px-4">
                <Link to={"/CerrarSeccion"}>Cerrar Seccion</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
MenUser.propTypes = {
  datos: PropTypes.shape({
    given_name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  }).isRequired,
};
export default MenUser;
