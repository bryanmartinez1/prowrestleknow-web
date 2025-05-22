import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import SearchDataRing from "./pages/DataRing/Search";
import SearchWCMEFT from "./pages/WCMEFT/Search";
import SelectedDataRing from "./pages/DataRing/Selected";
import SearchModule from "./pages/Module/Search";
import SelectedModule from "./pages/Module/Selected";
import SelectedWCMEFT from "./pages/WCMEFT/Selected";
import Create from "./pages/Diagram/Create";
import Profile from "./pages/Profile/Profile";
import Help from "./pages/Help/Help";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* 
          Data Ring
        */}
        <Route path="/dataring" element={<SearchDataRing />} />
        <Route path="/dataring/:id" element={<SelectedDataRing />} />
        {/* 
          Module
        */}
        <Route path="/module" element={<SearchModule />} />
        <Route path="/module/:id" element={<SelectedModule />} />
        {/* 
          Wrestler, Company, Match, Event, Faction, Title
        */}
        <Route path="/explore" element={<SearchWCMEFT />} />
        <Route path="/wrestler/:id" element={<SelectedWCMEFT />} />
        <Route path="/company/:id" element={<SelectedWCMEFT />} />
        <Route path="/match/:id" element={<SelectedWCMEFT />} />
        <Route path="/event/:id" element={<SelectedWCMEFT />} />
        <Route path="/faction/:id" element={<SelectedWCMEFT />} />
        <Route path="/title/:id" element={<SelectedWCMEFT />} />
        {/* 
          Create 
        */}
        <Route path="/create" element={<Create />} />
        {/* 
          Profile 
        */}
        <Route path="/profile" element={<Profile />} />
        {/* 
          Help 
        */}
        <Route path="/help" element={<Help />} />
      </Routes>
    </div>
  );
}

export default App;
