import { useNavigate, useSearchParams } from "react-router-dom";
import { exploreTypeOptions } from "../../../defaults";
import Button from "../../../components/Buttons/Button";
import "./exploreSelect.css";
import { setExploreType } from "../ExploreFunctions";

type ExploreSelectType = {
  selectedType: string;
};

function ExploreSelect({ selectedType }: ExploreSelectType) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const buttonStyle: React.CSSProperties = {
    fontSize: "12px",
    fontFamily: "Lexend",
    margin: 0,
    background: "none",
    border: "none",
  };

  const selectedStyle: React.CSSProperties = {
    textDecoration: "underline",
    textDecorationThickness: "3px",
  };

  const navigateExploreType = (type: string) => {
    const query = searchParams.get("query");
    let exploreUrl = `/explore?type=${type}`;
    if (query) {
      exploreUrl += `&query=${query}`;
    }
    navigate(exploreUrl);
  };

  return (
    <div className="ExploreSelect">
      {exploreTypeOptions.map((option, index) => {
        const isSelected = selectedType === setExploreType(option);
        return (
          <Button
            key={index}
            text={option}
            onClick={() => navigateExploreType(option)}
            style={{ ...buttonStyle, ...(isSelected ? selectedStyle : {}) }}
          />
        );
      })}
    </div>
  );
}

export default ExploreSelect;
