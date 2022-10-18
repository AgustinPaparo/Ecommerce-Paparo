import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ItemListContainer from "./components/Containers/ItemListContainer";
import ItemDetailContainer from "./components/Containers/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import Provider from "./components/Context/Context";
import NavBar from "./components/Navbar/NavBar";
import Footer from "./components/Footer";

function App() {
	return (
		<Provider>
			<BrowserRouter>
			<NavBar/>
				<Routes>
					<Route exact path="/" element={<ItemListContainer />} />
					<Route
						exact
						path="/categorias/:tipo"
						element={<ItemListContainer />}
					/>
					<Route
						exact
						path="/productos/:id"
						element={<ItemDetailContainer />}
					/>
					<Route path={"/cart"} element={<Cart />} />
					<Route path={"/checkout"} element={<Checkout />} />
				</Routes>
				<Footer/>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
