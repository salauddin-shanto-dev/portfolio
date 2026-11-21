import type { Project } from "./types";

/**
 * Project case studies. Order here defines display order.
 * Featured projects are shown prominently on the homepage.
 */
export const projects: Project[] = [
  {
    slug: "codeigniter-to-laravel-migration",
    title: "CodeIgniter 3 to Laravel Migration",
    shortTitle: "CodeIgniter 3 → Laravel",
    tagline:
      "Independently designed and developed the migration of a legacy production application from CodeIgniter 3 to a modular Laravel architecture.",
    featured: true,
    ownership: {
      type: "independent",
      label: "Independent",
      detail: "Independently designed and developed the migration.",
    },
    overview: [
      "A legacy production application built on CodeIgniter 3 was migrated to Laravel. The migration covered more than 10 modules, 40+ APIs, and 80+ database tables.",
      "Rather than porting code line by line, the migration was used to introduce an explicit, modular application architecture with dedicated layers for routing, validation, data transfer, business actions, services, and response transformation — backed by feature tests written in Pest.",
    ],
    background: [
      "The application was already in production, so its data and business logic had to keep working. Any migration had to preserve existing behavior while moving to a framework with a stronger ecosystem, better conventions, and first-class testing support.",
      "Legacy CodeIgniter 3 applications commonly accumulate logic inside controllers and models, with validation, persistence, and response formatting interleaved. That makes behavior hard to reason about, hard to test, and risky to change — which is exactly the problem a migration needs to solve rather than reproduce.",
    ],
    role: [
      "I independently designed and developed the migration: the target architecture, the module structure, the shared components, the API layer, the database schema changes, and the feature test suite.",
      "That meant making the architectural decisions myself and being responsible for preserving the existing data and business logic throughout the transition.",
    ],
    scope: {
      metrics: [
        { value: "10+", label: "Modules" },
        { value: "40+", label: "APIs" },
        { value: "80+", label: "Database tables" },
      ],
      areas: [
        "Application architecture and module design",
        "REST API migration",
        "Shared infrastructure components",
        "Database schema upgrades",
        "Security hardening",
        "Feature testing with Pest",
      ],
    },
    challenges: [
      {
        title: "Preserving behavior in a production system",
        description:
          "Existing business logic had to be understood and carried over faithfully. Legacy code paths often encode implicit rules that are not documented anywhere else.",
      },
      {
        title: "Upgrading the schema without losing data",
        description:
          "Parts of the database schema were upgraded during the migration. Each change had to preserve existing records and keep the data consistent with the business logic that depends on it.",
      },
      {
        title: "Avoiding a one-to-one port",
        description:
          "Copying CodeIgniter controllers into Laravel would have carried the same coupling forward. The challenge was introducing structure while keeping the migration tractable.",
      },
      {
        title: "Consistency across 40+ APIs",
        description:
          "Without shared conventions, each endpoint tends to validate input, handle errors, and shape responses differently. Clients need predictable contracts.",
      },
    ],
    approach: [
      {
        title: "Modules as the unit of organization",
        description:
          "Each business area became a module with its own routes, controllers, requests, actions, and services, so features can be understood and changed in isolation.",
      },
      {
        title: "Thin controllers, explicit layers",
        description:
          "Controllers only coordinate. Validation lives in Form Requests, data crosses boundaries as DTOs, business operations are Actions, and reusable logic sits behind Services and Contracts.",
      },
      {
        title: "Reusable building blocks first",
        description:
          "Cross-cutting concerns — API responses, file management, exception handling, and SMS — were built once as reusable components and shared across modules.",
      },
      {
        title: "Tests as a safety net",
        description:
          "Feature tests written in Pest exercise endpoints end to end, verifying behavior and making further refactoring safer.",
      },
    ],
    architecture: {
      summary: [
        "The application is organized by module. Within each module, a request flows through a fixed sequence of layers, each with a single responsibility. Contracts decouple services from their implementations so they can be substituted and tested independently.",
      ],
      diagram: {
        title: "Request lifecycle within a module",
        description:
          "How an API request moves through the layers introduced during the migration.",
        steps: [
          {
            name: "Route",
            description: "Maps the HTTP endpoint to a controller action inside its module.",
          },
          {
            name: "Form Request",
            description: "Authorizes and validates incoming input before any logic runs.",
          },
          {
            name: "Controller",
            description: "Thin coordinator: builds a DTO and delegates to an Action.",
          },
          {
            name: "DTO",
            description: "Typed data object that carries validated input across boundaries.",
          },
          {
            name: "Action",
            description: "Executes a single business operation.",
          },
          {
            name: "Service / Contract",
            description: "Reusable domain logic, depended on through interfaces.",
          },
          {
            name: "Transformer / View Model",
            description: "Shapes the result into a consistent API response structure.",
          },
        ],
      },
      layers: [
        {
          name: "API response component",
          description: "A shared, consistent response envelope used by every endpoint.",
        },
        {
          name: "Exception handling component",
          description: "Centralized translation of exceptions into predictable API errors.",
        },
        {
          name: "File management component",
          description: "Reusable handling for file storage and retrieval across modules.",
        },
        {
          name: "SMS component",
          description: "A reusable abstraction for sending SMS from any module.",
        },
      ],
    },
    contributions: [
      "Migrated a legacy production application from CodeIgniter 3 to Laravel.",
      "Designed the modular application architecture.",
      "Introduced Routes, Controllers, Form Requests, DTOs, Actions, View Models, Services, Contracts, and Transformers.",
      "Built reusable API response, file management, exception handling, and SMS components.",
      "Applied security measures against common web application vulnerabilities.",
      "Upgraded parts of the database schema while preserving existing data and business logic.",
      "Developed feature tests using Pest.",
    ],
    technologies: ["PHP", "Laravel", "MySQL", "Pest", "REST APIs"],
    outcomes: [
      "The application runs on Laravel with an explicit, modular architecture instead of legacy CodeIgniter 3 code.",
      "Business logic is separated from transport concerns, with each layer having a single responsibility.",
      "Cross-cutting concerns are handled by shared components rather than reimplemented per endpoint.",
      "Feature tests provide a baseline for verifying behavior during future changes.",
    ],
    lessons: [
      "A migration is the best opportunity to introduce structure — but only if existing behavior is treated as a hard constraint.",
      "Investing in shared components early pays off across every module that follows.",
      "Clear layer responsibilities make code reviews and onboarding easier, because there is one obvious place for each kind of logic.",
    ],
  },
  {
    slug: "laravel-7-to-12-modernization",
    title: "Laravel 7 to Laravel 12 Modernization",
    shortTitle: "Laravel 7 → Laravel 12",
    tagline:
      "Team modernization of a large legacy Laravel application, contributing approximately 90% of the development effort.",
    featured: true,
    ownership: {
      type: "team",
      label: "Team project",
      detail: "Team-based project with approximately 90% contribution to the development effort.",
    },
    overview: [
      "A large legacy Laravel 7 application — spanning 30+ modules, 100+ features, and 60+ APIs — was modernized to Laravel 12 by a team. I contributed approximately 90% of the development effort.",
      "Beyond the framework upgrade, the work involved restructuring controller-heavy code into a modular architecture, rewriting APIs that had been implemented in raw PHP, and working on integrations, scheduled synchronization, and report exports.",
    ],
    background: [
      "Laravel 7 is several major versions behind current Laravel. Staying on it means missing years of framework improvements and running on an increasingly outdated dependency stack.",
      "The application had also grown in ways that made it harder to maintain: substantial business logic lived inside controllers, and some APIs were implemented in raw PHP outside of Laravel's conventions entirely.",
    ],
    role: [
      "This was a team project. I contributed approximately 90% of the development effort, and contributed to — rather than solely owned — the design of the modular architecture.",
      "My work covered refactoring, API rewrites, SSO and SMS integrations, scheduled data synchronization, and report export functionality.",
    ],
    scope: {
      metrics: [
        { value: "30+", label: "Modules" },
        { value: "100+", label: "Features" },
        { value: "60+", label: "APIs" },
      ],
      areas: [
        "Framework modernization (Laravel 7 → 12)",
        "Modular architecture",
        "Controller refactoring",
        "Raw PHP API rewrites",
        "SSO and SMS integrations",
        "Scheduled data synchronization",
        "Report exports and performance work",
      ],
    },
    challenges: [
      {
        title: "Scale of the surface area",
        description:
          "With 30+ modules and 100+ features, the upgrade could not be treated as a single change. Each area needed to keep working as it moved forward.",
      },
      {
        title: "Controller-heavy legacy code",
        description:
          "Business logic embedded in controllers is difficult to reuse and test, and makes the upgrade itself riskier.",
      },
      {
        title: "APIs outside the framework",
        description:
          "Some APIs were written in raw PHP. They did not benefit from Laravel's routing, validation, or middleware and had to be rewritten without changing their behavior for clients.",
      },
      {
        title: "Integrations and background work",
        description:
          "SSO, SMS, scheduled synchronization, and report exports each interact with external systems or large data sets, where correctness and efficiency both matter.",
      },
    ],
    approach: [
      {
        title: "Modular restructuring",
        description:
          "Contributed to designing a modular architecture so features are grouped by business area with clear boundaries.",
      },
      {
        title: "Refactor, then upgrade",
        description:
          "Controller-heavy code was refactored by moving business logic out of controllers into dedicated, reusable classes.",
      },
      {
        title: "Bring APIs into the framework",
        description:
          "APIs originally implemented in raw PHP were rewritten using Laravel, gaining consistent routing, validation, and error handling.",
      },
      {
        title: "Use the scheduler for synchronization",
        description:
          "Recurring data synchronization was implemented as scheduled jobs rather than manual or ad hoc processes.",
      },
    ],
    architecture: {
      summary: [
        "The modernized application groups functionality by module. Controllers are reduced to coordination, while business logic lives in dedicated classes. Integrations and scheduled jobs are implemented as distinct components so they can be maintained independently of request handling.",
      ],
      layers: [
        {
          name: "Modules",
          description: "Feature areas grouped with their own routes, controllers, and logic.",
        },
        {
          name: "Laravel APIs",
          description: "Former raw PHP endpoints rewritten on Laravel's routing and validation.",
        },
        {
          name: "Integrations",
          description: "SSO and SMS integrations isolated from core business logic.",
        },
        {
          name: "Scheduled jobs",
          description: "Recurring data synchronization driven by the Laravel scheduler.",
        },
        {
          name: "Report exports",
          description: "Export functionality reworked with attention to performance.",
        },
      ],
    },
    contributions: [
      "Modernized a large legacy Laravel application from Laravel 7 to Laravel 12 as part of a team.",
      "Contributed to designing the modular architecture.",
      "Refactored controller-heavy code.",
      "Rewrote APIs originally implemented in raw PHP using Laravel.",
      "Worked on SSO and SMS integrations.",
      "Implemented scheduled data synchronization.",
      "Worked on report export functionality and performance improvements.",
    ],
    technologies: ["PHP", "Laravel 7", "Laravel 12", "MySQL", "REST APIs"],
    outcomes: [
      "The application moved from Laravel 7 to Laravel 12.",
      "APIs previously implemented in raw PHP now follow the same Laravel conventions as the rest of the application.",
      "Business logic was moved out of controllers into a modular structure.",
      "Data synchronization runs as scheduled jobs.",
    ],
    lessons: [
      "Large upgrades go more smoothly when structural refactoring and version upgrades are treated as related but separate concerns.",
      "Code that lives outside the framework's conventions is usually where the most risk — and the most value — is hidden.",
      "Working on a team-owned modernization requires clear agreement on architecture so that many changes converge on one structure.",
    ],
  },
  {
    slug: "actionaid-website-migration",
    title: "ActionAid Website Migration",
    shortTitle: "ActionAid: WordPress → Strapi + Next.js",
    tagline:
      "Collaborative migration of the ActionAid website from WordPress to Strapi and Next.js — without access to the original source code or database.",
    featured: false,
    ownership: {
      type: "team",
      label: "Team project",
      detail: "Collaborative, team-based project.",
    },
    overview: [
      "The ActionAid website was migrated from WordPress to a headless architecture using Strapi as the CMS and Next.js as the frontend. This was a collaborative team project.",
      "The defining constraint was that the team had no access to the original source code or database, so the existing site had to be reverse-engineered from the outside.",
    ],
    background: [
      "A typical CMS migration starts by exporting the database. Here, that was not possible. The only available source of truth was the live, public website itself.",
      "That meant every route, every page, and every piece of content had to be discovered, extracted, and modeled before a new system could be built.",
    ],
    role: [
      "I contributed as part of the team across the full migration pipeline: discovery and scraping with Python, content modeling, Strapi development, Next.js frontend work, and the SSLCOMMERZ integration.",
    ],
    scope: {
      metrics: [],
      areas: [
        "Route and sitemap discovery",
        "Content scraping and layout analysis",
        "Database and CMS content modeling",
        "Strapi content types, seeders, and APIs",
        "Next.js frontend",
        "SSLCOMMERZ payment integration",
      ],
    },
    challenges: [
      {
        title: "No source code or database",
        description:
          "Without the original data, the full structure of the site had to be inferred from what was publicly rendered.",
      },
      {
        title: "Discovering every route",
        description:
          "Pages that are not linked from navigation are easy to miss. A complete route inventory was needed before content could be migrated.",
      },
      {
        title: "Turning pages into structured content",
        description:
          "Rendered HTML had to be mapped back into reusable, structured CMS content types that editors could maintain.",
      },
    ],
    approach: [
      {
        title: "Automated discovery",
        description:
          "Developed Python scripts to discover website routes and sitemap structure.",
      },
      {
        title: "Scrape, then analyze",
        description:
          "Scraped website content and analyzed existing page layouts to identify repeated patterns.",
      },
      {
        title: "Model reusable content",
        description:
          "Helped design the database and reusable CMS content structures based on those patterns.",
      },
      {
        title: "Seed the new CMS",
        description:
          "Developed Strapi content types and seeders to load the extracted content into the new system.",
      },
    ],
    architecture: {
      summary: [
        "The migration was a pipeline: discover the existing site, extract its content, model it, load it into Strapi, and render it through a Next.js frontend that consumes the Strapi API.",
      ],
      diagram: {
        title: "Migration pipeline",
        description: "From a live WordPress site with no source access to a headless CMS.",
        steps: [
          {
            name: "Live WordPress site",
            description: "The only available source of truth.",
          },
          {
            name: "Route discovery",
            description: "Python scripts map routes and sitemap structure.",
          },
          {
            name: "Scraping & layout analysis",
            description: "Content extracted; repeated layouts identified.",
          },
          {
            name: "Content modeling",
            description: "Database and reusable CMS content structures designed.",
          },
          {
            name: "Strapi",
            description: "Content types, seeders, and APIs.",
          },
          {
            name: "Next.js frontend",
            description: "Renders content from the Strapi API.",
          },
        ],
      },
    },
    contributions: [
      "Reverse-engineered an existing website without access to its original source code or database.",
      "Developed Python scripts to discover website routes and sitemap structure.",
      "Scraped website content and analyzed existing page layouts.",
      "Helped design database and reusable CMS content structures.",
      "Developed Strapi content types and seeders.",
      "Contributed to Strapi API development and Next.js frontend implementation.",
      "Contributed to SSLCOMMERZ integration.",
    ],
    technologies: ["Python", "Web Scraping", "Strapi", "Next.js", "JavaScript", "SSLCOMMERZ"],
    outcomes: [
      "The website's content was moved from WordPress into structured Strapi content types.",
      "The frontend was rebuilt on Next.js, consuming content from the Strapi API.",
    ],
    lessons: [
      "When the source system is unavailable, automation for discovery is essential — manual inventory misses things.",
      "Good content modeling comes from studying real layouts and identifying what genuinely repeats.",
    ],
  },
  {
    slug: "bangladesh-e-mutation",
    title: "Bangladesh e-Mutation (e-Namjari)",
    shortTitle: "Bangladesh e-Mutation",
    tagline:
      "Team contributions to Bangladesh's nationwide government digital service for online land mutation.",
    featured: false,
    ownership: {
      type: "team",
      label: "Team contribution",
      detail:
        "Contributions as part of a larger team at Business Automation Ltd. I did not build the platform independently.",
    },
    organization: "Business Automation Ltd",
    externalLink: {
      label: "mutation.land.gov.bd",
      href: "https://mutation.land.gov.bd/",
    },
    overview: [
      "Bangladesh e-Mutation (e-Namjari) is a nationwide government digital service for applying for land mutation online.",
      "While at Business Automation Ltd, I contributed to the platform as one member of a larger team. My work focused on specific application workflows, notifications, and resolving issues in existing functionality.",
    ],
    background: [
      "As a nationwide public service, the platform supports both citizens submitting applications and government offices processing them. Its workflows, notifications, and payments need to be dependable.",
      "The platform already existed and was in use. Much of the engineering work involves extending and maintaining established functionality rather than building from scratch.",
    ],
    role: [
      "I was a contributor on a larger team, not the builder of the platform. I did not create its OTP or payment systems from scratch.",
      "My contributions were to specific areas: application workflows, OTP/SMS verification and notifications, email notifications, payment-related workflows and issue resolution, and government-office workflows.",
    ],
    scope: {
      metrics: [],
      areas: [
        "Land mutation application workflows",
        "OTP/SMS verification and notifications",
        "Email notifications",
        "Payment-related workflows and issue resolution",
        "Government-office application workflows",
        "Investigating and resolving existing issues",
      ],
    },
    challenges: [
      {
        title: "Working within an established platform",
        description:
          "Changes had to fit an existing, actively used system and its conventions rather than introduce new ones.",
      },
      {
        title: "Multi-party workflows",
        description:
          "Applications move between citizens and government offices, so workflow changes affect more than one type of user.",
      },
      {
        title: "Diagnosing existing issues",
        description:
          "Resolving issues in existing functionality requires understanding code paths written by others before changing them.",
      },
    ],
    approach: [
      {
        title: "Understand before changing",
        description:
          "Investigated existing behavior and code paths before modifying workflows or fixing issues.",
      },
      {
        title: "Contribute within boundaries",
        description:
          "Worked on clearly scoped areas — notifications, specific workflows, payment-related issues — as part of the wider team.",
      },
    ],
    architecture: {
      summary: [
        "The platform is built with PHP and Laravel, MySQL, NestJS, and Vue.js. My contributions were within existing application workflows and notification functionality rather than to the platform's overall architecture.",
      ],
    },
    contributions: [
      "Worked on land mutation application workflows.",
      "Contributed to OTP/SMS verification and notifications.",
      "Worked on email notification functionality.",
      "Contributed to payment-related workflows and issue resolution.",
      "Worked on government-office application workflows.",
      "Investigated and resolved issues in existing application functionality.",
    ],
    technologies: ["PHP", "Laravel", "MySQL", "NestJS", "Vue.js"],
    outcomes: [
      "Contributed workflow, notification, and payment-related changes to a nationwide government digital service.",
      "Resolved issues in existing application functionality.",
    ],
    lessons: [
      "Public-service software has a wide and varied user base; small workflow details matter.",
      "Being effective on a large existing codebase starts with reading it carefully.",
    ],
  },
  {
    slug: "arangla",
    title: "Arangla",
    shortTitle: "Arangla",
    tagline:
      "A personal project: a Quranic Arabic learning platform for Bangla speakers, spanning web and mobile.",
    featured: false,
    ownership: {
      type: "personal",
      label: "Personal project",
      detail: "Personal learning and product-development project.",
    },
    status: "MVP development completed · Not publicly deployed",
    overview: [
      "Arangla is a Quranic Arabic learning platform for Bangla speakers. It is a personal learning and product-development project.",
      "MVP development is complete. The platform has not been publicly deployed and has no active users.",
    ],
    background: [
      "Bangla speakers learning Quranic Arabic benefit from material that connects Arabic vocabulary to Bangla meanings, transliteration, and the root system that underpins Arabic word formation.",
      "The project was also an opportunity to design and build a complete product across backend, web, and mobile.",
    ],
    role: [
      "As a personal project, I was responsible for the product and its implementation across the backend, web frontend, and mobile application.",
    ],
    scope: {
      metrics: [],
      areas: [
        "Structured Quranic Arabic vocabulary",
        "Transliteration",
        "Bangla and English meanings",
        "Arabic roots",
        "Learning levels",
        "Learning experiences",
      ],
    },
    challenges: [
      {
        title: "Modeling linguistic data",
        description:
          "Vocabulary, transliteration, meanings in two languages, roots, and learning levels are related data that must be modeled coherently.",
      },
      {
        title: "Multiple clients",
        description:
          "Supporting both a web frontend and a mobile app means the backend must serve both consistently.",
      },
    ],
    approach: [
      {
        title: "Structured data first",
        description:
          "Vocabulary is stored as structured records linking Arabic words to transliteration, Bangla and English meanings, roots, and learning levels.",
      },
      {
        title: "One backend, two clients",
        description:
          "A NestJS backend with PostgreSQL serves a Next.js web application and a React Native (Expo) mobile application.",
      },
    ],
    architecture: {
      summary: [
        "Arangla uses NestJS with PostgreSQL on the backend, a Next.js web frontend, and a React Native mobile application built with Expo.",
      ],
      layers: [
        { name: "NestJS", description: "Backend application and API." },
        { name: "PostgreSQL", description: "Relational storage for structured vocabulary data." },
        { name: "Next.js", description: "Web frontend." },
        { name: "React Native + Expo", description: "Mobile application." },
      ],
    },
    contributions: [
      "Designed and built the MVP of a Quranic Arabic learning platform for Bangla speakers.",
      "Modeled structured vocabulary with transliteration, Bangla and English meanings, Arabic roots, and learning levels.",
      "Built a NestJS and PostgreSQL backend.",
      "Built a Next.js web frontend and a React Native (Expo) mobile application.",
    ],
    technologies: ["NestJS", "PostgreSQL", "Next.js", "React Native", "Expo"],
    outcomes: [
      "MVP development completed across backend, web, and mobile.",
      "Not publicly deployed; no production users.",
    ],
    lessons: [
      "Owning a product end to end exposes decisions that are usually made by others — data modeling, API design, and client experience all affect each other.",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export const featuredProjects = projects.filter((project) => project.featured);
export const otherProjects = projects.filter((project) => !project.featured);
