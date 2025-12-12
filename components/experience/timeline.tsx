"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

import { AnimatedSection } from "@/components/common/animated-section";
import { Icons } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import { ExperienceInterface } from "@/config/experience";
import ExperienceCard from "./experience-card";

// Helper function to extract year from date
const getYearFromDate = (date: Date): string => {
  return new Date(date).getFullYear().toString();
};

// Helper function to get duration text
const getDurationText = (
  startDate: Date,
  endDate: Date | "Present"
): string => {
  const startYear = getYearFromDate(startDate);
  const endYear =
    typeof endDate === "string" ? "Present" : getYearFromDate(endDate);
  return `${startYear} - ${endYear}`;
};

interface TimelineProps {
  experiences: ExperienceInterface[];
}

const Timeline: React.FC<TimelineProps> = ({ experiences }) => {
  // Sort experiences by date (most recent first)
  const sortedExperiences = [...experiences].sort((a, b) => {
    const dateA = a.endDate === "Present" ? new Date() : a.endDate;
    const dateB = b.endDate === "Present" ? new Date() : b.endDate;
    return dateB.getTime() - dateA.getTime();
  });

  return (
    <div className="space-y-4">
      {sortedExperiences.map((experience, index) => (
        <AnimatedSection
          key={experience.id}
          delay={0.1 * (index + 1)}
          direction="up"
        >
          <ExperienceCard experience={experience}></ExperienceCard>
        </AnimatedSection>
      ))}
    </div>
  );
};

export default Timeline;
