import React from "react";
import ItemListNav from "./ItemListNav";
import CartWidget from "./CartWidget";

const NavBar = () => {
	return (
		<nav className="navbar navbar-expand-lg">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">
					Nombre de la marca
				</a>
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
					<ul className="navbar-nav ">
						<ItemListNav nav="Inicio" />
						<ItemListNav nav="Catálogo" />
						<ItemListNav nav="Quienes Somos?" />
						<ItemListNav nav="Contacto" />
					</ul>
				</div>
				<CartWidget />
			</div>
		</nav>
	);
};

export default NavBar;
