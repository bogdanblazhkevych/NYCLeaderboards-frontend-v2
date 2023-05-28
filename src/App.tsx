import './App.css';
import HeatSelect from './Components/HeatSelect/HeatSelect';
import Navbar from './Components/Navbar/Navbar';
import {useState, useEffect} from 'react'
import DisplayData from './Components/DisplayData/DisplayData.js';
import Password from './Components/Password/Password';
import Searchbar from './Components/SearchBar/Searchbar';

function App() {
  const [currentDisplay, setCurrentDisplay] = useState<string>('topten');
  const [currentSearchQuerry, setCurrentSearchQuerry] = useState<string>('');
  const [currentHeat, setCurrentHeat] = useState<string>('total_fines');
  // const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem("isAuthenticated") === true)

  // useEffect(()=>{
  //   localStorage.setItem("isAuthenticated", isAuthenticated)
  // }, [])

  return (
    <div className="App">

      {/* {isAuthenticated ? <>
        <Navbar setCurrentDisplay={setCurrentDisplay} currentDisplay={currentDisplay}/>
        <Searchbar setCurrentSearchQuerry={setCurrentSearchQuerry} setCurrentDisplay={setCurrentDisplay}/>
        <HeatSelect setCurrentHeat={setCurrentHeat}/>
        <DisplayData currentDisplay={currentDisplay} currentHeat={currentHeat} currentSearchQuerry={currentSearchQuerry}/>
      </> : <Password setIsAuthenticated={setIsAuthenticated}/>} */}

      <Navbar setCurrentDisplay={setCurrentDisplay} currentDisplay={currentDisplay}/>
      <Searchbar setCurrentSearchQuerry={setCurrentSearchQuerry} setCurrentDisplay={setCurrentDisplay}/>
      <HeatSelect setCurrentHeat={setCurrentHeat}/>
      <DisplayData currentDisplay={currentDisplay} currentHeat={currentHeat} currentSearchQuerry={currentSearchQuerry}/>

      {/* <Password /> */}
      {/* <Loading /> */}
      {/* <Soon /> */}
    </div>
  );
}

export default App;
