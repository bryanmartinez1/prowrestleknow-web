import React from "react";
import "./navbar.css";
import { useNavigate } from "react-router-dom";
import Button from "../Buttons/Button";
import Dropdown from "../Dropdown/Dropdown";

function Navbar() {
  const navigate = useNavigate();

  const allButtonStyle: React.CSSProperties = {
    fontFamily: "Lexend",
    margin: 0,
    background: "none",
    border: "none",
  };

  const homeButtonStyle: React.CSSProperties = {
    fontSize: "20px",
    fontWeight: "bold",
    ...allButtonStyle,
  };

  const navbarButtonStyle: React.CSSProperties = {
    fontSize: "16px",
    ...allButtonStyle,
  };

  const createOptions: string[] = ["Module", "Data Ring", "Diagram"];
  const createOptionsFunctions: (() => void)[] = [
    () => navigate("/module"),
    () => navigate("/create/dataring"),
    () => navigate("/create/diagram"),
  ];
  const exploreOptions: string[] = [
    "Wrestler",
    "Title",
    "Company",
    "Event",
    "Match",
    "Faction",
    "Module",
    "Data Ring",
  ];
  const exploreOptionsFunctions: (() => void)[] = [
    () => navigate("/explore"),
    () => navigate("/explore"),
    () => navigate("/explore"),
    () => navigate("/explore"),
    () => navigate("/explore"),
    () => navigate("/explore"),
    () => navigate("/explore"),
    () => navigate("/explore"),
  ];

  return (
    <div className="navbar">
      <Button
        text="ProWrestleKnow"
        onClick={() => navigate("/")}
        style={homeButtonStyle}
      />
      <div className="navbar-buttons">
        <Dropdown
          label="Create"
          options={createOptions}
          optionFunctions={createOptionsFunctions}
          style={navbarButtonStyle}
        />
        <Dropdown
          label="Explore"
          options={exploreOptions}
          optionFunctions={exploreOptionsFunctions}
          style={navbarButtonStyle}
        />
      </div>
      <div className="navbar-buttons">
        <Button
          text="Help"
          onClick={() => navigate("/help")}
          style={navbarButtonStyle}
        />
        <Button
          text="Profile"
          onClick={() => navigate("/profile")}
          style={navbarButtonStyle}
        />
      </div>
    </div>
  );
}

export default Navbar;
