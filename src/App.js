import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Home  from './scenes/Home.jsx'; 
import SlideShow from './scenes/SlideShow.jsx'; 
import UploadPage from './scenes/UploadPage.jsx';
import './style/App.css';

function App() {
  const [ pictures, setPictures ] = useState();

  return (
    <div className="App">
     <>
     <BrowserRouter>
      <Routes>
        <Route path= "/" element={<Home />}/>
        <Route path= "/theroses" element={<SlideShow pictures = {pictures} setPictures ={setPictures} />}/>
        <Route path= "/theroses/upload" element={<UploadPage/>}/>
      </Routes>
     </BrowserRouter>
     </>
    </div>
  );
}

export default App;
