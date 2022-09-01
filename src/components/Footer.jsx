import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  faLocationDot,
  faClock,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "../images/logo2.jpg";

const Footer = () => {
  return (
    <div className="container-fluid fondo-logo text-white pb-2">
      <div className="row">
        <div className="col-12 text-center mt-3 mb-5">
          <img
            src={Logo}
            alt="Logo de empresa"
            className="img-fluid"
            width={"300px"}
          />
        </div>
        <div className="col-6 text-center">
          <h4 className="mb-3">Encontranos en nuestras Redes!</h4>
          <a href="https://www.facebook.com/elizaldenegociosinmobiliarios">
            <FontAwesomeIcon icon={faFacebook} /> Facebook
          </a>
          <br />
          <a href="https://www.instagram.com/elizalde_asociados/">
            <FontAwesomeIcon icon={faInstagram} /> Instagram
          </a>
        </div>
        <div className="col-6 text-center">
          <h4 className="mb-3">Oficina central</h4>
          <p>
            <FontAwesomeIcon icon={faLocationDot} /> 9 de Julio 1680,
            Corrientes, Argentina
          </p>
          <p>
            <FontAwesomeIcon icon={faClock} /> De Lunes a Viernes de 9:00 hs a
            17:00hs
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} />{" "}
            inmobiliaria@elizaldeasociados.com.ar
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} /> +54 9 3794 80-3211
          </p>
        </div>
      </div>
      <div className="row mt-3">
        <p className="text-center">Reservado los derechos de Copyrigth Ⓒ</p>
      </div>
    </div>
  );
};

export default Footer;
