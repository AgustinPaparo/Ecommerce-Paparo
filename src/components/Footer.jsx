import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
	faLocationDot,
	faClock,
	faEnvelope,
	faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<div className="container-fluid fondo-logo text-white pb-2">
			<div className="row">
				<div className="col-6 text-center">
					<h4 className="mb-3">Encontranos en nuestras Redes!</h4>
					<Link href="https://www.facebook.com/">
						<FontAwesomeIcon icon={faFacebook} /> Facebook
					</Link>
					<br />
					<Link href="https://www.instagram.com//">
						<FontAwesomeIcon icon={faInstagram} /> Instagram
					</Link>
					<br />
					<Link href="https://www.instagram.com//">
						<FontAwesomeIcon icon={faTwitter} /> Twitter
					</Link>
					<br />
					<Link href="https://www.instagram.com//">
						<FontAwesomeIcon icon={faLinkedin} /> Linkedin
					</Link>
				</div>
				<div className="col-6 text-center">
					<h4 className="mb-3">Oficina central</h4>
					<p>
						<FontAwesomeIcon icon={faLocationDot} /> 9 de Julio 1680,
						Corrientes, Argentina
					</p>
					<p>
						<FontAwesomeIcon icon={faClock} /> De Lunes Link Viernes de 9:00 hs Link
						17:00hs
					</p>
					<p>
						<FontAwesomeIcon icon={faEnvelope} /> 
						 example@example.com.ar
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
