// app/data/projects.ts
export interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
  github: string;
  image: string;
}

export const projectsData: Project[] = [
  {
    title: "BusZone+",
    description:
      "A full-stack bus rental and management system designed to simplify bus booking, scheduling, and fleet management. The platform supports user-friendly booking, admin management features, and efficient data handling for real-world transportation needs.",
    tech: ["MongoDB", "Express.js", "React", "Node.js"],
    link: "#",
    github: "#",
    image: "/bus1.png",
  },
  {
    title: "Health Flow",
    description:
      "A mobile health routine management app designed to help users track daily habits, maintain healthy routines, and stay consistent with their wellness goals. The app focuses on simplicity, usability, and effective routine management for everyday health improvement.",
    tech: ["Kotlin"],
    link: "#",
    github:
      "https://github.com/SandeepaChathumina/Bus-Rental-Management-System-Bus-Zone-",
    image: "/app1.png",
  },
 
  // To add a new project, just copy-paste an object here
];
