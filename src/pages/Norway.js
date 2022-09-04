import { Container } from "react-bootstrap"
import PlaceList from "../components/places/PlaceList"
import { useState, useEffect } from "react"
function Norway() {
	const [isLoading, setIsLoading] = useState(true)
	const [loadedData, setLoadedData] = useState([])

	useEffect(() => {
		setIsLoading(true)
		fetch(
			"https://react-first-pro-418c3-default-rtdb.firebaseio.com/norway.json"
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
				The home of the Vikings, Norway is a Scandinavian country whose
				boundaries encompass swathes of frozen tundra, trendy cities, and an
				extensive coastline. From its majestic mountains and famous fjords to
				its spectacular islands, Norway is simply one of the most beautiful
				countries in the world.
			</p>
			<p className='mx-2' style={{ textAlign: "justify" }}>
				Whether taking in the breathtaking wonder of the northern lights or the
				summer sun glistening on a massive glacier, Norway is a great adventure
				in any season. You could go whale watching in Tromsø, spot polar bears
				and walruses in Svalbard, or even try out the country’s top hiking,
				cycling and skiing destinations.
			</p>
			<p className='mx-2' style={{ textAlign: "justify" }}>
				While daylight may be limited during the winter months, Norway’s cities
				are alive with sophisticated style and an energetic vibrancy. The Viking
				capital of Trondheim encompasses the country’s historical side, Bergen
				is where to go to glimpse colorful wooden houses, and the chic capital
				Oslo is home to laid-back living, city parks, and a lively dining scene.
			</p>
			<h5 className='mb-2'>Here is some places to visit in Norway:</h5>
			<PlaceList places={loadedData} />
		</Container>
	)
}

export default Norway
