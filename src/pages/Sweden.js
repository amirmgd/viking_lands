import { Container } from "react-bootstrap"
import PlaceList from "../components/places/PlaceList"
import { useState, useEffect } from "react"

function Sweden() {
	const [isLoading, setIsLoading] = useState(true)
	const [loadedData, setLoadedData] = useState([])

	useEffect(() => {
		setIsLoading(true)
		fetch(
			"https://react-first-pro-418c3-default-rtdb.firebaseio.com/sweden.json"
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
				Sweden is famous around the world for lots of things: Saab and Volvo
				automobiles, the music group ABBA, pickled herring and the DIY megastore
				IKEA. It is equally as famous for its stunning scenery, picturesque
				fishing villages, being the land of reindeer and endless summer sun.
			</p>
			<p className='mx-2' style={{ textAlign: "justify" }}>
				Sweden is filled with colorful wooden buildings, traditional huts, stone
				fortresses and cathedrals, and some pretty innovative contemporary
				architecture. Whether it’s hiking trails or art museums you’re looking
				for, Sweden has it.
			</p>
			<h5 className='mb-2'>Here is some places to visit in Sweden:</h5>
			<PlaceList places={loadedData} />
		</Container>
	)
}

export default Sweden
