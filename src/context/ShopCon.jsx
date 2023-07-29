import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { ProductGetOne } from "../services/api";
import { toast } from "react-toastify";


const ShopContext = createContext();
export const ShopUseContext = () => {
  const data = useContext(ShopContext);
  return data;
};

export const ShopProvider = ({ children }) => {
  const [ListShop, setListShop] = useState(
    JSON.parse(localStorage.getItem("Products")) || []
  );
  const [ProductInfo, setProductInfo] = useState([]);
  const [CountTotal, setCountTotal] = useState();
  // product === ::::
  const GetProduct = async (nombreproducto) => {
    try {
      const data = await ProductGetOne(nombreproducto);
      if (!data) {
        console.log("hola");
      }
      setProductInfo(data.data);
    } catch (error) {
      console.log("en providershop " + error);
    }
  };
  const getCarrito = (newdata) => {
    if (!localStorage.getItem("Products")) {
      setListShop([{...newdata,cantidad:1}]);
      toast.success('Producto agregado al carrito',{autoClose: 1000,})
      return localStorage.setItem(
        "Products",
        JSON.stringify([{ ...newdata, cantidad: 1 }])
      );
    }
    const busq = JSON.parse(localStorage.getItem("Products"));

    const exist = busq.find((product) => product.id === newdata.id);
    if (exist) {
      exist.cantidad += 1;
      setListShop(busq);
      toast.success('Producto agregado al carrito',{autoClose: 1000,})
      localStorage.setItem("Products", JSON.stringify(busq));
    } else {
      const nuevo = [...busq, { ...newdata, cantidad: 1 }];
      setListShop(nuevo);
      toast.success('Producto agregado al carrito',{autoClose: 1000,})
      localStorage.setItem("Products", JSON.stringify(nuevo));
    }
  };
  const deleteCarritoTodo = () => {
    localStorage.removeItem("Products");
    setListShop([]);
  };
  const addShop = (shop) => {
    setListShop([...ListShop, shop]);
  };

  const handleStorageChange = (e) => {
    if (e.key === "Products") {
      // Actualizar el estado userData cuando cambie el valor en el localStorage
      setListShop(JSON.parse(e.User));
    }
  };

  const onDecrease = (index) => {
    const updatedShop = [...ListShop];
    if (updatedShop[index].cantidad > 1) {
      updatedShop[index].cantidad--;
      setListShop(updatedShop);
      localStorage.setItem("Products", JSON.stringify(updatedShop));
    }
  };

  const onIncrease = (index) => {
    const updatedShop = [...ListShop];
    updatedShop[index].cantidad++;
    setListShop(updatedShop);
    localStorage.setItem("Products", JSON.stringify(updatedShop));
  };

  const onDelete = (index) => {
    const updatedShop = [...ListShop];
    updatedShop.splice(index, 1);
    setListShop(updatedShop);
    localStorage.setItem("Products", JSON.stringify(updatedShop));
  };

  useEffect(() => {
    const total = ListShop.reduce(
      (acc, product) => acc + product.precio * product.cantidad,
      0
    );
    setCountTotal(total);

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [ListShop]);
  return (
    <ShopContext.Provider
      value={{
        ListShop,
        addShop,
        ProductInfo,
        GetProduct,
        getCarrito,
        deleteCarritoTodo,
        CountTotal,
        onDecrease,
        onIncrease,
        onDelete
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
ShopProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
