import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Home  from './scenes/Home.jsx'; 
import SlideShow from './scenes/SlideShow.jsx'; 
import UploadPage from './scenes/UploadPage.jsx';
import './style/App.css';

function App() {
  const [ photos, setPhotos ] = useState();

  return (
    <div className="App">
     <>
     <BrowserRouter>
      <Routes>
        <Route path= "/" element={<Home />}/>
        <Route path= "/pictures" element={<SlideShow photos = {photos} setPhotos ={setPhotos} />}/>
        <Route path= "/upload" element={<UploadPage/>}/>
      </Routes>
     </BrowserRouter>
     </>
    </div>
  );
}

export default App;
