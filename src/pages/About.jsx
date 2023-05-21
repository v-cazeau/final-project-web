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
                <Col className="about-text">
                    <h1> About </h1>
                </Col>
            </Row>
            <Row className="about-page-bkgd">
                <Col className= "about-page-text">
                <p> 
                The roses is a website that was inspired by nature, the expression “Stop and smell the roses”, and drive toward wellness. The website carousels through nature photos and encourages a mindful moment. On your next walk out side look, stop and smell a rose or two, take a picture and share it with us what rose you witnessed.
                <br/>
                <br/>
                <a href = {url} 
                target ="_blank"
                rel = "noreferrer"
                className = "about-page-button-effect">Nature-based pictures </a> is a proven phenomenon for a good reason. Research has shown that individuals residing near nature experience greater life satisfaction and possess a more optimistic perspective. Merely observing natural surroundings can enhance productivity, concentration, and serve as a buffer against the detrimental impact of stress, anxiety, and depression. The nourishing effect that nature scenes have on our brains, regardless of whether they are real or captured in a photograph. Our brains respond to these stimuli in a similarly revitalizing manner.
                <br/>
                <br/>
                The expression "stop and smell the roses" is like a gentle nudge to slow down, savor life, and appreciate the beauty that exists all around us. It encourages us to take a moment to relax and truly enjoy the present. This phrase emerged in the 1960s, inspired by golfer Walter Hagen's autobiography, where he shared the wisdom of not rushing through life, letting go of worries, and taking the time to appreciate the flowers along our journey. It quickly caught on as a popular way to encapsulate this sentiment of embracing the simple joys in life.
                </p>
                </Col>
            </Row>
            <Row>
                <Col> 
                <Button className="about-button" onClick={() => navigate('/')}> Back to Welcome Page </Button>
                </Col>
            </Row>
        </Container>
        <FooterElement/>
        </>
    )
}