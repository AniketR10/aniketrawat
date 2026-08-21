import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "intervue",
    position: "SDE Intern",
    company: "Intervue.io",
    location: "Bengaluru, India",
    startDate: new Date("2026-05-18"),
    endDate: "Present",
    description: [
    ],
    skills: ["Kubernetes", "AWS", "Next.js", "Python", "FastAPI", "Typescript", "React", "CI/CD"],
    companyUrl: "https://www.intervue.io/",
    logo: "/logo3.png",
  },
  {
    id: "glichtech",
    position: "Full Stack Developer Intern",
    company: "ScaleEngineer",
    location: "Remote, India",
    startDate: new Date("2025-06-13"),
    endDate: new Date("2026-05-17"),
    description: [
      "Built and scaled a complete DSA section serving 75,000+ users, backed by an automated content pipeline that aggregated and structured 3,100+ problems and enriched them with video explanations and company-specific insights through third-party API integrations. Optimized content delivery and storage using Cloudflare.",
      "Built WhatCMS (a CMS Scanner) that identifies a website’s CMS (WordPress, Joomla, Drupal, etc.) from just a URL, using a fingerprint-based detection engine for accurate & fast results.",
      "Built Wordpress ThemeDetect (a WordPress Theme & Plugin Detector) that analyzes a site’s public footprint to extract theme metadata (name, version, author) and detect active plugins from a single URL.",
      "Developed a backoffice system to manage and upload new CMS information, with AI-assisted content generation to speed up publishing.",
      "Built a dedicated background-task API alongside the main Next.js API to offload heavy operations like AI content generation (Gemini API), R2 image uploads, and GitHub stats fetching, preventing timeouts and significantly improving site performance.",
      "Built an end-to-end backend automation system that parses incoming Substack subscriber emails via Gmail API, triggers workflows through Google Pub/Sub, and auto-creates subscribers in Beehiiv using its API.",
      "Built an n8n automation workflow to fetch daily tech news from top sources and auto-publish summaries to Discord using the Discord API, reducing research time."
    ],
    skills: ["Typescript", "React", "Next.js", "n8n", "Wordpress API", "Tailwind CSS", "Cloudflare", "Gmail API", "pub/sub API", "Beehiiv API", "Gemini API", "Discord API"],
    companyUrl: "https://scaleengineer.com/",
    logo: "/logo2.png",
  },
  {
    id: "kiitdu",
    position: "Research Apprentice",
    company: "KiiT University",
    location: "Bhubaneshwar, India",
    startDate: new Date("2024-10-01"),
    endDate: new Date("2025-04-01"),
    description: [
      "Co-authored and published a research paper in IEEE Xplore, focusing on the integration of blockchain for real-time tracking and reduction of carbon footprints.",
      "Published a Patent on BLOCKCHAIN-BASED CARBON FOOTPRINT MANAGEMENT SYSTEM WITH EDGE COMPUTING",
      "Developed a Prototype that measures Carbon Footprints of vehicles based on their type and Mode of Transport",
    ],
    skills: ["Javascript","Solidity", "Metamask", "HTML", "CSS"],
    companyUrl: "",
    logo: "/experience/kiit.png",
  },
  
];
