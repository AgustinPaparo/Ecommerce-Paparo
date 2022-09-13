import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { products } from "../json/products";
import ItemDetail from "../item/ItemDetail";

const ItemDetailContainer = () => {
	const [item, setItem] = useState({});

	useEffect(() => {
		const getProduct = () =>
			new Promise((a, b) => {
				const product = products.find((prod) => prod.id === 6);
				setTimeout(() => {
					a(product);
				}, 2000);
			});

		getProduct()
			.then((data) => {
				setItem(data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<div className="container">
			<div className="row">
			<h1 className="text-center mb-5">Detalle del Producto:</h1>
			</div>
			<div className="row">
			<ItemDetail item={item} />
			</div>
		</div>
	);
};
export default ItemDetailContainer;
