import filterTabs from "../js/main";
import { useState } from "react";

function Tabs() {
  const [activeTab, setActiveTab] = useState("");

  const handleClick = (event) => {
    if (event.target.name === "projectsBtn") {
      setActiveTab(true);
    } else if (event.target.name === "skillsBtn") {
      setActiveTab(true);
    }
  };

  return (
    <ul className="filters__content">
      <button
        name="projectsBtn"
        className="filters__button filter-tab-active"
        data-target="#projects"
        onClick={handleClick}
      >
        Projects
      </button>
      <button
        name="skillsBtn"
        className="filters__button"
        data-target="#skills"
        onClick={handleClick}
      >
        Skills
      </button>
    </ul>
  );
}

export default Tabs;
