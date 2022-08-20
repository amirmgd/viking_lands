import { Container } from "react-bootstrap"
import { Routes, Route } from "react-router-dom"
import Root from "./pages/Root"
import Denmark from "./pages/Denmark"
import Sweden from "./pages/Sweden"
import Iceland from "./pages/Iceland"
import Norway from "./pages/Norway"
import Favorite from "./pages/Favorites"
import AddNewPlaces from "./pages/AddNewPlaces"
import Navigation from "./components/Navigation"

function App() {
	return (
		<>
			<Navigation />
			<Container>
				<Routes>
					<Route path='/' element={<Root />} />
					<Route path='/denmark' element={<Denmark />} />
					<Route path='/norway' element={<Norway />} />
					<Route path='/sweden' element={<Sweden />} />
					<Route path='/iceland' element={<Iceland />} />
					<Route path='/favorites' element={<Favorite />} />
					<Route path='/addnewplaces' element={<AddNewPlaces />} />
				</Routes>
			</Container>
		</>
	)
}

export default App
