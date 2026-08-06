export interface TimelineItem {
  Date: string;
  title: string;
  School: string;
  location: string;
  description: string;
  type: "work" | "education";
  bg?: string;
}

export const timelineData: TimelineItem[] = [
  {
    Date: "Sep 2025 - Present",
    title: "FullStack Developer",
    School: "LCNC Technologies",
    location: "Noida sector 62",
    description: "Building and maintaining drapcode.com (marketing site) in Nuxt 4<br />\nBuilding and maintaining scoutance.com (marketing site) in Nuxt 4<br />\nWorking on app.scoutance.com, the main product dashboard, using the MERN stack with AI integration<br />",
    type: "work",
    bg: "#F11A7B",
  },
  {
    Date: "May 2025 - Aug 2025",
    title: "Software Developer",
    School: "Techbeliever",
    location: "Noida",
    description: "Worked on Khiladi Adda, a real-money gaming platform — contributed to KYC onboarding, wallet systems, and backend API performance optimization",
    type: "work",
    bg: "#F11A7B",
  },
  {
    Date: "Jun 2024 - Apr 2025",
    title: "Node.js Developer",
    School: "Sartia Global Pvt Ltd",
    location: "Noida",
    description: "Worked on EazeAccounts, a QuickBooks-style accounting platform for a Chartered Accountant client - handled bank integration (Plaid), financial reporting, and backend API architecture<br />\nWorked on EventPulse, a real-time event platform - contributed to Kafka-based data streaming, Redis caching, and Socket.io chat infrastructure supporting ~10k daily active users<br />",
    type: "work",
    bg: "#F11A7B",
  },
  {
    Date: "2022 - 2024",
    title: "Masters of Computer Application",
    School: "Galgotia College Of Engineering and Technology",
    location: "Greater Noida, Uttar Pradesh",
    description: "Masters",
    type: "education",
    bg: "#F11A7B",
  },
  {
    Date: "Dec 2020 - Jun 2021",
    title: "FullStack Developer",
    School: "CodeMetrics Infotech Internship",
    location: "Noida, Uttar Pradesh",
    description: "Working as a FullStack Developer",
    type: "work",
    bg: "#F11A7B",
  },
  {
    Date: "2018 - 2021",
    title: "Bachelor of Computer Application",
    School: "A.S. College Deoghar (SKM University, Dumka)",
    location: "Deoghar, Jharkhand",
    description: "Graduated",
    type: "education",
    bg: "#F11A7B",
  },
  {
    Date: "2015 - 2017",
    title: "Intermediate - 12th",
    School: "Deoghar College Deoghar",
    location: "Deoghar, Jharkhand",
    description: "Intermediate",
    type: "education",
    bg: "#387ADF",
  },
  {
    Date: "2014 - 2015",
    title: "Matriculation - 10th",
    School: "SKP VIDYA VIHAR",
    location: "Deoghar, Jharkhand",
    description: "Matriculation",
    type: "education",
    bg: "#F57D1F",
  },
];

export const Education = timelineData;
