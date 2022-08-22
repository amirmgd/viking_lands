import { Container } from "react-bootstrap"
import { useContext } from "react"
import FavContext from "../store/favorites-context"
import PlaceList from "../components/places/PlaceList"

function Favorite() {
	const favoritesContext = useContext(FavContext)
	let content
	if (favoritesContext.favoriteCount === 0) {
		content = (
			<p className='mx-4'>
				You don't have any favorite places yo visit yet,try ad some
			</p>
		)
	} else {
		content = <PlaceList places={favoritesContext.favorite} />
	}
	return (
		<Container>
			<h5>Your favorite places to visit:</h5>
			{content}
		</Container>
	)
}

export default Favorite
