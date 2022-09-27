import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const CartSelection = ({
	nombre,
	imagen,
	descripcion,
	precio,
	stock,
	id,
	counter,
}) => {
	const subtotal = () => {
		let multiplicacion = { precio } * { counter };
		return multiplicacion;
	};
	return (
		<tr>
			<td>{nombre}</td>
			<td>${precio}</td>
			<td>{counter}</td>
			<td>${subtotal()}</td>
		</tr>
	);
};
export default CartSelection;
