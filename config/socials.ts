import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@AniketR10",
    icon: Icons.gitHub,
    link: "https://github.com/AniketR10",
  },
  {
    name: "Twitter",
    username: "@aniketrawat00",
    icon: Icons.twitter,
    link: "https://x.com/aniketrawat00",
  },
  {
    name: "Linkedin",
    username: "Aniket Rawat",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/aniket-rawat-2235532a4/",
  },
  {
    name: "Leetcode",
    username: "aniketxd01",
    icon: Icons.leetcode,
    link: "https://leetcode.com/u/aniketxd01/",
  },
  {
    name: "Gmail",
    username: "aniketrawat826@gmail.com",
    icon: Icons.gmail,
    link: "mailto:aniketrawat826@gmail.com",
  },
];
