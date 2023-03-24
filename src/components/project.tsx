import "@styles/project.scss";
import type { ProjectType } from "../types";

type ProjectProps = {
  project: ProjectType;
};

const Project = ({ project }: ProjectProps) => {
  const { id, title, description, slug } = project;
  return (
    <li className="project">
      <a href={`/${slug}`} className="project-link">
        <div className="project-id">
          <p>{id}</p>
        </div>
        <div className="project-title">
          <p>{title}</p>
        </div>
        <div className="project-description">
          <p>{description}</p>
        </div>
      </a>
    </li>
  );
};

export default Project;
