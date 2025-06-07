import '../App.css';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>

        <h1>Let Us Design Your Future</h1>
        {/* <h1>Σχεδιάζουμε το μέλλον σας!</h1> */}
        {/* <p>What are you waiting</p> */}
        <div className='hero-btns'>
            {/* <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                Learn More
            </Button> */}
            {/* <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                Our Projects 
                <i class="fa fa-codepen" style={{ marginLeft: "10px" }} aria-hidden="true"></i>
            </Button> */}
        </div>
    </div>
  );
}

export default HeroSection;
