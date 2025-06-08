import './Button.css';
import {Link} from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({children, type, onClick, buttonStyle, buttonSize})=>{
// parakato ean to buttonStyle poy tha toy dosoume iparxei sto STYLES tha to parei san class allios tha parei to STYLES[0]
    const checkButtonStyle = STYLES.includes(buttonStyle)? buttonStyle : STYLES[0];
//paromoia me to size edo
    const checkButtonSize = SIZES.includes(buttonSize)? buttonSize : SIZES[0];

    return (
        <Link alt="Link to projects page" to='/our-projects' className='btn-mobile'>
            <button 
                className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick}
                type={type}
            >
                {children}   
            </button>
            
        </Link>
    )


}
