import close from '../images/popup/Close_Icon.svg';

const PopupConfirm = () => {
  
  return(
    <div className="popup popup_confirm">
      <form id='form_remove' 
      className = "popup__container">
        <h2 className = "popup__title">Вы Уверены</h2>
        <button type = "submit" className = "popup__button" >Да</button>
      </form>
      <button 
        type = "button"
        id = "close_remove"
        className = "popup__closed">
          <img className = " " src = {close} alt="закрыть" />
        </button>
    </div>

  )
}

export default PopupConfirm