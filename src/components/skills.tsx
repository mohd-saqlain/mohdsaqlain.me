import Tag from "./ui/tag";

const skills = [
  {
    title: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "SQL"],
  },
  {
    title: "Front-End",
    skills: [
      "React",
      "Next.js",
      "TanStack Start",
      "TanStack Router",
      "TanStack Query",
      "Tailwind CSS",
      "shadcn/ui",
      "Radix UI",
      "Material-UI",
      "Zustand",
      "Redux Toolkit",
      "React Hook Form",
      "Zod",
    ],
  },
  {
    title: "Mobile",
    skills: [
      "React Native",
      "Expo",
      "Expo Router",
      "NativeWind",
      "Gluestack-UI",
      "Reanimated",
      "EAS Build",
    ],
  },
  {
    title: "Back-End",
    skills: [
      "Node.js",
      "NestJS",
      "Express",
      "FastAPI",
      "REST",
      "Swagger / OpenAPI",
      "better-auth",
      "CASL",
      "Socket.IO",
    ],
  },
  {
    title: "Data",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "Redis",
      "Drizzle ORM",
      "TypeORM",
      "Mongoose",
      "SQLAlchemy",
    ],
  },
  {
    title: "AI",
    skills: [
      "RAG",
      "OpenRouter",
      "OpenAI",
      "Gemini",
      "Ollama",
      "Vercel AI SDK",
      "Tool calling",
    ],
  },
  {
    title: "Automation",
    skills: ["Playwright", "node-cron", "Scheduled pipelines", "Web scraping"],
  },
  {
    title: "Infrastructure",
    skills: [
      "Docker",
      "Docker Compose",
      "AWS EC2",
      "AWS S3",
      "AWS Lambda",
      "SQS",
      "Route 53",
      "Amplify",
      "Serverless Framework",
      "Vercel",
      "CI/CD",
      "GitHub Actions",
    ],
  },
  {
    title: "Tooling",
    skills: ["Git", "pnpm", "Vite", "Biome", "ESLint", "Prettier", "Jest", "Postman"],
  },
  {
    title: "Concepts",
    skills: [
      "Monorepos",
      "Microservices",
      "Serverless",
      "RBAC",
      "MVC",
      "SOLID",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="mt-20 lg:mt-40">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#101820]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Skills
        </h2>
      </div>
      <div className="w-full flex flex-col gap-2">
        {skills.map((skill) => (
          <div key={skill.title} className="flex flex-col gap-2">
            <h2 className="text-lg font-bold">{skill.title}</h2>
            <div className="flex gap-2 flex-wrap">
              {skill.skills.map((item) => (
                <Tag key={item} title={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
