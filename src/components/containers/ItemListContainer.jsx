import React from "react";
import ItemList from "../Item/ItemList";
import { useEffect } from "react";
import { useState } from "react";
import NavBar from "../Navbar/NavBar";
import Footer from "../Footer";
import { useParams } from "react-router-dom";
import {products} from '../Json/products'

const ItemListContainer = () => {
	const [items, setItems] = useState([]);
	const{tipo} = useParams();

	useEffect(() => {
		let categoria = ""
		if (tipo === "abrigos") {
			categoria = "Abrigos";
		} else if (tipo === "accesorios") {
			categoria = "Accesorios";
		} else if (tipo === "camisas") {
			categoria = "Camisas";
		} else if (tipo === "calzados") {
			categoria = "Calzados";
		} else if (tipo === "pantalones") {
			categoria ="Pantalones";
		} else if (tipo === "remeras") {
			categoria = "Remeras";
		} else {
			categoria = "all";
		}

		console.log(categoria);

		const promesa = new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(products);
			}, 500);
		});

		promesa.then((respuesta) => {
			if (categoria === "all") {
				setItems(respuesta);
			} else {
				const array_productos = respuesta.filter(
					(producto) => producto.tipo === categoria
				);
				setItems(array_productos);
			}
		});
	}, [tipo]);

	return (
		<>
			<NavBar />
			<div id="contenido" className="text-center container-fluid py-5 px-5">
				<h1>Catálogo</h1>
				<ItemList items={items} />
			</div>
			<Footer />
		</>
	);
};
export default ItemListContainer;
