import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css';

function Navbar() {
    const [click, setClick]= useState(false);

    const handleClick = () =>setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    ETAIRIA 
                    <i className='fab fa-typo3'/>
                    {/* <i className='fa-solid fa-cloud'/> */}
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                        {/* na allazei apo sandwitch bar se X */}
                    <i className={click? 'fas fa-times':'fas fa-bars'} />
                </div>
                {/* na anoigei to menu */}
                <ul className={click ? 'nav-menu active': 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>    
                    </li>
                    <li className='nav-item'>
                        <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                            Services
                        </Link>    
                    </li>
                    <li className='nav-item'>
                        <Link to='/about-us' className='nav-links' onClick={closeMobileMenu}>
                            AboutUs
                        </Link>    
                    </li>
                    <li className='nav-item'>
                        <Link to='/contact-us' className='nav-links' onClick={closeMobileMenu}>
                            ContactUs
                        </Link>    
                    </li>
                </ul>
            </div>
        </nav>
    </>
    );
}

export default Navbar;
