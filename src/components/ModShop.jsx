import React from 'react'

function ModShop({funct}) {
    
  return (
    <aside className='fixed z-20 w-[300px] top-5 right-5 md:w-[400px]  bg-amber-500 rounded-xl p-5'>
    <div className='absolute top-2 right-2 cursor-pointer' onClick={funct}>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16"> <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/> </svg>
    </div>
    adwawdaw
    </aside>
  )
}

export default ModShop