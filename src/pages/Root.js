import { Container, Carousel } from "react-bootstrap"
import { NavLink } from "react-router-dom"

function Root() {
	return (
		<Container className='m-5'>
			<p>
				welcome to viking lands, here we recommend some beautiful places from
				the lands of vikings.
			</p>
			<Carousel style={{ width: "70%", marginLeft: "50px" }}>
				<Carousel.Item>
					<img
						className='d-block w-100'
						src='https://t4.ftcdn.net/jpg/02/89/38/41/360_F_289384108_fyDlnvX03W7WDaFPfQ6aPY8KgLTY93Yf.jpg'
						alt='First slide'
					/>
					<Carousel.Caption>
						<h3>First slide label</h3>
						<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className='d-block w-100'
						src='https://t4.ftcdn.net/jpg/02/89/38/41/360_F_289384108_fyDlnvX03W7WDaFPfQ6aPY8KgLTY93Yf.jpg'
						alt='Second slide'
					/>

					<Carousel.Caption>
						<h3>Second slide label</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className='d-block w-100'
						src='https://t4.ftcdn.net/jpg/02/89/38/41/360_F_289384108_fyDlnvX03W7WDaFPfQ6aPY8KgLTY93Yf.jpg'
						alt='Third slide'
					/>

					<Carousel.Caption>
						<h3>Third slide label</h3>
						<p>
							Praesent commodo cursus magna, vel scelerisque nisl consectetur.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
			<p>
				we will show you some great places in{" "}
				<NavLink to='/norway'>Norway</NavLink>,{" "}
				<NavLink to='/denmark'>Denmark</NavLink>,{" "}
				<NavLink to='/iceland'>Iceland</NavLink> and{" "}
				<NavLink to='/sweden'>Sweden</NavLink>.
			</p>
			<p>
				If you have any place to recommend please do it via{" "}
				<NavLink to='/addnewplaces'>New Places</NavLink>
			</p>
		</Container>
	)
}

export default Root
