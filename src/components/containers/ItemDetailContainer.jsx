import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemDetail from "../Item/ItemDetail";
import { useParams } from "react-router-dom";
import { collection, doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
	const [item, setItem] = useState({});
	const { id } = useParams();

	useEffect(() => {
		const db = getFirestore();
		const itemsCollection = collection(db, "items");
		const ref = doc(itemsCollection, id);
		getDoc(ref).then((snapShot) => {
			setItem({ id: snapShot.id, ...snapShot.data() });
		});
	}, [id]);

	return (
		<>
			<div className="container">
				<div className="row">
					<h1 className="text-center mb-5">Detalle del Producto:</h1>
				</div>
				<ItemDetail item={item} />
			</div>
		</>
	);
};
export default ItemDetailContainer;
