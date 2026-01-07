import { Metadata } from "next";

import PageContainer from "@/components/common/page-container";
import BlogCard from "@/components/contributions/contribution-card";
import { scrapeMetaData } from "@/lib/scrape-meta";
import { pagesConfig } from "@/config/pages";

export const metadata: Metadata = {
  title: "Blog | Aniket Rawat",
  description: "Writing about technology, coding, and my experiences.",
};

const BLOG_URLS = [
  "https://hw.glich.co/p/ai-reshaping-entry-level-tech-jobs",
  "https://hw.glich.co/p/ai-coding-productivity-gains-friction-slows-teams-down",
  "https://hw.glich.co/p/software-development-predictions-for-2026",
  "https://hw.glich.co/p/are-ai-chips-getting-old-too-fast",
  "https://hw.glich.co/p/what-is-x402-protocol",
  "https://hw.glich.co/p/all-you-need-to-know-anthropic-claude-4-5-opus",
  "https://hw.glich.co/p/all-you-need-to-know-about-gemini-3-0",
  "https://hw.glich.co/p/vibe-coding-ai-and-the-future-of-citizen-development",
  "https://hw.glich.co/p/latest-ai-developments-october-2025",
  "https://hw.glich.co/p/azure-cloud-outage-what-went-wrong-and-how-microsoft-fixed-it",
  "https://hw.glich.co/p/chatgpt-atlas-vs-perplexity-comet-vs-chrome-browser-comparison-56e2",
  "https://hw.glich.co/p/why-ai-models-hallucinate-and-how-to-reduce-it",
  "https://hw.glich.co/p/openai-devday-2025-highlights",
  "https://hw.glich.co/p/artificial-general-intelligence-or-illusion",
  "https://hw.glich.co/p/ai-revolutionizing-frontend-development",
  "https://hw.glich.co/p/why-developer-experience-matters",
  "https://hw.glich.co/p/npm-supply-chain-attack-billions-affected",
  "https://hw.glich.co/p/why-tesla-dojo-failed",
  "https://hw.glich.co/p/macrohard-for-microsoft-to-claude-going-inside-chrome",
  "https://hw.glich.co/p/how-nasa-ensures-quality-assurance-in-space-missions",
  "https://hw.glich.co/p/perplexity-proposes-chrome-to-not-so-good-gpt-5",
  "https://hw.glich.co/p/gpt-5-in-a-nutshell-and-google-getting-hacked",
  "https://hw.glich.co/p/how-did-tea-dating-app-get-hacked",
  "https://hw.glich.co/p/hacked-week-microsoft-kills-storefront-and-react-uses-vue",
  "https://hw.glich.co/p/chrome-weds-android-and-meta-pays-10k",
  "https://hw.glich.co/p/unemployed-soham-parek-figma-s-300k-bleeding-and-korean-npus",
  "https://hw.glich.co/p/cloudflare-containers-nvidia-reaching-4-trillion-just-another-productive-week-in-tech",
  "https://hw.glich.co/p/icloud-down-css-got-smart-what-s-going-on-in-tech-town",
  "https://hw.glich.co/p/outages-password-leaks-what-else-happened-this-week",

];

export default async function BlogPage() {
  const blogs = await Promise.all(
    BLOG_URLS.map((url) => scrapeMetaData(url))
  );

  return (
    <PageContainer
      title={pagesConfig.contributions.title}
      description={pagesConfig.contributions.description}
    >
      <div className="mx-auto grid justify-center gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full mt-8">
        {blogs.map((blog, index) => (
          <BlogCard key={index} data={blog} />
        ))}
      </div>
    </PageContainer>
  );
}