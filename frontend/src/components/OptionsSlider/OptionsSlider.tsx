import { buttonStyle } from "../../defaults/css";
import Button from "../Buttons/Button";
import "./optionsSlider.css";

type OptionsSliderProps = {
  options: string[];
};

function OptionsSlider({ options }: OptionsSliderProps) {
  return (
    <div className="optionsSlider">
      {options.map((option, index) => {
        return <Button key={index} text={option} style={buttonStyle} />;
      })}
    </div>
  );
}

export default OptionsSlider;
