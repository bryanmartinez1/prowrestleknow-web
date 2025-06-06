import { useSearchParams } from "react-router-dom";
import {
  setExploreQuery,
  setExploreQuerySearch,
  setExploreType,
} from "./ExploreFunctions";
import "./explore.css";

function Explore() {
  const [searchParams] = useSearchParams();
  const query: string = setExploreQuery(searchParams.get("query"));
  const exploreType: string = setExploreType(searchParams.get("type"));
  const a = setExploreQuerySearch(query);

  return (
    <div className="ExplorePage">
      <div className="exploringTitle">Exploring {exploreType}s</div>
      {query}
      {exploreType}
      {a}
    </div>
  );
}

export default Explore;
