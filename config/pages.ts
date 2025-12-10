import { ValidPages } from "./constants";

type PagesConfig = {
  [key in ValidPages]: {
    title: string;
  
    metadata: {
      title: string;
      
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
   
    metadata: {
      title: "Projects",
     
    },
  },
  contact: {
    title: "Contact",
   
    metadata: {
      title: "Contact",
     
    },
  },
  contributions: {
    title: "Contributions",
  
    metadata: {
      title: "Contributions",
     
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
