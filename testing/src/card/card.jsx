import Course from '../courses/course';
import card from './card.module.css'
import PropTypes from 'prop-types'
const style={
    
    textAlign:'center',
}

function Card({name="Hello",cost="$300",image="",con=false}){
    if(con)
    {
    return(
        <>
        <div className={card.card} style={style}>
            <img src={image} alt="" />
            <br />
            <h1 >
            {name} <br />
            </h1>
            <br />
            Course cost :{cost}
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