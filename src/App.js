// exo egkatastisei to <script src="https://kit.fontawesome.com/f0faf16836.js" crossorigin="anonymous"></script> 
//sto header to html apo to site: https://fontawesome.com/kits/f0faf16836/setup

import './App.css';
import Navbar from './components/Navbar.js'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home.js';
import OurProjects from './components/pages/OurProjects.js';
import Contact from './components/pages/Contact.js';
import OurStory from './components/pages/OurStory.js';
//gia na egkatastiso translator : 
//npm install i18next react-i18next --legacy-peer-deps
//kanoume ena arxeio mesa sto src me onoma i18n.js 
//kanoume fakelo locales sto src kai mesa tou kanoume 2 arxeia gr.json kai en.json
//mesa sto fakelo components kanoume ena fakelo pages me tis selides mas
//mesa sto fakelo components kanoume ena LanguageSwitcher.js pou tha mas epitrepei na allazoume ti glossa
//sto arxeio App.js kanoume import to LanguageSwitcher kai to i18n.js
// to i18n.js einai to arxeio pou exoume dimiourgisei gia na kanoume i18next na douleuei me to react
// to LanguageSwitcher.js einai to arxeio pou exoume dimiourgisei gia na kanoume to switcher gia tis glosses
import './i18n';
import LanguageSwitcher from './components/LanguageSwitcher.js';
//topothetoyme to LanguageSwitcher meta to Navbar gia na einai panw apo to navbar Ή ΕΑΝ ΘΕΛΟΥΜΕ ΣΤΟ NAVBAR Ή σε όλα τα components ψηλά
//kai na mporoume na to xrisimopoiisoume se kathe selida
//meta se kathe mia selida poy exoyme kanoyme import (des ipoloipa vimata sto arxeio OurProjects.js)

function App() {
  return (
    <>
    <Router>
      <Navbar/> 
      <LanguageSwitcher />
      <Routes>
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
