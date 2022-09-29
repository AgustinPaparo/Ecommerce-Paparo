import React, { useState, useContext, useEffect } from "react";
import CartWidget from "./CartWidget";
import { CartContext } from "../Context/Context";
import { Link, NavLink } from "react-router-dom";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useMemo } from "react";

const NavBar = () => {
	const { cartTotal } = useContext(CartContext);
	const [cartState, setCartState] = useState(true);
	const [cat, setCat] = useState([]);

	useEffect(() => {
		if (cartTotal() !== 0) {
			setCartState(false);
		}
	}, [cartTotal()]);

	useMemo(() => {
		const db = getFirestore();
		const CatCollection = collection(db, "categories");

		getDocs(CatCollection).then((resp) => {
			const categories = resp.docs.map((cat) => {
				return {
					id: cat.id,
					...cat.data(),
				};
			});
			setCat(categories);
		});
	}, []);

	console.log(cat)

	return (
		<nav className="navbar navbar-expand-lg">
			<div className="container-fluid">
				<Link className="navbar-brand" to={"/"}>
					Nombre de la marca
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className="collapse navbar-collapse d-flex justify-content-end "
					id="navbarNav"
				>
					{/* AL AGREGAR EL MAP SE ME ROMPIO MI NAVBAR :'(  */}
					{/* No logro encontrar el error, cat me esta cargando bien */}
					<ul className="nav ">
						{cat.map((categorias) => {
							<li className="nav-item text-white">
							<Link
								key={categorias.id}
								className="nav-link "
								to={`/categorias/${categorias.tipo}`}
							>
								{categorias.name}
							</Link>
							</li>;
						})}
					</ul>
				</div>
				{cartState === true ? "" : <CartWidget />}
			</div>
		</nav>
	);
};

export default NavBar;
