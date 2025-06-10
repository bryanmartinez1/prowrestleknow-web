import {
  ColorRing,
  Oval,
  RotatingLines,
  RotatingSquare,
  RotatingTriangles,
} from "react-loader-spinner";
import "./loading.css";

function Loading() {
  return (
    <div className="loadingBackground" id="loading-spinner">
      <Oval
        strokeWidth={10}
        height={100}
        width={100}
        color="#EE534F"
        secondaryColor="f59795"
      />
    </div>
  );
}

export default Loading;
