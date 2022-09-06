import React from "react";
import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [cantidad, setCantidad] = useState(initial);
  const [itemStock, setItemStock] = useState(stock);
  const [ItemAdd, setItemAdd] = useState(onAdd);

  const disminuirCantidad = (valor) => {
    if (valor > 0) {
      setCantidad(valor);
    }
  };
  const aumentarCantidad = (valor) => {
    if (valor <= itemStock) {
      setCantidad(valor);
    }
  };
  const agregarProducto = () => {
    if (cantidad <= itemStock) {
      setItemStock(itemStock - cantidad);
      setItemAdd(ItemAdd + cantidad);
    }
  };

  return (
    <div className="container py-5 text-center">
      <div className="row justify-content-center">
        <div className="col-4 ">
          <h5>Nombre del Producto</h5>
          <div className="input-group ">
            <input
              className="btn btn-danger col-3"
              value="-"
              onClick={() => {
                disminuirCantidad(cantidad - 1);
              }}
            />
            <input
              type="text"
              className="form-control text-center"
              value={cantidad}
            />
            <input
              className="btn btn-danger col-3"
              value="+"
              onClick={() => {
                aumentarCantidad(cantidad + 1);
              }}
            />
          </div>
          <input
            type="button"
            className="btn btn-primary mt-2"
            value="Agregar a Carrito"
            onClick={() => {
              agregarProducto();
            }}
          />
        </div>
        <p>Displonibles : {itemStock}</p>
        <p>Seleccionados : {ItemAdd}</p>
      </div>
    </div>
  );
};

export default ItemCount;
