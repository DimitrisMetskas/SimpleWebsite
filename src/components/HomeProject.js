import CardItem from './CardItem'
import './HomeProject.css';

function HomeProject() {
  return (
    <div className='homeproject'> 
      <h1>Check out our Gallery</h1>
      <div className='homeproject__container'>
        <div className='homeproject__wrapper'>
            <ul className='homeproject__items'>
                <CardItem 
                  src='images/gallery.jpg'
                  text='Architectural Design, Structural Engineering, Building Permits, Construction & Renovation,Energy Efficiency Upgrades'
                  label='Projects'
                  path='/products'
                />
            </ul>
        </div>
      </div>
    </div>
  )
}

export default HomeProject
