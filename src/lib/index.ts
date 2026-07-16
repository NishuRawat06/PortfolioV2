import { MovieX,thethaiproject,ArticleX } from "../../public/assets";
export const PROJECT_DATA = [
  {
    projectName: "MovieX",
    year: "2026",
    title: "Online movie streaming platform",
    results: [
       {
        title:
          "Built a Netflix-like movie & TV streaming platform using TMDB API.",
      },
      {
        title:
          "Implemented real-time data fetching, trending lists, and personalized recommendations.",
      },
      {
        title: "Optimized state management with Redux RTK and TanStack Query.",
      },
    ],
    techStack: "Next Js, Tailwind CSS, Redux RTK, TanStack Query, Typescript",
    link: "https://movie-x-sigma.vercel.app/",
    image: MovieX,
    disable: false,
  },
  {
    projectName: "The Thai Tourism",
    year: "2026",
    title: "Thailand Travel Booking Web Application",
    results: [
      {
        title:
          "Developed a travel booking web application for tourism services.",
      },
      {
        title: "Implemented search, listings, and booking-ready UI flows.",
      },
    ],
    techStack:
      "Next Js, Tailwind CSS, Redux RTK, TanStack Query, shadcn/ui, Stripe, Typescript",
    link: "",
    image: thethaiproject,
    disable: true,
  },
  {
    projectName: "ArticleX",
    year: "2026",
    title: "Full-Stack Blogging Platform",
    results: [
       {
      title:
        "Developed a full-stack blogging platform where users can create, edit, delete, and explore articles through a modern and responsive interface.",
    },
    {
      title:
        "Built a scalable REST API with Express.js and MongoDB.",
    },
    ],
    techStack:
      "Next Js, Tailwind CSS, Redux RTK, TanStack Query, MongoDB, Typescript",
    link: "https://article-x-live.vercel.app/",
    image: ArticleX,
    disable: false,
  },
 
];
