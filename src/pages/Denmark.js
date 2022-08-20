import { Container } from "react-bootstrap"
import PlaceList from "../components/places/PlaceList"

const DUMMY_DATA = [
	{
		id: "d1",
		title: "Gilleleje",
		description:
			"You wouldn’t think a country as far north as Denmark would have a Riviera, but it does. The Danish Riviera is anchored by Gilleleje, a picturesque fishing town on the North Sea at the top of Zealand. Fishermen put their boats to good use in World War II when they end-runned German occupiers and smuggled Danish Jews into Sweden, just 25 km (15 miles) away. You can learn more about these efforts at the local museum. Founded in the 14th century, Gilleleje is pretty and charming with photo opportunities galore. Stroll the city, take in the daily morning fish auction and visit the monument to Kierkegaard, the first existential philosopher.",
		image:
			"https://www.touropia.com/gfx/d/best-places-to-visit-in-denmark/gilleleje.jpg",
	},
	{
		id: "d1",
		title: "Gilleleje",
		description:
			"You wouldn’t think a country as far north as Denmark would have a Riviera, but it does. The Danish Riviera is anchored by Gilleleje, a picturesque fishing town on the North Sea at the top of Zealand. Fishermen put their boats to good use in World War II when they end-runned German occupiers and smuggled Danish Jews into Sweden, just 25 km (15 miles) away. You can learn more about these efforts at the local museum. Founded in the 14th century, Gilleleje is pretty and charming with photo opportunities galore. Stroll the city, take in the daily morning fish auction and visit the monument to Kierkegaard, the first existential philosopher.",
		image:
			"https://www.touropia.com/gfx/d/best-places-to-visit-in-denmark/gilleleje.jpg",
	},
]
function Denmark() {
	return (
		<Container>
			<h3>Here is some places to visit in Denmark</h3>
			<PlaceList places={DUMMY_DATA} />
		</Container>
	)
}

export default Denmark
