import React, { useEffect, useState } from "react";

function ItemShop({count,nombreProducto,priceProduct}) {
  const [CountProduct, setCountProduct] = useState(0);
  const adquisicion = ()=>{
    setCountProduct(count)
  }
  useEffect(() => {
    adquisicion()
  }, []);
  const AumentCount = ()=>{
    setCountProduct(CountProduct+1)
  }
  const DisCount = ()=>{
    setCountProduct(CountProduct-1)
  }
  const Eliminate= ()=>{
    console.log("eliminandoo")
  }
  return (
    <>
    <section
      className="h-14  rounded-lg grid grid-cols-[60px_95px_60px] lg:grid-cols-[80px_130px_80px] justify-between items-center  text-center text-sm md:text-lg gap-2
       "
    >
     <div>
       <div className=" grid grid-cols-3 place-content-center rounded-3xl overflow-hidden">
         <button type="button" onClick={DisCount} className="px-2  bg-black text-white font-extrabold text-center">-</button>
         <h3 className="block bg-white "> {CountProduct} </h3>
         <button type="button" onClick={AumentCount} className="px-2 bg-black text-white font-extrabold text-center">+</button>
       </div>
       <div>
       <button type="button" onClick={Eliminate}>Eliminar</button>
       </div>
     </div>
      <h4 className="h-12  grid place-content-center text-ellipsis overflow-hidden ... cursor-not-allowed ">
        {nombreProducto}
      </h4>
      <span className="font-bold">S/. {priceProduct}</span>
      
    </section>
    <hr/>
    </>
  );
}

export default ItemShop;
