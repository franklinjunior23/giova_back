/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { ShopUseContext } from "../context/ShopCon";

function ProductID() {
  const { NameProduct } = useParams();
  const { GetProduct, ProductInfo,getCarrito } = ShopUseContext();
  const navi = useNavigate();
 
  useEffect(() => {
    GetProduct(NameProduct);
  }, []);
  const addpro = (prodc)=>{
    getCarrito(prodc)
  }

  return (
    <>
      {ProductInfo == "" ? (
        <div className="flex flex-col items-center justify-center py-16">
          <h1 className="text-center py-4 text-base">
            No se Encontro Ningun Producto
          </h1>
          <button
            type="button"
            className="bg-black py-2 px-5 rounded-lg text-white"
            onClick={() => {
              navi(-1);
            }}
          >
            Regresar atras
          </button>
        </div>
      ) : (
        <section className="p-5">
          <div className="mb-8 text-white font-semibold ">
            <button
              type="button"
              className="bg-black py-2 px-5 rounded-lg"
              onClick={() => {
                navi(-1);
              }}
            >
              Regresar atras
            </button>
          </div>

          <img
            src={ProductInfo.img}
            className="h-[500px] w-[500px]"
            height={300}
            alt=""
          />
          <h2 className="text-2xl py-5">{ProductInfo.nombre}</h2>
          <p className="mb-5 text-lg">{ProductInfo.descripcion}</p>
          <div>
            <span className="bg-purple-500   text-base font-medium mr-2 px-4 py-2 rounded  text-white">
            Precio : <span className="ml-4">S/.  {ProductInfo.precio} </span>
            </span>
          </div>
          <button type="button" className="py-3 w-full bg-black text-white mt-10 rounded-md font-semibold li" onClick={()=>{
            addpro(ProductInfo)
          }}>Agregar Al carrito</button>
          
        </section>
      )}
    </>
  );
}

export default ProductID;
