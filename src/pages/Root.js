import { Container } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import Slider from "../components/Slider"

function Root() {
	return (
		<Container className='m-5'>
			<p>
				welcome to viking lands, here we recommend some beautiful places from
				the lands of vikings.
			</p>

			<Slider />
			<div className='m-3' style={{ position: "inherit" }}>
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
			</div>
		</Container>
	)
}

export default Root
