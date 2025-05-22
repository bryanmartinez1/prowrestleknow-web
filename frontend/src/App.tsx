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
        <Route path="/dataring/:id" element={<SelectedDataRing />} />
        <Route path="/module/:id" element={<SelectedModule />} />
        <Route path="/wrestler/:id" element={<SelectedWCMEFT />} />
        <Route path="/company/:id" element={<SelectedWCMEFT />} />
        <Route path="/match/:id" element={<SelectedWCMEFT />} />
        <Route path="/event/:id" element={<SelectedWCMEFT />} />
        <Route path="/faction/:id" element={<SelectedWCMEFT />} />
        <Route path="/title/:id" element={<SelectedWCMEFT />} />
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
