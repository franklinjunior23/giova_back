import { Link } from "react-router-dom";

function PedidoExitoso() {
  return (
    <main className="max-w-[1250px] m-auto px-10 py-20 flex flex-col items-center">
      <section className="">
        <img
          src="/bocet/undraw_join_re_w1lh.svg"
          className="block m-auto"
          width={300}
          alt=""
        />
        <h2
          className="text-center text-xl bg-green-400 my-5 py-2 rounded-xl font-medium "
          data-aos="fade-up"
        >
          Pedido Exitoso
        </h2>
      </section>
      <section className="grid grid-cols-2 gap-2">
         <Link className="text-center border rounded-lg font-light tracking-wide py-2 px-3" to={'/my-account/Pedidos'}>Ver Pedidos</Link> 
         <Link className="text-center border rounded-lg font-light tracking-wide py-2 px-3" to={'/'}>Volver</Link> 
      </section>
    </main>
  );
}

export default PedidoExitoso;
