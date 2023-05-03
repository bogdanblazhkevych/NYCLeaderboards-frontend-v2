import './App.css';
import HeatSelect from './Components/HeatSelect/HeatSelect';
import Navbar from './Components/Navbar/Navbar';
import Searchbar from './Components/SearchBar/Searchbar';
import {useState, useEffect} from 'react'
import DisplayData from './Components/DisplayData/DisplayData.js';

function App() {
  const [currentDisplay, setCurrentDisplay] = useState('topten');
  const [currentSearchQuerry, setCurrentSearchQuerry] = useState('');
  const [currentHeat, setCurrentHeat] = useState('total_fines');

  useEffect(()=> {
    // console.log(currentDisplay)
  }, [currentDisplay])

  useEffect(()=> {
    // console.log(currentSearchQuerry)
  }, [currentSearchQuerry])

  useEffect(()=> {
    // console.log(currentHeat)
  }, [currentHeat])

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
