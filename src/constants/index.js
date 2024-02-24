import {
  ncs_icon,
  abillion_icon,
  comfortdelgro_icon,
  airliquide_icon,
  backend,
  frontend,
  ux,
  prototype,
} from "../assets/index";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "NCS",
    icon: ncs_icon,
    iconBg: "#333333",
    date: "Mar 2022 - Present",
  },
  {
    title: "Software Engineer Intern",
    company_name: "abillion",
    icon: abillion_icon,
    iconBg: "#333333",
    date: "May 2021 - Aug 2021",
    description: [
      "Revamped the mobile application and website with React Native and ReactJS",
      "Collaborate cross-functionally with design, engineering, data , and product teams to identify and deliver new product solutions and enhance existing products",
      "Participate in sprint planning for every iteration",
      " Troubleshooting and debugging",
    ],
  },
  {
    title: "Project Application Developer",
    company_name: "ComfortDelgro Engineer",
    icon: comfortdelgro_icon,
    iconBg: "#333333",
    date: "Nov 2020 - Apr 2021",
    description: [
      "Efficiently gathering feedback and requirements from the users, communicating needed changes to development team",
      "Managed product ideation, research, planning, prototyping, sourcing, and costing",
      "Liaised with internal and external stakeholders, updated weekly project progress with the clients via presentation",
    ],
  },
  {
    title: "Digital Transformation Intern (UI/UX)",
    company_name: "Air Liquide Singapore",
    icon: airliquide_icon,
    iconBg: "#333333",
    date: "Dec 2019 - Aug 2020",
    description: [
      "Built modern applications with JavaScript, HTML, CSS",
      "Continuously integrated and deployed developed softwares.",
      "Built UI/UX models using Figma and Material Design concepts.",
      "Conduct user research and Improve user experience with Chatbot usage",
      "Built on Pivotal Cloud Foundry Platform (Github) for continuous integration",
    ],
  },
];
const services = [
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI/UX Design",
    icon: ux,
  },
  {
    title: "Software Prototyping",
    icon: prototype,
  },
];
export { experiences, services };
