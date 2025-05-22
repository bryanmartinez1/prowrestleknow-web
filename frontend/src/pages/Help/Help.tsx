import HelpCard from "./Card";
import "./help.css";

function Help() {
  return (
    <div className="helpPage">
      <HelpCard title="Explore" />
      <HelpCard title="Module" />
      <HelpCard title="Data Ring" />
      <HelpCard title="Diagram" />
      <HelpCard title="Notes" />
      <HelpCard title="Profile" />
      <HelpCard title="About" />
    </div>
  );
}

export default Help;
