import logo from '../assets/soulis-logo1.jpg';
import './HomeAbout.css';
import { useNavigate } from "react-router-dom";


function HomeAbout() {
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate('/our-story')
  };

  return (
    <div className='homeabout'> 
      <div className='homeabout__container'>
        {/* <img loading="lazy" alt="" src=""></img> */}
            <img className="homeabout-image"  src={logo} alt=""></img> 
            <div className='homeabout__wrapper'>
              <h1>About Us</h1>
              <p>We are a modern engineering firm specializing in architectural and structural design, construction, and project licensing. With expertise and professionalism, we deliver high-quality solutions that combine aesthetics and functionality, ensuring complete client satisfaction. </p>
              <button onClick={scrollToTop} className='homeabout-button'>Find Out More</button>
            </div>              
      </div>
    </div>
  )
}

export default HomeAbout
