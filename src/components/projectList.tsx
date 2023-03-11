// ---
// import type { ProjectListType, ProjectType } from "../types";
// import Project from "./project.astro";

// interface Props {
//   projects: ProjectListType;
// }

// const projectsData = Astro.props;
// // const projectList = projectsData.map((project: ProjectType) => {
// //   <Project project={project} />;
// // });
// ---

// <ul>
//   {
//     projectsData.map((project: ProjectType) => {
//       <Project project={project} />;
//     })
//   }
// </ul>

import React from "react";
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
