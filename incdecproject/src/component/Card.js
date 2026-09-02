
import { useState } from 'react';
import './Card.css';

function Card({id,cityName,price,info,image,removeTour}) {
   // check karna hai ki porps aayega ki kuchh or
    const [readMore, setReadMore] = useState(false);
    const des = readMore ? info:`${info.substring(0,80)}....`;

    const readmoreHandler = () => {
        setReadMore(!readMore);
    }

  return (

    <div className='card'>

        <div>
            <img className='image' src={image} alt="tour-img" />
        </div>

        <div className='tour-details'>

            <p className='tour-name'> {cityName} </p>
            <p className='tour-price'>$ {price} </p>

            <div className='description'>
                {des}
                <span 
                 className='read-more'
                 onClick={readmoreHandler}> 
                 {readMore ? " show less" : "read more"} 
                </span>
            </div>

        </div>

        
            <button 
             className='btn-red ' 
             onClick={()=> removeTour(id)}   // agar bas onClick={ removeTour(id)} likhte to chalta kya
             > 
             Not Interested 
            </button>
    

    </div>
  )
}

export default Card;