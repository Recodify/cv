// src/types/experience.ts
export interface Achievement {
    id: string;
    text: string;
    hidden?: boolean;
  }

  export interface ExperienceRole {
    id: string;
    title: string;
    company: string;
    website?: string;
    period: {
      start: string;
      end: string;
    };
    introduction?: string;
    technologies?: string[];
    achievements?: Achievement[];
    forcePageBreak?: boolean;
    bumpdown?: number;
  }