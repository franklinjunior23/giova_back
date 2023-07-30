import { Link } from "react-router-dom";
import ItemShop from "./ItemShop";
import PropTypes from 'prop-types';
import { ShopUseContext } from "../context/ShopCon";
function ModShop({ funct }) {
  const {ListShop,deleteCarritoTodo,CountTotal} = ShopUseContext();
 
  return (
    <aside className="absolute z-40 w-[85%] top-5 right-5 md:w-[370px]  bg-slate-50/100 shadow-2xl rounded-xl p-5">
      <div className="absolute top-2 right-2 cursor-pointer" onClick={funct}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="currentColor"
          className="bi bi-x"
          viewBox="0 0 16 16"
        >
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />{" "}
        </svg>
      </div>
      <main className="h-[320px] lg:h-[400px] overflow-y-scroll flex flex-col gap-2 px-1 py-2">
        <hr/>
        {
          ListShop.length == 0 ? (<h1>vacio</h1>): (
            ListShop.map((dat,index)=>(
              <ItemShop
              key={index}
              ubidata={index}
              count={dat.cantidad}
              nombreProducto={dat.nombre}
              priceProduct={dat.precio}
            />
            ))
          )
        }
       
        
      </main>
      <span>Total : $/ {CountTotal}</span>
      <br />
      <div className="grid grid-cols-2 gap-3 mt-3 text-sm">
        <Link to={'/Checkout'} className=" text-center py-2  border border-black/30 rounded-lg">Comprar</Link>
        <button type="button" className=" text-center py-2  border border-black/30 rounded-lg" onClick={()=>{deleteCarritoTodo()}}>Vaciar Carrito</button>
      </div>
    </aside>
  );
}
ModShop.propTypes ={
  funct:PropTypes.func.isRequired,

}

export default ModShop;
