import type { ProjectListType } from "../types";
import Project from "@components/project";

type ProjectListProps = {
  projects: ProjectListType;
};

const ProjectList = ({ projects }: ProjectListProps) => {
  const projectsList = projects.map((project) => <Project project={project} key={project.id}/>);

  return <ul>{projectsList}</ul>;
};

export default ProjectList;
