import { useState } from 'react'; 
import { Button, Form, Modal } from 'react-bootstrap';
import UploadForm from './UploadForm.jsx';

export default function AddImage({setPhotos}) {
	const [ region, setRegion ] = useState(""); //search/filter dropdown needed
  const [ country, setCountry ] = useState(""); // search/filter dropdown needed
	const [ image, setImage ] = useState(""); 
	const [ description, setDescription ] = useState("");
	const [ location, setLocation ] = useState(""); 
  const [ openModal, setOpenModal ] = useState(""); 

	const handleOpen = () => setOpenModal(true)
	const handleClose = () => setOpenModal(false)
	
	const handleUpload = (e) => {
		e.preventDefault()
		fetch(`https://final-project-vc.web.app/theroses`,{
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		}, 
		body: JSON.stringify({region, country, image, description, location })
	})
		.then(resp => resp.json())
		.then(data => {
			if(data.message){
				alert(data.message)
				return
			}
			setImage(data);
			setOpenModal(false)
			setRegion("")
			setCountry("")
			setDescription("")
			setLocation("")
		})
	}

	return(
    <>
    <Button onClick= { handleOpen }> Upload Photo </Button>
    <Modal show={ openModal } onHide= { handleClose }  >
    	<Form onSubmit={ handleUpload }>
    		<Form.Group>
				  <Form.Label>Region</Form.Label>
					<Form.Control
						type = "text"
						value = {region}
						placeholder = "Region"
						onChange = {e => setRegion(e.target.value)} />
        </Form.Group>
				<Form.Group>
					<Form.Label>Country</Form.Label>
					<Form.Control 
					type = "text"
					value = {country}
					placeholder = "Country"
					onChange={e => setCountry(e.target.value)} />
				</Form.Group>

				<UploadForm />

				<Form.Group>
					<Form.Label>Description</Form.Label>
					<Form.Control 
					type = "text"
					value = {description}
					placeholder = "Location"
					onChange= {e => setLocation(e.target.value)}/>
				</Form.Group>
				<Form.Group>
					<Form.Label>Location</Form.Label>
					<Form.Control 
					type = "text"
					value = {location}
					placeholder = "Location"
					onChange= {e => setLocation(e.target.value)}/>
				</Form.Group>
      </Form>
    </Modal>
    </>
	)
}