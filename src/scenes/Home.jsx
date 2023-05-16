import { Col, Container, Row } from "react-bootstrap"
import AddImage from "../components/addimage/AddImage"

export default function Home ({ setPictures }) {
    return (
        <>
        <Container>
            <Row >
                <Col className= "bg-info" >
                 <h1>Homepage</h1>
                </Col>
            </Row>
        </Container>
        <p>dropup or dropdown menu: region</p>
        <p>dropup or dropdown menu: country </p>
        <p>upload modal: top right</p>
        <AddImage setPictures ={setPictures} />
        </>
    )
}