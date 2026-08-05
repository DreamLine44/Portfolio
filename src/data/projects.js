// Static project data. Shaped to match a future REST response
// (GET /api/projects) so swapping to `services/projectService.js`
// later requires no changes to consuming components.

export const featuredProject = {
  id: "homefinder-gm",
  name: "HomeFinder GM",
  tagline: "Property marketplace for The Gambia",
  description:
    "A full-stack property marketplace where users can list, browse, rent, and buy real estate across The Gambia. Built with a JWT-secured Express API, a MongoDB data layer modeling listings, agents, and inquiries, and a React frontend with filterable search and image galleries.",
  overview:
    "HomeFinder GM was built to solve a real gap: there was no dedicated online marketplace for Gambian property listings. The platform lets property owners publish listings with photos and pricing, while buyers and renters can search, filter by location and price, and contact agents directly.",
  features: [
    "Property search with location, price, and category filters",
    "JWT authentication for agents and property owners",
    "Image upload and gallery display per listing",
    "Responsive listing cards with map-ready location data",
    "Protected dashboard routes for managing listings",
  ],
  challenges:
    "Modeling flexible property data (rentals vs. sales, varying amenities) while keeping API responses predictable for the frontend, and handling image uploads efficiently within free-tier hosting limits.",
  solutions:
    "Designed a normalized Mongoose schema with optional fields validated conditionally, added Multer-based upload handling with size limits, and used Vercel + Railway for a zero-cost production deployment split across frontend and backend.",
  technologies: ["React", "Node.js", "Express", "MongoDB", "JWT", "Vercel"],
  image: "/projects/homefinder.svg",
  links: {
    live: null,
    githubFrontend: null,
    githubBackend: null,
  },
  featured: true,
};

export const projects = [
  {
    id: "whatsapp-automation",
    name: "WhatsApp Automation Platform",
    description:
      "Automate customer conversations, manage leads, send bulk messages, and track engagement from a single dashboard.",
    features: [
      "Lead management",
      "Automated messaging",
      "Contact management",
      "Analytics dashboard",
      "REST API",
    ],
    technologies: ["Node.js", "Express", "MongoDB"],
    icon: "whatsapp",
    links: { live: null, github: null },
  },
  {
    id: "lead-management-api",
    name: "Lead Management API",
    description:
      "A secure REST API for managing sales leads, with authentication, full CRUD operations, and role-based access.",
    features: [
      "JWT authentication",
      "CRUD operations",
      "Role-based access",
      "Input validation",
    ],
    technologies: ["Express.js", "MongoDB", "JWT"],
    icon: "api",
    links: { live: null, github: null },
  },
  {
    id: "taskflow",
    name: "TaskFlow",
    description:
      "A project management tool for organizing tasks, teams, and tracking productivity across projects.",
    features: [
      "Kanban-style boards",
      "Team workspaces",
      "Progress tracking",
      "Responsive UI",
    ],
    technologies: ["React", "Node.js", "MongoDB"],
    icon: "tasks",
    links: { live: null, github: null },
  },
];
