import axios from "axios";

export const APIDOM = axios.create({
    baseURL: "http://localhost:3000/api/",
  });
export const ProductsGet = async()=>{
    const data = await APIDOM.get()
    return data
}
export const ProductGetOne = async(produtcname)=>{
  const data = await APIDOM.get('products/'+produtcname)
  return data;
}
