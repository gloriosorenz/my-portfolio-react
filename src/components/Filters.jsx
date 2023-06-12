function Filters(props) {
  return (
    <div>
      <ul className="filters__content">
        <button
          className="filters__button filter-tab-active"
          data-target="#projects"
        >
          Projects
        </button>
        <button className="filters__button" data-target="#skills">
          Skills
        </button>
      </ul>
    </div>
  );
}

export default Filters;
