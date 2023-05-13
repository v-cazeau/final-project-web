
import PhotoGalleryCollection from './PictureGalleryCollection.jsx';

export default function Carousel() {
    const [ thePhotos, setThePhotos] = useState(); 
    //seperate: region and country

    const getAllPhotos = () => {
        fetch(`https://final-project-vc.web.app/slideshow${id}`)
            .then(response => response.json())
            .then(data => setThePhotos(data))
            .catch(alert)
    }

    return(
        <>
        <section className="photo-carousel">
                {(!photos)
                    ? <h2>Loading...</h2>
                    : photos.map(photo => (
                        <PhotoGalleryCollection key= {photos.id} photos={photos}/>
                    ))
                }
            </section>
        </>
    )
}