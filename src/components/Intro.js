import './Intro.css';

function Intro(props) {
  return (
    <div className="intro">
      <h1 className="intro__title">Туристические точки притяжения Калиниграда</h1>
      <button className="intro__map-button" onClick={props.onClick}>Перейти к карте</button>
    </div>
  )
}

export default Intro;