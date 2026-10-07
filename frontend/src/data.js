import idppImage from "./backgrounds/IDPP.jpg";

export const projects = [
  {
    number: "01",
    slug: "idpp-dashboard",
    title: "IDPP Account Mapping Dashboard",
    type: "Professional project",
    summary: "An AI-assisted dashboard that turns hiring activity into useful account intelligence for internal teams.",
    description: "I developed a dashboard to help teams research companies, understand hiring signals and identify business opportunities. The workflow brings together job listing extraction, data parsing and visual summaries in one focused interface.",
    technologies: ["Python", "React", "Node.js", "Django", "CSS", "AI-assisted development"],
    features: ["Careers URL input", "Job listing extraction", "Hiring signal analysis", "Trend visualisation", "Business intelligence summaries", "Data parsing"],
    accent: "amber",
    image: idppImage,
    github: "https://github.com/ammiels/account-mapping-website",
    demo: "",
    details: ["Problem: useful recruitment signals were spread across several manual research steps.", "Solution: a repeatable workflow that turns public hiring data into a clear account overview.", "What I learned: good internal tools are as much about reducing cognitive load as they are about adding features."]
  },
  {
    number: "02",
    slug: "cybersecurity-training",
    title: "Cybersecurity Training for Seniors",
    type: "Final year project",
    summary: "A secure, accessible learning platform that helps older users build practical cybersecurity awareness through guided modules and assessments.",
    description: "I designed and developed an educational web platform that makes essential cybersecurity concepts approachable for older users. The experience combines a calm, accessible interface with secure authentication, interactive learning modules and progress tracking.",
    technologies: ["Django", "Python", "PostgreSQL", "Docker", "JWT", "HTML / CSS"],
    features: ["User authentication", "Interactive training modules", "Assessments and scoring", "Admin dashboard", "Engagement tracking", "API documentation"],
    accent: "sage",
    github: "https://github.com/ammiels/cybersecurity-training",
    demo: "",
    details: ["Problem: online security guidance can be overwhelming and difficult to apply.", "Solution: a structured platform that turns key behaviours into short, trackable learning moments.", "What I learned: designing for trust means balancing strong security controls with a clear, welcoming user experience."]
  }
];

export const experience = [
  {
    period: "Nov 2025 — Jun 2026",
    role: "Graduate Test Analyst",
    company: "Morgan Advanced Materials",
    location: "Windsor, UK · Remote",
    description: "Worked across testing and documentation, collaborating with business users, functional consultants and developers to improve software quality.",
    tags: ["Test plans", "Dynamics 365 F&O", "Azure DevOps", "Leapwork"]
  },
  {
    period: "Sep 2025 — Nov 2026",
    role: "Admin Assistant — Contractor Support",
    company: "IDPP",
    location: "Swindon, UK",
    description: "Supported recruitment operations through research, account mapping and process improvement, with a focus on turning information into useful decisions.",
    tags: ["Research", "Account mapping", "Bullhorn CRM", "Process improvement"]
  },
  {
    period: "Aug 2023 — Aug 2025",
    role: "Technical Support Assistant",
    company: "Boss Sports Ltd",
    location: "London, UK",
    description: "Provided hands-on IT support across hardware, networks and infrastructure while improving system stability and security.",
    tags: ["IT support", "Networking", "CCTV", "Custom PCs"]
  }
];

export const skillGroups = [
  ["Languages", "Java", "Python", "C / C++", "SQL", "JavaScript", "PHP", "HTML / CSS"],
  ["Frameworks & technologies", "React", "Django", "Node.js", "Express.js", "Vue.js"],
  ["Developer tools", "Git", "Docker", "VS Code", "Linux", "Azure DevOps", "Leapwork"],
  ["Technical areas", "Full-stack development", "Cybersecurity", "Data analytics", "Software testing", "IT systems", "Networking", "Infrastructure", "Artificial intelligence"],
  ["Professional skills", "Communication", "Collaboration", "Time management", "Problem solving"]
];

export const contactLinks = [
  { label: "Email", value: "ammieljoseph@gmail.com", href: "mailto:ammieljoseph@gmail.com" },
  { label: "GitHub", value: "github.com/ammiels", href: "https://github.com/ammiels" },
  { label: "LinkedIn", value: "linkedin.com/in/ammiel-joseph", href: "https://linkedin.com/in/ammiel-joseph" }
];
