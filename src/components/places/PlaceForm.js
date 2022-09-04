import { Container, Form, Button } from "react-bootstrap"
import { useRef } from "react"

function PlaceForm(props) {
	const titleplaceRef = useRef()
	const imageplaceRef = useRef()
	const countryplaceRef = useRef()
	const descrplaceRef = useRef()

	function submitHandler(event) {
		event.preventDefault()

		const placeTitle = titleplaceRef.current.value
		const placeImage = imageplaceRef.current.value
		const placeCountry = countryplaceRef.current.value
		const placeDecr = descrplaceRef.current.value

		const placeData = {
			title: placeTitle,
			image: placeImage,
			country: placeCountry,
			description: placeDecr,
		}

		props.onAddPlaces(placeData)
	}

	return (
		<Container className='m-4'>
			<Form
				style={{
					border: "solid 1px black",
					borderRadius: "1%",
					backgroundColor: "#E0DEDF",
				}}
				onSubmit={submitHandler}>
				<Form.Group className='m-3' controlId='title' id='title'>
					<Form.Label>Title</Form.Label>
					<Form.Control
						type='title'
						placeholder='Enter the place name'
						required
						ref={titleplaceRef}
					/>
				</Form.Group>

				<Form.Group className='m-3' controlId='image' id='image'>
					<Form.Label>Image </Form.Label>
					<Form.Control
						type='url'
						placeholder='please enter the image url'
						required
						ref={imageplaceRef}
					/>
				</Form.Group>
				<Form.Group className='m-3' controlId='country' id='country'>
					<Form.Label>Country</Form.Label>
					<Form.Select required ref={countryplaceRef}>
						<option>Denmark</option>
						<option>Iceland</option>
						<option>Norway</option>
						<option>Sweden</option>
					</Form.Select>
				</Form.Group>
				<Form.Group className='mx-3' controlId='description' id='description'>
					<Form.Label>Description</Form.Label>
					<Form.Control
						as='textarea'
						rows={10}
						placeholder='Write a short decription about the place...'
						ref={descrplaceRef}
					/>
				</Form.Group>
				<div className='m-3 d-grid gap-2 '>
					<Button variant='primary' type='submit' size='lg'>
						Submit
					</Button>
				</div>
			</Form>
		</Container>
	)
}

export default PlaceForm
