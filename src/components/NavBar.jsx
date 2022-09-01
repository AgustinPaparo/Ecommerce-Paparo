import React from "react";
import Logo from "../images/logo.png";
import ItemListNav from "./ItemListNav"
import CartWidget from "./CartWidget"

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img
            src={Logo}
            alt="Elizalde-Asociados-Logo"
            width="40"
            className="me-2 d-inline-block img-fluid "
          />
          Elizalde-Asociados
        </a>
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
            {/* <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Inicio
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="#">
                Alquileres
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Ventas
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Quienes Somos?
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contacto
              </a>
            </li> */}
            <ItemListNav  nav="Inicio"/> 
            <ItemListNav  nav="Alquileres"/> 
            <ItemListNav  nav="Ventas"/> 
            <ItemListNav  nav="Quienes Somos?"/> 
            <ItemListNav  nav="Contacto"/> 
          </ul>
        </div>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
