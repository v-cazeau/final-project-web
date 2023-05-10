import './style/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home  from './scenes/Home.jsx'; 
import SlideShow from './scenes/SlideShow.jsx'; 
import AddImage from './scenes/AddImage.jsx'; 

function App() {
  return (
    <div className="App">
     <>
     <BrowserRouter>
      <Routes>
        <Route path= "/" element={<Home/>}/>
        <Route path= "/slideshow" element={<SlideShow/>}/>
        <Route path= "/upload" element={<AddImage/>}/>
      </Routes>
     </BrowserRouter>
     </>
    </div>
  );
}

export default App;
