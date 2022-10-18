import React from "react";
import ItemList from "../Item/ItemList";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import {
	collection,
	getDocs,
	getFirestore,
	query,
	where,
} from "firebase/firestore";

const ItemListContainer = () => {
	const [items, setItems] = useState([]);
	const { tipo } = useParams();

	useEffect(() => {
		const db = getFirestore();
		const itemsCollection = collection(db, "items");

		const ref = tipo
			? query(itemsCollection, where("tipo", "==", tipo))
			: itemsCollection;

		getDocs(ref).then((response) => {
			const products = response.docs.map((prod) => {
				// console.log(prod);
				return {
					id: prod.id,
					...prod.data(),
				};
			});
			setItems(products);
		});
	}, [tipo]);

	return (
		<>
			<div id="contenido" className="text-center container-fluid py-5 px-5">
				<h1>Catálogo</h1>
				<ItemList items={items} />
			</div>
		</>
	);
};
export default ItemListContainer;
