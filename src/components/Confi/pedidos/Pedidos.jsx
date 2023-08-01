import { useEffect, useState } from "react";
import NotPedidos from "./NotPedidos";
import axiosInstance from "../../../api/ConfigApi";
import ItemPedido from "./ItemPedido";
import { Outlet, useParams } from "react-router-dom";

function Pedidos() {
  const [IssetOrders, setIssetOrders] = useState([]);
  const {orden}= useParams();
  const RenderizarDetalle = ()=>{
    if(orden){
      return <Outlet/>
    }
    else{
      return(
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
      )
    }
  }
  useEffect(() => {
    const buscar = async () => {
      try {
        const response = await axiosInstance.get('api/orders/user');
        const data = response.data; 
        if (data.exist) {
          setIssetOrders([...data.busqueda]);
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
    <RenderizarDetalle/>
  );
}

export default Pedidos;


