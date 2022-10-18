import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const CartSelectionContainer = ({
	items,
	clear,
	cartTotal,
	cartTotalPrice,
	deleteOne,
}) => {
	return (
		<div className="container mb-5">
			<table className="table table-striped table-light">
				<thead>
					<tr>
						<th scope="col">Producto</th>
						<th scope="col">Precio</th>
						<th scope="col">Cantidad</th>
						<th scope="col">Subtotal</th>
						<th scope="col">Eliminar?</th>
					</tr>
				</thead>
				{items.map((item) => (
					<tbody key={item.id}>
						<tr>
							<td>{item.nombre}</td>
							<td>${item.precio}</td>
							<td>{item.counter}</td>
							<td>
							${item.counter * item.precio}
							</td>
							<td>
								<button
									type="button"
									className="btn btn-danger btn-sm position-relative mx-2"
									title="Eliminar producto"
									onClick={() => {
										deleteOne(item.id);
									}}
								>
									<FontAwesomeIcon icon={faTrash} />
								</button>
							</td>
						</tr>
					</tbody>
				))}
			</table>
			<span>Seleccionaste {cartTotal()} productos --- </span>
			<span>El total a pagar es: $({cartTotalPrice()})</span>
			<button className="btn btn-danger btn-sm ms-3 " onClick={clear}>
				Vaciar
			</button>
			<Link to={"/"} title="Seguir Compra">
				<button className="btn btn-primary btn-sm ms-3 ">
					Seguir comprando{" "}
				</button>
			</Link>
			<Link to={"/checkout"} title="Finalizar Compra">
				<button className="btn btn-success btn-sm ms-3 ">
					Finalizar Compra
				</button>
			</Link>
		</div>
	);
};

export default CartSelectionContainer;
