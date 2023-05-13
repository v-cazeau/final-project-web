import {  useState } from 'react'; 
import { Container, Row, Col } from 'react-bootstrap';

export default function ShowAllPics ({ photos, setPhotos }) {
    const [] = useState()

    return(
        <>
        <Container>
            <Row>
                <Col><h2>Pictures</h2></Col>
            </Row>
            <Row>
                <Col>
                    {!pictures
                        ? "Loading"
                        : pictures.map(
            
                        )

                    }
                </Col>
            </Row>
        </Container>
        </>
    )
}