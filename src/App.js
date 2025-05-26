// exo egkatastisei to <script src="https://kit.fontawesome.com/f0faf16836.js" crossorigin="anonymous"></script> 
//sto header to html apo to site: https://fontawesome.com/kits/f0faf16836/setup

import './App.css';
import Navbar from './components/Navbar.js'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Switch} from 'react-router-dom';
import Home from './components/pages/Home.js';
import Services from './components/pages/Services.js';
import Products from './components/pages/Products.js';
import ContactUs from './components/pages/ContactUs.js';


function App() {
  return (
    <>
    <Router>
      <Navbar/> 
      <Routes>
        {/* parakato mas leei oti kathe fora poy einai sto path='/' tha anoigei to Home component */}
        <Route path="/" exact element={<Home/>}/>
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
