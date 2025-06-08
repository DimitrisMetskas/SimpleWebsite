import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import HomeAbout from '../HomeAbout';
import HomeProject from '../HomeProject';


function Home (){
    return (
        <>
        <main>
            <HeroSection />
            <HomeProject />
            <HomeAbout />
        </main>
        <footer>
            <Footer />
        </footer>

        </>
    )
}

export default Home;