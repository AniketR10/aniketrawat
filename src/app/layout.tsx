import type { Metadata } from "next";
import { ThemeProvider } from "@/providers/theme-provder";
import { Analytics } from "@vercel/analytics/next";
import localFont from "next/font/local";
import "./globals.css";

const nunito = localFont({
  src: "./fonts/Nunito/Nunito-VariableFont_wght.ttf",
  display: "swap",
  variable: "--font-nunito",
});

const thasadith = localFont({
  src: [
    {
      path: "./fonts/Thasadith/Thasadith-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Thasadith/Thasadith-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Thasadith/Thasadith-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/Thasadith/Thasadith-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-thasadith",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aniketrawat.com"),
  title: "Aniket Rawat | Developer Portfolio",
  description: "Aniket Rawat's portfolio",
  keywords: [
    "Aniket Rawat",
    "Full Stack Developer",
    "Web Developer Portfolio",
    "Next.js portfolio template",
    "React portfolio template",
    "Developer portfolio template",
    "Portfolio website template",
    "Next.js template",
    "Modern portfolio website",
    "Frontend developer portfolio",
    "Full stack developer portfolio",
    "Open source portfolio template",
    "Web developer portfolio template",
    "Responsive portfolio template",
    "React.js portfolio",
    "Tailwind CSS portfolio",
    "Developer showcase template",
    "Free portfolio template",
    "Next.js 13 template",
    "Shadcn UI template",
    "Career timeline template",
    "Portfolio with dark mode",
    "GitHub portfolio template",
  ],
  authors: [
    {
      name: "Aniket Rawat",
      url: "https://github.com/AniketR10",
    },
  ],
  creator: "Aniket Rawat",
  publisher: "Aniket Rawat",

  openGraph: {
    title: "Aniket Rawat | Developer Portfolio",
    description: "Aniket Rawat's portfolio",
    url: "https://aniketrawat.com",
    siteName: "Aniket Rawat",
    images: [
      {
        url: "/me-logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Aniket Rawat | Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Aniket Rawat | Developer Portfolio",
    description: "Aniket Rawat's portfolio",
    images: ["/me-logo.jpeg"],
    creator: "@aniketrawat00",
  },

  category: "Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${nunito.variable} ${thasadith.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
