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
      "A hybrid property survey application built using React Native's Expo framework. The app includes location tracking, camera, and file access permissions for seamless functionality. It features an intuitive UI created with Gluestack UI and Tailwind CSS, with Redux Toolkit for state management and caching, and RTK Query for efficient asynchronous API calls.",
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
      "Developed a web application by translating Figma designs into functional code. Integrated Redux Toolkit for global state management and implemented Role-Based Access Control (RBAC). Established Private and Public routes using React Router and configured AWS Amplify to store user-uploaded images in an S3 bucket. Implemented three distinct login methods by managing component views and used Material-UI (MUI) to design responsive, visually appealing interfaces.",
    imageUrl: "/assets/r2rcare.png",
    url: "https://github.com/r2rcare/r2r-ui",
    tags: ["React", "Redux", "Material-UI", "AWS-Amplify","S3"],
  },
  {
    title: "Azown-Real Estate",
    description:
      "Developed a web application with Context API for seamless data sharing across components. Built multi-step forms to handle numerous fields, using Formik and Yup for efficient data management and validation. Implemented optimized JavaScript logic for frontend search, sorting, and filtering. Styled the application using Bootstrap combined with custom CSS for an enhanced visual appeal.",
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
