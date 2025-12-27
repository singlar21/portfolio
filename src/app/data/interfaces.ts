export interface Header {
  firstName: string;
  lastName: string;
  about: string;
}

export interface Contact {
  description: string;
  email: string;
  linkedInUrl: string;
  githubUrl: string;
}


export interface SkillCategory {
  title: string;
  icon?: string;          // Optional emoji/icon
  type: 'list' | 'badge'; // Whether to render as <ul> or badge <span>
  color: string;          // Tailwind text color for heading
  items: string[];        // Skill items
  badgeColor?: string;    // If type=badge, bg/text color for badges
}

export interface ProjectData {
    name:string;
    company:string;
    description:string;
    skills:string[];
    roles:string[];
    link?:string;
}

export interface ExperienceData {
    role:string;
    company:string;
    client:string;
    period:string;
    description:string;
    logoUrl:string;
    skills:string[];
}