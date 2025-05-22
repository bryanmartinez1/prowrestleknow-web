import React from "react";
import "./navbar.css";
import { useNavigate } from "react-router-dom";
import Button from "../Buttons/Button";

function Navbar() {
  const navigate = useNavigate();

  const allButtonStyle: React.CSSProperties = {
    fontFamily: "Lexend",
    margin: 0,
    background: "none",
    border: "none",
  };

  const homeButtonStyle: React.CSSProperties = {
    fontSize: "24px",
    fontWeight: "bold",
    ...allButtonStyle,
  };

  const navbarButtonStyle: React.CSSProperties = {
    fontSize: "16px",
    ...allButtonStyle,
  };

  return (
    <div className="navbar">
      <Button
        text="ProWrestleKnow"
        onClick={() => navigate("/")}
        style={homeButtonStyle}
      />
      <div className="navbar-buttons">
        <Button
          text="Explore"
          onClick={() => navigate("/explore")}
          style={navbarButtonStyle}
        />
        <Button
          text="Create"
          onClick={() => navigate("/create")}
          style={navbarButtonStyle}
        />
        <Button
          text="Module"
          onClick={() => navigate("/module")}
          style={navbarButtonStyle}
        />
        <Button
          text="Data Ring"
          onClick={() => navigate("/dataring")}
          style={navbarButtonStyle}
        />
      </div>
      <div className="navbar-buttons">
        <Button
          text="Need Help?"
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
