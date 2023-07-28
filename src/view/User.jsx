import { Outlet } from "react-router-dom";
import Cabecera from "../components/Cabecera";
import Pie from "../components/Pie";

function User() {
  return (
    <>
      <Cabecera />
      <Outlet />

      <Pie />
    </>
  );
}

export default User;
