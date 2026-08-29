"use client";
import React from "react";
import Link from "next/link";

const MeetMe = () => {
  return (
    <section
      id="meet-me"
      className="flex items-center justify-center w-full py-16 md:py-24 overflow-auto"
    >
      <div className="w-full h-full mx-auto max-w-4xl p-2.5 md:p-0 flex items-center md:justify-center ">
        <div className="space-y-12 md:space-y-16">
          <div className="text-center">
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-wider mb-3 md:mb-4">
              ABOUT ME
            </h2>
            <p className="text-sm lg:text-base xl:text-md leading-relaxed max-w-3xl mx-auto ">
              I&apos;m <span className="[font-weight:700]">Aniket Rawat</span>, a{" "}
              <span className="[font-weight:700]">Software Engineer</span> and
              open-source contributor. I am the core maintainer of{" "}
              <Link
                href="https://screenshot-studio.com"
                target="_blank"
                rel="noopener noreferrer"
                className="[font-weight:700] underline [text-decoration-thickness:1px]"
              >
                Screenshot-studio.com
              </Link>{" "}
              (1k+ GitHub stars and 21k MAU) with{" "}
              <span className="[font-weight:700]">50+ PRs merged</span> across
              open-source repositories. Also building{" "}
              <Link
                href="https://www.iamunemployed.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="[font-weight:700] underline [text-decoration-thickness:1px]"
              >
                iamunemployed.xyz
              </Link>{" "}
              (360+ users). I enjoy building end-to-end{" "}
              <span className="[font-weight:700]">products</span>, exploring new
              technologies, and contributing to{" "}
              <span className="[font-weight:700]">open source</span>. In my free
              time, I explore the mysteries of space and write about tech.
              My{" "}
              <Link
                href="/blogs?from=meet-me"
                className="[font-weight:700] underline [text-decoration-thickness:1px]"
              >
                blog
              </Link>{" "}
              is consistently read by{" "}
              <span className="[font-weight:700]">8k+ readers</span> every
              week.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetMe;
