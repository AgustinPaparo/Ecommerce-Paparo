import React from "react";
import ItemListContainer from "./containers/ItemListContainer"
import ItemDetailContainer from "./containers/ItemDetailContainer"

const container = () => {
  return (
    <div id="contenido" className="py-4" >
            <ItemListContainer /> 
            <ItemDetailContainer />       
    </div>
  );
};


export default container;
