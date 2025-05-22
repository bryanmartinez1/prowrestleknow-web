import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Explore from "./pages/Explore/Explore";
import SelectedDataRing from "./pages/DataRing/Selected";
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
        {/* CREATE */}
        <Route path="/create/diagram" element={<Create />} />
        <Route path="/create/dataring" element={<Create />} />
        {/* EXPLORE */}
        <Route path="/explore" element={<Explore />} />
        <Route path="/explore/dataring/:id" element={<SelectedDataRing />} />
        <Route path="/explore/module/:id" element={<SelectedModule />} />
        <Route path="/explore/wrestler/:id" element={<SelectedWCMEFT />} />
        <Route path="/explore/company/:id" element={<SelectedWCMEFT />} />
        <Route path="/explore/match/:id" element={<SelectedWCMEFT />} />
        <Route path="/explore/event/:id" element={<SelectedWCMEFT />} />
        <Route path="/explore/faction/:id" element={<SelectedWCMEFT />} />
        <Route path="/explore/title/:id" element={<SelectedWCMEFT />} />
        {/* HELP */}
        <Route path="/help" element={<Help />} />
        <Route path="/help/:id" element={<Help />} />
        {/* USERS */}
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
