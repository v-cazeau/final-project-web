import {  Container, Row, Col, Footer } from 'react-bootstrap'

export default function FooterElement() {
     const currentYear = new Date().getFullYear(); 
     const url = 'https://github.com/v-cazeau/final-project-web'

    return (
        <footer> 
            <Container sticky="bottom" className= "p-5 footer">
                <Row> 
                    <Col>
                    <div 
                        className = "button-effect">
                            <a href = {url} 
                                target ="_blank"
                                rel = "noreferrer"
                                >Code in GitHub</a>
                                <p> &copy;{currentYear} Véronie Cazeau</p>
                    </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}