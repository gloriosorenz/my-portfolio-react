import projects from "../js/projects";
import ProjectCard from "./ProjectCard";

function ProjectsTab() {
  return (
    <>
      {/* <!--=============== PROJECTS ===============--> */}
      <div
        className="projects__content grid filters__active"
        data-content
        id="projects"
      >
        {projects.map((project) => {
          return (
            <ProjectCard
              key={project.id}
              title={project.title}
              subtitle={project.subtitle}
              image={project.image}
              url={project.url}
            />
          );
        })}
      </div>
    </>
  );
}

export default ProjectsTab;
