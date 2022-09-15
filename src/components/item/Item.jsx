import React from "react";
import { Link } from "react-router-dom";
// import ItemCount from "./ItemCount";

const Item = ({ nombre, imagen, descripcion, precio, stock, id }) => {
	return (
		<div className="card rounded-4 text-center">
			<Link to = {'/productos/' + {id}}> <img src={imagen} alt={nombre} className=" mx-auto w-50 " /></Link>
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
