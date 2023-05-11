import { useState } from 'react'

export default function UploadForm() {
    const [ region, setRegion ] = useState(); //search/filter dropdown needed
    const [ country, setCountry ] = useState(); // search/filter dropdown needed
    const [ filebas64, setFileBase64 ] = useState(); //uploader
    const [ img, setImage ] = useState(); 
    const [ description, setDescription ] = useState(); 

    const handleUpdate = (e) => {
        const newValue = e.target.value; 
        console.log (newValue.trim());
    }
    
    //modal
    function photoSubmit() {
        e.preventDefault();
        console.log({filebas64})
        alert('Photo submitted and added to database.')
    }
    
    function convertFiles() {
        if (files) {
            const fileRef = file[0] || ""
            const fileType = fileRef.type || ""
            console.log ('This file upload is of type:', fileType)
            const reader = new FileReader()
            reader.readAsBinaryString(fileRef)
            reader.onload = (ev) => {
                setFileBase64(`data:${fileType};base64,${btoa(ev.target.result)}`)
            }
        }
    }

    return(
        <div className = "Upload-form">
            <header className= "Upload-header">
                Choose an image to upload
                <form onSubmit={photoSubmit}>
                    <label> 
                        
                    </label>

                    <input type = "file" onChange={(e) => convertFile(e.target.files)} />
                    <hr />
                    { filebase64 &&
                        <>
                        <p>
                            Photo ready to be submitted! <br/>
                        </p>

                        {/* img */}
                        {(filebase64.indexOf("image/") > -1) &&
                        <img src = {filebas64} width = {300} />
                        }

                        {/* video */}
                        {(filebase64.indexOf("video/") > -1) &&
                        <video controls > 
                            <source src = {filebase64} />
                        </video>}

                        {/* audio (music, sound) */}
                        {(filebase64.indexOf("audio/") > -1) &&
                        <embed src = {filebase64} width = "800px" height = "2100px" />
                        }

                        <hr />
                        {/* how do I render */}
                        <button> Add Photo </button>

                        </>
                    }
                </form>
            </header>
        </div>
    );
}