import type { ProjectListType } from "../types";
import Project from "./project";

type ProjectListProps = {
  projects: ProjectListType;
};

const ProjectList = ({ projects }: ProjectListProps) => {
  const projectsList = projects.map((project) => <Project project={project} />);

  return <ul>{projectsList}</ul>;
};

export default ProjectList;
