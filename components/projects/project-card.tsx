"use client"

import Image from "next/image";
import Link from "next/link";

import { Icons } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import ChipContainer from "@/components/ui/chip-container";
import { ProjectInterface } from "@/config/projects";
import { useState } from "react";

interface ProjectCardProps {
  project: ProjectInterface;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const isLongDesc = project.shortDescription.length > 280;

  return (
    <div className="relative flex flex-col h-full p-6 w-full bg-background border border-border rounded-lg transition-colors hover:bg-accent/40">
      {/* Image Section */}
      <div className="relative w-full h-[200px]">
        <Image
          className="rounded-lg border border-border object-cover"
          src={project.companyLogoImg}
          alt={`${project.companyName} logo`}
          fill
        />
      </div>

      {/* Content Section */}
      <div className="pt-5 space-y-3 flex-1">
        {/* Header Row: Title + Links */}
        <div className="flex items-center justify-between gap-2">
          <h5 className="text-2xl font-bold tracking-tight text-foreground line-clamp-1">
            {project.companyName}
          </h5>
          
          <div className="flex items-center gap-2 mr-2">
            {project.githubLink && (
              <Link
                href={project.githubLink}
                target="_blank"
                rel="noreferrer"
                className=" text-lime-500 hover:scale-125 transition-colors"
              >
                <Icons.gitHub className="h-5 w-5 mx-1" />
                <span className="sr-only">GitHub</span>
              </Link>
            )}
            
            {project.websiteLink && (
              <Link
                href={project.websiteLink}
                target="_blank"
                rel="noreferrer"
                className=" text-lime-500 hover:scale-125 transition-colors"
              >
                <Icons.externalLink className="h-5 w-5" />
                <span className="sr-only">Website</span>
              </Link>
            )}
          </div>
        </div>

        <p className={`font-normal text-muted-foreground
            ${isExpanded ? "" : "line-clamp-4"}`}
        >
          {project.shortDescription}
        </p>

        {isLongDesc && (
          <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-1 text-sm font-medium text-primary hover:underline focus:outline-none"
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        )}
        
        <div className="flex gap-2 flex-wrap pt-2 mt-auto">
          <ChipContainer textArr={project.techStack} />
        </div>
      </div>

    </div>
  );
}