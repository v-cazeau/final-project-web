import {  Container, Row, Col } from 'react-bootstrap'

export default function Footer() {
     const currentYear = new Date().getFullYear(); 
     const url = 'https://github.com/v-cazeau/final-project-web'

    return (
        <footer> 
            <Container>
                <Row> 
                    <Col 
                        className = "text-center">
                            <p> &copy;{currentYear} Véronie Cazeau</p>
                            <br />
                            <a href = {url} 
                                target ="_blank"
                                rel = "noreferrer"
                                className = "button-effect">Code in GitHub</a>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}