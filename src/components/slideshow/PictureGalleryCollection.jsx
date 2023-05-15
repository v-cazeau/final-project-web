import {  useEffect, useState } from 'react'; 
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

export default function ShowAllPics ({ pictures, setPictures }) {
		// const [showPictures, setShowPictures] = useState([
		// 		region, country, image, description, location, id
		// ]);

		useEffect(() =>{
				fetch('https://final-project-vc.web.app/theroses')
				.then(resp => resp.json())
				.then(setPictures)
				.catch(alert)
		}, []);

		const handleDelete = (picId) => {
			fetch(`https://final-project-vc.web.app/theroses/${picId}`, {
					method: "DELETE", 
					headers: {"Content-Type" : "application/json"}
			})
					.then(resp => resp.json())
					.then(setPictures)
					.catch(alert)
		}

		return(
				<>
				<Container>
						<Row>
								<Col><h2>Pictures</h2></Col>
						</Row>
						<Row>
								<Col>
								<Card>
										{!pictures
											? "Loading"
											: pictures.map(
												(pictures) => (
													<div key = { pictures._id } className= "picture-card">
															<h2>{pictures.region}</h2>
															<h3>{pictures.country}</h3>
															<img src = {pictures.image} alt="" width={300}/>
															<p>Decription: {pictures.description}</p>
															<p>Location: {pictures.location}</p>
															<Button onClick={() => handleDelete(pictures._id) }> DELETE </Button>
													</div>
												)
											)
										}
                </Card>
								</Col>
						</Row>
				</Container>
				</>
		)
}