import React from "react";
// import ItemCount from "./ItemCount";

const Item = ({ nombre, imagen, descripcion, precio, stock }) => {
	return (
		<div className="card rounded-4 text-center">
			<img src={imagen} alt={nombre} className=" mx-auto w-50 " />
			<div className="card-body text-center">
				<h5 className="card-title">{nombre}</h5>
				{/* <p className="card-text">{descripcion}</p> */}
				<b>${precio}</b>
				{/* <hr /> */}
				{/* <ItemCount stock={stock} initial={1} onAdd={0}/> */}
			</div>
		</div>
	);
};
export default Item;
