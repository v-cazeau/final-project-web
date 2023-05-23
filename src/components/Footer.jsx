import {  Container, Row, Col, Footer } from 'react-bootstrap'

export default function FooterElement() {
     const currentYear = new Date().getFullYear(); 
     const url = 'https://github.com/v-cazeau/final-project-web'

    return (
        <footer> 
            <Container className= "footer-v">
                <Row> 
                    <Col>
                        <div className='button-effect'> 
                            <a href = {url} 
                            target ="_blank"
                            rel = "noreferrer"
                            className='gh-link'
                            >Code in GitHub</a>
                            <p className='footer-name' > &copy;{currentYear} Véronie Cazeau</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}