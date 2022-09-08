import React from "react";
import ItemList from "./ItemList";
import { useEffect } from "react";
import { useState } from "react";
import imagen1 from "../images/gorro.webp";
import imagen2 from "../images/remerabasica.webp";
import imagen3 from "../images/remeramlarga.webp";
import imagen4 from "../images/sweter.webp";
import imagen5 from "../images/buzo.webp";
import imagen6 from "../images/parka.webp";
import imagen7 from "../images/camisamcorta.webp";
import imagen8 from "../images/remeracestampa.webp";
import imagen9 from "../images/camisamlarga.webp";
import imagen10 from "../images/remeramlarga.webp";
import imagen11 from "../images/borcego.webp";
import imagen12 from "../images/jean.webp";

const ItemListContainer = () => {
	const [items, setItems] = useState([]);
	useEffect(() => {
		const productos = [
			{
				precio: 1000,
				id: 1,
				nombre: "Gorro",
				imagen: imagen1,
				tipo: "Accesorios",
				descripcion:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum culpa non mollitia eveniet soluta amet, ea expedita maxime commodi voluptatibus provident eos delectus saepe totam? Quia id maiores error numquam?",
				stock: 6,
			},
			{
				precio: 2000,
				id: 2,
				nombre: "Remera",
				imagen: imagen2,
				tipo: "Remeras",
				descripcion:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum culpa non mollitia eveniet soluta amet, ea expedita maxime commodi voluptatibus provident eos delectus saepe totam? Quia id maiores error numquam?",
				stock: 5,
			},
			{
				precio: 3000,
				id: 3,
				nombre: "Polera",
				imagen: imagen3,
				tipo: "Abrigos",
				descripcion:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum culpa non mollitia eveniet soluta amet, ea expedita maxime commodi voluptatibus provident eos delectus saepe totam? Quia id maiores error numquam?",
				stock: 2,
			},
			{
				precio: 10000,
				id: 4,
				nombre: "Sweater",
				imagen: imagen4,
				tipo: "Abrigos",
				descripcion:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum culpa non mollitia eveniet soluta amet, ea expedita maxime commodi voluptatibus provident eos delectus saepe totam? Quia id maiores error numquam?",
				stock: 4,
			},
			{
				precio: 11000,
				id: 5,
				nombre: "Buzo",
				imagen: imagen5,
				tipo: "Abrigos",
				descripcion:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum culpa non mollitia eveniet soluta amet, ea expedita maxime commodi voluptatibus provident eos delectus saepe totam? Quia id maiores error numquam?",
				stock: 3,
			},
			{
				precio: 16000,
				id: 6,
				nombre: "Campera",
				imagen: imagen6,
				tipo: "Abrigos",
				descripcion:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum culpa non mollitia eveniet soluta amet, ea expedita maxime commodi voluptatibus provident eos delectus saepe totam? Quia id maiores error numquam?",
				stock: 0,
			},
			{
				precio: 3500,
				id: 7,
				nombre: "Camisa mangas cortas",
				imagen: imagen7,
				tipo: "Camisas",
				descripcion:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum culpa non mollitia eveniet soluta amet, ea expedita maxime commodi voluptatibus provident eos delectus saepe totam? Quia id maiores error numquam?",
				stock: 1,
			},
			{
				precio: 2500,
				id: 8,
				nombre: "Remera Estampada",
				imagen: imagen8,
				tipo: "Remeras",
				descripcion:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum culpa non mollitia eveniet soluta amet, ea expedita maxime commodi voluptatibus provident eos delectus saepe totam? Quia id maiores error numquam?",
				stock: 7,
			},
			{
				precio: 4000,
				id: 9,
				nombre: "Camisa mangas largas",
				imagen: imagen9,
				tipo: "Camisas",
				descripcion:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum culpa non mollitia eveniet soluta amet, ea expedita maxime commodi voluptatibus provident eos delectus saepe totam? Quia id maiores error numquam?",
				stock: 3,
			},
			{
				precio: 2750,
				id: 10,
				nombre: "Remera mangas largas",
				imagen: imagen10,
				tipo: "Remeras",
				descripcion:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum culpa non mollitia eveniet soluta amet, ea expedita maxime commodi voluptatibus provident eos delectus saepe totam? Quia id maiores error numquam?",
				stock: 2,
			},
			{
				precio: 12000,
				id: 11,
				nombre: "Borcego",
				imagen: imagen11,
				tipo: "Calzados",
				descripcion:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum culpa non mollitia eveniet soluta amet, ea expedita maxime commodi voluptatibus provident eos delectus saepe totam? Quia id maiores error numquam?",
				stock: 4,
			},
			{
				precio: 9000,
				id: 12,
				nombre: "Jean",
				imagen: imagen12,
				tipo: "Pantalones",
				descripcion:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum culpa non mollitia eveniet soluta amet, ea expedita maxime commodi voluptatibus provident eos delectus saepe totam? Quia id maiores error numquam?",
				stock: 3,
			},
		];

		const promesa = new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(productos);
			}, 2000);
		});

		promesa.then((respuesta) => {
			setItems(respuesta);
		});
	}, []);

	return (
		<div className="container my-5">
			<ItemList items={items} />
		</div>
	);
};
export default ItemListContainer;
