import React from "react";
import { useContext } from "react";
import { CartContext } from "../Context/Context";
import Footer from "../Footer";
import NavBar from "../Navbar/NavBar";
import CartSelectionContainer from "./CartSelectionContainer";

const Cart = () => {
	const carro = useContext(CartContext);

	return (
		<>
			<NavBar />
			<div className="container-fluid">
				<h1 className="text-center">Productos seleccionados:</h1>
				<CartSelectionContainer items={carro.cart} clear={carro.clear} />
			</div>
			<Footer />
		</>
	);
};

export default Cart;
