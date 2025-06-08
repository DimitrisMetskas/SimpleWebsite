import logo from '../assets/soulis-logo1.jpg';
import './HomeAbout.css';
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';


function HomeAbout() {
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate('/our-story')
  };
  const { t } = useTranslation();
  return (
    <div role="HomeAbout" className='homeabout'> 
      <div className='homeabout__container'>
        {/* <img loading="lazy" alt="" src=""></img> */}
            <img className="homeabout-image"  src={logo} alt="Image of the office logo"></img> 
            <div className='homeabout__wrapper'>
              <h1>{t('homeabout.h1')}</h1>
              <p>{t('homeabout.p')} </p>
              <button onClick={scrollToTop} className='homeabout-button'>{t('homeabout.button')}</button>
            </div>              
      </div>
    </div>
  )
}

export default HomeAbout
