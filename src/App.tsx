import './App.css';
import HeatSelect from './Components/HeatSelect/HeatSelect';
import Navbar from './Components/Navbar/Navbar';
import { useState, useEffect } from 'react'
import DisplayData from './Components/DisplayData/DisplayData';
import Searchbar from './Components/SearchBar/Searchbar';
import ReactGA from 'react-ga4';

function App() {
  const [currentDisplay, setCurrentDisplay] = useState('topten');
  const [currentSearchQuerry, setCurrentSearchQuerry] = useState('');
  const [currentHeat, setCurrentHeat] = useState('total_fines');

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: "/", title: "homepage-view" });
    console.log(window.location.pathname + window.location.search)
  }, []);

  return (
    // ezra do not use uppercase class names
    <div className="App">

      <Navbar setCurrentDisplay={setCurrentDisplay} currentDisplay={currentDisplay}/>
      <Searchbar setCurrentSearchQuerry={setCurrentSearchQuerry} setCurrentDisplay={setCurrentDisplay}/>
      <HeatSelect setCurrentHeat={setCurrentHeat}/>
      <DisplayData currentDisplay={currentDisplay} currentHeat={currentHeat} currentSearchQuerry={currentSearchQuerry}/>
      
    </div>
  );
}

export default App;
