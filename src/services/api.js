import axios from "axios";

export const APIDOM = axios.create({
    // eslint-disable-next-line no-undef
    baseURL: "http://localhost:3000/",
  });
export const ProductGet = async()=>{
    const data = await APIDOM.get()
    console.log(data)
    return data
}
