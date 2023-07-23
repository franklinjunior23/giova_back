import axios from "axios";

export const APIDOM = axios.create({
    baseURL: "http://localhost:3000/api/",
  });
export const ProductGet = async()=>{
    const data = await APIDOM.get()
    return data
}
