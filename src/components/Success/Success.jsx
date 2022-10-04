import React from "react";
import { Link } from "react-router-dom";

const Success = ({ id }) => {
	return (
		<div className="row ">
			<div className="col-md-12 text-center p-5">
				<h1>Felicitaciones!</h1>
				<p>
					La Orden de Compra de Compra se generó con el ID: <b>{id}</b>
				</p>
				<Link to={"/"} title="Finalizar Compra">
					<button className="btn btn-success btn-sm ms-3 ">
						Volver al inicio
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Success;
