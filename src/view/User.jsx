
import Cabecera from '../components/Cabecera'
import Pie from '../components/Pie'
import { ProductGet } from '../services/api';

function User ({children}) {
 const recuperar = ()=>{
  ProductGet()
 }
 recuperar()
  return (
    <>
    <Cabecera />
        {children}
        
    <Pie/>
    </>
  )
}

export default User