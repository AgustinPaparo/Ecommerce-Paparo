import React from "react";

const Item = ({id, nombre, imagen, descripcion, precio }) => {
	return (
		
			<div className="card text-center">
				<img src={imagen} alt={nombre} className=" mx-auto w-75 " />
				<div className="card-body text-center">
					<h5 className="card-title">{nombre}</h5>
					<p className="card-text">{descripcion}</p>
					<b>${precio}</b><hr />
					<button className="btn btn-warning mx-2">Ver mas</button>
					<button className="btn btn-dark mx-2">Agregar a carrito</button>
				</div>
			</div>
		
	);
};
export default Item;
