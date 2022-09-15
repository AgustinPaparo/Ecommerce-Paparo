import React from "react";
import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [cantidad, setCantidad] = useState(initial);
  const [itemStock, setItemStock] = useState(stock);
  const [itemAdd, setItemAdd] = useState(onAdd);

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
      setItemAdd(itemAdd + cantidad);
    }
  };

  return (
    <div className="container card-body">
      <div className="row justify-content-center">
        <div className="col-6 ">
          <div className="input-group ">
            <input
              className="btn btn-danger col-3"
              value="-"
              onChange={()=>{}}
              onClick={() => {
                disminuirCantidad(cantidad - 1);
              }}
            />
            <input
              type="text"
              className="form-control text-center"
              value={cantidad}
              onChange={()=>{}}
            />
            <input
              className="btn btn-danger col-3"
              value="+"
              onChange={()=>{}}
              onClick={() => {
                aumentarCantidad(cantidad + 1);
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
        <p className="mb-0">Seleccionados : {itemAdd}</p>
        <p >Displonibles : {itemStock}</p>
      </div>
    </div>
  );
};

export default ItemCount;
