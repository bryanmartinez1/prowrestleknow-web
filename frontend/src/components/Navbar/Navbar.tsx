import React, { useEffect, useState } from "react";
import "./navbar.css";
import { useNavigate } from "react-router-dom";
import Button from "../Buttons/Button";
import Dropdown from "../Dropdown/Dropdown";

function Navbar() {
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  //  Updates Window Width
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
    () => navigate("/module/1"),
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
    () => navigate("/explore?type=wrestler"),
    () => navigate("/explore?type=title"),
    () => navigate("/explore?type=company"),
    () => navigate("/explore?type=event"),
    () => navigate("/explore?type=match"),
    () => navigate("/explore?type=faction"),
    () => navigate("/explore?type=module"),
    () => navigate("/explore?type=dataring"),
  ];

  const moreOptions: string[] = ["Profile", " Help"];
  const moreOptionsFunctions: (() => void)[] = [
    () => navigate("/profile"),
    () => navigate("/help"),
  ];

  return (
    <div className="navbar">
      <Button
        text={windowWidth > 590 ? "ProWrestleKnow" : "PWK"}
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
          position="right"
        />
      </div>
      {windowWidth > 590 ? (
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
      ) : (
        <Dropdown
          label="More"
          options={moreOptions}
          optionFunctions={moreOptionsFunctions}
          style={navbarButtonStyle}
          position="right"
        />
      )}
    </div>
  );
}

export default Navbar;
