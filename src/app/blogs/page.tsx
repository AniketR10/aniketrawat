import { unstable_cache } from "next/cache";

import { BLOG_URLS } from "@/data/blogs";
import { scrapeMetaData } from "@/lib/scrape-meta";
import BlogsView from "@/components/Blogs/BlogsView";

export const revalidate = 21600; // 6 hours

const getCachedBlogs = unstable_cache(
  async () => Promise.all(BLOG_URLS.map((url) => scrapeMetaData(url))),
  ["blogs-metadata"],
  {
    revalidate,
  },
);

export default async function BlogsPage() {
  const blogs = await getCachedBlogs();

  return <BlogsView blogs={blogs} />;
}
