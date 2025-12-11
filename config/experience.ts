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
    id: "glichtech",
    position: "Full Stack Developer Intern",
    company: "Glich Technologies",
    location: "Remote, India",
    startDate: new Date("2025-06-13"),
    endDate: "Present",
    description: [
      "Built a complete DSA section by scraping 3,100+ LeetCode problems using Selenium, fetching related video explanations using YouTube Data API, and integrating company-specific insights and logos using Logo API. Optimized content delivery and storage using Cloudflare.",
      "Built WhatCMS (a CMS Scanner) that identifies a website’s CMS (WordPress, Joomla, Drupal, etc.) from just a URL, using the WhatWeb open-source tool for accurate & fast detection.",
      "Built Wordpress ThemeDetect (a WordPress Theme & Plugin Detector) that uses the WordPress API and source-code crawling to extract theme metadata (name, version, author) and detect active plugins from a single URL.",
      "Built a dedicated background-task API alongside the main Next.js API to offload heavy operations like AI content generation (Gemini API), R2 image uploads, and GitHub stats fetching, preventing timeouts and significantly improving site performance.",
      "Built an end-to-end backend automation system that parses incoming Substack subscriber emails via Gmail API, triggers workflows through Google Pub/Sub, and auto-creates subscribers in Beehiiv using its API.",
    ],
    skills: ["Typescript", "React", "Next.js", "n8n", "Wordpress API", "Tailwind CSS", "Cloudflare", "Gmail API", "pub/sub API", "Beehiiv API"],
    companyUrl: "https://hw.glich.co/",
    logo: "/logo.png",
  },
  {
    id: "kiitdu",
    position: "Blockchain Researcher",
    company: "KiiT University",
    location: "Bhubaneshwar, India",
    startDate: new Date("2024-10-01"),
    endDate: new Date("2025-04-01"),
    description: [
      "Co-authored and published a research paper in IEEE Xplore, focusing on the integration of blockchain for real-time tracking and reduction of carbon footprints...",
      "Published a Patent on BLOCKCHAIN-BASED CARBON FOOTPRINT MANAGEMENT SYSTEM WITH EDGE COMPUTING",
      "Developed a Prototype that measures Carbon Footprints of vehicles based on their type and Mode of Transport",
    ],
    skills: ["HTML", "CSS", "Solidity", "Metamask"],
    companyUrl: "https://agentprod.com",
    logo: "/experience/kiit.png",
  },
  
];
