import CardItem from './CardItem'
import './HomeProject.css';
import { useTranslation } from 'react-i18next';

function HomeProject() {
  const { t } = useTranslation();
  return (
    <div role="HomePage" className='homeproject'> 
      <h1>{t('homeproject.h1')}</h1>
      <div className='homeproject__container'>
        <div className='homeproject__wrapper'>
            <ul className='homeproject__items'>
                <CardItem 
                  src='images/logo-gallery.jpg'
                  text={t('homeproject.text')}
                  label='Projects'
                  path='/our-projects'
                />
            </ul>
        </div>
      </div>
    </div>
  )
}

export default HomeProject

