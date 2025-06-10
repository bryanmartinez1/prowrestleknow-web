export const allButtonStyle: React.CSSProperties = {
  fontFamily: "Lexend",
  margin: 0,
  background: "none",
  border: "none",
};

export const homeButtonStyle: React.CSSProperties = {
  fontSize: "20px",
  fontWeight: "bold",
  ...allButtonStyle,
};

export const navbarButtonStyle: React.CSSProperties = {
  fontSize: "16px",
  ...allButtonStyle,
};

export const buttonStyle: React.CSSProperties = {
  fontSize: "14px",
  ...allButtonStyle,
};

export const selectedStyle: React.CSSProperties = {
  textDecoration: "underline",
  textDecorationThickness: "3px",
};

export const searchButtonStyle: React.CSSProperties = {
  fontSize: "14px",
  ...allButtonStyle,
};

export const cardStyle: React.CSSProperties = {
  fontSize: "20px",
  borderRadius: "10px",
  boxShadow: "0 0 10px rgba(0, 0, 0, .75)",
  width: "200px",
  height: "150px",
  ...allButtonStyle,
};
