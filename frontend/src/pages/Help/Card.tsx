import { useNavigate } from "react-router-dom";
import "./help.css";

type HelpProps = {
  title: string;
};

function HelpCard({ title }: HelpProps) {
  const navigate = useNavigate();
  const url: string = title.toLowerCase().replace(" ", "");
  return (
    <button className="helpCard" onClick={() => navigate(`/help/${url}`)}>
      {title}
    </button>
  );
}

export default HelpCard;
