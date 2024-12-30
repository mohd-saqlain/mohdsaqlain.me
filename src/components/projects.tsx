import Project from "./project";
const projects = [
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
  {
    title: "Survey App",
    description:
      "A social media app built using MERN stack. The app is built following RESTful API design. The app has chat, group chat, notifications, and other features. The app is built following MVC architecture.",
    imageUrl: "/assets/social-media.png",
    url: "https://github.com/androcoders21/survey-app",
    tags: [
      "React-Native",
      "Expo",
      "RTK-Query",
      "Laravel",
      "MySQL",
      "Gluestack-UI",
      "TailwindCSS",
    ],
  },
  {
    title: "R2R-Care",
    description:
      "A simple e-commerce app built using React. The app use Fake store API.",
    imageUrl: "/assets/r2rcare.png",
    url: "https://github.com/r2rcare/r2r-ui",
    tags: ["React", "Redux", "Material-UI", "AWS-Amplify","S3"],
  },
  {
    title: "Azown-Real Estate",
    description:
      "A simple e-commerce app built using React. The app use Fake store API.",
    imageUrl: "/assets/dashboard.png",
    url: "https://github.com/androcoders21/azown",
    tags: ["React", "Express", "MongoDB","Node.js","Context API"],
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
