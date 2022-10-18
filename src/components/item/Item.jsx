import React from "react";
import { Link } from "react-router-dom";

const Item = ({ nombre, imagen, precio, id }) => {
	return (
		<div className="card rounded-4 text-center">
			<Link to={"/productos/" + id}>
				<img src={imagen} alt={nombre} className=" mx-auto w-50 " />
			</Link>
			<div className="card-body text-center">
				<h5 className="card-title">{nombre}</h5>
				<b>${precio}</b>
			</div>
		</div>
	);
};
export default Item;
