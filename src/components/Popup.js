import './Popup.css';
import closeIcon from '../images/close_icon.svg';

function Popup(props) {
  return (
    <section className='popup'>
      <div className="popup__container">
        <button type="button" className="popup__close" onClick={props.onClose}>
          <img src={closeIcon} alt="кнопка закрыть" className="popup__close-img"/>
        </button>
        <h3 className="popup__title">{props.title}</h3>
      </div>
    </section>
  )
}

export default Popup;