/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { ShopUseContext } from "../context/ShopCon";

function ProductID() {
  const { NameProduct } = useParams();
  const { GetProduct, ProductInfo, getCarrito } = ShopUseContext();
  const navi = useNavigate();

  useEffect(() => {
    GetProduct(NameProduct);
  }, []);
  const addpro = (prodc) => {
    getCarrito(prodc);
  };

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
       <main className=" bg-[#EEEEEE] mb-4">
         <main className="p-5 py-16 lg:max-w-[1250px] m-auto ">
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
           <main className="md:grid md:grid-cols-2">
             <section className="">
               <img src={ProductInfo.img} className="md:w-[400px] block " height={300} alt="" />
             </section>
             <section>
               <div className="text-2xl py-5">
                 <h2 className="md:text-3xl">{ProductInfo.nombre}</h2>
                 <span className="text-lg md:text-xl font-light text-amber-600">
                     S/. {ProductInfo.precio}
                 </span>
               </div>
               <div>
                 <p className="mb-5 text-base">{ProductInfo.descripcion}</p>
               </div>
               <button
                 type="button"
                 className="py-3 w-full bg-black text-white mt-10 rounded-md font-semibold li"
                 onClick={() => {
                   addpro(ProductInfo);
                 }}
               >
                 Agregar Al carrito
               </button>
             </section>
           </main>
         </main>
       </main>
      )}
    </>
  );
}

export default ProductID;
