import React from "react";

const Item = (props) => {
  return (
    <li className="nav-item">
      <a className="nav-link active" aria-current="page" href="#">
        {props.greeting}
      </a>
    </li>
  );
};
export default Item;
