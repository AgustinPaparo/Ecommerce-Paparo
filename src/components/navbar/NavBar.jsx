import React, { useState, useContext, useEffect, useMemo } from "react";
import { NavLink, Link } from "react-router-dom";
import { collection, getDocs, getFirestore } from "firebase/firestore";

import CartWidget from "./CartWidget";
import { CartContext } from "../Context/Context";

const NavBar = () => {
	const { cartTotal } = useContext(CartContext);
	const [cartState, setCartState] = useState(true);
	const [cat, setCat] = useState([]);

	useEffect(() => {
		if (cartTotal() !== 0) {
			setCartState(false);
		} else {
			setCartState(true);
		}
	}, [cartTotal]);

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
					<ul className="nav ">
						{cat.map((categorias) => {
							return (
								<li className="nav-item" key={categorias.id}>
									<NavLink
										className="nav-link text-white"
										to={`/categorias/${categorias.tipo}`}
									>
										{categorias.name}
									</NavLink>
								</li>
							);
						})}
					</ul>
				</div>
				{cartState === true ? "" : <CartWidget />}
			</div>
		</nav>
	);
};

export default NavBar;
