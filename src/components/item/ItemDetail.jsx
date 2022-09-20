import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { CartContext } from "../Context/Context";

const ItemDetail = ({ item }) => {
	const { addItem } = useContext(CartContext);
	const [counter, setCounter] = useState(0);

	const onAdd = (counter) => {
		setCounter(counter);
		addItem(item, counter);
	};

	return (
		<div className="row my-5 text-center">
			<div className=" col-8 ">
				<img
					src={item.imagen}
					alt={item.nombre}
					style={{ width: "500px" }}
					className="img-fluid"
				/>
			</div>
			<div className="col-4 ">
				<h2>{item.nombre}</h2>
				<p style={{ maxWidth: "700px", margin: "auto" }}>{item.descripcion}</p>
				<h3>${item.precio}</h3>

				{counter === 0 ? (
					<ItemCount initial={1} stock={item.stock} onAdd={onAdd} />
				) : (
					<Link to={"/cart"} className="btn btn-primary">
						Ir al Carrito
					</Link>
				)}
			</div>
		</div>
	);
};
export default ItemDetail;
