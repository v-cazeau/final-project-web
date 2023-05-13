import {  useEffect, useState } from 'react'; 
import { Container, Row, Col, Card } from 'react-bootstrap';

export default function ShowAllPics ({ pictures, setPictures }) {
		const [showPictures, setShowPictures] = useState([
				region, country, image, description, location, id
		]);

		useEffect(() =>{
				fetch('https:https://final-project-vc.web.app/theroses')
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
													<div key = { pictures.id } className= "picture-card">
															<img src = {pictures.country} alt="" />
															<h2>{pictures.region}</h2>
															<p>Decription: {pictures.description}</p>
															<p>Location: {pictures.location}</p>
													</div>
												)
											)
										}
                    <Botton onClick={ handleDelete }> DELETE </Botton>
                </Card>
								</Col>
						</Row>
				</Container>
				</>
		)
}