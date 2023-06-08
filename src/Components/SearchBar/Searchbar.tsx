import React, {useState} from "react";
import searchbarcss from './Searchbarcss.module.css';
import { ImSearch } from 'react-icons/im'

interface SearchbarProps {
    setCurrentSearchQuerry: (currentSearchQuerry: string) => void,
    setCurrentDisplay: (currentDisplay: string) => void
    
}

export default function Searchbar(props: SearchbarProps){
    const { setCurrentSearchQuerry, setCurrentDisplay } = props;

    const [currentSearch, setCurrentSearch] = useState<string>('')

    function setLocalSearchState(e: React.ChangeEvent<HTMLInputElement>): void {
        setCurrentSearch(e.target.value.replace(/\s/g, ''))
    }

    function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>): void {
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