import Meteo from "../../assets/weather.jpeg";
import Memory from "../../assets/memory.jpeg";
import homeTasks from "../../assets/home-tasks.jpg";
import Wordle from "../../assets/wordle.jpg";
import discord from "../../assets/discord.jpg";
import password from "../../assets/password.jpg";
import flags from "../../assets/flags.jpg";
import shop from "../../assets/oxygen-shop.png";
import myPics from "../../assets/mypics.jpg";
import portfolio from "../../assets/portfolio.jpg";
import cocktail from "../../assets/cocktail-banner.png";
import room1 from "../../assets/room1.jpg";
import hotel from "../../assets/hotel.jpg";
import database from "../../assets/database.jpg";
import orders from "../../assets/orders.jpeg";

export const projectsData = [
  {
    id: 15,
    image: orders,
    title: "Order Management System",
    description:
      "Miniature version of an OMS: view and create orders or edit the state of an existing one.",
    category: "own projects",
    website: "",
    github: "https://github.com/simoncriado/Order-Management-System",
  },
  {
    id: 14,
    image: database,
    title: "Hotel Miranda Back End",
    description:
      "WORK IN PROGRESS. Hotel database. Will include routes, authentication, database, etc.",
    category: "own projects",
    website: "",
    github: "https://github.com/simoncriado/Hotel-Miranda-Backend",
  },
  {
    id: 12,
    image: room1,
    title: "Hotel Miranda Admin Dashboard",
    description:
      "WORK IN PROGRESS. Manage rooms, bookings, etc. Will be connected to the Hotel Miranda Backend project.",
    category: "own projects",
    website: "https://simoncriado.github.io/Hotel-Miranda-Dashboard/",
    github: "https://github.com/simoncriado/Hotel-Miranda-Dashboard",
  },
  {
    id: 9,
    image: myPics,
    title: "myPics",
    description: "Find new pictures and create your own library of favourites.",
    category: "own projects",
    website: "https://simoncriado.github.io/myPics/",
    github: "https://github.com/simoncriado/myPics",
  },
  {
    id: 13,
    image: hotel,
    title: "Hotel Miranda Landing Page",
    description:
      "Hotel lading page. Google Maps API used in the contact section to display hotel locations.",
    category: "own projects",
    website: "https://simoncriado.github.io/Hotel-Miranda/",
    github: "https://github.com/simoncriado/Hotel-Miranda",
  },
  {
    id: 8,
    image: shop,
    title: "OXYGEN Shop",
    description: "Landing page for a fictional shop.",
    category: "own projects",
    website: "https://simoncriado.github.io/OXYGENShop/",
    github: "https://github.com/simoncriado/OXYGENShop",
  },
  {
    id: 10,
    image: portfolio,
    title: "My Old Portfolio",
    description:
      "Old version of my portfolio. Used this project as a chance to learn GatsbyJS and to use the Netlify CMS.",
    category: "own projects",
    website: "https://simonc.netlify.app",
    github: "https://github.com/simoncriado/SC-portfolio-gatsby",
  },
  {
    id: 1,
    image: Meteo,
    title: "Meteo Cat",
    description:
      "Three days weather forecast for the searched town in Catalunya.",
    category: "own projects",
    website: "https://meteo-catalunya.netlify.app/",
    github: "https://github.com/simoncriado/el-tiempo",
  },
  {
    id: 2,
    image: Memory,
    title: "Magin Memory Game",
    description: "Classic memory card game. Find all matching cards!",
    category: "courses",
    website: "https://magic-memory-cardgame.netlify.app",
    github: "https://github.com/simoncriado/magic-memory",
  },
  {
    id: 3,
    image: homeTasks,
    title: "Home Tasks Manager",
    description:
      "Create home tasks, assign them to other users, chat with other users and mark the tasks as completed when done.",
    category: "courses",
    website: "https://the-dojo-site.netlify.app",
    github: "https://github.com/simoncriado/TheDojoSite",
  },
  {
    id: 4,
    image: Wordle,
    title: "Wordle Game",
    description:
      "Famous Wordle game (Desktop version). Make up to 6 guesses to find the hidden word.",
    category: "courses",
    website: "https://wordle-react-project.netlify.app",
    github: "https://github.com/simoncriado/Wordle",
  },
  {
    id: 5,
    image: discord,
    title: "Simply Chat",
    description:
      "Simple Discord-like chat. Login, create channels and start chatting.",
    category: "courses",
    website: "https://simply-chat.netlify.app",
    github: "https://github.com/simoncriado/react-chat",
  },
  {
    id: 6,
    image: password,
    title: "Password Generator",
    description:
      "Select the password´s length and what characters it should include. Then click generate password.",
    category: "own projects",
    website: "https://simoncriado.github.io/password-generator/",
    github: "https://github.com/simoncriado/password-generator",
  },
  {
    id: 7,
    image: flags,
    title: "Countries Library",
    description: "Library of countries with search and filter functionality.",
    category: "own projects",
    website: "https://countries-library.netlify.app/",
    github: "https://github.com/simoncriado/countries-library",
  },
  {
    id: 11,
    image: cocktail,
    title: "The Cocktail Website",
    description:
      "Cocktail recipes: how to prepare and ingredients. Chat section to chat with other cocktail lovers.",
    category: "own projects",
    website: "https://the-cocktail-website.netlify.app",
    github: "https://github.com/simoncriado/The-Cocktail-Website",
  },
];

// projects
export const projectsNav = [
  {
    name: "all",
  },
  {
    name: "Own Projects",
  },
  {
    name: "Courses",
  },
];
