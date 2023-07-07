import React from 'react'

function Cabecera({palabrauno}) {
  return (
    <>
    <header>
    soy una cabecera de usuario
     <p style={{ color:'red' }}>{palabrauno}</p> 
    </header>
    </>
  )
}

export default Cabecera