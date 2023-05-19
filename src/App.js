import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Home  from './pages/Home.jsx'; 
import SlideShow from './pages/SlideShow.jsx'; 
import UploadPage from './pages/UploadPage.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/App.css';

function App() {
  const [ pictures, setPictures ] = useState([]);

  return (
    
    <div className="App">
     <>
     <BrowserRouter>
      <Routes>
        <Route path= "/" element={<Home pictures = {pictures} setPictures ={setPictures}/>}/>
        <Route path= "/theroses/carousel" element={<SlideShow pictures = {pictures} setPictures ={setPictures} />}/>
        <Route path= "/theroses/upload" element={<UploadPage setPictures ={setPictures} />}/>
      </Routes>
     </BrowserRouter>
     </>
    </div>
  );
}

export default App;
