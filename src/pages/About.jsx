import { useNavigate } from "react-router-dom";
import { Button, Container, Row, Col } from "react-bootstrap";
import FooterElement from "../components/Footer.jsx";

export default function About() {
    const navigate = useNavigate()
    const url = 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5663019/'

    return (
        <>
        <Container>
            <Row>
                <Col className="about-header">
                    <h1> About </h1>
                </Col>
            </Row>
            <Row className="about-page-bkgd">
                <Col className= "about-page-text">
                <div className= "about-page-text">
                    <p> 
                    The Roses is a website that was inspired by nature, feul for travel, the expression “Stop and smell the roses”, and wellness. The website carousels through nature photos and encourages a mindful moment.
                    <br/>
                    <br/>
                    <a href = {url} 
                    target ="_blank"
                    rel = "noreferrer"
                    className = "ap-link">Research </a>  has shown that being near nature enhances life satisfaction and fosters optimism. Simply immersing ourselves in natural surroundings improves productivity, concentration, and protects against stress and anxiety. Whether real or captured in a photograph, nature scenes have a nourishing effect on our brains, revitalizing us in a similar manner.
                    <br/>
                    <br/>
                    "Stop and smell the roses" is a gentle reminder to slow down, savor life, and appreciate the beauty around us. Inspired by golfer Walter Hagen's wisdom, this phrase encapsulates the joy of embracing life's simple pleasures.
                    <br/>
                    <br/>
                    Join us in adding a rose to our collection as we enjoy the beauty of nature, find joy in living in the present moment, and use the website as a tool for relaxation through gazing at captivating pictures. 
                    </p>
                </div>
                </Col>
            </Row>
            <Row>
                <Col> 
                <Button className="back-to-welcome" onClick={() => navigate('/')}> Back to Welcome Page </Button>
                </Col>
            </Row>
        </Container>
        <FooterElement/>
        </>
    )
}