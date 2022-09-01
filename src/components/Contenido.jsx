import React from "react";
import ItemListContainer from "./ItemListContainer"

const Contenido = () => {
  return (
    <div className="d-flex  justify-content-center ">
        <ul>
            <ItemListContainer greetin="Producto1"/>
            <ItemListContainer greetin='Producto2'/>
            <ItemListContainer greetin='Producto3'/>
            <ItemListContainer greetin='Producto4'/>
            <ItemListContainer greetin='Producto5'/>
            <ItemListContainer greetin='Producto6'/>
            <ItemListContainer greetin='Producto7'/>
        </ul>
    </div>
  );
};


export default Contenido;
