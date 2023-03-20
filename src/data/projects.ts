import { TechStack } from "src/types/constants";
import type { ProjectListType } from "../types";

export const projectsData: ProjectListType = [
  {
    id: 1,
    slug: "gifter",
    title: "Gifter",
    description:
      "How not to love holidays... The clutter is everywhere... maybe as a part of the feeling. The minimalist in me said ‘No’. Get me the gifts that will light me up, help my hobbies, level up my life.",
    overview: "",
    technology: [
      TechStack.REACT,
      TechStack.NEXTJS,
      TechStack.ASTRO,
      TechStack.CYPRESS,
      TechStack.EXPRESSJS,
      TechStack.HTML,
      TechStack.JAVASCRIPT,
      TechStack.TYPESCRIPT,
      TechStack.PLAYWRIGHT,
      TechStack.SCSS,
      TechStack.VITEST,
    ],
    userFlow: ["main", "search"],
    colors: ["#422400", "#d2d2d2"],
    typography: "Arial",
    screenPaths: ["@assets/gifter-01.png"],
  },
  {
    id: 2,
    slug: "commenteer",
    title: "Commenteer",
    description:
      "Funny, engaging, sincere, and truthful viewers. Yup, the struggle of the youtuber... Please leave a comment in the comment section of the video... Or not, I’ll do it for you.",
    overview: "",
    technology: [TechStack.REACT, TechStack.NEXTJS],
    userFlow: ["main", "search"],
    colors: ["#422400", "#d2d2d2"],
    typography: "Arial",
    screenPaths: ["@assets/gifter-01.png"],
  },
  {
    id: 3,
    slug: "backnotes",
    title: "BackNotes",
    description:
      "Your favorite markdown editor... Well, at the beginning of the programming jurney the urge to remember everything is huge. Then you realise that not everything need to be remembered...",
    overview: "",
    technology: [TechStack.REACT, TechStack.NEXTJS],
    userFlow: ["main", "search"],
    colors: ["#dddddd", "#d2d2d2"],
    typography: "Arial",
    screenPaths: ["@assets/gifter-01.png"],
  },
  {
    id: 4,
    slug: "backnotesapi",
    title: "BackNotesAPI",
    description:
      "... and then you need a friend that will run in the background preparing your ‘knowledge’ to be served.",
    overview: "",
    technology: [TechStack.REACT, TechStack.NEXTJS],
    userFlow: ["main", "search"],
    colors: ["#dddddd", "#d2d2d2"],
    typography: "Arial",
    screenPaths: ["@assets/gifter-01.png"],
  },
  {
    id: 5,
    slug: "weatherapp",
    title: "Weather App",
    description:
      "Sole purpose of this app was to become my virtual testing pig... for a react-testing-library.",
    overview: "",
    technology: [TechStack.REACT, TechStack.NEXTJS],
    userFlow: ["main", "search"],
    colors: ["dddddd", "#d2d2d2"],
    typography: "Arial",
    screenPaths: ["@assets/gifter-01.png"],
  },
];
