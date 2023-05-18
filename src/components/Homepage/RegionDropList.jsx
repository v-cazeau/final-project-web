import { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';


export default function RegionDropList({ pictures, setPictures }) {


    const [ selectedPictures, setSelectedPictures ] = useState([]);
    const [ selectedRegions, setSelectedRegions ] = useState([]);

    const region =['Americas', 'Eastern Mediterranean', 'Europe', 'Western Pacific', 'South-East Asia', 'Africa']

    useEffect(() => {
        const collectionByRegion = pictures.filter 
        (picture => selectedRegions.includes(picture.country) 
        || selectedRegions.includes(picture.region))
        setSelectedPictures(collectionByRegion)
    }, [selectedRegions]);
    
      return(
        <>
        <Form> 
            {selectedPictures.map((picture) => (
            <Form.Group> 
                <Form.Label>Select Region</Form.Label>
                <Form.Control as= "select" multiple onChange={(e) => setSelectedRegions(e.target.value)}>
                    <option key={picture._id} 
                    value={picture.region}>
                        {picture.region}</option>
                </Form.Control>
            </Form.Group>
            ))}
        </Form>
        </>
      )
}





