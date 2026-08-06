export interface NavLink {
  name: string;
  link: string;
}

export interface NavbarData {
  logo: {
    text: string;
    image: string;
  };
  links: NavLink[];
  resume: {
    text: string;
    link: string;
  };
}

export const navbarData: NavbarData = {
  logo: {
    text: "Ankit Raj",
    image: "/images/logo.jpg",
  },
  links: [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Timeline",
      link: "/timeline",
    },
    {
      name: "Projects",
      link: "/projects",
    },
    {
      name: "Contact",
      link: "mailto:ankit21654@gmail.com",
    },
  ],
  resume: {
    text: "Resume",
    link: "/ankit_resume.pdf",
  },
};

export const navLinks = [
  {
    label: "Home",
    route: "/",
    icon: "/icons/home.png",
  },
  {
    label: "Timeline",
    route: "/timeline",
    icon: "/assets/icons/scan.svg",
  },
  {
    label: "Projects",
    route: "/projects",
    icon: "/assets/icons/stars.svg",
  },
  {
    label: "Blogs",
    route: "/blogs",
    icon: "/assets/icons/stars.svg",
  },
  {
    label: "Contact",
    route: "mailto:ankit21654@gmail.com",
    icon: "/assets/icons/scan.svg",
  },
];

export interface HeroContent {
  name: string;
  roles: string[];
  cta: {
    text: string;
    link: string;
  };
  social: {
    linkedin: string;
  };
}

export const heroContent: HeroContent = {
  name: "Ankit Raj",
  roles: [
    "FullStack Developer",
    "Node.js Specialist",
    "System Architect",
  ],
  cta: {
    text: "Contact Now",
    link: "mailto:work.ankitraj177@gmail.com",
  },
  social: {
    linkedin: "https://www.linkedin.com/in/ankit-raj-716781254/",
  },
};

export interface AboutContent {
  title: string;
  heading: string;
  description: string;
  image: string;
  yearsOfExperience?: string;
  specialty?: string;
}

export const aboutContent: AboutContent = {
  title: "About",
  heading: "About Me",
  description: "I'm Ankit Raj, a Full-Stack Developer with 2+ years of experience building production web applications — from backend-heavy systems (wallets, KYC, real-time infra) to modern full-stack apps with React, Next.js, and Vue.\n\nMy background started backend-first, and I've since expanded into full-stack development and AI integration in production systems - so I care as much about clean, scalable APIs as I do about the interfaces built on top of them.",
  image: "/images/mine2.jpg",
  yearsOfExperience: "2+ Years",
  specialty: "Full-Stack + AI",
};

export interface ContactContent {
  heading: string;
  description: string;
  email: string;
}

export const contactContent: ContactContent = {
  heading: "Let's Connect",
  description: "Have a project in mind or just want to say hi? I'm always open to discussing new ideas, collaborations, and opportunities. Drop me a message and let's create something meaningful together.",
  email: "ankit21654@gmail.com",
};

export interface SkillItem {
  name: string;
  url: string;
  whiteColor?: boolean;
  category: "Frontend" | "Backend" | "Databases & Caching" | "AI Integration" | "Tools" | string;
  isHidden?: boolean;
}

export const MySkills: SkillItem[] = [
  // Frontend
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    name: "NextJS",
    whiteColor: false,
    category: "Frontend",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    name: "React",
    whiteColor: false,
    category: "Frontend",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    name: "Tailwind CSS",
    whiteColor: false,
    category: "Frontend",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    name: "JavaScript",
    whiteColor: false,
    category: "Frontend",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    name: "TypeScript",
    whiteColor: false,
    category: "Frontend",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",
    name: "Vue JS",
    whiteColor: false,
    category: "Frontend",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nuxt/nuxt-original.svg",
    name: "Nuxt JS",
    whiteColor: false,
    category: "Frontend",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    name: "HTML5",
    whiteColor: false,
    category: "Frontend",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    name: "CSS3",
    whiteColor: false,
    category: "Frontend",
  },
  {
    url: "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/bootstrap/bootstrap-original.svg",
    name: "BootStrap",
    whiteColor: false,
    category: "Frontend",
  },

  // Backend
  {
    url: "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/nodejs/nodejs-original.svg",
    name: "Node Js",
    whiteColor: false,
    category: "Backend",
  },
  {
    url: "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/express/express-original.svg",
    name: "Express Js",
    whiteColor: true,
    category: "Backend",
  },
  {
    name: "Fastify",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastify/fastify-original.svg",
    whiteColor: true,
    category: "Backend",
  },
  {
    url: "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/php/php-original.svg",
    name: "PHP",
    whiteColor: false,
    category: "Backend",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachekafka/apachekafka-original.svg",
    name: "Kafka",
    whiteColor: true,
    category: "Backend",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg",
    name: "Socket.io",
    whiteColor: true,
    category: "Backend",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    name: "Python",
    whiteColor: false,
    category: "Backend",
    isHidden: true,
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    name: "Java",
    whiteColor: false,
    category: "Backend",
    isHidden: true,
  },

  // Databases & Caching
  {
    url: "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/mongodb/mongodb-original.svg",
    name: "MongoDB",
    whiteColor: false,
    category: "Databases & Caching",
  },
  {
    url: "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/mysql/mysql-original.svg",
    name: "MySQL",
    whiteColor: false,
    category: "Databases & Caching",
  },
  {
    name: "PostgreSql",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    whiteColor: false,
    category: "Databases & Caching",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
    name: "Redis",
    whiteColor: false,
    category: "Databases & Caching",
  },

  // AI Integration
  {
    name: "OpenAI",
    url: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/openai.svg",
    whiteColor: true,
    category: "AI Integration",
  },
  {
    name: "Gemini",
    url: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/googlegemini.svg",
    whiteColor: true,
    category: "AI Integration",
  },
  {
    name: "OpenRouter",
    url: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/openrouter.svg",
    whiteColor: true,
    category: "AI Integration",
  },

  // Tools
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    name: "Git",
    whiteColor: false,
    category: "Tools",
  },
  {
    url: "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/github/github-original.svg",
    name: "GitHub",
    whiteColor: false,
    category: "Tools",
  },
  {
    name: "Swagger",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swagger/swagger-original.svg",
    whiteColor: false,
    category: "Tools",
  },
];
