import { Container, Card, CardGroup, Button } from "react-bootstrap"
import { useContext } from "react"
import FavContext from "../../store/favorites-context"
function PlaceCard(props) {
	const favorite = useContext(FavContext)
	const itemIsFav = favorite.itemIsFav(props.id)

	function toggleFavorite() {
		if (itemIsFav) {
			favorite.removeFav(props.id)
		} else {
			favorite.addFav({
				id: props.id,
				title: props.title,
				image: props.image,
				description: props.description,
			})
		}
	}

	return (
		<Container>
			<CardGroup>
				<Card style={{ border: "none", backgroundColor: "#E9E8E9" }}>
					<Card.Title>{props.title}</Card.Title>
					<Card.Img src={props.image} alt={props.title}></Card.Img>
					<Card.Body>
						<Card.Text style={{ textAlign: "justify" }}>
							{props.description}
						</Card.Text>
					</Card.Body>
					<Card.Footer style={{ border: "none", backgroundColor: "#E9E8E9" }}>
						<Button className='favbutton' size='sm' onClick={toggleFavorite}>
							{itemIsFav ? "Remove from favorite" : "Add to Favorite"}
						</Button>
					</Card.Footer>
				</Card>
			</CardGroup>
		</Container>
	)
}

export default PlaceCard
