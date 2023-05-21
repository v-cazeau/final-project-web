import { Button, Container, Row, Col } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import FooterElement from "../components/Footer.jsx"

export default function Coverpage() {
    const navigate = useNavigate()

    return(
        <div className="root">
        <>
        <Container>
            <Row> 
                <Col> 
                <h1 className="welcome"> Welcome </h1>
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
        <FooterElement/>
        </>
        </div>
    )
} 