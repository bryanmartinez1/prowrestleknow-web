import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SearchDataRing from "./pages/DataRing/Search";
import SearchWCMEFT from "./pages/WCMEFT/Search";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dataring" element={<SearchDataRing />} />
        <Route path="/module" element={<SearchDataRing />} />
        <Route path="/index" element={<SearchWCMEFT />} />
      </Routes>
    </div>
  );
}

export default App;
