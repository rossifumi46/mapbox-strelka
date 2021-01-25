import './App.css';
import Intro from './components/Intro';
import Map from './components/Map';
import { useState } from 'react';
import Popup from './components/Popup';

function App() {
  const [isMapClicked, setMapClicked] = useState(false);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [title, setPopupTitle] = useState('');

  function handleClick(title) {
    setPopupTitle(title);
    setPopupOpen(!isPopupOpen);
  }

  return (
    <div className="App">
      {!isMapClicked && <Intro onClick={() => setMapClicked(!isMapClicked)}/>}
      {isMapClicked && <Map onClick={handleClick}/>}
      {isPopupOpen && <Popup title={title} onClose={handleClick}/>}
    </div>
  );
}

export default App;
