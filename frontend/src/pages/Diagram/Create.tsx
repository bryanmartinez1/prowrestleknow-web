import OptionsSlider from "../../components/OptionsSlider/OptionsSlider";
import { diagramOptions } from "../../defaults/variables";
import Star from "./components/Star/Star";

function CreateDiagram() {
  return (
    <div>
      <OptionsSlider options={diagramOptions} />
      <Star />
    </div>
  );
}

export default CreateDiagram;
