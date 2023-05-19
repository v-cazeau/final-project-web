import { Carousel, Container, Row, Col, Button } from "react-bootstrap";

export default function SlideShow({ pictures, setPictures }) {
 

  const handleDelete = (picId) => {
    fetch(`https://final-project-vc.web.app/theroses/carousel/${picId}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then((resp) => resp.json())
      .then(setPictures)
      .catch(alert);
    };

    console.log(pictures)

  return (
    <>
      <>Region Collection</>
      <Container>
        <Row>
          <Col>
            {!pictures ? (
              "Loading..."
            ) : (
              <Carousel>
                {pictures.map((picture) => (
                  <Carousel.Item key={picture._id}>
                    <img
                      className="d-block w-100"
                      src={picture.image}
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      <h2>{picture.region}</h2>
                      <h3>{picture.country}</h3>
                      <p>Decription: {picture.description}</p>
                      <p>Location: {picture.location}</p>
                      <Button onClick={() => handleDelete(pictures._id)}>
                        {" "}
                        DELETE{" "}
                      </Button>
                    </Carousel.Caption>
                  </Carousel.Item>
                ))}
              </Carousel>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}
