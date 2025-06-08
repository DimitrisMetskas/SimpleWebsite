import '../App.css';
import './HeroSection.css';
import { useTranslation } from 'react-i18next';

function HeroSection() {
  const { t } = useTranslation();
  return (
    <div role="this is the upperbody of home page" className='hero-container'>

        <h1>{t('herosection.h1')}</h1>
        {/* <h1>Σχεδιάζουμε το μέλλον σας!</h1> */}
        {/* <p>What are you waiting</p> */}
        {/* <div className='hero-btns'> */}
            {/* <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                Learn More
            </Button> */}
            {/* <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                Our Projects 
                <i class="fa fa-codepen" style={{ marginLeft: "10px" }} aria-hidden="true"></i>
            </Button> */}
        {/* </div> */}
    </div>
  );
}

export default HeroSection;
