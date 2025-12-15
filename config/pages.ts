import { ValidPages } from "./constants";

type PagesConfig = {
  [key in ValidPages]: {
    title: string;
    description?: string
    metadata: {
      title: string;
      description?: string;
    };
    // featuredDescription: string;
  };
};

export const pagesConfig: PagesConfig = {
  home: {
    title: "Home",
    
    metadata: {
      title: "Home",
     
    },
  },
  skills: {
    title: "Tools that I have used",
   
    metadata: {
      title: "Skills",
    }
  },
  projects: {
    title: "Projects",
   description: "Projects I have worked across...",
    metadata: {
      title: "Projects",
     description: "Projects I have worked across",
    },
  },
  contact: {
    title: "Contact",
   
    metadata: {
      title: "Contact",
     
    },
  },
  contributions: {
    title: "Blogs",
    description: "My blogs contains latest happenings in Tech, cool tools to use for developers and memes!",
    metadata: {
      title: "Blogs",
      description: "My blogs contains latest happenings in Tech, cool tools to use for developers and memes!",
    },
  },
  resume: {
    title: "Resume",
  
    metadata: {
      title: "Resume",
     
    },
  },
  experience: {
    title: "Experience",
    metadata: {
      title: "Experience",
     
    },
  },
};
