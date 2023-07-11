import React from 'react'
import Cabecera from '../components/Cabecera'
import Pie from '../components/Pie'

function User({children}) {
  return (
    <>
    <Cabecera />
        {children}
    <Pie/>
    </>
  )
}

export default User