import React from "react";
import ItemListContainer from "./ItemListContainer"
import ItemCount from "./ItemCount";

const Contenido = () => {
  return (
    <div className="d-flex  justify-content-center ">
        <ul>
          <ItemCount stock={9} initial={1} onAdd={0}/>
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
