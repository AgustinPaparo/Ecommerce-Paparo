import React from "react";

const ItemListNav = (props) => {
  return (
    <li className="nav-item">
      <a className="nav-link " aria-current="page" href="#">
        {props.nav}
      </a>
    </li>
  );
};
export default ItemListNav;
