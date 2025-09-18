import { useState } from 'react';
import Course from '../courses/course';
import card from './card.module.css'
import PropTypes from 'prop-types'
function Card(info){


    const style={
        
        textAlign:'center',
    }
    
    const [real,mod_method]=useState(info.cost)
    const [dis,rem]=useState(true);
    function remove()
    {
        rem(false)
    }
    function discount()
    {
        mod_method(real-200);
    }
    if(info.con)
    {
    return(
        dis && <>
         <div className={card.card} style={style}>
            <img src={info.image} alt="" />
            <br />
            <h1 >
            {info.name} <br />
            </h1>
            <br />
            Course cost :{real}
            <button onClick={discount}>Discount</button>
            <button onClick={remove}>Delete</button>
        </div>
        </>
    );
}
else{
    return(
        <div className={card.card} style={style}>
        NOTHING IS HERE
        </div>
    )
}
}
  
Card.propTypes = {
  name: PropTypes.string,
  cost: PropTypes.number,
  image: PropTypes.string,
  con: PropTypes.bool
};

export default Card;