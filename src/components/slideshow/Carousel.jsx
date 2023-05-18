
export default function Carousel({ pictures, setPictures }) {
   
    //seperate: region and country

    const getPicsByRegion= () => {
        fetch(`https://final-project-vc.web.app/slideshow${region}`)
            .then(response => response.json())
            .then(data => setThePhotos(data))
            .catch(alert)
    }

    const getPicsByCountry= () => {
        fetch(`https://final-project-vc.web.app/slideshow${country}`)
            .then(response => response.json())
            .then(data => setThePhotos(data))
            .catch(alert)
    }
    
    return(
        <>
        <h2>Carousel by region and country displayed</h2>
        </>
    )
}