import { Container, Row, Col, Button } from "react-bootstrap"
import AddImage from "../components/addimage/AddImage.jsx"
import RegionDropList from "../components/homepage/RegionDropList.jsx"
import { useNavigate } from "react-router-dom"
import SlideShow from "./SlideShow.jsx"
import FooterElement from "../components/Footer.jsx"

export default function Home ({ pictures, setPictures }) {

    const navigate = useNavigate()

    return (
        <>
        <Container>
            <Row>
                <Col>
                <Button className="welcome-button" onClick={() => navigate('/')}>Back to Welcome</Button>
                </Col>
            </Row>
        </Container>
        <RegionDropList pictures = {pictures} setPictures ={setPictures}/>
        <SlideShow pictures = {pictures} setPictures ={setPictures} />
        <AddImage setPictures ={setPictures} />
        <FooterElement/>
        </>
    )
}