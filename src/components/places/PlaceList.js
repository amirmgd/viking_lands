import { Container } from "react-bootstrap"
import PlaceCard from "./PlaceCard"

function PlaceList(props) {
	return (
		<Container>
			{props.places.map((place) => (
				<PlaceCard
					id={place.id}
					title={place.title}
					image={place.image}
					description={place.description}
					country={place.country}
				/>
			))}
		</Container>
	)
}

export default PlaceList
