import { useState } from 'react'
import './App.css'

import Home from './pages/Home'
import Categoria from './pages/Categoria'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Categoria/>
    </>
      
  )
}

export default App
