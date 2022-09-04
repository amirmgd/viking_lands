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
		<Container className='m-3'>
			<p className='mx-2' style={{ textAlign: "justify" }}>
				Denmark is the country where Scandinavia begins. It’s changed a lot over
				the centuries. Once known for its fierce warriors, the Vikings, it’s now
				a peaceful modern country where innovative architecture shares space
				with medieval buildings. You’ll see picturesque fishing villages that
				trace their heritage back to the Vikings, so you’ll want to sample their
				most famous fish, the herring, perhaps at a smørrebrød. Denmark is the
				land of Hans Christian Andersen, so you’ll find palaces and castles
				where maybe fairy tales did come true.
			</p>
			<h5 className='mb-2'>Here is some places to visit in Denmark:</h5>
			<PlaceList places={loadedData} />
		</Container>
	)
}

export default Denmark
