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
			className='d-flex justify-content-center justify-items-center'
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
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	)
}
