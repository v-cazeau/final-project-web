import AddImage from '../components/addimage/AddImage.jsx'

export default function UploadPage({ setPictures }) {
    return (
        <>
        <h2>Upload an image</h2>
        <p>upload an image below, add region, country, location/description(perhaps)</p>
        <AddImage setPictures ={setPictures}/>
        </>
    )
}