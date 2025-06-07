import { Link } from 'react-router-dom'

function CardItem({src, path, label, text}) {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <li className='cards__item' onClick={scrollToTop}>
        <Link className='cards__item__link' to={path}>
            <figure className='cards__item__pic-wrap' >  {/* data-category={label}  - gia to mple tampelaki */}
                <img src={src} alt='Travel Desc' className='cards__item__img'/>
            </figure>
            <div className='cards__item__info'>
                <h5 className='cards__item__text'>{text}</h5> 
            </div>
        </Link>
      </li>
    </>
  )
}

export default CardItem;
