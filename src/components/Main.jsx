import React from "react";
import Filters from "./Filters";
import MainContent from "./MainContent";
import { filterTabs } from "../js/main";

function Main() {
  return (
    <section className="filters container">
      <Filters change={filterTabs} />
      <MainContent />
    </section>
  );
}

export default Main;
