import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

import { AnimatedSection } from "@/components/common/animated-section";
import { AnimatedText } from "@/components/common/animated-text";
import { ClientPageWrapper } from "@/components/common/client-page-wrapper";
import { Icons } from "@/components/common/icons";
import ContributionCard from "@/components/contributions/contribution-card";
import ExperienceCard from "@/components/experience/experience-card";
import ProjectCard from "@/components/projects/project-card";
import { Button, buttonVariants } from "@/components/ui/button";
import { featuredContributions } from "@/config/contributions";
import { experiences } from "@/config/experience";
import { pagesConfig } from "@/config/pages";
import { featuredProjects } from "@/config/projects";
import { siteConfig } from "@/config/site";
import { skillsUnsorted } from "@/config/skills";
import { cn } from "@/lib/utils";
import profileImg from "@/public/profile-img.jpeg";
import MovingSkills from "@/components/skills/moving-skills";
import { ContactForm } from "@/components/forms/contact-form";
import GithubRedirectCard from "@/components/contact/github-redirect-card";

export const metadata: Metadata = {
  title: `${pagesConfig.home.metadata.title} | Modern Next.js Developer Portfolio Template`,
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function IndexPage() {
  // Structured data for personal portfolio
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.authorName,
    url: siteConfig.url,
    image: siteConfig.ogImage,
    jobTitle: "Full Stack Developer",
    sameAs: [siteConfig.links.github, siteConfig.links.twitter],
  };

  // Structured data for website as a software application (template)
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Next.js Portfolio Template",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    author: {
      "@type": "Person",
      name: siteConfig.authorName,
      url: siteConfig.url,
    },
  };

  return (
    <ClientPageWrapper>
      <Script
        id="schema-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Script
        id="schema-software"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />

      <section className="space-y-6 pb-8 pt-6 mb-0 md:pb-12 md:py-20 lg:py-32 h-screen flex items-center">
 
  <div className="container flex max-w-[76rem] flex-col md:flex-row items-center gap-8 text-center md:text-left -mt-6">
    <div className="flex-1 flex flex-col items-center md:items-start">
      <AnimatedText
        as="h1"
        delay={0.2}
        className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl"
      >
        Aniket Rawat
      </AnimatedText>
      <AnimatedText
        as="h3"
        delay={0.4}
        className="font-heading text-base sm:text-xl md:text-xl lg:text-2xl mt-2"
      >
        Full Stack Developer
      </AnimatedText>
      
      <div className="mt-4 max-w-[42rem]">
        <p className="leading-normal text-muted-foreground text-sm sm:text-base">
          I am a Full Stack Developer from India, I love to explore new
          technologies and challenging tasks, turning ideas into polished
          user-centric products. I have worked across various stacks and domains
          and focused on delivering E2E solutions, have done 2 internships and
          few freelance projects, apart from that I have co-authored a Research
          paper which is accepted by IEEE and have a Patent on my name. I have
          also been a Tech Lead in my University's IoT Lab mentoring and
          learning with my juniors on different tasks and organising events. In
          free time you will find me jogging, playing games, watching movies and
          writing blogs about recent developments in Tech, my blog articles
          consistently reach over 8,000+ readers each.
        </p>
      </div>

      <div className="flex flex-col mt-10 items-center md:items-start justify-center sm:flex-row sm:space-x-4 gap-3">
        <AnimatedText delay={0.8}>
          <Link
            href={"/contact"}
            rel="noreferrer"
            className={cn(
              buttonVariants({
                size: "lg",
              })
            )}
            aria-label="Contact Aniket Rawat"
          >
            <Icons.contact className="w-4 h-4 mr-2" /> Contact
          </Link>
        </AnimatedText>
      </div>
    </div>

    {/* --- RIGHT SIDE: IMAGE --- */}
    <div className="flex-1 flex justify-center md:justify-end">
      {/* 1. The Container: Needs specific size to hold the stack */}
      <div className="relative h-[350px] w-[300px] sm:h-[450px] sm:w-[400px]">
        
        {/* 2. Background Card (The Cyan Color) */}
        {/* absolute inset-0: Fills the container
            rotate-6: Tilts it to the right
            bg-cyan-500: The color from your image example (change to bg-primary if you prefer)
            rounded-3xl: Matches the card curve */}
        <div className="absolute inset-0 rotate-6 rounded-3xl bg-yellow-500 shadow-lg transition-transform duration-300 hover:rotate-12"></div>
        
        {/* 3. Foreground Card (The Image) */}
        {/* relative: Sits on top
            -rotate-6: Tilts to the left (opposite of background)
            border-8 border-white: Creates the white frame like a photo
            overflow-hidden: Clips the image to the rounded corners */}
        <div className="relative h-full w-full -rotate-6 overflow-hidden rounded-3xl border-8 border-cyan-500 bg-white shadow-2xl transition-transform duration-300 hover:-rotate-3">
          <Image
            src={profileImg}
            fill // Uses "fill" to adapt to the parent container size
            className="object-cover" // Ensures image covers the area without stretching
            alt="Aniket Rawat - Full Stack Developer Portfolio"
            priority
          />
        </div>

      </div>
    </div>
  </div>
  {/* The chevron can stay outside the flex container or move inside depending on preference */}
  {/* <AnimatedText delay={1.2} className="absolute bottom-10 left-1/2 -translate-x-1/2">
    <Icons.chevronDown className="h-6 w-6" />
  </AnimatedText> */}
</section>
    
        <div className="mx-auto flex max-w-[58rem]  flex-col items-center space-y-4 text-center ">
           <h5 className="font-heading text-4xl font-bold leading-tight sm:text-2xl md:text-3xl lg:text-5xl">
            {pagesConfig.skills.title}
          </h5>
        </div>
        <MovingSkills />
    

 {/* 1. Header Section (Unchanged) */}
  <div className="mx-auto mt-16 flex flex-col items-center space-y-4 text-center">
    <AnimatedText
      as="h2"
      className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
    >
      {pagesConfig.contact.title}
    </AnimatedText>
  </div>

  {/* 2. Content Container (THE BORDER IS HERE NOW) */}
  {/* We applied the border, background, and padding to this parent div */}
  <div className="mx-auto mt-12 flex w-full max-w-6xl flex-col gap-10 rounded-3xl border border-border/120 bg-card/50 p-6 shadow-sm backdrop-blur-sm md:p-12 lg:flex-row">
    
    {/* --- LEFT SIDE: CONTACT FORM --- */}
    {/* flex-[2] means it takes ~66% width */}
    <div className="w-full flex-[2]">
      <ContactForm />
    </div>

    {/* Optional: Vertical Divider for Desktop */}
    {/* This creates a thin line between the form and the card on large screens */}
    <div className="hidden w-[1px] bg-border/80 lg:block" />

    {/* --- RIGHT SIDE: GITHUB CARD --- */}
    {/* flex-1 means it takes ~33% width */}
    {/* Added 'items-center' to center the card vertically in the available space */}
    <div className="flex w-full flex-1 flex-col items-center justify-center">
      <GithubRedirectCard />
    </div>
    
  </div>
    </ClientPageWrapper>
  );
}
