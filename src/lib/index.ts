import { proj1, proj2, proj4, thethaiproject } from "../../public/assets";
export const PROJECT_DATA = [
  {
    projectName: "Halfway",
    year: "2025",
    title: "Fair Meeting Place Finder Web Application",
    results: [
      {
        title:
          "Built a web app that helps users find fair meeting places between multiple locations.",
      },
      {
        title:
          "Implemented map-based search, vibe filters, and distance balancing logic for smarter meetup decisions.",
      },
      {
        title:
          "Designed a clean, mobile-first UI focused on fast decision-making and real-world usability.",
      },
    ],
    techStack: "Next.js, TypeScript, Tailwind CSS v4, OpenStreetMap, shadcn/ui",
    link: "https://halfwayy.vercel.app/",
    image: proj2,
    disable: false,
  },
  {
    projectName: "The Thai Tourism",
    year: "2024 - 2025",
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
    projectName: "Quick Watch",
    year: "2024 - 2025",
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
    techStack:
      "Next Js, Tailwind CSS, Redux RTK, TanStack Query, MongoDB, Typescript",
    link: "https://quickwatch.vercel.app/home",
    image: proj1,
    disable: false,
  },
  {
    projectName: "Fitclub Gym CRM",
    year: "2024 - 2025",
    title: "CRM Dashboard",
    results: [
      {
        title:
          "Developed a full-featured CRM for gym operations and client management.",
      },
      {
        title:
          "Implemented attendance tracking, invoicing, and role-based access.",
      },
      {
        title: "Improved workflow efficiency for staff and trainers.",
      },
    ],
    techStack: "React Js, Tailwind CSS, Node Js, Express Js, PostGresSQL, JWT",
    link: "",
    image: proj4,
    disable: true,
  },
];
