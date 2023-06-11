import './App.css';
import HeatSelect from './Components/HeatSelect/HeatSelect';
import Navbar from './Components/Navbar/Navbar';
import {useState, useEffect} from 'react'
import DisplayData from './Components/DisplayData/DisplayData';
import Searchbar from './Components/SearchBar/Searchbar';

function App() {
  const [currentDisplay, setCurrentDisplay] = useState<string>('topten');
  const [currentSearchQuerry, setCurrentSearchQuerry] = useState<string>('');
  const [currentHeat, setCurrentHeat] = useState<string>('total_fines');

  return (
    <div className="App">

      <Navbar setCurrentDisplay={setCurrentDisplay} currentDisplay={currentDisplay}/>
      <Searchbar setCurrentSearchQuerry={setCurrentSearchQuerry} setCurrentDisplay={setCurrentDisplay}/>
      <HeatSelect setCurrentHeat={setCurrentHeat}/>
      <DisplayData currentDisplay={currentDisplay} currentHeat={currentHeat} currentSearchQuerry={currentSearchQuerry}/>
      
    </div>
  );
}

export default App;
