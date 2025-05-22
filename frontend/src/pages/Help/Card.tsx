import { useNavigate } from "react-router-dom";
import Button from "../../components/Buttons/Button";

type HelpProps = {
  title: string;
};

function HelpCard({ title }: HelpProps) {
  const navigate = useNavigate();
  const url: string = title.toLowerCase().replace(" ", "");

  const cardStyle: React.CSSProperties = {
    fontFamily: "Lexend",
    margin: 0,
    background: "none",
    border: "none",
    fontSize: "20px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0, 0, 0, .75)",
    width: "200px",
    height: "100px",
  };

  return (
    <Button
      text={title}
      onClick={() => navigate(`/help/${url}`)}
      style={cardStyle}
    />
  );
}

export default HelpCard;
