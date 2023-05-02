import React, {useState} from "react";
import searchbarcss from '/Users/bogdanblazhkevych/Desktop/new-violations-frontend/src/Components/SearchBar/Searchbarcss.module.css';
import { ImSearch } from 'react-icons/im'

export default function Searchbar({setCurrentSearchQuerry, setCurrentDisplay}){

    const [currentSearch, setCurrentSearch] = useState('')

    function setLocalSearchState(e) {
        setCurrentSearch(e.target.value)
    }

    function handleKeyDown(e) {
        if (e.key === 'Enter') {
            setCurrentDisplay('search')
            setCurrentSearchQuerry(currentSearch)
        }
    }

    return(
        <div className={searchbarcss.searchbarwrapper}>

            <div className={searchbarcss.inputbox}>

                <input className={searchbarcss.searchbar} type="text" placeholder="ENTER PLATE" value={currentSearch} onChange={setLocalSearchState} onKeyDown={handleKeyDown}></input>

                <div className={searchbarcss.searchicon}>
                    <ImSearch />
                </div>

            </div>

        </div>
    )
}