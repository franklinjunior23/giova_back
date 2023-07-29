import { useEffect, useState } from "react";
import NotPedidos from "./NotPedidos";
import axiosInstance from "../../../api/ConfigApi";
import ItemPedido from "./ItemPedido";

function Pedidos() {
  const [IssetOrders, setIssetOrders] = useState([]);

  useEffect(() => {
    const buscar = async () => {
      try {
        const response = await axiosInstance.get('api/orders/user');
        const data = response.data; // Extraer los datos del resultado de la petición
        if (data.exist) {
          setIssetOrders([...data.busqueda]);
           // Asignar los datos al estado IssetOrders
        } else {
          console.log('No tienes pedidos');
        }
      } catch (error) {
        console.error('Error al obtener los pedidos:', error);
      }
    };
    buscar();
  }, []);
  return (
    <>
      {IssetOrders.length==0 ? (
        <NotPedidos />
      ) : (
        <>
        <section className="">
        {IssetOrders.map((dat) => (
            <ItemPedido datos={dat} key={dat.id} />
          ))}
        </section>
         
        </>
      )}
    </>
  );
}

export default Pedidos;


