import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../api/ConfigApi";

function Detalle() {
  const [DetalleProduct, setDetalleProduct] = useState([]);
  const { orden } = useParams();
  const buscar = async () => {
    const data = await axiosInstance.post("/api/orders/detalle", {
      id_orden: orden,
    });
    return setDetalleProduct(data.data);
  };
  useEffect(() => {
    const data = async () => {
      await buscar();
    };
    data();
  }, []);
  return (
    <>
      <section className="flex flex-col gap-2">
        {DetalleProduct.map((producto) => (
          <div className="border border-black/60 rounded-lg w-full py-2 px-3 flex flex-col" key={producto.id}>
            <h3 className="font-medium">{producto?.Product.nombre}</h3>
            <span>Cantidad : {producto.Cantidad}</span>
            <span>S/ {producto?.Product.precio}</span>
          </div>
        ))}
      </section>
    </>
  );
}

export default Detalle;
