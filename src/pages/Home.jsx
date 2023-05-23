import { Container, Row, Col, Button } from "react-bootstrap"
import AddImage from "../components/addimage/AddImage.jsx"
import RegionDropList from "../components/homepage/RegionDropList.jsx"
import { useNavigate } from "react-router-dom"
import SlideShow from "./SlideShow.jsx"
import { useState } from "react"

export default function Home ({ pictures, setPictures }) {
    const [filterRegion, setFilterRegion] = useState("Americas");

    const navigate = useNavigate()

    return (
        <>
        <Container>
            <Row>
                <Col>
                <Button className="welcome-button" onClick={() => navigate('/')}>Back to Welcome Page</Button>
                </Col>
            </Row>
        </Container>
        <RegionDropList filterRegion = {filterRegion} setFilterRegion = {setFilterRegion} pictures = {pictures} setPictures = {setPictures}/>
        <SlideShow filterRegion = {filterRegion} pictures = {pictures} setPictures ={setPictures} />
        <AddImage setPictures ={setPictures} filterRegion = {filterRegion} />
        </>
    )
}