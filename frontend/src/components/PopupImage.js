import close from '../images/popup/Close_Icon.svg';

const PopupImage = ({onClose, card}) => {
  return (
    <div className={card.isOpened ? `popup popup_opacity popup_opened` : `popup popup_opacity`}>
      <div className="popup__content">
      <figure className="popup__figure">
        <img src={card.link} alt={card.name} className="popup__image" />
        <figcaption className="popup__figcaption">{card.name}</figcaption>
      </figure>
        <button onClick={onClose} type="button" className="popup__closed" id="ClosePopupBig" >
          <img className="popup__closed" src={close} alt="закрыть" />
        </button>
      </div>
    </div>
  )
}

export default PopupImage