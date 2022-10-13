import type { MDXInstance } from "astro";

export interface FrontMatter {
  title: string;
  date: string;
  image: string;
  description: string;
  tags: string[];
  lang?: string;
  group?: string;
  link?: string;
}

export type Project = MDXInstance<FrontMatter>;
