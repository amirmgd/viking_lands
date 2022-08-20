import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap"
import { NavLink as Link } from "react-router-dom"

function Navigation() {
	return (
		<Navbar
			className='bg-white shadow-sm mb-3'
			collapseOnSelect
			expand='lg'
			sticky='top'>
			<Container>
				<Navbar.Brand as={Link} to='/'>
					Viking Land
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='ms-auto'>
						<NavDropdown title='Countries'>
							<NavDropdown.Item as={Link} to='/sweden'>
								Sweden
							</NavDropdown.Item>
							<NavDropdown.Item as={Link} to='/denmark'>
								Denmark
							</NavDropdown.Item>
							<NavDropdown.Item as={Link} to='/iceland'>
								Iceland
							</NavDropdown.Item>
							<NavDropdown.Item as={Link} to='/norway'>
								Norway
							</NavDropdown.Item>
						</NavDropdown>
						<Nav.Link as={Link} to='/addnewplaces'>
							Add New Places
						</Nav.Link>
						<Nav.Link as={Link} to='/favorites'>
							Favorites <span className='span'>55</span>
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default Navigation
