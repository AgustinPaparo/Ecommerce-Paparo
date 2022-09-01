import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const CartWidget = () => {
  return (
    <a href="#" className="text-white ms-4">
      <FontAwesomeIcon icon={faCartShopping} />
    </a>
  );
};
export default CartWidget;
