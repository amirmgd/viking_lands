import { Container } from "react-bootstrap"
import PlaceList from "../components/places/PlaceList"
import { useState, useEffect } from "react"

function Iceland() {
	const [isLoading, setIsLoading] = useState(true)
	const [loadedData, setLoadedData] = useState([])

	useEffect(() => {
		setIsLoading(true)
		fetch(
			"https://react-first-pro-418c3-default-rtdb.firebaseio.com/iceland.json"
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
		<Container className='m-3'>
			<p className='mx-2' style={{ textAlign: "justify" }}>
				From awe-inspiring glaciers to geothermal springs and active volcanoes,
				Iceland is a place where nature always takes center stage. Even in the
				nation’s lively capital of Reykjavik, views of the sea and nearby
				mountains steal the show. Isolated from the rest of Europe for
				centuries, this land of fire and ice has a unique cultural heritage of
				literature, music and cuisine that you’ll find captivating too.
			</p>
			<p className='mx-2' style={{ textAlign: "justify" }}>
				With their self-reliant spirit and deep sense of community, the
				Icelandic people are just as enchanting as any of the best places to
				visit in Iceland. Illuminated by the Northern Lights in the winter and
				the midnight sun in the summer, Iceland shines in any season, offering
				you a travel experience unlike anywhere else on the planet.
			</p>
			<h5 className='mb-2'>Here is some places to visit in Iceland:</h5>
			<PlaceList places={loadedData} />
		</Container>
	)
}

export default Iceland
