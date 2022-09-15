import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { products } from "../Json/products";
import ItemDetail from "../Item/ItemDetail";
import NavBar from "../Navbar/NavBar";
import Footer from "../Footer";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
	const [item, setItem] = useState({});
	const { id } = useParams();

	useEffect(() => {
		const getProduct = new Promise((res, fail) => {
			const product = products.find((prod) => prod.id == id);
			setTimeout(() => {
				res(product);
			}, 500);
		});
		getProduct.then((prod) => {
			setItem(prod);
		});
	}, [id]);

	return (
		<>
			<NavBar />

			<div className="container">
				<div className="row">
					<h1 className="text-center mb-5">Detalle del Producto:</h1>
				</div>
				<ItemDetail item={item} />
			</div>

			<Footer />
		</>
	);
};
export default ItemDetailContainer;
