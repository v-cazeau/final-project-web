import { Carousel, Container, Row, Col, Button } from "react-bootstrap";

export default function SlideShow({ filterRegion, pictures, setPictures }) {
  const handleDelete = (picId) => {
    fetch(`https://final-project-vc.web.app/theroses/${filterRegion}/${picId}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then((resp) => resp.json())
      .then(setPictures)
      .catch(alert);
  };

  console.log(pictures);

  return (
    <>
      <Container>
        <Row>
          <Col>
            {!pictures ? (
              "Loading..."
            ) : (
              <Carousel className="picture-box">
                {pictures.map((picture) => {
                  const thisId = picture._id
                  return (
                    <Carousel.Item key={picture._id} data-interval={4500}>
                      <img
                        className="d-block w-100"
                        src={picture.image}
                        alt=""
                      />
                      <Carousel.Caption>
                        <div className="text- start">
                          <div className="caption">
                          <h5>{picture.region}</h5>
                          <h5>{picture.country}</h5>
                          <p>
                            {picture.description}
                            <br />
                            {picture.location}
                          </p>
                          </div>
                        </div>
                        {/* <Button className="delete-button" onClick={() => handleDelete(pictures._id)}> */}
                        <Button
                          className="delete-button"
                          onClick={() => handleDelete(thisId)}
                        >
                          DELETE
                        </Button>
                      </Carousel.Caption>
                    </Carousel.Item>
                  );
                })}
              </Carousel>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}
