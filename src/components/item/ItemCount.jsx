import React, { useEffect, useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
	const [counter, setCounter] = useState(initial);
	const [itemStock, setItemStock] = useState(stock);

	const disminuirCantidad = (valor) => {
		if (valor > 0) {
			setCounter(valor);
		}
	};
	const aumentarCantidad = (valor) => {
		if (valor <= itemStock) {
			setCounter(valor);
		}
	};
	const agregarProducto = () => {
		if (counter <= itemStock) {
			onAdd(counter);
			setItemStock(itemStock - counter);
			setCounter(itemStock - counter);
		}
	};

	useEffect(() => {
		setItemStock(stock);
	}, [stock]);

	return (
		<div className="container card-body">
			<div className="row justify-content-center">
				<div className="col-6 ">
					<div className="input-group ">
						<input
							className="btn btn-danger col-3"
							value="-"
							onChange={() => {}}
							onClick={() => {
								disminuirCantidad(counter - 1);
							}}
						/>
						<input
							type="text"
							className="form-control text-center"
							value={counter}
							onChange={() => {}}
						/>
						<input
							className="btn btn-danger col-3"
							value="+"
							onChange={() => {}}
							onClick={() => {
								aumentarCantidad(counter + 1);
							}}
						/>
					</div>
					<input
						type="button"
						className="btn btn-primary mt-2 col-12"
						value="Agregar a Carrito"
						onClick={() => {
							agregarProducto();
						}}
					/>
				</div>
				<p>Displonibles : {itemStock}</p>
			</div>
		</div>
	);
};

export default ItemCount;
