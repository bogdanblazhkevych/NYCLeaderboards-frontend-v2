import './App.css';
import HeatSelect from './Components/HeatSelect/HeatSelect';
import Navbar from './Components/Navbar/Navbar';
import Searchbar from './Components/SearchBar/Searchbar';
import {useState, useEffect} from 'react'
import DisplayData from './Components/DisplayData/DisplayData.js';
import Loading from './Components/Loading/Loading';
import Soon from './Components/Soon/Soon';
import Password from './Components/Password/Password';

function App() {
  const [currentDisplay, setCurrentDisplay] = useState('topten');
  const [currentSearchQuerry, setCurrentSearchQuerry] = useState('');
  const [currentHeat, setCurrentHeat] = useState('total_fines');
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem("isAuthenticated") === true)

  useEffect(()=>{
    localStorage.setItem("isAuthenticated", isAuthenticated)
  }, [])

  return (
    <div className="App">

      {/* {isAuthenticated && 
      <>
        <Navbar setCurrentDisplay={setCurrentDisplay} currentDisplay={currentDisplay}/>
        <Searchbar setCurrentSearchQuerry={setCurrentSearchQuerry} setCurrentDisplay={setCurrentDisplay}/>
        <HeatSelect setCurrentHeat={setCurrentHeat}/>
        <DisplayData currentDisplay={currentDisplay} currentHeat={currentHeat} currentSearchQuerry={currentSearchQuerry}/>
      </>} */}

      {isAuthenticated ? <>
        <Navbar setCurrentDisplay={setCurrentDisplay} currentDisplay={currentDisplay}/>
        <Searchbar setCurrentSearchQuerry={setCurrentSearchQuerry} setCurrentDisplay={setCurrentDisplay}/>
        <HeatSelect setCurrentHeat={setCurrentHeat}/>
        <DisplayData currentDisplay={currentDisplay} currentHeat={currentHeat} currentSearchQuerry={currentSearchQuerry}/>
      </> : <Password setIsAuthenticated={setIsAuthenticated}/>}

      {/* <Password /> */}
      {/* <Loading /> */}
      {/* <Soon /> */}
    </div>
  );
}

export default App;
