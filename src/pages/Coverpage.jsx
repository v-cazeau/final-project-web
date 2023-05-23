import { Button, Container, Row, Col } from "react-bootstrap"
import { useNavigate } from "react-router-dom"


export default function Coverpage() {
    const navigate = useNavigate()
    const currentYear = new Date().getFullYear(); 
    const url = 'https://github.com/v-cazeau/final-project-web'


    return(
        <div className="root">
        <>
        <Container>
            <Row> 
                <Col>
                <h1 className="annie-header">Wonderlust </h1>
                <p className="annie-subtext">Capturing the world's wonders, one frame at a time. </p>
                </Col>
            </Row>
            <Row>
                <Col>
                <Button className="str-button" onClick={() => navigate('/theroses')}>Smell the Roses</Button>
                </Col>
            </Row>
            <Row>
            <Col>
                <Button className="cover-to-about-button" onClick={() => navigate('/about')}>About</Button>
            </Col>
            </Row>
        </Container>
        </>
        </div>
    )
} 