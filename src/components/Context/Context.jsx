import React, { useState, createContext } from "react";

export const CartContext = createContext();

const Provider = ({ children }) => {
	const [cart, setCart] = useState([]);

	const addItem = (item, counter) => {
		const producto = { ...item, counter };
		if (isInCart(producto.id)) {
			sumarCantidad(producto);
		} else {
			setCart([...cart, producto]);
		}
	};

	console.log(cart);
	const sumarCantidad = (producto) => {
		const cartUpdate = cart.map((productoDelCarrito) => {
			if (producto.id === productoDelCarrito.id) {
				const productUpdated = {
					...productoDelCarrito,
					counter: producto.counter, //piso el counter para no pasarme el stock
				};
				return productUpdated;
			} else {
				return productoDelCarrito;
			}
		});
		setCart(cartUpdate);
	};

	const clear = () => {
		setCart([]);
	};

	const isInCart = (id) => {
		return cart.some((item) => item.id === id);
	};

	const cartTotal = () => {
		return cart.reduce((total, item) => (total += item.counter), 0);
	};

	return (
		<CartContext.Provider
			value={{ cart, addItem, clear, cartTotal }}
		>
			{children}
		</CartContext.Provider>
	);
};

export default Provider;
