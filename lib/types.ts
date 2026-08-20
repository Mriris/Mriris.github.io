export type Lang = 'zh' | 'en';

export interface Stat {
  value: number;
  label: string;
  note: string;
}

export interface ResearchArea {
  id: string;
  title: string;
  summary: string;
  points: string[];
}

export interface Publication {
  id: string;
  venue: string;
  venueNote: string;
  status: string;
  title: string;
  role: string;
  meta: string;
  live: boolean;
}

export interface Project {
  id: string;
  name: string;
  tagline: string;
  metrics: string[];
  body: string;
  stack: string[];
  href: string;
  hrefLabel: string;
}

export interface SkillGroup {
  id: string;
  label: string;
  items: string[];
}

export interface EducationItem {
  id: string;
  school: string;
  degree: string;
  period: string;
  notes: string[];
}

export interface Heading {
  title: string;
  latin: string;
  nav: string;
}

export interface Profile {
  lang: Lang;
  altPath: string;
  altLabel: string;

  meta: {
    title: string;
    description: string;
    htmlLang: string;
  };

  hero: {
    name: string;
    latinName: string;
    affiliation: string;
    period: string;
    statement: string[];
    tagline: string;
    keywords: string[];
    email: string;
    github: string;
    githubLabel: string;
  };

  scene: {
    t1: string;
    t2: string;
    legend: string;
    caption: string;
    alt: string;
  };

  stats: Stat[];

  research: Heading & { areas: ResearchArea[] };
  publications: Heading & { items: Publication[] };
  projects: Heading & { items: Project[] };

  skills: Heading & {
    groups: SkillGroup[];
    awardsLabel: string;
    awards: string[];
    educationLabel: string;
    education: EducationItem[];
  };

  archive: {
    label: string;
    title: string;
    description: string;
    href: string;
    cta: string;
  };

  footer: {
    emailLabel: string;
    githubLabel: string;
    note: string;
    copyright: string;
  };

  a11y: {
    themeToggle: string;
    langToggle: string;
  };
}
