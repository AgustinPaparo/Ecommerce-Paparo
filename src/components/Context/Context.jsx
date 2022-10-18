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

	const deleteOne = (id) => {
		const productosFiltrados = cart.filter((prod) => prod.id !== id);
		setCart(productosFiltrados);
	};

	const isInCart = (id) => {
		return cart.some((item) => item.id === id);
	};

	const cartTotal = () => {
		const copia = [...cart];
		let count = 0;
		copia.forEach((producto) => {
			count = count + producto.counter;
		});
		return count;
	};

	const cartTotalPrice = () => {
		const copia = [...cart];
		let count = 0;
		copia.forEach((producto) => {
			count = count + producto.counter * producto.precio;
		});
		return count;
	};

	return (
		<CartContext.Provider
			value={{ cart, addItem, clear, cartTotal, cartTotalPrice, deleteOne }}
		>
			{children}
		</CartContext.Provider>
	);
};

export default Provider;
