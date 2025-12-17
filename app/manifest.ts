import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Aniket Rawat Portfolio",
    short_name: "Aniket's Portfolio",
    description:
      "Aniket Rawat's modern developer portfolio built with Next.js",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/icon.jpg",
        sizes: "64x64",
        type: "image/jpg",
      },
      {
        src: "/icon.jpg",
        sizes: "64x64",
        type: "image/jpg",
        purpose: "maskable",
      },
    ],
    categories: [
      "portfolio",
      "template",
      "development",
      "nextjs",
      "react",
      "developer",
      "web development",
      "open source",
    ],
    lang: "en",
    dir: "ltr",
    scope: "/",
  };
}
