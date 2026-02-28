import { Network, Shield, Workflow } from "lucide-react";

export const skillSections = [
  {
    title: "Frontend",
    glowLight: "bg-blue-500/30",
    borderHover: "group-hover:border-blue-500/50",
    shadowHover:
      "group-hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.4)]",
    skills: [
      { name: "React", description: "UI Library", image: "https://cdn.simpleicons.org/react/61DAFB" },
      { name: "Next.js", description: "React Framework", image: "https://cdn.simpleicons.org/nextdotjs/white" },
      { name: "Tailwind CSS", description: "Utility-first CSS", image: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
      { name: "TypeScript", description: "Typed JavaScript", image: "https://cdn.simpleicons.org/typescript/3178C6" },
      { name: "shadcn/ui", description: "UI Components", image: "https://cdn.simpleicons.org/shadcnui/white" },
    ],
  },
  {
    title: "Backend",
    glowLight: "bg-emerald-500/30",
    borderHover: "group-hover:border-emerald-500/50",
    shadowHover:
      "group-hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.4)]",
    skills: [
      { name: "Node.js", description: "JavaScript Runtime", image: "https://cdn.simpleicons.org/nodedotjs/5FA04E" },
      { name: "Express.js", description: "Web Framework", image: "https://cdn.simpleicons.org/express/white" },
      { name: "REST APIs", description: "Architecture", icon: Network, color: "text-emerald-400" },
      { name: "JWT", description: "Authentication", image: "https://cdn.simpleicons.org/jsonwebtokens/white" },
      { name: "bcrypt", description: "Password Hashing", icon: Shield, color: "text-neutral-300" },
    ],
  },
  {
    title: "Database",
    glowLight: "bg-indigo-500/30",
    borderHover: "group-hover:border-indigo-500/50",
    shadowHover:
      "group-hover:shadow-[0_0_30px_-5px_rgba(99,102,241,0.4)]",
    skills: [
      { name: "MongoDB", description: "NoSQL Database", image: "https://cdn.simpleicons.org/mongodb/47A248" },
      { name: "PostgreSQL", description: "Relational DB", image: "https://cdn.simpleicons.org/postgresql/4169E1" },
      { name: "MySQL", description: "Relational DB", image: "https://cdn.simpleicons.org/mysql/4479A1" },
    ],
  },
  {
    title: "Programming",
    glowLight: "bg-purple-500/30",
    borderHover: "group-hover:border-purple-500/50",
    shadowHover:
      "group-hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.4)]",
    skills: [
      { name: "C++", description: "Systems Programming", image: "https://cdn.simpleicons.org/cplusplus/00599C" },
      { name: "Python", description: "General Purpose", image: "https://cdn.simpleicons.org/python/3776AB" },
      { name: "JavaScript", description: "Web Development", image: "https://cdn.simpleicons.org/javascript/F7DF1E" },
    ],
  },
  {
    title: "Version Control & Deployment",
    glowLight: "bg-cyan-500/30",
    borderHover: "group-hover:border-cyan-500/50",
    shadowHover:
      "group-hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.4)]",
    skills: [
      { name: "Git", description: "Version Control", image: "https://cdn.simpleicons.org/git/F05032" },
      { name: "GitHub", description: "Code Hosting", image: "https://cdn.simpleicons.org/github/white" },
      { name: "Vercel", description: "Frontend Cloud", image: "https://cdn.simpleicons.org/vercel/white" },
      { name: "Netlify", description: "Web Hosting", image: "https://cdn.simpleicons.org/netlify/00C7B7" },
      { name: "Render", description: "Cloud Hosting", image: "https://cdn.simpleicons.org/render/46E3B7" },
      { name: "Postman", description: "API Testing", image: "https://cdn.simpleicons.org/postman/FF6C37" },
    ],
  },
];

export const techStack = [
  {
    name: "React",
    category: "Frontend",
    color: "from-cyan-400 to-blue-500",
    logo: "https://cdn.simpleicons.org/react/61DAFB",
  },
  {
    name: "Next.js",
    category: "Frontend",
    color: "from-white to-neutral-400",
    logo: "https://cdn.simpleicons.org/nextdotjs/white",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    color: "from-teal-400 to-cyan-500",
    logo: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
  },
  {
    name: "TypeScript",
    category: "Frontend",
    color: "from-blue-400 to-blue-600",
    logo: "https://cdn.simpleicons.org/typescript/3178C6",
  },
  {
    name: "Node.js",
    category: "Backend",
    color: "from-green-400 to-emerald-600",
    logo: "https://cdn.simpleicons.org/nodedotjs/5FA04E",
  },
  {
    name: "Express.js",
    category: "Backend",
    color: "from-neutral-300 to-neutral-500",
    logo: "https://cdn.simpleicons.org/express/white",
  },
  {
    name: "MongoDB",
    category: "Backend",
    color: "from-emerald-400 to-green-600",
    logo: "https://cdn.simpleicons.org/mongodb/47A248",
  },
  {
    name: "PostgreSQL",
    category: "Backend",
    color: "from-blue-300 to-blue-500",
    logo: "https://cdn.simpleicons.org/postgresql/4169E1",
  },
];

export const projects = [
  {
    id: 1,
    title: "FinSight",
    color: "from-emerald-500/20 to-teal-500/20 border-emerald-500/30",
    glow: "bg-emerald-500/20",

    description: [
      {
        id: 1,
        title: "Transaction Tracking",
        description:
          "Track income and expenses across accounts with a clear transaction history.",
      },
      {
        id: 2,
        title: "Budget Management",
        description:
          "Create and manage monthly budgets to control and plan spending.",
      },
      {
        id: 3,
        title: "AI Spending Insights",
        description:
          "AI-generated insights highlight spending patterns and unusual activity.",
      },
      {
        id: 4,
        title: "Budget Alerts",
        description:
          "Get alerts when spending approaches or exceeds your budget limits.",
      },
      {
        id: 5,
        title: "Monthly AI Reports",
        description:
          "Monthly financial reports with AI summaries for quick understanding.",
      },
    ],

    image: "/dashBoard.png",

    tech: [
      { name: "Next.js", logo: "https://cdn.simpleicons.org/nextdotjs/white" },
      { name: "MongoDB", logo: "https://cdn.simpleicons.org/mongodb/47A248" },
      { name: "Tailwind", logo: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
      { name: "Inngest", logo: "https://cdn.simpleicons.org/inngest/6366F1" },
      { name: "Shadcn", logo: "https://cdn.simpleicons.org/shadcnui/white" },
    ],

    liveUrl: "https://finsight-dashboard-three.vercel.app/",
    githubUrl:
      "https://github.com/Himanshuazad03/FinSight-Personal-Financial-Dashboard",
  },

  {
    id: 2,
    title: "SyncUp",
    color: "from-blue-500/20 to-indigo-500/20 border-blue-500/30",
    glow: "bg-blue-500/20",

    description: [
      {
        id: 1,
        title: "Real-time Messaging",
        description:
          "Send and receive messages instantly using WebSocket-based real-time communication.",
      },
      {
        id: 2,
        title: "Private & Group Chats",
        description:
          "Support for one-to-one conversations as well as group chats with multiple participants.",
      },
      {
        id: 3,
        title: "Media Sharing",
        description:
          "Share images and videos securely with optimized uploads and previews.",
      },
      {
        id: 4,
        title: "Typing Indicators",
        description:
          "Live typing indicators improve conversation flow and user experience.",
      },
      {
        id: 5,
        title: "Read & Delivery Status",
        description:
          "Messages show delivery and read status for better communication clarity.",
      },
    ],

    image: "/syncup.png",

    tech: [
      { name: "React", logo: "https://cdn.simpleicons.org/react/61DAFB" },
      { name: "Node.js", logo: "https://cdn.simpleicons.org/nodedotjs/5FA04E" },
      { name: "Express", logo: "https://cdn.simpleicons.org/express/white" },
      { name: "MongoDB", logo: "https://cdn.simpleicons.org/mongodb/47A248" },
      { name: "Socket.IO", logo: "https://cdn.simpleicons.org/socketdotio/white" },
    ],

    liveUrl: "https://syncup-chat-app.vercel.app/",
    githubUrl: "https://github.com/Himanshuazad03/Chat-app",
  },

  {
    id: 3,
    title: "DevBlogs",
    color: "from-orange-500/20 to-red-500/20 border-orange-500/30",
    glow: "bg-orange-500/20",

    description: [
      {
        id: 1,
        title: "Rich Content Authoring",
        description:
          "Authors can create and edit blog posts with structured content, cover images, tags, and SEO-friendly slugs.",
      },
      {
        id: 2,
        title: "Role-Based Authentication",
        description:
          "Secure authentication with role-based access (Admin, Author) to control post creation, editing, and publishing.",
      },
      {
        id: 3,
        title: "Editorial Workflow",
        description:
          "Draft, review, schedule, and publish posts through a controlled moderation workflow.",
      },
      {
        id: 4,
        title: "Post & Tag Management",
        description:
          "Manage posts with tags, status tracking, ownership validation, and permission checks.",
      },
      {
        id: 5,
        title: "Responsive Admin Dashboard",
        description:
          "Mobile-friendly interface with sidebar navigation and admin review panels for efficient content management.",
      },
    ],

    image: "/Devbloging.png",

    tech: [
      { name: "Next.js", logo: "https://cdn.simpleicons.org/nextdotjs/white" },
      { name: "PostgreSQL", logo: "https://cdn.simpleicons.org/postgresql/4169E1" },
      { name: "Tailwind", logo: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
      { name: "Shadcn", logo: "https://cdn.simpleicons.org/shadcnui/white" },
    ],

    liveUrl: "https://dev-blogs-virid.vercel.app/",
    githubUrl: "https://github.com/Himanshuazad03/DevBlogs",
  },

  {
    id: 4,
    title: "Placement Predictor",
    color: "from-purple-500/20 to-fuchsia-500/20 border-purple-500/30",
    glow: "bg-purple-500/20",

    description: [
      {
        id: 1,
        title: "Placement Outcome Prediction",
        description:
          "Predicts placement chances based on academic performance and input metrics.",
      },
      {
        id: 2,
        title: "Machine Learning Model",
        description:
          "Uses a trained machine learning model to analyze patterns in historical data.",
      },
      {
        id: 3,
        title: "User Data Input",
        description:
          "Simple input form for entering academic and performance-related details.",
      },
      {
        id: 4,
        title: "Model-Based Insights",
        description:
          "Displays prediction results with probability-based outcomes.",
      },
      {
        id: 5,
        title: "Web-Based Interface",
        description:
          "Accessible web interface for interacting with the model and viewing results.",
      },
    ],

    image: "/placement-predictor.png",

    tech: [
      { name: "Python", logo: "https://cdn.simpleicons.org/python/3776AB" },
      { name: "Pandas", logo: "https://cdn.simpleicons.org/pandas/150458" },
      { name: "NumPy", logo: "https://cdn.simpleicons.org/numpy/013243" },
      { name: "EJS", logo: "https://cdn.simpleicons.org/ejs/white" },
      { name: "Node.js", logo: "https://cdn.simpleicons.org/nodedotjs/5FA04E" },
      { name: "Express.js", logo: "https://cdn.simpleicons.org/express/white" },
      { name: "MongoDB", logo: "https://cdn.simpleicons.org/mongodb/47A248" },
    ],

    githubUrl:
      "https://github.com/Himanshuazad03/Placement-Predictor",
  },
];