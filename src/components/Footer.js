import './Footer.css';
import logo from '../assets/map.png';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();

  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
            {t('footer.location')}   <i class="fa fa-hand-o-down" aria-hidden="true"></i>
        </p>
        {/* <div className='input'>
            <form>
                <input type='email' name='email' placeholder='Your Email'
                className='footer-input'/>
                <Button buttonStyle='btn--outline'>Subscribe</Button> 
            </form>
        </div> */}
        <a href="https://www.google.com/maps/place/Technical+Office+Soulis+Ioannis+Engineering+%26+Construction/@36.4365384,28.2258952,19z/data=!4m6!3m5!1s0x14956139635aec8b:0x2fb6486186f105b6!8m2!3d36.4366398!4d28.2258751!16s%2Fg%2F11h6nrnh86?entry=ttu&g_ep=EgoyMDI1MDYwMi4wIKXMDSoASAFQAw%3D%3D">
          <img  className='footer-image fade-img' src={logo} alt=""></img> 
        </a>
        <p className='footer-subscription-heading'>
          {t('footer.contact')}   <i class="fa fa-hand-o-down" aria-hidden="true"></i>
        </p>
      </section>
            
      <section className='social-media'>
        <div  className='social-media-wrap'>
            <div className='social-icons'>
                <a class='social-icon-link' href="https://www.facebook.com/soulisengineering.gr/photos_by">
                  <i  class="fab fa-facebook-f" ></i>
                </a>
                <a class='social-icon-link' href="mailto:soulis_ioannis@yahoo.gr">
                  <i  class="fa fa-envelope-o" ></i>
                </a>
                <a class='social-icon-link' href="https://22410.gr/archives/companies/%cf%83%ce%bf%cf%85%ce%bb%ce%b7%cf%83-%ce%bc-%ce%b9%cf%89%ce%b1%ce%bd%ce%bd%ce%b7%cf%83">
                  <i  class="fa fa-internet-explorer" ></i>
                </a>
                <a class='social-icon-link' href="tel:+6936991497">
                  <i class="fa fa-phone"></i>
                </a>
                <a class='social-icon-link' href="tel:2241302603">
                  <i class="fa fa-mobile"></i>
                </a>
            </div>
        </div>
      </section>
    </div>
  )
}
export default Footer;
