import React, {useContext} from 'react';
import { DataContext } from "../../context/Dataprovider";
import { ProductoItem } from "./productoitem";
export const ProductosLista = () => {

    const value = useContext(DataContext)
    const [productos] = value.productos

    console.log(productos)
  return (
    <>
          <h1 className='title'>PRODUCTOS</h1>
          <div className='productos'>
             <ProductoItem></ProductoItem> 

              
                     
          </div>
    </>
  )
}


