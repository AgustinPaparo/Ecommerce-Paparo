import React from "react";
import ItemList from "../Item/ItemList";
import { useEffect } from "react";
import { useState } from "react";
import NavBar from "../Navbar/NavBar";
import Footer from "../Footer";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ categoria }) => {
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

		const productos = [
			{
				precio: 1000,
				id: 1,
				nombre: "Gorro",
				imagen: "../images/gorro.webp",
				tipo: "Accesorios",
				descripcion:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum culpa non mollitia eveniet soluta amet, ea expedita maxime commodi voluptatibus provident eos delectus saepe totam? Quia id maiores error numquam?",
				stock: [
					{ talle: "S", cantidad: 6 },
					{ talle: "M", cantidad: 6 },
					{ talle: "L", cantidad: 5 },
				],
			},
			{
				precio: 2000,
				id: 2,
				nombre: "Remera",
				imagen: "../images/remerabasica.webp",
				tipo: "Remeras",
				descripcion:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum culpa non mollitia eveniet soluta amet, ea expedita maxime commodi voluptatibus provident eos delectus saepe totam? Quia id maiores error numquam?",
				stock: [
					{ talle: "S", cantidad: 3 },
					{ talle: "M", cantidad: 4 },
					{ talle: "L", cantidad: 3 },
				],
			},
			{
				precio: 3000,
				id: 3,
				nombre: "Polera",
				imagen: "../images/remeramlarga.webp",
				tipo: "Abrigos",
				descripcion:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum culpa non mollitia eveniet soluta amet, ea expedita maxime commodi voluptatibus provident eos delectus saepe totam? Quia id maiores error numquam?",
				stock: [
					{ talle: "S", cantidad: 0 },
					{ talle: "M", cantidad: 1 },
					{ talle: "L", cantidad: 2 },
				],
			},
			{
				precio: 10000,
				id: 4,
				nombre: "Sweater",
				imagen: "../images/sweter.webp",
				tipo: "Abrigos",
				descripcion:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum culpa non mollitia eveniet soluta amet, ea expedita maxime commodi voluptatibus provident eos delectus saepe totam? Quia id maiores error numquam?",
				stock: [
					{ talle: "S", cantidad: 6 },
					{ talle: "M", cantidad: 7 },
					{ talle: "L", cantidad: 2 },
				],
			},
			{
				precio: 11000,
				id: 5,
				nombre: "Buzo",
				imagen: "../images/buzo.webp",
				tipo: "Abrigos",
				descripcion:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum culpa non mollitia eveniet soluta amet, ea expedita maxime commodi voluptatibus provident eos delectus saepe totam? Quia id maiores error numquam?",
				stock: [
					{ talle: "S", cantidad: 4 },
					{ talle: "M", cantidad: 0 },
					{ talle: "L", cantidad: 2 },
				],
			},
			{
				precio: 16000,
				id: 6,
				nombre: "Campera",
				imagen: "../images/parka.webp",
				tipo: "Abrigos",
				descripcion:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum culpa non mollitia eveniet soluta amet, ea expedita maxime commodi voluptatibus provident eos delectus saepe totam? Quia id maiores error numquam?",
				stock: [
					{ talle: "S", cantidad: 8 },
					{ talle: "M", cantidad: 3 },
					{ talle: "L", cantidad: 1 },
				],
			},
			{
				precio: 3500,
				id: 7,
				nombre: "Camisa mangas cortas",
				imagen: "../images/camisamcorta.webp",
				tipo: "Camisas",
				descripcion:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum culpa non mollitia eveniet soluta amet, ea expedita maxime commodi voluptatibus provident eos delectus saepe totam? Quia id maiores error numquam?",
				stock: [
					{ talle: "S", cantidad: 3 },
					{ talle: "M", cantidad: 6 },
					{ talle: "L", cantidad: 7 },
				],
			},
			{
				precio: 2500,
				id: 8,
				nombre: "Remera Estampada",
				imagen: "../images/remeracestampa.webp",
				tipo: "Remeras",
				descripcion:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum culpa non mollitia eveniet soluta amet, ea expedita maxime commodi voluptatibus provident eos delectus saepe totam? Quia id maiores error numquam?",
				stock: [
					{ talle: "S", cantidad: 0 },
					{ talle: "M", cantidad: 2 },
					{ talle: "L", cantidad: 6 },
				],
			},
			{
				precio: 4000,
				id: 9,
				nombre: "Camisa mangas largas",
				imagen: "../images/camisamlarga.webp",
				tipo: "Camisas",
				descripcion:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum culpa non mollitia eveniet soluta amet, ea expedita maxime commodi voluptatibus provident eos delectus saepe totam? Quia id maiores error numquam?",
				stock: [
					{ talle: "S", cantidad: 3 },
					{ talle: "M", cantidad: 9 },
					{ talle: "L", cantidad: 1 },
				],
			},
			{
				precio: 2750,
				id: 10,
				nombre: "Remera mangas largas",
				imagen: "../images/remeramlarga.webp",
				tipo: "Remeras",
				descripcion:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum culpa non mollitia eveniet soluta amet, ea expedita maxime commodi voluptatibus provident eos delectus saepe totam? Quia id maiores error numquam?",
				stock: [
					{ talle: "S", cantidad: 0 },
					{ talle: "M", cantidad: 5 },
					{ talle: "L", cantidad: 3 },
				],
			},
			{
				precio: 12000,
				id: 11,
				nombre: "Borcego",
				imagen: "../images/borcego.webp",
				tipo: "Calzados",
				descripcion:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum culpa non mollitia eveniet soluta amet, ea expedita maxime commodi voluptatibus provident eos delectus saepe totam? Quia id maiores error numquam?",
				stock: [
					{ talle: "S", cantidad: 2 },
					{ talle: "M", cantidad: 2 },
					{ talle: "L", cantidad: 3 },
				],
			},
			{
				precio: 9000,
				id: 12,
				nombre: "Jean",
				imagen: "../images/jean.webp",
				tipo: "Pantalones",
				descripcion:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum culpa non mollitia eveniet soluta amet, ea expedita maxime commodi voluptatibus provident eos delectus saepe totam? Quia id maiores error numquam?",
				stock: [
					{ talle: "S", cantidad: 4 },
					{ talle: "M", cantidad: 3 },
					{ talle: "L", cantidad: 0 },
				],
			},
		];
		const promesa = new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(productos);
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
	}, [categoria]);

	return (
		<>
			<NavBar />
			<div id="contenido" className="text-center container-fluid py-5 px-5">
				<h1>Todos los prouctos</h1>
				<ItemList items={items} />
			</div>
			<Footer />
		</>
	);
};
export default ItemListContainer;
