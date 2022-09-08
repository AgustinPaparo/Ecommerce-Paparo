import React from "react";
import Item from "./Item";

const ItemList = ({ items }) => {
	console.log(items);
	return (
		<div className="row">
			{items.map((item) => (
        <div className="col-4 py-3" key={item.id}>
          <Item
            nombre={item.nombre}
            imagen={item.imagen}
            precio={item.precio}
            descripcion={item.descripcion}
          />
        </div>
			))}
		</div>
	);
};
export default ItemList;
