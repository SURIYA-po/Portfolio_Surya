// src/data/projectsData.js (or directly in Projects.jsx)

const projectsData = [
  {
    _id: '654321098765432109876543', // Example _id from MongoDB
    title: "PHP Updating & Quality Checking of a huuuge amount of WordPress sites",
    description: "Embark on a year-long journey of upgrading PHP to 8.2 and WordPress to the latest version across 7000+ sites, ensuring compatibility and enhancing security.",
    techStack: ["cPanel", "MySQL", "PHP", "SalesForce", "WHM", "WordPress"],
    repoUrl: "https://github.com/your-repo-php", // Optional, if no liveUrl
    liveUrl: "https://live-php-project.com",
    image: "https://via.placehold.co/150/36394e/FFFFFF?text=DOCTORUM", // Placeholder image URL
    isPublic: true,
    owner: "654321098765432109876542", // Example owner ID
    createdAt: "2023-01-15T10:00:00.000Z",
    updatedAt: "2023-01-15T10:00:00.000Z",
  },
  {
    _id: '654321098765432109876544',
    title: "UI/UX Design for Integrate Telecom Solutions",
    description: "Discover the transformative UI/UX design journey for Integrate Telecom Solutions, leveraging Figma to craft intuitive and innovative interfaces for VOIP, Business Mobile, and IoT services.",
    techStack: ["CSS", "Figma", "UI/UX", "Telecom"],
    repoUrl: "https://github.com/your-repo-telecom",
    liveUrl: "https://live-telecom-project.com",
    image: "https://via.placeholder.com/150/1e403d/FFFFFF?text=INTEGRATE", // Placeholder image URL
    isPublic: true,
    owner: "654321098765432109876542",
    createdAt: "2023-03-20T11:00:00.000Z",
    updatedAt: "2023-03-20T11:00:00.000Z",
  },
  // Add more project objects here if needed
];

// List of all skills for the "Skills" section on the right
const allSkills = [
    "WordPress", "CSS", "Figma", "ACF", "JavaScript",
    "HTML", "Gulp", "npm", "SASS", "Three.js", "cPanel", 
    "MySQL", "PHP", "SalesForce", "WHM"
];

// You might fetch these from your backend or define them directly
export { projectsData, allSkills };