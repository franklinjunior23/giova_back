import { useState } from 'react'
import Home from './pages/Home'
import Categoria from './pages/Categoria'
import { ShopProvider } from './context/ShopCon'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ShopProvider>

    <Home/>

    </ShopProvider>
    </>
      
  )
}

export default App
