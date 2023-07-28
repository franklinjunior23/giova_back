import axiosInstance from "../api/ConfigApi";

export const ProductsGet = async()=>{
    const data = await axiosInstance.get('/api/products')
    return data
}
export const ProductGetOne = async(produtcname)=>{
  const data = await axiosInstance.get('api/products/'+produtcname)
  return data;
}
