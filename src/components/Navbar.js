import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css';
import logo from '../assets/small-logo1.jpg';

function Navbar() {
    const [click, setClick]= useState(false);

    const handleClick = () =>setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        closeMobileMenu();
    };


    return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to='/' className='navbar-logo' onClick={scrollToTop}>
                    <strong>S&A Engineering</strong>
                    <img className='navbar-image' src={logo} alt=""></img> 
                    {/* <i className='fab fa-typo3'/> */}
                    {/* <span class="material-symbols-outlined">bolt</span> */}
                    {/* <i className='fa-solid fa-cloud'/> */}
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                        {/* na allazei apo sandwitch bar se X */}
                    <i className={click? 'fas fa-times':'fas fa-bars'} />
                </div>
                {/* na anoigei to menu */}
                <ul className={click ? 'nav-menu active': 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/our-projects' className='nav-links' onClick={scrollToTop}>
                            <strong>Our Projects</strong>                            
                        </Link>    
                    </li>
                    <li className='nav-item'>
                        <Link to='/our-story' className='nav-links' onClick={scrollToTop}>
                            <strong>Our Story</strong>
                        </Link>    
                    </li>
                    <li className='nav-item'>
                        <Link to='/contact' className='nav-links' onClick={scrollToTop}>
                            <strong>Contact</strong>
                        </Link>    
                    </li>
                </ul>
            </div>
        </nav>
    </>
    );
}

export default Navbar;
