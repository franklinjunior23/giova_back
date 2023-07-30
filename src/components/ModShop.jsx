import { Link } from "react-router-dom";
import ItemShop from "./ItemShop";
import PropTypes from 'prop-types';
import { ShopUseContext } from "../context/ShopCon";
function ModShop({ funct }) {
  const {ListShop,deleteCarritoTodo,CountTotal} = ShopUseContext();
 
  return (
    <aside className="fixed z-40 w-[300px] top-5 right-5 md:w-[400px]  bg-slate-50/100 shadow-2xl rounded-xl p-5">
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
      <h3 className="text-xl ">Carrito De Compras</h3>
      <main className="h-[460px] lg:h-[600px] overflow-y-scroll flex flex-col gap-2 px-1 py-2">
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
      <div className="grid grid-cols-2">
        <Link to={'/Checkout'} className="bg-red-400 py-2 px-4">Comprar</Link>
        <button type="button" onClick={()=>{deleteCarritoTodo()}}>Vaciar Carrito</button>
      </div>
    </aside>
  );
}
ModShop.propTypes ={
  funct:PropTypes.func.isRequired,

}

export default ModShop;
