"use client";
import React from "react";
import { RiTwitterXLine, RiArticleLine } from "react-icons/ri";
import { FiLinkedin, FiGithub } from "react-icons/fi";
import { TbMailUp } from "react-icons/tb";
import { useTheme } from "next-themes";
import Link from "next/link";

type Props = {
  activeSection?: string;
};

const ControllerHeader = ({ activeSection }: Props) => {
  const { theme } = useTheme();

  const iconColorClass = theme === "dark" ? "text-white/70" : "text-black/60";
  const iconHoverClass =
    theme === "dark" ? "hover:text-white" : "hover:text-black";

  return (
    <div className="flex justify-between w-full p-3 pb-2">
      <div className="flex flex-col items-center">
        <h3 className="font-semibold text-[20px]">EXPLORE MY</h3>
        <p className="text-[15px] opacity-80">WORK & PASSION</p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="flex gap-3 items-center">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://x.com/aniketrawat00"
            className="cursor-pointer"
          >
            <RiTwitterXLine
              className={`h-5 w-5 ${iconColorClass} ${iconHoverClass}`}
            />
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/aniket-rawat-2235532a4/"
            className="cursor-pointer"
          >
            <FiLinkedin
              className={`h-5 w-5 ${iconColorClass} ${iconHoverClass}`}
            />
          </Link>
        </div>
        <div className="flex gap-3 items-center">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/AniketR10"
            className="cursor-pointer"
          >
            <FiGithub
              className={`h-5 w-5 ${iconColorClass} ${iconHoverClass}`}
            />
          </Link>
          {/* <Link
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:aniketrawat826@gmail.com"
            className="cursor-pointer"
          >
            <TbMailUp
              className={`h-5 w-5  ${iconColorClass} ${iconHoverClass}`}
            />
          </Link> */}
          <Link
            href={`/blogs?from=${activeSection || "meet-me"}`}
            className="cursor-pointer"
          >
            <RiArticleLine
              className={`h-5 w-5 ${iconColorClass} ${iconHoverClass}`}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ControllerHeader;
