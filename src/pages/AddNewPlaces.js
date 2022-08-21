import { Container } from "react-bootstrap"
import PlaceForm from "../components/places/PlaceForm"
import { useNavigate } from "react-router-dom"

function AddNewPlaces() {
	const navigate = useNavigate()

	function addPlacesHandler(placeData) {
		if (placeData.country.toLowerCase() === "denmark") {
			fetch(
				"https://react-first-pro-418c3-default-rtdb.firebaseio.com/denmark.json",
				{
					method: "Post",
					body: JSON.stringify(placeData),
				}
			).then(() => {
				navigate("/denmark", { replace: true })
			})
		} else if (placeData.country.toLowerCase() === "iceland") {
			fetch(
				"https://react-first-pro-418c3-default-rtdb.firebaseio.com/iceland.json",
				{
					method: "Post",
					body: JSON.stringify(placeData),
				}
			).then(() => {
				navigate("/iceland", { replace: true })
			})
		} else if (placeData.country.toLowerCase() === "norway") {
			fetch(
				"https://react-first-pro-418c3-default-rtdb.firebaseio.com/norway.json",
				{
					method: "Post",
					body: JSON.stringify(placeData),
				}
			).then(() => {
				navigate("/norway", { replace: true })
			})
		} else if (placeData.country.toLowerCase() === "sweden") {
			fetch(
				"https://react-first-pro-418c3-default-rtdb.firebaseio.com/sweden.json",
				{
					method: "Post",
					body: JSON.stringify(placeData),
				}
			).then(() => {
				navigate("/sweden", { replace: true })
			})
		} else {
		}
	}

	return (
		<Container>
			Feel free to add some to places for our viewers to visit
			<PlaceForm onAddPlaces={addPlacesHandler} />
		</Container>
	)
}

export default AddNewPlaces
