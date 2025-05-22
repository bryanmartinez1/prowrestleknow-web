import { useEffect, useRef, useState } from "react";
import Button from "../Buttons/Button";
import "./dropdown.css";

type DropdownProps = {
  label: string;
  options: string[];
  optionFunctions: (() => void)[];
  style?: React.CSSProperties;
};

function Dropdown({
  options,
  label,
  optionFunctions,
  style = {},
}: DropdownProps) {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    }

    if (showDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDropdown]);

  const onSelect = (index: number) => {
    optionFunctions[index]();
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="dropdown-wrapper" ref={dropdownRef}>
      <Button
        text={label}
        onClick={() => setShowDropdown(!showDropdown)}
        style={style}
      />
      {showDropdown && (
        <div className="dropdown">
          {options.map((option, index) => (
            <Button
              key={index}
              text={option}
              onClick={() => onSelect(index)}
              style={{ paddingTop: "5px", paddingBottom: "5px", ...style }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
