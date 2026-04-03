import Link from "next/link";
import * as React from "react";

import { buttonVariants } from "@/components/ui/button";
import CustomTooltip from "@/components/ui/custom-tooltip";
import { SocialLinks } from "@/config/socials";
import { cn } from "@/lib/utils";

export function SiteFooter() {
  return (
    <div className={cn(
      // Base positioning & layout
      "fixed z-50 flex items-center gap-2",
      
      "bottom-6 left-1/2 flex-row -translate-x-1/2",
      
      "md:bottom-auto md:left-6 md:top-1/2 md:flex-col md:-translate-x-0 md:-translate-y-1/2",
      
      "rounded-full p-2",
      "bg-background/10 backdrop-blur-md",
      "border border-border/50 shadow-lg",  // subtle edge lighting and drop shadow
      "transition-all duration-300 ease-in-out" // smooth transition between screen sizes
    )}>
      {SocialLinks.map((item, ind) => (
        <CustomTooltip icon={item.icon} text={item.username} key={ind}>
          <Link
            href={item.link}
            target="_blank"
            className={cn(
              buttonVariants({
                variant: "ghost",
                size: "icon", // 'icon' size is better for vertical stacks
              }),
              "h-10 w-10 rounded-full transition-all duration-300 hover:scale-110 hover:bg-background/80 hover:shadow-md"
            )}
          >
            <item.icon className="h-5 w-5" />
            <span className="sr-only">{item.username}</span>
          </Link>
        </CustomTooltip>
      ))}
      
      <div className="hidden md:block mx-auto h-8 w-[1px] bg-border/50 my-1 rounded-full" />
    </div>
  );
}