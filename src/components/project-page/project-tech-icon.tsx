import type { TechnologiesType } from "@types";
import '@styles/project-tech-icon.scss'

type ProjectTechIconProps = {
  tech: TechnologiesType;
};

const ProjectTechIcon = ({ tech }: ProjectTechIconProps) => {
  return (
    <li className="tech-component">
      <img
        className="tech-icon"
        src={`/assets/${tech.img}`}
        alt={`${tech.title} logo`}
      />
      <p>{tech.title}</p>
    </li>
  );
};

export default ProjectTechIcon;
