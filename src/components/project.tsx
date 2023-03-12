import "../styles/project.scss";
import type { ProjectType } from "../types";

type ProjectProps = {
  project: ProjectType;
};

const Project = ({ project }: ProjectProps) => {
  const { id, title, description } = project;
  return (
    <li className="project">
      <div className="project-id">
        {id}
      </div>
      <div className="project-title">
        {title}
      </div>
      <div className="project-description">
        {description}
      </div>
    </li>
  );
};

export default Project;
