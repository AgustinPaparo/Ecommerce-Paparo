import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping , faTrash } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../Context/Context";
import { Link } from "react-router-dom";

const CartWidget = () => {
	const { cartTotal, clear } = useContext(CartContext);

	return (
		<div>
			<button
				type="button"
				className="btn btn-danger btn-sm position-relative mx-2"
				title="Vaciar Carrito"
				onClick={() => {
					clear();
				}}
			>
				<FontAwesomeIcon icon={faTrash} />
			</button>
			<Link to={"/cart"} className="text-white ">
				<FontAwesomeIcon icon={faCartShopping} />
				<span className="badge ">
					({cartTotal()})
				</span>
			</Link>
		</div>
	);
};
export default CartWidget;
