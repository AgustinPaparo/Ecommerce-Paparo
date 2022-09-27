import React from "react";
import CartSelection from "./CartSelection";

const CartSelectionContainer = ({ items, clear }) => {
	return (
		<div className="container">
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
						<CartSelection
							counter={item.counter}
							id={item.id}
							nombre={item.nombre}
							imagen={item.imagen}
							precio={item.precio}
							descripcion={item.descripcion}
							stock={item.stock}
						/>
					</tbody>
				))}
			</table>

			<button className="btn btn-danger btn-sm" onClick={clear}>
				Vaciar
			</button>
		</div>
	);
};
export default CartSelectionContainer;
