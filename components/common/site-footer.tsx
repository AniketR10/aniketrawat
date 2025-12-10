import Link from "next/link";
import * as React from "react";

import { buttonVariants } from "@/components/ui/button";
import CustomTooltip from "@/components/ui/custom-tooltip";
import { SocialLinks } from "@/config/socials";
import { cn } from "@/lib/utils";

export function SiteFooter() {
  return (
    // 1. fixed: Sticks to the screen even when scrolling
    // 2. left-4: Positions it slightly away from the left edge
    // 3. top-1/2 -translate-y-1/2: Perfectly centers it vertically
    // 4. hidden md:flex: Hides it on mobile screens (where space is tight)
    <div className="fixed left-6 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-4 md:flex">
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
              "h-10 w-10 rounded-full border border-transparent hover:border-border hover:bg-background shadow-sm "
            )}
          >
            <item.icon className="h-5 w-5" />
            <span className="sr-only">{item.username}</span>
          </Link>
        </CustomTooltip>
      ))}
      
      {/* Optional: A vertical line decoration */}
      <div className="mx-auto h-20 w-[1px] bg-border/50" />
    </div>
  );
}