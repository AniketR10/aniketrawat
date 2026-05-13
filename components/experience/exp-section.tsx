
import PageContainer from "@/components/common/page-container";
import Timeline from "@/components/experience/timeline";
import { experiences } from "@/config/experience";
import { pagesConfig } from "@/config/pages";
import { siteConfig } from "@/config/site";
import OSSRepoCard from "@/components/oss/oss-repo-card"; 
import prsData from "@/data/oss-prs.json";


export default function ExperienceSection() {

  // 1. Group the PRs by repository name
  const groupedPRs = prsData.reduce((acc: any, pr: any) => {
    const repoName = pr.repository.nameWithOwner;
    if (!acc[repoName]) {
      acc[repoName] = {
        repoUrl: pr.repository.url,
        prs: [],
      };
    }
    acc[repoName].prs.push(pr);
    return acc;
  }, {});

  // 2. Convert the grouped object back into an array so we can map over it
  const repositories = Object.entries(groupedPRs).sort(
    (a:any, b:any) => b[1].prs.length - a[1].prs.length
  );

  return (
    <section id="experiences" className="scroll-mt-24">
    <PageContainer title={pagesConfig.experience.title}>
      <div className="flex w-full flex-col gap-16 mt-8">
        
        <section className="flex flex-col">
          <Timeline experiences={experiences} />
        </section>

        <section className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              Open Source Contributions
            </h2>
          </div>

          <div className="flex w-full flex-col gap-4">
            {repositories.map(([repoName, data]: any) => {
              const shortRepoName = repoName.split("/").pop() || repoName;

              return (
                <OSSRepoCard 
                  key={repoName} 
                  repoName={shortRepoName} 
                  repoUrl={data.repoUrl} 
                  prs={data.prs} 
                />
              );
            })}

            {repositories.length === 0 && (
              <p className="text-sm text-muted-foreground">No open source contributions found.</p>
            )}
          </div>
        </section>

      </div>
    </PageContainer>
    </section>
  );
}