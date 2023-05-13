export default function PhotoGalleryCollection({ photo }) {
    return (
        <div className= "photo-card">
            <img src = {photo.image} alt="" />

        </div>
    )
}