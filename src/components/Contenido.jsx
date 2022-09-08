import React from "react";
import ItemListContainer from "./ItemListContainer"
import ItemCount from "./ItemCount";

const Contenido = () => {
  return (
    <div id="contenido" className="py-4" >
          <ItemCount stock={9} initial={1} onAdd={0}/>
            <ItemListContainer />
        
    </div>
  );
};


export default Contenido;
