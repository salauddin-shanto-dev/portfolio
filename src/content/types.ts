/** Year-month in ISO format, e.g. "2025-08". */
export type YearMonth = `${number}-${number}`;

export interface Period {
  start: YearMonth;
  /** `"present"` for an ongoing period. */
  end: YearMonth | "present";
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Principle {
  title: string;
  description: string;
}

export interface FocusArea {
  title: string;
  description: string;
}

export interface Profile {
  name: string;
  initials: string;
  title: string;
  positioning: string[];
  intro: string;
  summary: string[];
  focusAreas: FocusArea[];
  philosophy: Principle[];
  about: {
    introduction: string[];
    backendBackground: string[];
    legacyModernization: string[];
    engineeringInterests: string[];
    systemsInterests: {
      intro: string;
      topics: string[];
    };
  };
}

export interface Role {
  title: string;
  period: Period;
  summary: string;
  focus: string[];
}

export interface Employer {
  id: string;
  company: string;
  /** Roles in reverse-chronological order. Each position is kept separate. */
  roles: Role[];
  /** Related project slugs for cross-linking. */
  relatedProjects?: string[];
}

export type OwnershipType = "independent" | "team" | "personal";

export interface ScopeMetric {
  value: string;
  label: string;
}

export interface ArchitectureLayer {
  name: string;
  description: string;
}

export interface FlowDiagram {
  title: string;
  description: string;
  steps: ArchitectureLayer[];
}

export interface Project {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  featured: boolean;
  ownership: {
    type: OwnershipType;
    label: string;
    detail: string;
  };
  organization?: string;
  status?: string;
  externalLink?: {
    label: string;
    href: string;
  };
  /** 1. Project overview */
  overview: string[];
  /** 2. Background and problem */
  background: string[];
  /** 3. My role and ownership */
  role: string[];
  /** 4. Project scope */
  scope: {
    metrics: ScopeMetric[];
    areas: string[];
  };
  /** 5. Technical challenges */
  challenges: Principle[];
  /** 6. Engineering approach */
  approach: Principle[];
  /** 7. Architecture and implementation */
  architecture: {
    summary: string[];
    layers?: ArchitectureLayer[];
    diagram?: FlowDiagram;
  };
  /** 8. Key contributions */
  contributions: string[];
  /** 9. Technologies used */
  technologies: string[];
  /** 10. Engineering outcomes and lessons learned */
  outcomes: string[];
  lessons: string[];
}

export interface SkillGroup {
  id: string;
  title: string;
  description: string;
  /** Marks groups that represent learning, not production experience. */
  learning: boolean;
  items: string[];
}

export interface Education {
  institution: string;
  shortName: string;
  degree: string;
  period: Period;
  grade: string;
}
