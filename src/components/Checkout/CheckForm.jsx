import { ShopUseContext } from "../../context/ShopCon";
import { useForm } from "react-hook-form";
import { useLogin } from "../../context/Auth";
import axiosInstance from "../../api/ConfigApi";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Load from "../Loading/Load";

function CheckForm() {
  const { ListShop, CountTotal, deleteCarritoTodo } = ShopUseContext();
  const { UsuarioLog } = useLogin();
  const [RedirectCompra, setRedirectCompra] = useState(false);
  const [Succesful, setSuccesful] = useState(false);

  // eslint-disable-next-line react/prop-types
  const InputForm = ({ textlabel, typeinput, NameInput }) => {
    return (
      <div className=" flex flex-col  mb-4">
        <label htmlFor={textlabel} className="text-sm font-medium pb-2">
          {textlabel}
        </label>
        <input
          type={typeinput == 0 ? "text" : "number"}
          {...register(NameInput, {
            required: {
              value: true,
            },
          })}
          name={NameInput}
          className="focus:outline-none border indent-3 py-2 rounded-md"
        />
      </div>
    );
  };
  // eslint-disable-next-line react/prop-types
  const ItemShop = ({ name, cantid, price }) => {
    return (
      <>
        <section className="mb-3 py-3">
          <div className="flex  justify-between items-center">
            <div className="flex items-center">
              <div>
                <h5 className="w-[150px] overflow-ellipsis">{name}</h5>
              </div>
              <div>
                <span className="px-3 py-[2px] bg-black rounded-2xl text-white font-medium text-sm">
                  x {cantid}
                </span>
              </div>
            </div>
            <div>
              <span>S/. {price}</span>
            </div>
          </div>
        </section>
        <hr />
      </>
    );
  };
  const { handleSubmit, register } = useForm({
    defaultValues: {
      Nombre: UsuarioLog.given_name ?? "",
      Apellido: UsuarioLog.family_name ?? "",
      Celular: "",
      Departamento: "",
      Distrito: "",
      Dirrecion: "",
      Email: UsuarioLog.email,
    },
  });
  async function SubmitCreateOrderdata(data) {
    setRedirectCompra(true);
    const dat = await axiosInstance.post("/api/Orders", {
      user: data,
      products: ListShop,
      total: CountTotal,
    });
    
    if (dat.data.pedido) {
      setTimeout(() => {
        toast.success("Pedido Realizado");
        setRedirectCompra(false);
        setSuccesful(true)
        deleteCarritoTodo();
      }, 4000);
    }
  }
  const navi = useNavigate();
  useEffect(() => {
    if (Succesful) {
      navi("/Succesful");
    }
  }, [Succesful, navi]);

  return (
    <>
    {RedirectCompra ?(
       <Load/>
      ):(
        <form onSubmit={handleSubmit(SubmitCreateOrderdata)}>
        <main className="lg:grid gap-[150px] lg:grid-cols-[600px_350px] xl: grid-cols-[600px_450px] justify-between w-full max-w-[1240px] m-auto">
          <main>
            <h3 className="text-2xl font-light py-7">
              Detalles de facturacion
            </h3>
            <section>
              <div className="w-full grid grid-cols-2 gap-2 lg:gap-5">
                <InputForm
                  textlabel={"Nombre Completo"}
                  NameInput={"Nombre"}
                  typeinput={0}
                />
                <InputForm
                  textlabel={"Apellido Completo"}
                  NameInput={"Apellido"}
                  typeinput={0}
                />
              </div>
            </section>
            <section>
              <InputForm
                textlabel={"Numero De Celular"}
                NameInput={"Celular"}
                typeinput={1}
              />
            </section>
            <section>
              <div className="grid grid-cols-2 gap-2 lg:gap-5">
                <InputForm
                  textlabel={"Departamento"}
                  NameInput={"Departamento"}
                  typeinput={0}
                />
                <InputForm
                  textlabel={"Distrito"}
                  NameInput={"Distrito"}
                  typeinput={0}
                />
              </div>
            </section>
            <section>
              <InputForm
                textlabel={"Calle Dirrecion"}
                NameInput={"Dirrecion"}
                typeinput={0}
              />
            </section>
            <section>
              <InputForm
                textlabel={"Email"}
                NameInput={"Email"}
                typeinput={0}
              />
            </section>
          </main>
          <main className="">
            <h3 className="text-2xl font-light py-7">Detalles de Orden</h3>

            <section>
              {ListShop.map((dat) => (
                <ItemShop
                  key={dat.id}
                  name={dat.nombre}
                  cantid={dat.cantidad}
                  price={dat.precio}
                />
              ))}
            </section>
            <main className="bg-slate-400/10 rounded-md px-6 py-3 border font-medium">
              <div className="flex justify-between items-center py-2">
                <h4 className="text-base">Subtotal</h4>{" "}
                <span className="text-sm">S/. {CountTotal}</span>
              </div>
              <article>
                <h4 className="py-3 text-sm">Tipo De Envio</h4>
                <section className="flex justify-between items-center">
                  <section>
                    <ul className="flex flex-col gap-2">
                      <li>
                        <label>
                          <input
                            type="radio"
                            value={"Normal"}
                            {...register("Metodo")}
                            className="mr-2"
                          />
                          Normal
                        </label>
                      </li>
                      <li>
                        <label>
                          <input
                            type="radio"
                            value={"Rapido"}
                            {...register("Metodo")}
                            className="mr-2"
                          />
                          Rapido
                        </label>
                      </li>
                    </ul>
                  </section>
                  <section>
                    <ul className="flex flex-col gap-2">
                      <li>
                        <span>S/. 50.00</span>
                      </li>
                      <li>
                        <span>S/. 100.00</span>
                      </li>
                    </ul>
                  </section>
                </section>
                <section className="mt-7">
                  <div className="flex justify-between items-center text-xl">
                    <h4 className="">Total</h4>
                    <span>S/. {CountTotal}</span>
                  </div>
                </section>
              </article>
            </main>
            <section className="mt-5">
              <button
                type="submit"
                className="w-full bg-black text-lg py-4 rounded-xl text-white font-light "
              >
                Confirmar Orden
              </button>
            </section>
          </main>
        </main>
      </form>
      )
    }
     
    </>
  );
}

export default CheckForm;
