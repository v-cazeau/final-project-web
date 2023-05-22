import { useState } from 'react'; 
import { Button, Form, Modal } from 'react-bootstrap';

export default function AddImage({ setPictures }) {
	const [ region, setRegion ] = useState(""); //search/filter dropdown needed
  	const [ country, setCountry ] = useState(""); // search/filter dropdown needed
	const [ image, setImage ] = useState(""); 
	const [ description, setDescription ] = useState("");
	const [ location, setLocation ] = useState(""); 
	const [ message, setMessage ] = useState("")
  	const [ openModal, setOpenModal ] = useState(""); 
  
  	const handleOpen = () => setOpenModal(true)
  	const handleClose = () => setOpenModal(false)



  function convertFiles(files) {
	if (files) {
		const fileRef = files[0] || ""
		const fileType = fileRef.type || ""
			console.log ('This file upload is of type:', fileType)
		const reader = new FileReader()
			reader.readAsBinaryString(fileRef)
			reader.onload = (ev) => {
			setImage(`data:${fileType};base64,${btoa(ev.target.result)}`)
		}
	}
}
  
  const handleUpload = (e) => {
	  e.preventDefault()
	  fetch(`https://final-project-vc.web.app/theroses/upload`,{
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
			setPictures(data);
			setOpenModal(false);
			setRegion("");
			setCountry("");
			setDescription("");
			setLocation("");
			setMessage(`A Rose has been added to the World.`);
		})
	}
	
	return(
    <>
    <Button className= "upload-button" onClick= { handleOpen }> Upload Photo </Button>
    <Modal show={ openModal } onHide= { handleClose }  >
    	<Form newClass = "upload-form-modal">
			<Form.Group>
				<Form.Label>Region: </Form.Label>
				<Form.Control
					type = "text"
					value = {region}
					placeholder = "Region"
					onChange = {e => setRegion(e.target.value)} />
			</Form.Group>
			<br />
			<Form.Group>
				<Form.Label>Country: </Form.Label>
				<Form.Control 
				type = "text"
				value = {country}
				placeholder = "Country"
				onChange={e => setCountry(e.target.value)} />
			</Form.Group>
			<br />
			<Form.Group>
				<Form.Label>Image: </Form.Label>
				<Form.Control 
					type = "file" 
					onChange={(e) => convertFiles(e.target.files)} />
			</Form.Group>
			<br />
			<Form.Group>
				<Form.Label>Description: </Form.Label>
				<Form.Control 
				type = "text"
				value = {description}
				placeholder = "Description"
				onChange= {e => setDescription(e.target.value)}/>
			</Form.Group>
			<br />
			<Form.Group>
				<Form.Label>Location: </Form.Label>
				<Form.Control 
				type = "text"
				value = {location}
				placeholder = "Location"
				onChange= {e => setLocation(e.target.value)}/>
			</Form.Group>
			<br />
		<Button className="submit-button" onClick={ handleUpload }>Submit</Button>
      </Form>
    </Modal>
	{message && <p>{message}</p>}
    </>
	)
}