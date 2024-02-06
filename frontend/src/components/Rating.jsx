import {FaStar, FaRegStar} from 'react-icons/fa';

function Rating({rating}) {
  const rate = Math.round(rating.rate);
  let starsFill = [];
  let starsNotFill = [];
  for(let i = 0; i <rate; i++){
    starsFill.push(<FaStar key={"starfill"+i}/>);
  }
  for(let i = 0; i <5-rate; i++){
    starsNotFill.push(<FaRegStar key={"starNotFill"+i}/>);
  }
  const stars= starsFill.concat(starsNotFill);
  return (
    <div className='rating'>            
        <span>
            {
            stars.map(star => star)
            }
        </span>
        <span> ({rating.count})</span>
    </div>
  )
}

export default Rating