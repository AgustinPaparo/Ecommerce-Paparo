import React, { useState, useContext,  useEffect  } from "react";
import CartWidget from "./CartWidget";
import { CartContext } from "../Context/Context";
import { Link } from "react-router-dom";

const NavBar = () => {
	const { cartTotal} = useContext(CartContext);
	const [cartState, setCartState] = useState(true);


	useEffect(()=>{
	if(cartTotal() !== 0){
		setCartState(false)
	}
	},[cartTotal()])
	


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
					<ul className="navbar-nav ">
						<li className="nav-item">
							<Link
								className="nav-link "
								aria-current="page"
								to={"/categorias/abrigos"}
							>
								Abrigos
							</Link>
						</li>
						<li className="nav-item">
							<Link
								className="nav-link "
								aria-current="page"
								to={"/categorias/accesorios"}
							>
								Accesorios
							</Link>
						</li>
						<li className="nav-item">
							<Link
								className="nav-link "
								aria-current="page"
								to={"/categorias/camisas"}
							>
								Camisas
							</Link>
						</li>
						<li className="nav-item">
							<Link
								className="nav-link "
								aria-current="page"
								to={"/categorias/calzados"}
							>
								Calzados
							</Link>
						</li>
						<li className="nav-item">
							<Link
								className="nav-link "
								aria-current="page"
								to={"/categorias/pantalones"}
							>
								Pantalones
							</Link>
						</li>
						<li className="nav-item">
							<Link
								className="nav-link "
								aria-current="page"
								to={"/categorias/remeras"}
							>
								Remeras
							</Link>
						</li>
					</ul>
				</div>
				{cartState === true ? "" : (
				<CartWidget />)}
			</div>
		</nav>
	);
};

export default NavBar;
