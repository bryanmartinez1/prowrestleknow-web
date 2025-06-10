import React, { useEffect, useState } from "react";
import "./searchbar.css";
import { defaultExploreQueryPlaceholder } from "../../defaults/variables";
import Button from "../Buttons/Button";
import { buttonStyle } from "../../defaults/css";

type SearchbarType = {
  text: string;
  onClick: () => void;
  updateSearch: (val: string) => void;
};

function Searchbar({ text, updateSearch, onClick }: SearchbarType) {
  const [searchInput, setSearchInput] = useState<string>(text);
  useEffect(() => {
    setSearchInput(text);
  }, [text]);

  const updateSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
    updateSearch(e.target.value);
  };

  const onEnter = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  return (
    <div className="searchbar">
      <Button text="Search" onClick={onClick} style={buttonStyle} />
      <input
        placeholder={defaultExploreQueryPlaceholder}
        className="searchInput"
        type="search"
        value={searchInput}
        onChange={updateSearchInput}
        onKeyDown={(e) => onEnter(e)}
      />
    </div>
  );
}

export default Searchbar;
