import { useNavigate } from "react-router-dom";
import Button from "../../components/Buttons/Button";
import { cardStyle } from "../../defaults/css";

type HelpProps = {
  title: string;
};

function HelpCard({ title }: HelpProps) {
  const navigate = useNavigate();
  const url: string = title.toLowerCase().replace(" ", "");

  return (
    <Button
      text={title}
      onClick={() => navigate(`/help/${url}`)}
      style={cardStyle}
    />
  );
}

export default HelpCard;
