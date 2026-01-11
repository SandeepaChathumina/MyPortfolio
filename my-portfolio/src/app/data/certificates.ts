// app/data/certificates.ts
export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  url: string; // Link to the digital credential
}

export const certificatesData: Certificate[] = [
  { 
    title: "Next.js Professional", 
    issuer: "Vercel", 
    date: "2025",
    url: "#", 
  },
  { 
    title: "AWS Cloud Practitioner", 
    issuer: "Amazon", 
    date: "2024",
    url: "#" 
  },
  { 
    title: "Meta Front-End Engineer", 
    issuer: "Coursera", 
    date: "2024",
    url: "#" 
  },
  { 
    title: "Google UX Design", 
    issuer: "Coursera", 
    date: "2023",
    url: "#" 
  },
  // To add a new one, just paste a new object here!
];