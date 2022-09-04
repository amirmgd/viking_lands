import { Container } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import Slider from "../components/Slider"

function Root() {
	return (
		<Container className='m-4'>
			<p className='d-flex justify-content-center justify-items-center'>
				welcome to viking lands, here we recommend some beautiful places from
				the lands of vikings.
			</p>

			<Slider />
			<div className='d-flex justify-content-center justify-items-center'>
				<p>
					we will show you some great places in{" "}
					<NavLink to='/norway'>Norway</NavLink>,{" "}
					<NavLink to='/denmark'>Denmark</NavLink>,{" "}
					<NavLink to='/iceland'>Iceland</NavLink> and{" "}
					<NavLink to='/sweden'>Sweden</NavLink>. If you have any place to
					recommend please do it via{" "}
					<NavLink to='/addnewplaces'>New Places</NavLink>
				</p>
			</div>
		</Container>
	)
}

export default Root
