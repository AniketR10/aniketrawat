
import PageContainer from "@/components/common/page-container";
import Timeline from "@/components/experience/timeline";
import { experiences } from "@/config/experience";
import { pagesConfig } from "@/config/pages";
import { siteConfig } from "@/config/site";
import OSSRepoCard from "@/components/oss/oss-repo-card"; 
import prsData from "@/data/oss-prs.json";


export default function ExperienceSection() {
  const repositories = [...prsData].sort((a, b) => b.prs.length - a.prs.length);

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
            {repositories.map((repo) => {
              const shortRepoName = repo.repository.nameWithOwner.split("/").pop() || repo.repository.nameWithOwner;
              const sortedPrs = [...repo.prs].sort((a, b) => Number(b.id) - Number(a.id));

              return (
                <OSSRepoCard
                  key={repo.repository.nameWithOwner}
                  repoName={shortRepoName}
                  repoUrl={repo.repository.url}
                  prs={sortedPrs}
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