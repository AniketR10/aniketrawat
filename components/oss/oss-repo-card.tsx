"use client";

import React, { useState } from "react";

export interface PRData {
  id: string;
  title: string;
  url: string;
}

interface OSSRepoCardProps {
  repoName: string;
  repoUrl: string;
  prs: PRData[];
}

const OSSRepoCard: React.FC<OSSRepoCardProps> = ({ repoName, repoUrl, prs }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="group w-full overflow-hidden rounded-lg border bg-background transition-all duration-300">
      {/* Header / Clickable Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between p-4 text-left transition-colors hover:bg-neutral-900/30"
      >
        <div className="flex items-center gap-3">
          
          <div className="flex flex-col gap-1">
            <h3 className="text-base font-bold text-foreground sm:text-lg">
              {repoName}
            </h3>
            <span className="text-xs text-muted-foreground">
              {prs.length} Merged PR{prs.length !== 1 && "s"}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/* Dropdown Chevron */}
          <div className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}>
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground">
                <path d="m6 9 6 6 6-6"/>
             </svg>
          </div>
        </div>
      </button>

      {/* Expandable PR List */}
      <div 
        className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] border-t" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden">
          <div className="flex flex-col divide-y divide-border bg-neutral-900/10">
            {prs.map((pr) => (
              <div key={pr.id} className="flex flex-col gap-2 p-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-3">
                  {/* Git Merge Icon */}
                  <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" className="mt-1 flex-shrink-0 text-purple-500">
                    <path d="M5.45 5.154A4.25 4.25 0 0 0 9.25 7.5h1.378a2.251 2.251 0 1 1 0 1.5H9.25A5.734 5.734 0 0 1 5 7.123v3.505a2.25 2.25 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.95-.218ZM4.25 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm8.5-4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM4.25 4a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"></path>
                  </svg>
                  <a
                    href={pr.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-foreground transition-colors hover:underline hover:decoration-foreground underline-offset-4"
                  >
                    {pr.title}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OSSRepoCard;