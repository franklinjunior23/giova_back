/* eslint-disable react/prop-types */

import Cabecera from '../components/Cabecera'
import Pie from '../components/Pie'

function User ({children}) {

  return (
    <>
    <Cabecera />
        {children}
        
    <Pie/>
    </>
  )
}

export default User