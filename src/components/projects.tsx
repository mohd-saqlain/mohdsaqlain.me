import Project from "./project";
const projects = [
  {
    title: "MIS Automation Platform",
    description:
      "A scheduled data pipeline that pulls operational reports out of dealership systems that expose no API. Headless Playwright sessions log in, navigate and extract across sales, service, bodyshop, spare parts and CRM modules; the results are normalised through SQLAlchemy into PostgreSQL and served over a FastAPI layer. Built in Python with stealth handling for brittle legacy portals and a scheduler that keeps every module in sync without manual intervention.",
    tags: [
      "Python",
      "FastAPI",
      "Playwright",
      "SQLAlchemy",
      "PostgreSQL",
      "Automation",
    ],
  },
  {
    title: "Digital Gold Investment App",
    description:
      "A mobile-first savings product where users set goals and invest in digital gold. I built the NestJS API \u2014 Razorpay payments, scheduled jobs, rate limiting, S3 presigned uploads, Firebase Admin and Expo push notifications \u2014 alongside the React Native client in Expo Router, using Gluestack UI with NativeWind, Zustand for state, Reanimated for motion and native Razorpay checkout.",
    tags: [
      "NestJS",
      "MongoDB",
      "React Native",
      "Expo",
      "Razorpay",
      "Firebase",
      "Zustand",
      "NativeWind",
    ],
  },
  {
    title: "Claim Reconciliation System",
    description:
      "A reconciliation tool for matching warranty claims against settlement data at scale. Full-stack TanStack Start on the front with TanStack Router, Query and Table; a NestJS API behind it on TypeORM and PostgreSQL with Redis caching. Authentication through better-auth, fine-grained permissions with CASL, spreadsheet ingestion via xlsx, and an LLM layer for explaining mismatched records.",
    tags: [
      "TanStack Start",
      "NestJS",
      "TypeORM",
      "PostgreSQL",
      "Redis",
      "better-auth",
      "CASL",
      "AI SDK",
    ],
  },
  {
    title: "RAG-Powered Chatbot",
    description:
      "A retrieval-augmented assistant that answers questions over a company\u2019s own documents. Built as a NestJS application running on AWS Lambda through serverless-express, with document ingestion to S3, retrieval over MongoDB, and an agent loop with tool calling via the OpenRouter SDK \u2014 so the same codebase runs locally and deploys serverless.",
    tags: [
      "NestJS",
      "RAG",
      "OpenRouter",
      "AWS Lambda",
      "S3",
      "MongoDB",
      "Serverless",
    ],
  },
  {
    title: "HikeMove",
    description:
      "A logistics platform built API-first. I own the NestJS backend end to end: Mongoose data modelling, JWT auth, event-driven side effects, scheduled jobs, transactional email, S3 presigned uploads and a documented Swagger surface. The operations dashboard is Next.js with shadcn/ui, Recharts for reporting and React Flow for visualising movement between stages.",
    tags: [
      "NestJS",
      "Mongoose",
      "Next.js",
      "shadcn/ui",
      "Recharts",
      "React Flow",
      "AWS S3",
    ],
  },
  {
    title: "Browser Automation Suite",
    description:
      "A Dockerised Express and TypeScript service that drives Playwright on a cron schedule to collect data from third-party portals into PostgreSQL, documented with Swagger and paired with a Next.js dashboard for monitoring runs and reviewing results. Designed to fail loudly and recover \u2014 retries, structured run logs and a UI that shows exactly which job broke and why.",
    tags: [
      "TypeScript",
      "Express",
      "Playwright",
      "PostgreSQL",
      "Docker",
      "node-cron",
      "Next.js",
    ],
  },
  {
    title: "WhatsApp Business Bot",
    description:
      "A NestJS service that connects to WhatsApp through Baileys and answers customer messages with an OpenAI-backed conversation layer. Handles QR-based session pairing, persists conversation state in MongoDB, runs scheduled follow-ups, and ships as a Docker image with Compose for deployment.",
    tags: ["NestJS", "Baileys", "OpenAI", "MongoDB", "Docker"],
  },
  {
    title: "DPS-Analytical Laboratory",
    description:
      "A web application designed for a laboratory to streamline operations. The application allows the creation of clients, departments and other relevant details. It also generates comprehensive reports, improving efficiency and organization.",
    imageUrl: "/assets/dps-lab.png",
    url: "https://github.com/androcoders21/dps-lab-frontend",
    tags: [
      "React",
      "Typescript",
      "Material-UI",
      "Nest.js",
      "MongoDB",
      "JWT",
      "S3",
      "EC2",
    ],
  },
  {
    title: "PCMC-Divyang Bhavan",
    description:
      "A government web application developed to manage municipal tasks like event creation (e.g., competitions for specially-abled individuals), tender management, and blog publishing. It supports user, vendor, and admin logins for role-based functionalities such as competition participation, tender management, and content administration.",
    imageUrl: "/assets/pcmc.png",
    url: "https://github.com/androcoders21/pcmc-divyang-backend",
    tags: [
      "React",
      "Material-UI",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "S3",
      "EC2",
      "i18next",
    ],
  },
];
export default function Projects() {
  return (
    <section id="projects" className="mt-20 lg:mt-40">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#101820]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Projects
        </h2>
      </div>
      <div className="flex flex-col gap-y-10">
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
}
