import { Carousel, CarouselItem, Container, Row, Col, Button } from 'react-bootstrap'
import PictureGalleryCollection from '../components/slideshow/PictureGalleryCollection.jsx'
import { useEffect } from 'react'

export default function SlideShow({ pictures, setPictures }) {

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

    return (
        <>
        <>Carousel goes here</>
        {/* <PictureGalleryCollection pictures = {pictures} setPictures = {setPictures}/> */}
        <Container>
            <Row>
                <Col>
                {!pictures ? (
                    "Loading..."
                ) : (
                <Carousel>
                    {pictures.map(picture => (
                        <CarouselItem key={picture._id}>
                            <div className= "picture-card">
                                <h2>{picture.region}</h2>
                                <h3>{picture.country}</h3>
                                <img src = {picture.image} alt="" width={300}/>
                                <p>Decription: {picture.description}</p>
                                <p>Location: {picture.location}</p>
                                <Button onClick={() => handleDelete(pictures._id) }> DELETE </Button>
                            </div>
                         </CarouselItem>
                        ))}
                </Carousel>
                    )}
                </Col>
            </Row>
        </Container>
        </>
    );
}