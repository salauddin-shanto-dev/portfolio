import type { Profile } from "./types";

export const profile: Profile = {
  name: "Salauddin Shanto",
  initials: "SS",
  title: "Software Engineer",
  positioning: [
    "Backend-focused",
    "PHP & Laravel",
    "API Engineering",
    "Legacy Modernization",
    "System Design",
    "Linux & Infrastructure",
  ],
  intro:
    "Backend-focused Software Engineer with 2+ years of professional experience building and modernizing PHP and Laravel applications — REST APIs, modular architecture, databases, integrations, and the tests that keep them maintainable.",
  summary: [
    "Software Engineer with 2+ years of professional experience, primarily focused on backend development using PHP and Laravel.",
    "Experienced in REST API engineering, legacy application modernization, modular application architecture, database development, integrations, automated testing, and production application maintenance.",
    "Particularly interested in software engineering fundamentals, maintainability, application architecture, and understanding how underlying systems work.",
  ],
  focusAreas: [
    {
      title: "Backend Engineering",
      description:
        "Building server-side application logic in PHP and Laravel with clear boundaries between transport, domain, and persistence concerns.",
    },
    {
      title: "API Engineering",
      description:
        "Designing and implementing REST APIs with validated input, consistent response structures, and predictable error handling.",
    },
    {
      title: "Legacy Modernization",
      description:
        "Migrating and refactoring legacy applications — including framework migrations and major-version upgrades — while preserving existing data and business logic.",
    },
    {
      title: "Application Architecture",
      description:
        "Structuring applications into modules with dedicated layers for requests, actions, services, contracts, and transformers.",
    },
    {
      title: "Database Development",
      description:
        "Working with relational schemas in MySQL and PostgreSQL, including schema upgrades that keep existing production data intact.",
    },
    {
      title: "Software Testing",
      description:
        "Writing feature tests with Pest to verify application behavior and make refactoring safer.",
    },
  ],
  philosophy: [
    {
      title: "Maintainability",
      description:
        "Code is read and changed far more often than it is written. I optimize for the engineer who changes it next.",
    },
    {
      title: "Separation of Concerns",
      description:
        "Validation, orchestration, business rules, and presentation each belong in their own place, not inside one controller method.",
    },
    {
      title: "Modular Architecture",
      description:
        "Grouping features into modules with explicit boundaries keeps large applications navigable as they grow.",
    },
    {
      title: "Testability",
      description:
        "Small, focused units with injected dependencies are easier to test — and tests are what make change safe.",
    },
    {
      title: "Clean Application Design",
      description:
        "Consistent conventions, explicit data contracts, and predictable structure matter more than clever code.",
    },
    {
      title: "Understanding Systems Internally",
      description:
        "I want to know what happens beneath the framework — the runtime, the operating system, and the network.",
    },
  ],
  about: {
    introduction: [
      "I'm Salauddin Shanto, a Software Engineer with 2+ years of professional experience. My work is primarily on the backend: PHP and Laravel applications, the REST APIs they expose, and the databases behind them.",
      "I currently work as a Software Engineer 1 at Brain Station 23 PLC. Before that, I spent a year at Business Automation Ltd, first as a Software Engineer Intern and then as a Junior Software Engineer.",
    ],
    backendBackground: [
      "Most of my professional work involves designing and implementing REST APIs, structuring application code into maintainable modules, working with relational databases, and integrating external services such as SSO and SMS providers.",
      "I also spend a significant part of my time maintaining applications already running in production — investigating issues in existing functionality, understanding unfamiliar code paths, and making changes without breaking existing behavior.",
    ],
    legacyModernization: [
      "A large part of my experience is modernizing legacy applications. I independently designed and developed the migration of a production application from CodeIgniter 3 to Laravel, and contributed the majority of the development effort in a team modernizing a large Laravel 7 application to Laravel 12.",
      "That work taught me to treat existing behavior and existing data as constraints to preserve, and to introduce structure — modules, explicit request validation, DTOs, actions, services, and tests — incrementally rather than all at once.",
    ],
    engineeringInterests: [
      "I'm most interested in software engineering fundamentals: how to structure an application so it stays understandable as it grows, how to draw boundaries between responsibilities, and how tests enable safe change.",
    ],
    systemsInterests: {
      intro:
        "Beyond application code, I'm studying the systems that applications run on. These are areas I'm actively learning — not areas where I claim production experience.",
      topics: [
        "Operating systems",
        "Linux",
        "Networking",
        "Web servers (Apache, Nginx)",
        "Containers and orchestration",
        "CI/CD",
        "System design",
      ],
    },
  },
};
