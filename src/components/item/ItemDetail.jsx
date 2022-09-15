import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
	return (
		<div className="row my-5 text-center">
			<div className=" col-8 ">
				<img src={item.imagen} alt={item.nombre} style={{ width: "500px" }} />
			</div>
			<div className="col-4 ">
				<h2>{item.nombre}</h2>
				<p style={{ maxWidth: "700px", margin: "auto" }}>{item.descripcion}</p>
				<h3>${item.precio}</h3>

				<ItemCount stock={item.stock} initial={1} onAdd={0} />
			</div>
		</div>
	);
};
export default ItemDetail;
