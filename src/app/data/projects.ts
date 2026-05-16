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
    github: "https://github.com/SandeepaChathumina/Bus-Rental-Management-System-Bus-Zone-",
    image: "/bus1.png",
  },
  {
    title: "Health Flow",
    description:
      "A mobile health routine management app designed to help users track daily habits, maintain healthy routines, and stay consistent with their wellness goals. The app focuses on simplicity, usability, and effective routine management for everyday health improvement.",
    tech: ["Kotlin"],
    link: "#",
    github:
      "https://github.com/SandeepaChathumina/Health-Routine-App",
    image: "/app1.png",
  },
  {
    title: "AGRIHUB-LK",
    description:
      "A MERN stack agricultural marketplace platform designed to connect farmers, distributors, transporters, and admins in one system. The platform supports role-based access, secure authentication, crop management, order handling, transportation management, real-time messaging, and admin control features to improve agricultural product distribution and communication.",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS", "JWT", "Socket.io"],
    link: "https://agri-hub-lk-frontend.vercel.app/",
    github:
      "https://github.com/SandeepaChathumina/AgriHUB-LK",
    image: "/agrihub.png",
  },
  {
  title: "Smart Healthcare System",
  description:
    "A microservices-based healthcare management system designed to support patients, doctors, appointments, payments, notifications, and telemedicine features. The system uses independent services with secure authentication, service-to-service communication, Docker containerization, and Kubernetes deployment for better scalability and maintainability.",
  tech: ["Node.js", "Express.js", "MongoDB", "React", "Docker", "Kubernetes", "JWT"],
  link: "#",
  github: "https://github.com/SandeepaChathumina/smart-healthcare-platform",
  image: "/smart-healthcare.png",
},
 
  // To add a new project, just copy-paste an object here
];
