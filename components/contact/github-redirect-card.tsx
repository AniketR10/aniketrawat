"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";
import {GitHubCalendar} from "react-github-calendar";
import { useTheme } from "next-themes";
import { buttonVariants } from "@/components/ui/button";

import { Icons } from "@/components/common/icons";

export default function GithubRedirectCard() {
  const [isHovered, setIsHovered] = useState(false);
  const { theme } = useTheme();

  return (
    <Card
      className="w-full h-fit overflow-hidden shadow-lg transition-all duration-300 ease-in-out transform mt-4 border border-border/50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-6 flex flex-col items-center text-center">
        
        <div className="flex items-center gap-3 mb-6 w-full justify-center">

          <Icons.gitHub className={"w-6 h-6 text-primary transition-colors"} />
          <h2 className="font-heading text-xl font-bold tracking-tight">
            Github Activity
          </h2>
        </div>

        <div className="w-full flex justify-center overflow-x-auto pb-2 scrollbar-hide">
          <GitHubCalendar
            username="AniketR10" 
            colorScheme={theme === "dark" ? "dark" : "light"}
            fontSize={12}
            blockSize={10} 
            blockMargin={4}
            labels={{
              totalCount: "{{count}} contributions in the last year",
            }}
          />
        </div>

      </CardContent>
      
      <CardFooter className="px-6 pb-6 pt-0">
        <Link
          href={"https://github.com/AniketR10"}
          target="_blank"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "w-full bg-transparent border-dashed hover:border-solid transition-all duration-300"
          )}
        >
          <span className="mr-2">View Full Profile</span>
          <Icons.externalLink className="w-4 h-4" />
        </Link>
      </CardFooter>
      
    </Card>
  );
}