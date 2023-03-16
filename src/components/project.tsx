import "../styles/project.scss";
import type { ProjectType } from "../types";

type ProjectProps = {
  project: ProjectType;
};

const Project = ({ project }: ProjectProps) => {
  const { id, title, description } = project;
  return (
    <li className="project" key={id}>
      <div className="project-id">
        <p>{id}</p>
      </div>
      <div className="project-title">
        <p>{title}</p>
      </div>
      <div className="project-description">
        <p>{description}</p>
      </div>
    </li>
  );
};

export default Project;
