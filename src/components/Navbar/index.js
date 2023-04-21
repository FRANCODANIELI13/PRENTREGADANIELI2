import React from 'react';
import joyeria from "../../img/joyeria.png";
import {Link} from "react-router-dom";
export const Navbar = () => {
  return (
    <header>
        <Link to='/'>
            <div className='logo'>
                <img src ={ joyeria } alt='logo' width="150"/>   
            </div>
        </Link>
        <ul>
            <li>
                <Link to='/'>INICIO</Link>
            </li>
            <li>
                <Link to='/productos'>PRODUCTOS</Link>
            </li>
        </ul>
        <div className="cart">
            <box-icon name="cart"></box-icon>
            <span className="item_total">0</span>
        </div>
    </header>
  )
}


