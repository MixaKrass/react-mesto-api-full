const Card = ({card, onCardClick}) => {
 const handleClick = () => {
   onCardClick ({card})
 }
 return(
 <li className="card">
  <button type="button" className="card__delete"></button>
  <img  className="card__photo" src={card} alt={card} onClick={handleClick} />
    <div className="card__info">
      <h2 className="card__title"></h2>
    <div className="card__like-cont">
        <button type="button" className="card__like"></button>
        <span className="card__likes-container">{card} </span>
    </div>
    </div>
  </li>
 )
}

export default Card