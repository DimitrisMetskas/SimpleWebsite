import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css';
import { Button } from './Button';

function Navbar() {
    const [click, setClick]= useState(false);
    const [button, setButton] =useState(true);

    const handleClick = () =>setClick(!click);
    const closeMobileMenu = () => setClick(false);
    
    //tha afairei to button kai tha to prosthetei ean einai megali i othoni
    const showButton = () => {
        if(window.innerWidth <=960){
            setButton(false);
        }else{
            setButton(true);
        }
    };

//gia na ginei render mia fora kai na min xanaginei
    useEffect(() => {
        showButton();
    }, []);



//otan ginetai resize to screen na faineto to showButton
    window.addEventListener('resize', showButton);

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
                        <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                            Products
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
