export type ProjectType = {
  id: number;
  slug: string;
  title: string;
  description: string;
  overview?: string;
  technologies?: string[];
  userFlow?: string[];
  colors?: string[];
  typography?: string;
  screenPaths?: string[];
};

export type ProjectListType = ProjectType[];
