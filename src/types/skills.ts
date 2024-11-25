type SkillCategory = 'technology' | 'business' | 'industry' | 'team';

export interface Skill {
  name: string;
  icon: React.ReactNode;
}

export interface SkillSubGroup {
  title: string;
  forcePageBreak?: boolean;
  skills: Skill[];
}


export interface SkillGroup {
  category: SkillCategory;
  title: string;
  forcePageBreak?: boolean;
  subGroups?: SkillSubGroup[];  // For technology section
  skills?: Skill[];
}