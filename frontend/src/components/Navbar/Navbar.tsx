import { useEffect, useState } from "react";
import "./navbar.css";
import { useNavigate } from "react-router-dom";
import Button from "../Buttons/Button";
import Dropdown from "../Dropdown/Dropdown";
import { exploreTypeOptions } from "../../defaults/variables";
import { homeButtonStyle, navbarButtonStyle } from "../../defaults/css";

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

  const createOptions: string[] = ["Module", "Data Ring", "Diagram"];
  const createOptionsFunctions: (() => void)[] = [
    () => navigate("/create/module"),
    () => navigate("/create/dataring"),
    () => navigate("/create/diagram"),
  ];

  const exploreOptionsFunctions: (() => void)[] = exploreTypeOptions.map(
    (type: string) => () => navigate(`/explore?type=${type}`)
  );

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
          options={exploreTypeOptions}
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
