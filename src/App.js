import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/Containers/ItemListContainer";
import ItemDetailContainer from "./components/Containers/ItemDetailContainer";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<ItemListContainer />} />
				<Route exact path="/categorias/:tipo" element={<ItemListContainer />} />
				<Route exact path="/productos/:id" element={<ItemDetailContainer />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
