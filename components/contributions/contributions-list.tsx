"use client";

import { useEffect, useRef, useState } from "react";

import BlogCard from "@/components/contributions/contribution-card";
import { ScrapedData } from "@/lib/scrape-meta";

interface ContributionsListProps {
  blogs: ScrapedData[];
}

const INITIAL_VISIBLE_COUNT = 10;

export default function ContributionsList({ blogs }: ContributionsListProps) {
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  const visibleBlogs = blogs.slice(0, visibleCount);
  const hasMore = visibleCount < blogs.length;

  useEffect(() => {
    if (!hasMore || !loadMoreRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;

        if (!entry.isIntersecting) return;

        setVisibleCount((prev) =>
          Math.min(prev + INITIAL_VISIBLE_COUNT, blogs.length)
        );
      },
      {
        root: null,
        rootMargin: "200px 0px",
        threshold: 0.1,
      }
    );

    observer.observe(loadMoreRef.current);

    return () => observer.disconnect();
  }, [blogs.length, hasMore]);

  return (
    <>
      <div className="mx-auto mt-8 grid w-full justify-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visibleBlogs.map((blog, index) => (
          <BlogCard key={index} data={blog} />
        ))}
      </div>

      {hasMore && (
        <div className="mt-6 flex w-full justify-center text-sm text-muted-foreground">
          <div ref={loadMoreRef} className="py-3">
            Scroll to load more
          </div>
        </div>
      )}
    </>
  );
}
