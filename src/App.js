// exo egkatastisei to <script src="https://kit.fontawesome.com/f0faf16836.js" crossorigin="anonymous"></script> 
//sto header to html apo to site: https://fontawesome.com/kits/f0faf16836/setup

import './App.css';
import Navbar from './components/Navbar.js'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home.js';
import OurProjects from './components/pages/OurProjects.js';
import Contact from './components/pages/Contact.js';
import OurStory from './components/pages/OurStory.js';


function App() {
  return (
    <>
    <Router>
      <Navbar/> 
      <Routes>
        {/* parakato mas leei oti kathe fora poy einai sto path='/' tha anoigei to Home component */}
        <Route path="/" exact element={<Home/>}/>
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/our-projects" element={<OurProjects />} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
