import React from "react";
import Tabs from "./Tabs";
import ProjectsTab from "./ProjectsTab";
import SkillsTab from "./SkillsTab";

function Main() {
  return (
    <main className="main">
      <section className="filters container">
        <Tabs />
        <div className="filters__sections">
          <ProjectsTab />
          <SkillsTab />
        </div>
      </section>
    </main>
  );
}

export default Main;
