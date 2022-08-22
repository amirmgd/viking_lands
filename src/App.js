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
import { FavoriteContextProvider } from "./store/favorites-context"

function App() {
	return (
		<FavoriteContextProvider>
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
		</FavoriteContextProvider>
	)
}

export default App
