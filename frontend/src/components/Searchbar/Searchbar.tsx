import React, { useEffect, useState } from "react";
import "./searchbar.css";
import SearchIcon from '../../assests/search.svg'
import { defaultExploreQueryPlaceholder } from "../../defaults";
import Button from "../Buttons/Button";

type SearchbarType = {
    text: string;
    onClick: () => void;
    updateSearch: (val: string) => void;
}

function Searchbar({text, updateSearch, onClick}: SearchbarType) {
  const [searchInput, setSearchInput] = useState<string>(text);
  useEffect(() => {
    setSearchInput(text);
  }, [text])

  const updateSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
    updateSearch(e.target.value);
  }

  const onEnter = (e: React.KeyboardEvent) => {
    console.log(e.key)
    if (e.key === 'Enter') {
      onClick();
    }
  }

  return <div className="searchbar">
      <img src={SearchIcon} alt = 'Search' className="searchIcon"/>
      <input 
        placeholder={defaultExploreQueryPlaceholder} 
        className="searchInput"
        type="search"
        value={searchInput}
        onChange={updateSearchInput}
        onKeyDown={(e) => onEnter(e)}
      />
      <Button text='Enter' onClick={onClick}/>
    </div>;
}

export default Searchbar;
