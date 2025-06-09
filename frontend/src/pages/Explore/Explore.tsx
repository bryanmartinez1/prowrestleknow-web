import { useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import {
  typeToPlural,
  setExploreQuery,
  setExploreType,
} from "./ExploreFunctions";
import "./explore.css";
import ExploreSelect from "./ExploreSelect/ExploreSelect";
import Searchbar from "../../components/Searchbar/Searchbar";

function Explore() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [query, setQuery] = useState<string>("");
  const [exploreType, setType] = useState<string>("");

  useEffect(() => {
    const newQuery = setExploreQuery(searchParams.get("query"));
    const type = setExploreType(searchParams.get("type"));

    setQuery(newQuery);
    setType(type);
  }, [location.search]);

  const navigateExploreSearch = (search: string) => {
    let exploreUrl = `/explore?type=${exploreType}`;
    if (search && search.trim() !== "") {
      exploreUrl += `&query=${encodeURIComponent(search)}`;
    }

    navigate(exploreUrl);
  };

  return (
    <div className="ExplorePage">
      <div className="exploringTitle">
        Exploring {typeToPlural(exploreType)}
      </div>
      <ExploreSelect selectedType={exploreType} />
      <Searchbar
        text={query}
        onClick={() => navigateExploreSearch(query)}
        updateSearch={setQuery}
      />
      <>{query}</>
    </div>
  );
}

export default Explore;
