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
    name: "Gmail",
    username: "aniketrawat826",
    icon: Icons.gmail,
    link: "mailto:aniketrawat826@gmail.com",
  },
];
