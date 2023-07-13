import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import User from '../view/User';

function ProductID() {
    const [DataProduct, setDataProduct] = useState([]);
    const {NameProduct} =useParams();
    useEffect(() => {
       
    }, []);

  return (
    <User>

       Product anem {NameProduct}
    </User>
  )
}

export default ProductID