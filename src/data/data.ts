export const socials = [
  {
    name: "X (Twitter)",
    url: "https://x.com/aniketrawat00",
    handle: "@aniketrawat00",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/aniketrawat00/",
    handle: "in/aniketrawat00",
  },
  {
    name: "GitHub",
    url: "https://github.com/AniketR10",
    handle: "/AniketR10",
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/aniketrawat00/",
    handle: "/u/aniketrawat00",
  },
  {
    name: "Email",
    url: "mailto:aniketrawat826@gmail.com",
    handle: "aniketrawat826@gmail.com",
  },
];

export const skills = [
  "Next.js",
  "React",
  "Tanstack Query",
  "Prisma",
  "express.js",
  "Node.js",
  "MongoDB",
  "Typescript",
  "Javascript",
  "Redux",
  "n8n",
  "supabase",
  "C++",
  "C",
  "linux",
  "Java",
  "Golang",
  "Solidity",
  "Tailwind CSS",
  "Docker",
  "Kubernetes",
  "AWS",
  "Python",
  "FastAPI",
  "CI/CD",
  "Langfuse",
  "Grafana",
  "Prometheus",
  "Loki",
];

export interface ExperienceEntry {
  company: string;
  position: string;
  location: string;
  duration: string;
  companyUrl?: string;
  description: string[];
  skills: string[];
}

export const experiences: ExperienceEntry[] = [
  {
    company: "Intervue.io",
    position: "SDE Intern",
    location: "Bengaluru, India",
    duration: "May 2026 to present",
    companyUrl: "https://www.intervue.io/",
    description: [],
    skills: [
      "Kubernetes",
      "AWS",
      "Langfuse",
      "Grafana",
      "Prometheus",
      "Loki",
      "Next.js",
      "Python",
      "FastAPI",
      "Typescript",
      "React",
      "CI/CD",
    ],
  },
  {
    company: "ScaleEngineer",
    position: "Full Stack Developer Intern",
    location: "Remote, India",
    duration: "Jun 2025 to May 2026",
    companyUrl: "https://scaleengineer.com/",
    description: [
      "Built and scaled a complete DSA section serving 75,000+ users, backed by an automated content pipeline that aggregated and structured 3,100+ problems and enriched them with video explanations and company-specific insights through third-party API integrations. Optimized content delivery and storage using Cloudflare.",
      "Built WhatCMS (a CMS Scanner) that identifies a website’s CMS (WordPress, Joomla, Drupal, etc.) from just a URL, using a fingerprint-based detection engine for accurate & fast results.",
      "Built Wordpress ThemeDetect (a WordPress Theme & Plugin Detector) that analyzes a site’s public footprint to extract theme metadata (name, version, author) and detect active plugins from a single URL.",
      "Developed a backoffice system to manage and upload new CMS information, with AI-assisted content generation to speed up publishing.",
      "Built a dedicated background-task API alongside the main Next.js API to offload heavy operations like AI content generation (Gemini API), R2 image uploads, and GitHub stats fetching, preventing timeouts and significantly improving site performance.",
      "Built an end-to-end backend automation system that parses incoming Substack subscriber emails via Gmail API, triggers workflows through Google Pub/Sub, and auto-creates subscribers in Beehiiv using its API.",
      "Built an n8n automation workflow to fetch daily tech news from top sources and auto-publish summaries to Discord using the Discord API, reducing research time.",
    ],
    skills: [
      "Typescript",
      "React",
      "Next.js",
      "n8n",
      "Wordpress API",
      "Tailwind CSS",
      "Cloudflare",
      "Gmail API",
      "pub/sub API",
      "Beehiiv API",
      "Gemini API",
      "Discord API",
    ],
  },
  {
    company: "KiiT University",
    position: "Research Apprentice",
    location: "Bhubaneshwar, India",
    duration: "Oct 2024 to Apr 2025",
    description: [
      "Co-authored and published a research paper in IEEE Xplore, focusing on the integration of blockchain for real-time tracking and reduction of carbon footprints.",
      "Published a Patent on BLOCKCHAIN-BASED CARBON FOOTPRINT MANAGEMENT SYSTEM WITH EDGE COMPUTING",
      "Developed a Prototype that measures Carbon Footprints of vehicles based on their type and Mode of Transport",
    ],
    skills: ["Javascript", "Solidity", "Metamask", "HTML", "CSS"],
  },
];

export interface Project {
  name: string;
  tech: string;
  desc: string;
  link?: string;
  liveLink?: string;
  type: "Personal" | "Professional";
  category: string[];
  techStack: string[];
  image?: string;
}

export const projects: Project[
] = [
  {
    name: "I Am Unemployed",
    tech: "Next.js • Supabase • Python",
    desc: "A Neo-Brutalist job search platform made for people tired of getting ghosted. Features a real-time Reddit job feed scraper, a database of recently funded startups, their Founder socials, and a directory of YC founders for direct outreach.",
    link: "https://github.com/AniketR10/iamunemployed",
    liveLink: "https://www.iamunemployed.xyz",
    type: "Personal",
    category: ["Full Stack", "Web Dev"],
    techStack: [
      "Next.js",
      "React",
      "Typescript",
      "Supabase",
      "PostgreSQL",
      "Tailwind CSS",
      "Python",
      "Github Actions",
      "Vercel",
    ],
    image: "/projects/iamunemployed.png",
  },
  {
    name: "pickUI",
    tech: "React • Chrome Manifest V3",
    desc: "pickUI is a Chrome extension that lets users capture UI components from any website in a single click and copy them as clean, reusable HTML with inline styles.",
    link: "https://github.com/AniketR10/pickUI",
    liveLink:
      "https://chromewebstore.google.com/detail/gnjjfieodpccfhhijmpgooppefenpohk?utm_source=item-share-cb",
    type: "Personal",
    category: ["Web Dev", "Frontend", "3D Modeling"],
    techStack: ["Typescript", "React", "Tailwind CSS", "Chrome Manifest V3"],
    image: "/projects/pickui.png",
  },
  {
    name: "Leetcode Customizer",
    tech: "Javascript • Chrome Manifest V3",
    desc: "This Chrome Extension allows users to customize the appearance of LeetCode by allowing users to change fonts, code editor themes, UI font sizes, and editor background colors.",
    link: "https://github.com/AniketR10/Leetcode-Customizer",
    liveLink:
      "https://chromewebstore.google.com/detail/nljdhlnaeechhagalijfhllebbjmjjka?utm_source=item-share-cb",
    type: "Personal",
    category: ["Web Dev", "Frontend", "UI/UX"],
    techStack: [
      "HTML",
      "CSS",
      "Javascript",
      "Google Fonts API",
      "Chrome Storage API",
      "Chrome Manifest V3",
    ],
    image: "/projects/leetcode-customizer.png",
  },
];

export const repos = [
  {
    name: "gouroboros",
    url: "https://github.com/blinklabs-io/gouroboros",
    prs: [
      {
        title: "fix(byron): validate payloads without mutating inputs",
        url: "https://github.com/blinklabs-io/gouroboros/pull/2111",
      },
    ],
  },
  {
    name: "nanocoder",
    url: "https://github.com/Nano-Collective/nanocoder",
    prs: [
      {
        title: "added professional tone",
        url: "https://github.com/Nano-Collective/nanocoder/pull/906",
      },
    ],
  },
  {
    name: "opensre",
    url: "https://github.com/Tracer-Cloud/opensre",
    prs: [
      {
        title:
          "refactor(config): split config.py into llm_settings, clerk, environment",
        url: "https://github.com/Tracer-Cloud/opensre/pull/5819",
      },
      {
        title:
          "test(session): add cross-process soak matrix for the session file lock",
        url: "https://github.com/Tracer-Cloud/opensre/pull/5751",
      },
      {
        title:
          "ci: run tests/filestorage, tests/surfaces and tests/quality in a shard",
        url: "https://github.com/Tracer-Cloud/opensre/pull/5662",
      },
      {
        title:
          "refactor(notifications): register outbound adapters only from bootstrap",
        url: "https://github.com/Tracer-Cloud/opensre/pull/5347",
      },
      {
        title: "refactor(eks): split tools/__init__.py into one module per tool",
        url: "https://github.com/Tracer-Cloud/opensre/pull/5296",
      },
      {
        title:
          "fix(gateway): pin the Slack bot token to Slack hosts on attachment fetch",
        url: "https://github.com/Tracer-Cloud/opensre/pull/4791",
      },
      {
        title: "perf(filestorage): parallelize push with a provider-declared cap",
        url: "https://github.com/Tracer-Cloud/opensre/pull/4782",
      },
      {
        title: "feat(filestorage): let users exclude paths from remote sync",
        url: "https://github.com/Tracer-Cloud/opensre/pull/4627",
      },
      {
        title:
          "refactor(openclaw): split MCP bridge tool types, results, and params …",
        url: "https://github.com/Tracer-Cloud/opensre/pull/4507",
      },
      {
        title: "refactor(mcp): share unavailable_response across MCP bridge tools",
        url: "https://github.com/Tracer-Cloud/opensre/pull/4183",
      },
      {
        title:
          "refactor(integrations): share relational read-only query wrapper; ado…",
        url: "https://github.com/Tracer-Cloud/opensre/pull/4163",
      },
      {
        title: "fix(shell): record /mcp unknown subcommand as a failed turn",
        url: "https://github.com/Tracer-Cloud/opensre/pull/4110",
      },
      {
        title: "test(hermes): extend sink/delivery coverage (#3587)",
        url: "https://github.com/Tracer-Cloud/opensre/pull/3856",
      },
      {
        title:
          "feat(fix_sentry_issue): open a PR for the fix, triggerable in natural…",
        url: "https://github.com/Tracer-Cloud/opensre/pull/3667",
      },
      {
        title: "feat(tools): add fix_sentry_issue tool (Sentry URL -> Pi fix diff)",
        url: "https://github.com/Tracer-Cloud/opensre/pull/3306",
      },
      {
        title:
          "feat(tools): add Pi coding tool + integration for submitting coding t…",
        url: "https://github.com/Tracer-Cloud/opensre/pull/3224",
      },
      {
        title: "feat(llm): add Pi CLI (pi.dev) as a BYOK subprocess LLM provider",
        url: "https://github.com/Tracer-Cloud/opensre/pull/3176",
      },
      {
        title:
          "fix(wizard): persist Slack webhook to integration store after guided …",
        url: "https://github.com/Tracer-Cloud/opensre/pull/2892",
      },
      {
        title:
          "fix(watchdog): resolve Telegram creds from integration store, env, or…",
        url: "https://github.com/Tracer-Cloud/opensre/pull/2848",
      },
      {
        title:
          "feat(twilio): add Twilio SMS as a first-class outbound channel alongs…",
        url: "https://github.com/Tracer-Cloud/opensre/pull/2232",
      },
      {
        title:
          "fix(hermes): prevent PatternRule/RepeatRule false positives on logger…",
        url: "https://github.com/Tracer-Cloud/opensre/pull/2137",
      },
      {
        title: "feat(agents): add /agents bus shared context channel (#1505)",
        url: "https://github.com/Tracer-Cloud/opensre/pull/1744",
      },
      {
        title:
          "fix(cleanup): remove remaining exception noqas and SIM115 noqa by add…",
        url: "https://github.com/Tracer-Cloud/opensre/pull/1613",
      },
      {
        title: "Remove E402, node ARG001, and straggler noqas (PR 2 of 3)",
        url: "https://github.com/Tracer-Cloud/opensre/pull/1576",
      },
      {
        title: "Remove dead noqa directives and fix mechanical lint warnings",
        url: "https://github.com/Tracer-Cloud/opensre/pull/1537",
      },
      {
        title: "refactor(cli): remove /stop placeholder; /tasks + /cancel canonical",
        url: "https://github.com/Tracer-Cloud/opensre/pull/1405",
      },
      {
        title: "test(coralogix): add direct unit tests for CoralogixClient",
        url: "https://github.com/Tracer-Cloud/opensre/pull/1282",
      },
      {
        title: "Fix/1114 health summary failure aliases",
        url: "https://github.com/Tracer-Cloud/opensre/pull/1184",
      },
    ],
  },
  {
    name: "screenshot-studio",
    url: "https://github.com/opennookorg/screenshot-studio",
    prs: [
      {
        title: "add persisted state on hard reload",
        url: "https://github.com/opennookorg/screenshot-studio/pull/110",
      },
      {
        title: "saving fixes",
        url: "https://github.com/opennookorg/screenshot-studio/pull/107",
      },
      {
        title: "fix: persist state on hard refresh",
        url: "https://github.com/opennookorg/screenshot-studio/pull/105",
      },
      {
        title: "fix:deleting the whole progress on hard refresh locally",
        url: "https://github.com/opennookorg/screenshot-studio/pull/104",
      },
      {
        title: "add batch exports",
        url: "https://github.com/opennookorg/screenshot-studio/pull/103",
      },
      {
        title:
          "Fix progress bar jumping to ~50% instantly by removing double-scaled …",
        url: "https://github.com/opennookorg/screenshot-studio/pull/96",
      },
      {
        title:
          "Add hardware-accelerated WebCodecs path for WebM export, falling back…",
        url: "https://github.com/opennookorg/screenshot-studio/pull/95",
      },
      {
        title: "shortened the export cancelled toast duration",
        url: "https://github.com/opennookorg/screenshot-studio/pull/93",
      },
      {
        title: "shortened the export cancelled toast duration",
        url: "https://github.com/opennookorg/screenshot-studio/pull/92",
      },
      {
        title: "add cancel export option so that we can cancel the export",
        url: "https://github.com/opennookorg/screenshot-studio/pull/91",
      },
      {
        title: "export webm videos via ffmpeg to increase the speed",
        url: "https://github.com/opennookorg/screenshot-studio/pull/88",
      },
      {
        title: "update docs",
        url: "https://github.com/opennookorg/screenshot-studio/pull/87",
      },
      {
        title: "use microlink in-place for screen-shot",
        url: "https://github.com/opennookorg/screenshot-studio/pull/86",
      },
      {
        title: "feat: add canvas rulers and grid with customizable intervals",
        url: "https://github.com/opennookorg/screenshot-studio/pull/74",
      },
      {
        title:
          "fix: use imageScale to size preset thumbnail container instead of CSS…",
        url: "https://github.com/opennookorg/screenshot-studio/pull/71",
      },
    ],
  },
  {
    name: "tempest",
    url: "https://github.com/tempestai-dev/tempest",
    prs: [
      {
        title:
          "feat(chat): optional context compression via graph retrieval",
        url: "https://github.com/tempestai-dev/tempest/pull/103",
      },
      {
        title:
          "fix(shell): detach CLI-detection probes from the controlling terminal",
        url: "https://github.com/tempestai-dev/tempest/pull/98",
      },
      {
        title: "add pagination and caching",
        url: "https://github.com/tempestai-dev/tempest/pull/82",
      },
      {
        title: "parallelzie seq gh calls",
        url: "https://github.com/tempestai-dev/tempest/pull/80",
      },
      {
        title: "fix pr merge issue",
        url: "https://github.com/tempestai-dev/tempest/pull/55",
      },
      {
        title: "add linear order",
        url: "https://github.com/tempestai-dev/tempest/pull/52",
      },
      {
        title: "text fix",
        url: "https://github.com/tempestai-dev/tempest/pull/33",
      },
      {
        title: "add small badge node on multiple connections",
        url: "https://github.com/tempestai-dev/tempest/pull/31",
      },
      {
        title: "add generating breams",
        url: "https://github.com/tempestai-dev/tempest/pull/30",
      },
      {
        title: "add multialignment bar",
        url: "https://github.com/tempestai-dev/tempest/pull/27",
      },
    ],
  },
  {
    name: "copperhead",
    url: "https://github.com/chouhanindustries/copperhead",
    prs: [
      {
        title: "Fix/compat gemini groq docs redaction",
        url: "https://github.com/chouhanindustries/copperhead/pull/130",
      },
      {
        title: "add ollama, groq, gemini and openrouter intergrations",
        url: "https://github.com/chouhanindustries/copperhead/pull/123",
      },
      {
        title: "add copperhead doctor command for necessary diagnosis",
        url: "https://github.com/chouhanindustries/copperhead/pull/96",
      },
      {
        title: "Add supplier BOM export (jlcpcb/digikey/mouser) via",
        url: "https://github.com/chouhanindustries/copperhead/pull/45",
      },
    ],
  },
  {
    name: "cp-algorithms",
    url: "https://github.com/cp-algorithms/cp-algorithms",
    prs: [
      {
        title: "Added misère game as a slight variation of the nim",
        url: "https://github.com/cp-algorithms/cp-algorithms/pull/1314",
      },
      {
        title: "Included Problem 1916- B Codefroces",
        url: "https://github.com/cp-algorithms/cp-algorithms/pull/1309",
      },
    ],
  },
];
