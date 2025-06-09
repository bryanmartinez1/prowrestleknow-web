import OptionsSlider from "../../components/OptionsSlider/OptionsSlider";
import { diagramOptions } from "../../defaults";

function CreateDiagram() {
  
  return <div><OptionsSlider options={diagramOptions}/></div>;
}

export default CreateDiagram;
