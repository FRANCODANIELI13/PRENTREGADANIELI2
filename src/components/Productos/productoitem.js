import React from 'react'
import { anillo } from "../../img/anillo.png";

export const ProductoItem = () => {
  return (
    
      <div className='producto'>
                  <a href='#'>
                      <div className='producto__img'>
                          <img src= {anillo} alt=''></img>
                      </div>
                  </a>
                  <div className='producto_footer'>
                      <h1>
                          title
                      </h1>
                      <p>Categoria</p>
                      <p className='price'>$320</p>
                  </div>
                  <div className='button'>
                      <button className='btn'>
                          Añadir al carrito
                      </button>
                      <div>
                          <a href='#' className='btn'>Vista</a>
                      </div>
                  </div>
              </div>
     )
}


