import { useState, useEffect } from 'react';
import { Dropdown } from 'react-bootstrap';


export default function RegionDropList({ filterRegion, setFilterRegion, pictures, setPictures }) {

    const getAllPics = () => { 
        console.log(filterRegion)
        fetch(`https://final-project-vc.web.app/theroses/carousel/${filterRegion}`)
        .then(resp => resp.json())
        .then(data => {
            console.log("pictures are ,",data)
            setPictures(data)
        })
        .catch(alert)
    }
    
    useEffect(() => {
    getAllPics()},[filterRegion,setPictures])

    
      return(
        <>
        <Dropdown>
            <Dropdown.Toggle className="region-button" variant="success">
                Select Your Region
            </Dropdown.Toggle>

            <Dropdown.Menu name = "regions">
                <Dropdown.Item onClick={() => setFilterRegion("Americas")}>Americas</Dropdown.Item>
                <Dropdown.Item onClick={() => setFilterRegion("Europe")}>Europe</Dropdown.Item>
                <Dropdown.Item onClick={() => setFilterRegion("Africa")}>Africa</Dropdown.Item>
                <Dropdown.Item onClick={() => setFilterRegion("Western Pacific")}>Western Pacific</Dropdown.Item>
                <Dropdown.Item onClick={() => setFilterRegion("South-East Asia")}>South-East Asia</Dropdown.Item>
                <Dropdown.Item onClick={() => setFilterRegion("Eastern Mediterranean")}>Eastern Mediterranean</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>        
        </>
      )
}





