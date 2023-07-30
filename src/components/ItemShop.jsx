/* eslint-disable react/prop-types */
import { ShopUseContext } from "../context/ShopCon";

function ItemShop({ count, nombreProducto, priceProduct, ubidata }) {
  const { onDecrease, onIncrease, onDelete } = ShopUseContext();
  return (
    <>
      <section
        className="h-14 flex justify-between items-center  text-center text-xs md:text-base gap-2
       "
      >
        <div>
          <div className=" flex gap-1 place-content-center  overflow-hidden">
            <button
              type="button"
              onClick={()=>{onDecrease(ubidata)}}
              className="px-2  border border-black/30 rounded-md font-extrabold text-center"
            >
              -
            </button>
            <h3 className="block bg-white px-1 w-6 border "> {count} </h3>
            <button
              type="button"
              onClick={()=>{onIncrease(ubidata)}}
              className="px-2 border border-black/30 rounded-md font-extrabold text-center"
            >
              +
            </button>
          </div>
          <div className="mt-2">
            <button type="button" className=" bg-red-500 text-white font-medium rounded-md px-3" onClick={()=>{onDelete(ubidata)}}>Eliminar</button>
          </div>
        </div>
        <h4 className="h-12  grid place-content-center text-ellipsis overflow-hidden  ">
          {nombreProducto}
        </h4>
        
        <span className="font-bold ">S/.{priceProduct}</span>
      </section>
      <hr />
    </>
  );
}

export default ItemShop;
