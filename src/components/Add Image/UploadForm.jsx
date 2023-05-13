import { useState } from 'react';
export default function UploadForm() {
	const [ filebas64, setFileBase64 ] = useState(""); //uploader

		
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
					<label> Upload Photo:
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
								<button> Add Photo </button>
							</>
							}
					</label>
				</form>
			</header>
		</div>
		);
}