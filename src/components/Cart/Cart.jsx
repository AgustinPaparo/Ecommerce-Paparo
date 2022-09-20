import React from "react";
import Footer from "../Footer";
import NavBar from "../Navbar/NavBar";

const Cart = () => {
    return (
    <>
    <NavBar/>
    <div className="container-fluid text-center" >
        <h1>Productos seleccionados:</h1>
    </div>
    <Footer/>
    </>
    )
}

export default Cart;