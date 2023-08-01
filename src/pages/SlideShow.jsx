import { useEffect, useState } from "react";
import { Carousel, Container, Row, Col, Button } from "react-bootstrap";
import SoundCloud from "../components/SoundCloud";

export default function SlideShow({ filterRegion, pictures, setPictures }) {
  const [showCarousel, setShowCarousel] = useState(false);

  useEffect(() => {
    // Wait for 200ms before showing the Carousel to trigger the fade-in animation
    const timer = setTimeout(() => setShowCarousel(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const handleDelete = (picId) => {
    fetch(
      `https://final-project-vc.web.app/theroses/${filterRegion}/${picId}`,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((resp) => resp.json())
      .then(setPictures)
      .catch(alert);
  };

  console.log(pictures);

  return (
    <section>
      <Container>
        <Row>
          <Col>
            {showCarousel ? (
              !pictures ? (
                "Loading..."
              ) : (
                <Carousel className="picture-box">
                  {pictures.map((picture) => {
                    const thisId = picture._id;
                    return (
                      <Carousel.Item
                        key={picture._id}
                        className="fade-in"
                        data-interval={6000} // Adjust slide switch time here
                      >
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
              )
            ) : null}
          </Col>
        </Row>
      </Container>
      <SoundCloud />
    </section>
  );
}
