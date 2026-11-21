import type { Employer } from "./types";

/** Employers in reverse-chronological order. */
export const experience: Employer[] = [
  {
    id: "brain-station-23",
    company: "Brain Station 23 PLC",
    roles: [
      {
        title: "Software Engineer 1",
        period: { start: "2025-08", end: "present" },
        summary:
          "Backend-focused engineering on PHP and Laravel applications, with an emphasis on API engineering, modernization of legacy codebases, and maintaining applications running in production.",
        focus: [
          "Backend development",
          "PHP and Laravel",
          "API engineering",
          "Application modernization",
          "Database development",
          "Authentication and integrations",
          "Scheduled jobs and synchronization",
          "Testing",
          "Production application maintenance",
        ],
      },
    ],
  },
  {
    id: "business-automation",
    company: "Business Automation Ltd",
    relatedProjects: ["bangladesh-e-mutation"],
    roles: [
      {
        title: "Junior Software Engineer",
        period: { start: "2024-10", end: "2025-07" },
        summary:
          "Backend application development in PHP and Laravel, including contributions to the Bangladesh e-Mutation platform, web scraping work, integrations, and maintenance of existing applications.",
        focus: [
          "PHP and Laravel development",
          "Backend application development",
          "e-Mutation platform contributions",
          "Web scraping",
          "Integrations",
          "Application maintenance",
        ],
      },
      {
        title: "Software Engineer Intern",
        period: { start: "2024-07", end: "2024-10" },
        summary:
          "Started professional work on PHP and Laravel, learning existing codebases and contributing to ongoing application development.",
        focus: [
          "PHP and Laravel development",
          "Learning and contributing to existing application development",
          "Supporting engineering tasks",
        ],
      },
    ],
  },
];
