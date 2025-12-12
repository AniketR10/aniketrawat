import { Metadata } from "next";

import PageContainer from "@/components/common/page-container";
import Timeline from "@/components/experience/timeline";
import { experiences } from "@/config/experience";
import { pagesConfig } from "@/config/pages";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `${pagesConfig.experience.metadata.title} | Professional Experience Timeline`,
  keywords: [
    "experience timeline",
    "professional experience",
    "software developer experience",
    "developer portfolio",
    "work experience",
  ],
  alternates: {
    canonical: `${siteConfig.url}/experience`,
  },
};

export default function ExperiencePage() {
  return (
    <PageContainer
      title={pagesConfig.experience.title}
    >
      <Timeline experiences={experiences} />
    </PageContainer>
  );
}