// app/data/certificates.ts
export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  url: string; // Link to the digital credential
}

export const certificatesData: Certificate[] = [
  { 
    title: "Front-End Web Development", 
    issuer: "Faculty of Information Technology, University of Moratuwa", 
    date: "2025",
    url: "https://drive.google.com/file/d/1JlqO2i92rwdnUx5LwEqmLmmO0-eC12bF/view?usp=sharing", 
  },
  { 
    title: "AI/ML Engineer - Stage 1", 
    issuer: "Faculty of Computing, SLIIT", 
    date: "2025",
    url: "https://drive.google.com/file/d/10npM4a2MwZBXkm9Qq9nrYkNDP09vd7sg/view?usp=sharing" 
  },
  { 
    title: "AI/ML Engineer - Stage 2", 
    issuer: "Faculty of Computing, SLIIT", 
    date: "2025",
    url: "https://drive.google.com/file/d/1SN2zoes2uhQmdm0IusMkeeRfhT8Hd7-O/view?usp=sharing" 
  },
  { 
    title: "Web Design for Beginners", 
    issuer: "Faculty of Information Technology, University of Moratuwa", 
    date: "2025",
    url: "https://drive.google.com/file/d/1edTUo4upEqJ74RjXUcBP_alkhbJWmERu/view?usp=sharing" 
  },
  // To add a new one, just paste a new object here!
];