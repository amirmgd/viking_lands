import { Container, Card, CardGroup, Button } from "react-bootstrap"

function PlaceCard(props) {
	return (
		<Container className='m-4 p-4' style={{ width: "70%" }}>
			<CardGroup>
				<Card style={{ border: "none", backgroundColor: "#E9E8E9" }}>
					<Card.Title>{props.title}</Card.Title>
					<Card.Img src={props.image} alt={props.title}></Card.Img>
					<Card.Body>
						<Card.Text style={{ textAlign: "justify" }}>
							{props.description}
						</Card.Text>
					</Card.Body>
					<Card.Footer style={{ border: "none", backgroundColor: "#E9E8E9" }}>
						<Button className='favbutton' size='sm'>
							save to favorite
						</Button>
					</Card.Footer>
				</Card>
			</CardGroup>
		</Container>
	)
}

export default PlaceCard
