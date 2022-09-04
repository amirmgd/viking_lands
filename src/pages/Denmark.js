import { Container } from "react-bootstrap"
import PlaceList from "../components/places/PlaceList"
import { useState, useEffect } from "react"

function Denmark() {
	const [isLoading, setIsLoading] = useState(true)
	const [loadedData, setLoadedData] = useState([])

	useEffect(() => {
		setIsLoading(true)
		fetch(
			"https://react-first-pro-418c3-default-rtdb.firebaseio.com/denmark.json"
		)
			.then((response) => {
				return response.json()
			})
			.then((data) => {
				const places = []
				for (const key in data) {
					const place = {
						id: key,
						...data[key],
					}
					places.push(place)
				}

				setIsLoading(false)
				setLoadedData(places)
			})
	}, [])

	if (isLoading) {
		return (
			<Container>
				<p>Loading...</p>
			</Container>
		)
	}

	return (
		<Container>
			<h3>Here is some places to visit in Denmark</h3>
			<PlaceList places={loadedData} />
		</Container>
	)
}

export default Denmark
