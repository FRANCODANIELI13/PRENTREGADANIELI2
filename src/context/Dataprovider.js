import React, { useState, useEffect , createContext} from "react";
import data from "../data.js";

export const DataContext = createContext();

export const Dataprovider = (props) =>{
    const [productos, setProductos] = useState([])

    useEffect(() =>{
        const producto = data.items
        if (producto){
            setProductos(producto)
        }else{
            setProductos([])
        }
        setProductos(producto)
    },[])

    const value = {
        productos : [productos]
    }


    return (
        <DataContext.Provider value = {value}>
            {props.children}
        </DataContext.Provider>
    )
}