export interface Project {
  id: string;
  name: string;
  description: string;
  detailedDescription: string;
  image: string;
  images?: string[];
  languagesUsed: string[];
  isFeatured: boolean;
  status: string;
  features: string[];
  github?: string | null;
  url?: string | null;
  links?: { title: string; url: string }[];
  tag: "fullstack" | "frontend" | "backend" | "development" | "dsa";
  sequence?: number;
  isHidden?: boolean;
}

// const backendImageUrl =
//   "https://cdn.prod.website-files.com/678a08d17a6b88bae4e2d8ee/67931a07d312ac82c81b8a14_66b0929089fba41bd4d24803_API-Development.png";
const backendImageUrl =
  "/images/api.jpg";

export const projectlist: Project[] = [
  {
    id: "1",
    name: "YouHired",
    description:
      "YouHired turns your GitHub profile and work history into a live portfolio and an ATS-optimized resume — from one unified profile. AI generates your bio from your real projects, not generic prompts, and you get weekly job matches based on your actual skills.",
    detailedDescription: `YouHired is an AI-powered developer portfolio and resume platform built to solve a real problem: developers rebuild the same information<br /> — projects, skills, experience <br />— separately for every portfolio, resume, and job application. <br />YouHired centralizes it into one profile and generates everything else from that single source.
<br /><br />
The platform is built as two coordinated applications <br />— a Next.js marketing site and a full MERN-stack dashboard app <br />— sharing one backend for data, transformations, and generation.
<br /><br />
How it works:<br />
A user connects their GitHub and fills out a structured profile once. From that single data source, YouHired generates a live portfolio, an ATS-optimized resume, and an AI-written bio grounded in the user's actual project history — not generic filler text. A recommendation engine then surfaces weekly job matches based on the user's real skills and preferences, and everything<br /> — portfolio and resume alike<br /> — can be exported or shared with one link.
<br /><br />
What I built:
<br />
A centralized profile schema that transforms one data source into multiple structured outputs (portfolio + resume)<br />
A resume-generation pipeline that normalizes skills and formatting into ATS-friendly output<br />
An AI bio generator that pulls from the user's real projects/skills instead of generic prompting<br />
A weekly job-recommendation system matched to user profile data<br />
A template-driven rendering layer so layouts can change without touching underlying data<br />
GitHub API integration to auto-sync and display real project history`,
    image: "/images/youhired.png",
    images: ["/images/youhired.png"],
    languagesUsed: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/nodejs/nodejs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
    ],
    isFeatured: true,
    status: "Live",
    features: [
      "GitHub Project Sync",
      "ATS Resume Generator",
      "Portfolio Templates",
      "Weekly Job Recommendations",
      "One-Click AI Resume Generation",
      "AI Bio Generation From Real Profile Data",
      "One-Click Vercel Deploy",
      "Export & Sharing",
      "Razorpay for Accepting Payment",
    ],
    github: "https://github.com/AnkitRaj20/codefolio",
    url: "https://youhired.cloud",
    links: [],
    tag: "fullstack",
    sequence: 1,
  },
  {
    id: "2",
    name: "Finoryx",
    description:
      "Finoryx is a personal finance tracker for managing everyday expenses, recurring transactions, and shared costs with others — built to replace my own budgeting spreadsheet. Tracks spending patterns, automates recurring bills, and splits group expenses, Splitwise-style.",
    detailedDescription: `Finoryx started as a personal need: spreadsheets weren't cutting it for tracking recurring bills, shared expenses with friends, and actual spending patterns over time. I built it as a full-stack personal finance platform that handles all three in one place.
<br /><br />
The core is a dashboard that tracks monthly budgets, account balances, and spending against a set budget target in real time. Recurring transactions <br />— daily, weekday-only, monthly, or yearly <br />— are automatically processed on schedule rather than requiring manual entry every time, and a group expense feature lets shared costs (rent splits, group purchases, utilities) be tracked and settled the way Splitwise handles shared expenses.
<br /><br />
What I built:
<br />
A recurring-transaction engine supporting custom schedules (daily, Mon–Fri, monthly, yearly) with automatic daily processing<br />
An expense analytics layer with category breakdowns, spending trend charts, and period-over-period comparisons<br />
A group expense system for splitting and settling shared costs among multiple people<br />
A transactions table with search, filtering, and CSV export/import<br />
A quick-add expense flow supporting natural-language input (e.g. typing "800 petrol from HDFC yesterday" and having it parsed automatically)`,
    image: "/images/finoryx.png",
    images: [
      "/images/finoryx.png",
      "/images/finoryx1.png",
      "/images/finoryx2.png",
      "/images/finoryx3.png",
      "/images/finoryx4.png",
      "/images/finoryx5.png",
    ],
    languagesUsed: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
      "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/nodejs/nodejs-original.svg",
    ],
    isFeatured: true,
    status: "Live",
    features: [
      "Recurring transactions (daily/5 days/ 6 days /monthly/yearly)",
      "Expense analytics and spending trends",
      "Group expense splitting",
      "Natural-language quick-add expense",
      "Transaction search, filter, export/import",
      "Multi-account tracking",
    ],
    github: "",
    url: "https://finoryx.vercel.app",
    links: [],
    tag: "fullstack",
    sequence: 2,
  },
  {
    id: "13",
    name: "Khiladi Adda",
    description:
      "Khiladi Adda is a real-money gaming ecosystem (Ludo, Rummy, tournaments) with secure KYC onboarding, real-time wallets, and compliance-safe payment flows — built to handle high-traffic gaming operations at scale.",
    detailedDescription: `Khiladi Adda is a real-money gaming (RMG) platform supporting multiple games — Ludo, Rummy, Ludo Tournament, Cricket Tournament — with the full compliance and financial infrastructure real-money apps require: KYC onboarding, wallet management, and region-aware legal compliance.
<br/><br/>
I worked across the platform's backend and its Rummy-specific product line (RummyAdda), plus a standalone sibling app (Bharat Rummy) built entirely backend-first. Across these, I handled everything from onboarding and wallets to performance optimization at scale.
<br/><br/>
User-facing systems:
<br/>
KYC onboarding — Aadhaar/PAN verification workflows for secure user registration <br/>
Wallet system — real-time balance updates, deposits, withdrawals, and winnings transfers, with full transaction logs <br/>
Location-based compliance — auto-detects a user's state/country via IP to enforce region-specific gaming rules <br/>
TDS compliance — automated tax deduction handling on winnings, per Indian regulations <br/>
Multiple payment gateway integrations for deposits and withdrawals
<br/><br/>
Performance and infrastructure:
<br/>
Batch API processing cut latency by 40%; Redis caching brought response times down to ~4-5ms
<br/>
Replaced manual Excel exports with a Google Sheets streaming pipeline, supporting 100,000+ records and saving roughly ₹1 lakh in infrastructure costs
<br/>
Built and optimized REST APIs to handle high-traffic gaming loads without degradation
<br/><br/>
Security:
<br/>
Password hashing (Bcrypt) and data encryption (Crypto) across all three applications<br/>
Rate limiting on external integrations and sensitive endpoints<br/>
JWT-based authentication across user sessions<br/>
<br/><br/>
I also contributed to the React.js-based admin panel used for real-time platform monitoring.`,
    image: backendImageUrl,
    languagesUsed: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
    ],
    isFeatured: true,
    status: "Live",
    features: [
      "KYC onboarding (Aadhaar/PAN)",
      "Real-time wallet system (deposits, withdrawals, winnings)",
      "Location-based compliance (IP-based region detection)",
      "TDS compliance for transactions",
      "Multiple payment gateway integrations",
      "Redis caching + batch API optimization (40% latency reduction)",
      "Google Sheets streaming for large-scale data export",
      "JWT authentication, Bcrypt/Crypto security, rate limiting",
    ],
    links: [],
    tag: "backend",
    sequence: 3,
  },
  {
    id: "11",
    name: "LMS",
    description:
      "A production-ready LMS backend supporting role-based course management for admins, instructors, and students — with secure payments, certificate generation, and full progress tracking.",
    detailedDescription: `This is a backend system for a full-scale Learning Management System, built to support real course delivery — not just CRUD operations. It handles three distinct user roles (admin, instructor, student), each with different permissions and access to course, payment, and progress data.
<br /><br />
The system covers the full lifecycle of an online course: enrollment and payment, lecture progress tracking, wishlisting, and certificate generation on completion — all behind a versioned, secured API layer.
<br /><br />
Core systems:
<br />
Role-based access control (JWT + Bcrypt) with distinct permission sets for admin, instructor, and student roles<br />
Razorpay integration for secure course payments<br />
Cloudinary + Multer for video/image uploads (course content, thumbnails)<br />
Progress tracking across lectures, with wishlist management<br />
Automatic certificate generation on course completion<br />
<br /><br />
Production practices:
<br />
Centralized logging (Winston + Morgan) for activity and error tracking<br />
Security hardening: Helmet, HPP, rate limiting, and encrypted credentials<br />
Versioned API structure (/api/v1/) for clean long-term scalability<br />`,
    image: "/images/LMS Backend API Overview.png",
    languagesUsed: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
    ],
    isFeatured: true,
    status: "Live",
    features: [
      "Role-Based Access Control (Admin / Instructor / Student)",
      "JWT Authentication with password hashing via Bcrypt",
      "Course, Reviews, Progress and Lecture Management APIs",
      "Razorpay Payment Integration",
      "Cloudinary File Uploads (Multer)",
      "Course Wishlist and Progress Tracking",
      "Auto Certificate Generation",
      "Centralized Logging with Winston & Morgan",
      "Secure, Versioned APIs under /api/v1/",
      "Advanced Security: Helmet, Rate Limiting, HPP, CORS",
    ],
    github: "https://github.com/AnkitRaj20/lms-backend",
    links: [],
    tag: "backend",
    sequence: 4,
  },
  {
    id: "10",
    name: "EventPulse",
    description:
      "EventPulse is an anonymous event posting and application platform built on a Node.js microservices architecture, handling ~10k daily active users. Worked on the real-time infrastructure — Kafka streaming, Socket.io chat, and Redis caching — as part of the engineering team.",
    detailedDescription: `EventPulse is an anonymous event posting and application platform, built to handle real-time interaction — chat, notifications, and applications — at scale. I worked on this as part of the engineering team, focused primarily on the platform's real-time infrastructure and performance layer.<br /><br />

The platform runs on a Node.js microservices architecture, distributing load across specialized services to support around 10,000 daily active users without single points of bottleneck.
<br /><br />
What I worked on:
<br />
 - Real-time data streaming — used Kafka to process live notifications and chat data, increasing overall system throughput by 70% <br />
 - Live chat infrastructure — built with Socket.io for near-instant messaging with robust concurrency handling. <br />
 - Caching layer — implemented Redis for frequently accessed data, cutting average response times by roughly 60%. <br />
 - Notification system — integrated Firebase push notifications with a priority queue for time-sensitive alerts, achieving a 99.9% delivery rate
<br /><br />
Supporting systems (team-built):
<br />
 - JWT-based authentication with Bcrypt password hashing and Crypto encryption.<br />
 - MySQL with Sequelize ORM for consistent, transactional data handling
Razorpay integration for in-platform payments`,
    image: backendImageUrl,
    languagesUsed: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
      "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/mysql/mysql-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachekafka/apachekafka-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
    ],
    isFeatured: true,
    status: "Live",
    features: [
      "Node.js Microservices Architecture",
      "High-Throughput Data Streaming with Kafka",
      "Real-Time Communication via Socket.io",
      "Caching & Performance Optimization with Redis",
      "Secure Authentication using Bcrypt, Crypto, and JWT",
      "Reliable Notification Management with Firebase",
      "Transactional Data Management with MySQL & Sequelize",
      "Seamless Payment Integration with Razorpay",
    ],
    links: [],
    tag: "backend",
    sequence: 6,
  },
  {
    id: "12",
    name: "Blog Platform Backend",
    description:
      "A scalable blog platform backend with JWT authentication, a fully nested comment system, and Facebook-style emoji reactions — built with clean, versioned RESTful APIs.",
    detailedDescription: `This is a backend API for a modern blog platform, built to support real content and community interaction — not just basic post CRUD. The standout piece is the comment system: full nested comments and replies with complete CRUD operations, plus Facebook-style emoji reactions on posts, giving the platform genuine social/interactive depth beyond a typical blog backend. <br /><br />

Core systems:
<br />
 - JWT-based authentication with secure login, registration, and protected routes.<br />
 - Nested comment and reply system with full CRUD support.<br />
 - Emoji reactions on blog posts.<br />
 - Blog post CRUD via clean RESTful endpoints.<br />
 - Profile image uploads (Multer, local/cloud storage)<br /><br />

Architecture and security:
<br />
 - Modular controller-service architecture for maintainability.<br />
 - Role-based middleware (user/admin)<br />
 - Security hardening: Helmet, CORS, rate limiting, Bcrypt password hashing.<br />
 - Versioned API structure (/api/v1/) for scalability`,
    image: "/images/blog.png",
    languagesUsed: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
    ],
    isFeatured: false,
    status: "Live",
    features: [
      "JWT-Based User Authentication",
      "Nested Comments and Replies (Full CRUD)",
      "Emoji Reactions on Blog Posts",
      "Profile Picture Upload via Multer",
      "RESTful Blog CRUD APIs",
      "Role-Based Middleware (User/Admin)",
      "Security: Helmet, Rate Limiting, Bcrypt, CORS",
      "Modular Controller-Service Architecture",
      "Clean Versioned Routes under /api/v1/",
    ],
    github: "https://github.com/AnkitRaj20/blog-backend",
    links: [],
    tag: "backend",
    sequence: 6,
  },
  {
    id: "15",
    name: "Bharat Rummy",
    description: "End-to-End Backend for Real Money Rummy Platform",
    detailedDescription: `Bharat Rummy is a standalone real money Rummy application for Indian users, fully developed with backend-first principles. <br /><br />
  I built the complete backend system, covering: <br />
  - 💳 **Wallet Management**: Real-time balances & transaction logs. <br />
  - 🏦 **Payment Gateway Integrations** for deposits, withdrawals, and winnings. <br />
  - 🧾 **TDS Implementation** ensuring compliance in user transactions. <br />
  - 🔐 **KYC Workflows** with Aadhaar/PAN for secure onboarding. <br />
  - ⚡ **Optimized REST APIs** capable of handling high-traffic loads. <br />
  - 🛡️ **Secure Transactions** with Bcrypt hashing, Crypto encryption, and rate limiting.`,
    image: backendImageUrl,
    languagesUsed: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
    ],
    isFeatured: false,
    status: "Live",
    features: [
      "End-to-End Backend System",
      "Wallet with Real-Time Balance & Logs",
      "Multiple Payment Gateway Integrations",
      "TDS Compliance for Transactions",
      "KYC with Aadhaar/PAN",
      "Optimized REST APIs for High Traffic",
    ],
    links: [],
    tag: "backend",
    sequence: 900,
    isHidden: true
  },
  {
    id: "8",
    name: "EazeAccounts",
    description:
      "A QuickBooks-style accounting platform built for a Chartered Accountant client — handling full US accounting workflows: bank integration using Plaid, income and balance sheet management, and financial reporting for individuals and organizations.",
    detailedDescription: `EazeAccounts is a financial management platform built for a real client — a Chartered Accountant needing QuickBooks-equivalent functionality for managing US accounting workflows across multiple clients and organizations.<br /><br />

The platform handles the core financial documents an accountant actually needs: balance sheets, income statements, and a full Chart of Accounts, alongside multi-bank account tracking and transaction management. Every transaction feeds into real-time balance updates and detailed financial reports, so users always have an accurate, current view of their finances.
<br /><br />
Core systems:
<br />
 - Bank integration via Plaid, supporting multiple linked accounts per user
 - Sales tracking, income and balance sheet management, and Chart of Accounts (COA) support<br />
 - Customizable financial reporting<br />
 - Role-based and organization-based authentication (JWT), supporting multi-organization access<br />
 - Stripe integration for payment processing<br />
<br /><br />
Architecture:
<br />
RESTful API design for secure, efficient handling of sensitive financial data
Sequelize ORM for optimized handling of complex financial queries at scale`,
    image: backendImageUrl,
    languagesUsed: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
      "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/mysql/mysql-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
    ],
    isFeatured: true,
    status: "Live",
    features: [
      "Bank Integration using Plaid",
      "Sales Tracking",
      "Income and Balance Sheet Management (Chart of Accounts)",
      "Customizable Financial Reports",
      "Role-based and Organization-based Authentication (JWT)",
      "Stripe Payment Integration",
    ],
    links: [],
    tag: "backend",
    sequence: 15,
  },
  {
    id: "20",
    name: "RestoreMagic",
    description:
      "SaaS Platform for Image Manipulation using Next JS and Cloudinary API",
    detailedDescription:
      "Particularly adept with RestoreMagic, leveraging Cloudinary API for innovative image manipulation features like Image Restore, Generative Fill, Object Remove, Object Recolor, and Background Remove. Proficient in integrating Stripe for seamless payment processing and Clerk for secure authentication.",
    image: "/images/restoremagic.png",
    languagesUsed: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    ],
    isFeatured: false,
    status: "Live",
    features: [
      "Image Restore",
      "Generative Fill",
      "Object Remove",
      "Object Recolor",
      "Background Remove",
      "Clerk for secure authentication",
      "Stripe for accepting payment",
    ],
    github: "https://github.com/AnkitRaj20/RestoreMagic",
    url: "https://restoremagic.vercel.app/",
    links: [],
    tag: "fullstack",
    sequence: 100,
    isHidden: true
  },
  {
    id: "3",
    name: "JoyMaker",
    description:
      "Online Charity Application that helps you to donate money, food, clothes.",
    detailedDescription:
      "JoyMaker helps you to donate money, food, clothes etc. It is ideal for people who want to help the poor by donating or feeding them. The people can register and become volunteers and can provide any of these services. Working on the Covid-19 response since the beginning of the crisis, JoyMaker is evolving its approach with changing needs on the ground.",
    image: "/images/joymaker.png",
    languagesUsed: [
      "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/php/php-original.svg",
      "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/css3/css3-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/mysql/mysql-original.svg",
    ],
    isFeatured: false,
    status: "Ready",
    features: [
      "Razorpay Payment Gateway Integration",
      "Donate Money",
      "Donate Cooked or Raw Food",
      "Donate Clothes",
      "Forgot Password",
    ],
    github: "https://github.com/AnkitRaj20/joymaker/tree/main",
    url: null,
    links: [],
    tag: "fullstack",
    sequence: 2000,
    isHidden: true,
  },
  {
    id: "4",
    name: "Personal Portfolio",
    description:
      "Sleek personal portfolio website made with NextJs, Tailwind CSS, ShadcnUI, and Framer Motion.",
    detailedDescription:
      "This project is a personal portfolio website showcasing my skills and projects. It features a sleek and modern design implemented with Next.js, Tailwind CSS, ShadcnUI, and Framer Motion.",
    image: "/images/portfolio.png",
    languagesUsed: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    ],
    isFeatured: false,
    status: "Live",
    features: [
      "Sleek and modern design",
      "Built with Next.js",
      "Animated transitions",
      "ShadcnUI",
    ],
    github: "https://github.com/AnkitRaj20/portfolio-nextjs",
    url: "https://ankitcodes.vercel.app",
    links: [],
    tag: "frontend",
    sequence: 3000,
    isHidden: true,
  },
  {
    id: "5",
    name: "BrainCare",
    description: "Online Mental Health Website",
    detailedDescription:
      "An online mental health website where individuals with shared experiences come together to foster mental well-being and motivation. Our platform provides a safe and supportive environment for open discussions, story sharing, and mutual encouragement.",
    image: "/images/braincare.png",
    languagesUsed: [
      "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/php/php-original.svg",
      "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/css3/css3-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/mysql/mysql-original.svg",
    ],
    isFeatured: false,
    status: "Ready",
    features: [
      "Group Message for all people",
      "Separate groups for all genders, students",
      "Zoom API integration for meetings",
      "Post and View Story",
    ],
    github: "https://github.com/AnkitRaj20/braincare",
    url: null,
    links: [],
    tag: "fullstack",
    sequence: 4000,
    isHidden: true,
  },
];
