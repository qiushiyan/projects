import type { MDXInstance } from "astro";

export interface FrontMatter {
  title: string;
  date: string;
  description: string;
  tags: string[];
  link: string;
  image?: string;
  lang?: string;
  group?: string;
}

export type Project = MDXInstance<FrontMatter>;
