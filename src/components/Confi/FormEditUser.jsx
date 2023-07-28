import { useForm } from "react-hook-form";

function FormEditUser() {
  const { handleSubmit, register } = useForm();
  // eslint-disable-next-line react/prop-types
  function ItemInput({ Name, type }) {
    return (
      <section className="flex flex-col mb-4">
        <label htmlFor={Name} className="py-1">
          {Name}
        </label>
        <input
          className="py-2 border focus:outline-none rounded-md indent-3"
          type={type ?? "text"}
          {...register(Name)}
        />
      </section>
    );
  }
  const UpdateDat = (dat) => {
    return console.log(dat);
  };
  return (
    <>
      <form onSubmit={handleSubmit(UpdateDat)}>
        <section className="grid grid-cols-2 gap-3">
          <ItemInput Name={"Nombre"} />
          <ItemInput Name={"Apellido"} />
        </section>
        <section className="">
          <ItemInput Name={"Correo"} />
        </section>
        <section className="">
          <ItemInput Name={"Dni"} type={"Number"} />
        </section>
        <section className="grid grid-cols-2 gap-3">
          <ItemInput Name={"Departamento"} />
          <ItemInput Name={"Distrito"} />
        </section>
        <section className="">
          <ItemInput Name={"Calle"} />
        </section>
        <section className="mt-10">
          <button type="submit" className="bg-black text-white  px-10 py-2 text-lg  font-medium rounded-xl">Guardar cambios</button>
        </section> 
      </form>
    </>
  );
}

export default FormEditUser;
