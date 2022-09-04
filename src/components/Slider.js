import { Carousel } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { useState } from "react"

export default function Slider() {
	const [index, setIndex] = useState(0)
	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex)
	}
	return (
		<Carousel
			style={{ width: "70%", marginLeft: "50px" }}
			activeIndex={index}
			onSelect={handleSelect}>
			<Carousel.Item>
				<NavLink to='/denmark'>
					<img
						className='d-block w-100'
						src='https://www.touropia.com/gfx/d/best-places-to-visit-in-denmark/elsinore.jpg'
						alt='Denmark'
					/>
				</NavLink>
				<Carousel.Caption>
					<h3>Denmark</h3>
					<p
						style={{
							backgroundColor: "rgba(225,224,225, 0.05)",
						}}>
						Denmark is the country where Scandinavia begins. It’s changed a lot
						over the centuries. Once known for its fierce warriors, the Vikings,
						it’s now a peaceful modern country where innovative architecture
						shares space with medieval buildings.
					</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<NavLink to='/norway'>
					<img
						className='d-block w-100'
						src='https://www.touropia.com/gfx/d/best-places-to-visit-in-norway/tromso.jpg'
						alt='Norway'
					/>
				</NavLink>
				<Carousel.Caption>
					<h3>Norway</h3>
					<p
						style={{
							backgroundColor: "rgba(225,224,225, 0.1)",
						}}>
						The home of the Vikings, Norway is a Scandinavian country whose
						boundaries encompass swathes of frozen tundra, trendy cities, and an
						extensive coastline. From its majestic mountains and famous fjords
						to its spectacular islands, Norway is simply one of the most
						beautiful countries in the world.
					</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<NavLink to='/sweden'>
					<img
						className='d-block w-100'
						src='https://www.touropia.com/gfx/d/best-places-to-visit-in-sweden/ystad.jpg'
						alt='Sweden'
					/>
				</NavLink>
				<Carousel.Caption>
					<h3>Sweden</h3>
					<p
						style={{
							backgroundColor: "rgba(225,224,225, 0.2)",
						}}>
						Sweden is filled with colorful wooden buildings, traditional huts,
						stone fortresses and cathedrals, and some pretty innovative
						contemporary architecture. Whether it’s hiking trails or art museums
						you’re looking for, Sweden has it .
					</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<NavLink to='/iceland'>
					<img
						className='d-block w-100'
						src='https://www.planetware.com/photos-large/ISL/iceland-grundarfjordur-kirkjufell.jpg'
						alt='Iceland'
					/>
				</NavLink>
				<Carousel.Caption>
					<h3>Iceland</h3>
					<p
						style={{
							backgroundColor: "rgba(225,224,225, 0.2)",
						}}>
						With their self-reliant spirit and deep sense of community, the
						Icelandic people are just as enchanting as any of the best places to
						visit in Iceland. Illuminated by the Northern Lights in the winter
						and the midnight sun in the summer, Iceland shines in any season,
						offering you a travel experience unlike anywhere else on the planet.
					</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	)
}
