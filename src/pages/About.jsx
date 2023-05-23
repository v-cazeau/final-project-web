import { useNavigate } from "react-router-dom";
import { Button, Container, Row, Col } from "react-bootstrap";


export default function About() {
    const navigate = useNavigate()
    const url = 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5663019/'

    return (
        <>
        <Container>
            <Row>
                <Col className="about-header">
                    <h1>About</h1>
                </Col>
            </Row>
            <Row className="about-page-bkgd">
                <Col sm={11} className= "about-page-text">
                    <p>Wonderlust is a captivating online platform that embraces the essence of adventure and discovery, offering a visual feast for the travel-hungry souls. With a mission to capture the world's wonders, one frame at a time, Wonderlust showcases breathtaking photographs from around the globe that transport viewers to awe-inspiring destinations. From serene sunsets painting the skies with vibrant hues over pristine beaches, to towering mountains piercing through the clouds in a majestic display of nature's grandeur, every frame captures the essence of Wonderlust. Immerse yourself in the enchanting visuals, igniting a deep longing to explore and uncover the hidden treasures that await in the far corners of our planet. Wonderlust beckons the dreamers, the adventurers, and the curious at heart to embark on their own journeys and create unforgettable memories, one click at a time.</p>
                </Col>
            </Row>
            <Row>
                <Col> 
                <Button className="back-to-welcome" onClick={() => navigate('/')}> Back to Welcome Page </Button>
                </Col>
            </Row>
        </Container>
        </>
    )
}