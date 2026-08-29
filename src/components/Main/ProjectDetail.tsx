"use client";
import React from "react";
import { projects } from "@/data/data";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

type Props = {
  projectId: string;
  onBack: () => void;
};

export const projectSlug = (name: string) =>
  name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const ProjectDetail = ({ projectId, onBack }: Props) => {
  const { theme } = useTheme();

  const project = projects.find(
    (p) => projectSlug(p.name) === projectId.toLowerCase(),
  );

  const borderClass = theme === "dark" ? "border-white/20" : "border-black/20";
  const bgClass =
    theme === "dark"
      ? "bg-white/5 hover:bg-white/10"
      : "bg-black/5 hover:bg-black/10";

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <p className="text-xl">Project not found</p>
        <button onClick={onBack} className="mt-4 underline cursor-pointer">
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full w-full px-4 pt-20 pr-2 pb-4 md:p-12 md:pr-10 animate-in fade-in zoom-in duration-300 overflow-y-auto scrollbar-thin">
      <div className="max-w-3xl mx-auto w-full space-y-8">
        {/* Project Hero */}
        <div className="space-y-4">
          <div className="flex items-center justify-between gap-4">
            <h1 className="text-2xl md:text-5xl font-bold tracking-tight">
              {project.name}
            </h1>

            {/* Action Buttons */}
            <div className="flex items-center gap-2 md:gap-3">
              <button
                onClick={onBack}
                aria-label="Go back"
                className={`inline-flex items-center justify-center p-1.5 md:p-2 rounded-full border transition-all duration-300 ease-in-out cursor-pointer ${
                  theme === "dark"
                    ? "bg-white/10 hover:bg-white/90 hover:text-black border-white/20 backdrop-blur-xl"
                    : "bg-black/5 hover:bg-black/90 hover:text-white border-black/20 backdrop-blur-xl"
                }`}
              >
                <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
              </button>
              {project.link && (
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.name} on GitHub`}
                  className={`p-1.5 md:p-2 rounded-full border ${borderClass} ${bgClass} transition-all`}
                >
                  <Github className="w-4 h-4 md:w-5 md:h-5" />
                </Link>
              )}
              {project.liveLink && (
                <Link
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.name} live`}
                  className={`p-1.5 md:p-2 rounded-full border ${borderClass} ${bgClass} transition-all`}
                >
                  <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
                </Link>
              )}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span
              className={`px-3 py-1 text-[10px] md:text-xs font-semibold rounded-full border ${borderClass}`}
            >
              {project.type}
            </span>
            {project.category.map((cat) => (
              <span
                key={cat}
                className="px-3 py-1 text-[10px] md:text-xs font-medium rounded-full border border-current/20 opacity-75"
              >
                {cat}
              </span>
            ))}
          </div>

          <p className="text-sm md:text-lg opacity-80 max-w-2xl leading-relaxed">
            {project.desc}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className={`px-3 py-1 text-[10px] md:text-xs font-medium rounded-full border ${borderClass} ${
                  theme === "dark" ? "bg-white/5" : "bg-black/5"
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Project Image */}
        {project.image && (
          <div
            className={`relative w-full aspect-video rounded-2xl border ${borderClass} overflow-hidden`}
          >
            <Image
              src={project.image}
              alt={`${project.name} preview`}
              fill
              className="object-contain"
            />
          </div>
        )}

        {/* Links */}
        <div className="flex flex-wrap gap-4">
          {project.link && (
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-4 py-2 rounded-lg border ${borderClass} ${bgClass} transition-colors text-sm`}
            >
              <Github className="w-4 h-4" />
              <span>Source</span>
            </Link>
          )}
          {project.liveLink && (
            <Link
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-4 py-2 rounded-lg border ${borderClass} ${bgClass} transition-colors text-sm`}
            >
              <ExternalLink className="w-4 h-4" />
              <span>Visit</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
