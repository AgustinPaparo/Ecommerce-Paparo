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
			<div className="container-fluid my-5">
				<h1 className="text-center my-5">Productos seleccionados:</h1>
				<CartSelectionContainer
					items={carro.cart}
					clear={carro.clear}
					cartTotal={carro.cartTotal}
					cartTotalPrice={carro.cartTotalPrice}
					deleteOne={carro.deleteOne}
				/>
			</div>
			<Footer />
		</>
	);
};

export default Cart;
