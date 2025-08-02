
import {
  highlightFirstVideo,
  highlightFourthVideo,
  highlightSecondVideo,
  highlightThirdVideo,
} from "../utils";

export const navLists = ["Home", "Tech", "Physical", "Support"];

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#tech", label: "Tech" },
  { href: "#physical", label: "Physical" },
  { href: "#support", label: "Support" },
];
export const hightlightsSlides = [
  {
    id: 1,
    textLists: [
      "BlurOS",
      "The Future of Operating Systems",
      "Kernel level AI control",
    ],
    video: highlightFirstVideo,
    videoDuration: 4,
  },
  {
    id: 2,
    textLists: ["BrAIn AI", "Do it all", "With a single word"],
    video: highlightSecondVideo,
    videoDuration: 5,
  },
  {
    id: 3,
    textLists: [
      "Allz Well",
      "Know Your Brain",
      "Know it First",
    ],
    video: highlightThirdVideo,
    videoDuration: 2,
  },
  {
    id: 4,
    textLists: ["HomeFax", "Its your home", "Its your right"],
    video: highlightFourthVideo,
    videoDuration: 3.63,
  },
];


export const footerLinks = [
  "Privacy Policy",
  "Terms of Use",
  "Sales Policy",
  "Legal",
  "Site Map",
];


export const researchPageContent = ['Arenda Research', 'At Arenda, we believe in pushing the boundaries of science and technology. Our students work on novel, high-impact STEM projects that shape the future.', 'From AI to advanced hardware, our mission is to guide students into becoming world-class innovators and builders—starting with first principles and aiming for mastery.'];





const projects = [
  {
    imageURL: "/assets/images/ArendaLogo.svg",
    title: "React Project",
    description: "A frontend app built with React.",
  },
  {
    imageURL: "/assets/images/react.svg",
    title: "Vue Project",
    description: "An application using Vue.js.",
  },
  {
    imageURL: "/assets/images/ArendaLogo.svg",
    title: "Angular Project",
    description: "An Angular web app.",
  },
  {
    imageURL: "/assets/images/react.svg",
    title: "Svelte Project",
    description: "Fast and lightweight Svelte app.",
  },
];

export  {projects} ;