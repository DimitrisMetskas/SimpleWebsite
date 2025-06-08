import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css';
import logo from '../assets/small-logo1.jpg';
import { useTranslation } from 'react-i18next';

function Navbar() {
    const [click, setClick]= useState(false);
    const handleClick = () =>setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        closeMobileMenu();
    };
    const { t } = useTranslation();
    return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link alt="Link to home page" to='/' className='navbar-logo' onClick={scrollToTop}>
                    <strong>S&A Engineering</strong>
                    <img className='navbar-image' src={logo} alt=""></img> 
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click? 'fas fa-times':'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active': 'nav-menu'}>
                    <li className='nav-item'>
                        <Link alt="Link to projects page" to='/our-projects' className='nav-links' onClick={scrollToTop}>
                            <strong>{t('navbar.projects')}</strong>                            
                        </Link>    
                    </li>
                    <li className='nav-item'>
                        <Link alt="Link to the story page" to='/our-story' className='nav-links' onClick={scrollToTop}>
                            <strong>{t('navbar.story')}</strong>
                        </Link>    
                    </li>
                    <li className='nav-item'>
                        <Link alt="Link to contact page" to='/contact' className='nav-links' onClick={scrollToTop}>
                            <strong>{t('navbar.contact')}</strong>
                        </Link>    
                    </li>
                </ul>
            </div>
        </nav>
    </>
    );
}

export default Navbar;
