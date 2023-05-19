import { Container, Row } from "react-bootstrap"
import AddImage from "../components/addimage/AddImage.jsx"
import RegionDropList from "../components/homepage/RegionDropList.jsx"
import SlideShow from "./SlideShow.jsx"
import Footer from "../components/Footer.jsx"

export default function Home ({ pictures, setPictures }) {
    return (
        <>
        <Container>
            <Row >
            </Row>
        </Container>
        <RegionDropList pictures = {pictures} setPictures ={setPictures}/>
        <SlideShow pictures = {pictures} setPictures ={setPictures} />
        <AddImage setPictures ={setPictures} />
        <Footer/>
        </>
    )
}