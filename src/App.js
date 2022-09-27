import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/Containers/ItemListContainer";
import ItemDetailContainer from "./components/Containers/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import Provider from "./components/Context/Context";

function App() {
	return (
		<Provider>
			<BrowserRouter>
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
					<Route path={"/menu"} element={<ItemListContainer />} />
					<Route path={"/checkout"} element={<Checkout />} />
				</Routes>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
