import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import {
  typeToPlural,
  setExploreQuery,
  setExploreType,
} from "./ExploreFunctions";
import "./explore.css";
import ExploreSelect from "./ExploreSelect/ExploreSelect";

function Explore() {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const [query, setQuery] = useState<string>("");
  const [exploreType, setType] = useState<string>("");

  useEffect(() => {
    const newQuery = setExploreQuery(searchParams.get("query"));
    const newType = setExploreType(searchParams.get("type"));

    setQuery(newQuery);
    setType(newType);
  }, [location.search]);

  return (
    <div className="ExplorePage">
      <div className="exploringTitle">
        Exploring {typeToPlural(exploreType)}
      </div>
      <ExploreSelect selectedType={exploreType} />
    </div>
  );
}

export default Explore;
