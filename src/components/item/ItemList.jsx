import React from "react";
import Item from "./Item";

const ItemList = ({ items }) => {
	console.log(items);
	return (
		<div className="row px-5 mx-5">
			{items.map((item) => (
				<div className="col-4 py-3" key={item.id}>
					<Item
						id={item.id}
						nombre={item.nombre}
						imagen={item.imagen}
						precio={item.precio}
						descripcion={item.descripcion}
						stock={item.stock}
					/>
				</div>
			))}
		</div>
	);
};
export default ItemList;
