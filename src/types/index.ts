import type { TechStack } from "./constants";

export type ProjectType = {
  id: number;
  slug: string;
  title: string;
  description: string;
  overview?: string;
  technology?: TechStack[];
  userFlow?: string[];
  colors?: string[];
  typography?: string;
  screenPaths?: string[];
};

export type ProjectListType = ProjectType[];

export type TechnologiesType = {
  id: number;
  slug: TechStack;
  title: string;
  description: string;
  img: string;
};

export type TechnologiesListType = TechnologiesType[];
