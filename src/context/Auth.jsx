import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const LogeadoDate = createContext();
export const UseLogin = () => {
  const dat = useContext(LogeadoDate);
  return dat;
};

export const DateLoginProvider = ({ children }) => {
  const [UsuarioLog, setUsuarioLog] = useState([]);

  const AddUser = (dat)=>{
    setUsuarioLog(dat)
  }
  return (
    <LogeadoDate.Provider value={{ UsuarioLog,AddUser }}>{children}</LogeadoDate.Provider>
  );
};
DateLoginProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
