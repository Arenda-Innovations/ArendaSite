
import {
  highlightFirstVideo,
  highlightFourthVideo,
  highlightSecondVideo,
  highlightThirdVideo,
} from "../utils";

export const navLists = ["Home", "A.I.", "Engineering","Social Impact", "Founders", "Contact"];

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#tech", label: "Tech" },
  { href: "#physical", label: "Physical" },
  { href: "#contact", label: "Contact" },
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

export const projects = [
  {
    id: 1,
    title: "aiOS/surfOS",
    description: "A new operating system that is designed to be a more efficient and implement AI from its core.",
    imageURL: "https://picsum.photos/400/300?random=1",
    author: "Arjun Paradkar",
    includesAI: true,
    includesEngineering: false,
    includesSI: false
  },
  {
    id: 2,
    title: "BrAIn",
    description: "A novel AI architecture that is more efficient and cheaper than the current state of the art.",
    imageURL: "https://picsum.photos/400/300?random=2",
    author: "Naman S. Gugliman",
    includesAI: true,
    includesEngineering: true,
    includesSI: false
  },
  {
    id: 3,
    title: "Allergy App",
    description: "A mobile app that utilizes AI to detect allergies through images and provide personalized recommendations for food and other products.",
    imageURL: "https://picsum.photos/400/300?random=3",
    author: "Satya S. Gugliman",
    includesAI: true,
    includesEngineering: false,
    includesSI: true
  },
  {
    id: 4,
    title: "AI-Powered RC Plane",
    description: "An RC plane that is powered by AI to fly autonomously and avoid obstacles.",
    imageURL: "https://picsum.photos/400/300?random=4",
    author: "Aaroosh Davalbhakta",
    includesAI: true,
    includesEngineering: true,
    includesSI: false
  },
  {
    id: 5,
    title: "Distributed Systems Architecture",
    description: "Scalable distributed systems design for handling millions of concurrent users with high availability and fault tolerance.",
    imageURL: "https://picsum.photos/400/300?random=5",
    author: "Arham Shah",
    includesAI: false,
    includesEngineering: true,
    includesSI: false
  },
  {
    id: 6,
    title: "IoT Platform Development",
    description: "Comprehensive IoT platform for connecting and managing smart devices with real-time data processing and analytics.",
    imageURL: "https://picsum.photos/400/300?random=6",
    author: "Nischal Keshav",
    includesAI: true,
    includesEngineering: true,
    includesSI: false
  },
  {
    id: 7,
    title: "Blockchain Infrastructure",
    description: "Enterprise-grade blockchain infrastructure for secure, transparent, and scalable decentralized applications.",
    imageURL: "https://picsum.photos/400/300?random=7",
    author: "Arjun Paradkar",
    includesAI: false,
    includesEngineering: true,
    includesSI: false
  },
  {
    id: 8,
    title: "Cloud Computing Solutions",
    description: "Advanced cloud computing solutions with auto-scaling, load balancing, and cost optimization for modern applications.",
    imageURL: "https://picsum.photos/400/300?random=8",
    author: "Arham Shah",
    includesAI: false,
    includesEngineering: true,
    includesSI: false
  },
  {
    id: 9,
    title: "Educational Technology Platform",
    description: "Innovative educational technology platform designed to bridge the digital divide and provide quality education to underserved communities.",
    imageURL: "https://picsum.photos/400/300?random=9",
    author: "Naman S. Gugliman",
    includesAI: true,
    includesEngineering: true,
    includesSI: true
  },
  {
    id: 10,
    title: "Healthcare Access System",
    description: "Digital healthcare access system that connects remote communities with medical professionals and healthcare resources.",
    imageURL: "https://picsum.photos/400/300?random=10",
    author: "Satya S. Gugliman",
    includesAI: true,
    includesEngineering: true,
    includesSI: true
  },
  {
    id: 11,
    title: "Environmental Monitoring",
    description: "Environmental monitoring system using AI and IoT to track climate change, pollution levels, and natural resource management.",
    imageURL: "https://picsum.photos/400/300?random=11",
    author: "Aaroosh Davalbhakta",
    includesAI: true,
    includesEngineering: true,
    includesSI: true
  },
  {
    id: 12,
    title: "Community Development App",
    description: "Mobile application for community development that facilitates local initiatives, volunteer coordination, and resource sharing.",
    imageURL: "https://picsum.photos/400/300?random=12",
    author: "Nischal Keshav",
    includesAI: false,
    includesEngineering: true,
    includesSI: true
  }
];
















export const founders = [
  {
    id: 1,
    name: "Arjun Paradkar",
    title: "Founder",
    description:"Arjun founded Arenda Innovations with one goal: To \"Build the Future\". He firmly believes that there is no time, no age, and no place that limits that pursuit. He is a dual enrolled student at the University of Arkansas and specializes in Math, Physics, and AI research. He frontiers Arenda's quest to create the system that defines how humans interact with tech for decades to come.",
    imageUrl: "/assets/images/ArjunP1.jpg",
    orientation: "left"
  },
  {
    id: 2,
    name: "Arham Shah",
    title: "CTO & Co-Founder",
    description: "Sarah is a brilliant technologist and systems architect who has revolutionized the way we think about scalable software infrastructure. With a background in distributed systems and cloud computing, she has built platforms that handle millions of concurrent users. Her expertise spans from low-level systems programming to cutting-edge AI deployment, making her the driving force behind Arenda's technical innovation.",
    imageUrl: "https://i.pravatar.cc/300?img=2",
    orientation: "right"
  },
  {
    id: 3,
    name: "Nischal Keshav",
    title: "CTO",
    description: "Nischal Keshav is the Technical Lead at Arenda Innovations and built this website. He is a Junior at Bentonville High School and is interested in pursuing a career in Computer Science. He is also a Founder of the ISEF club at Bentonville High School.",
    imageUrl: "https://i.pravatar.cc/300?img=3",
    orientation: "left"
  },
  {
    id: 4,
    name: "Naman S. Gugliman",
    title: "Chief Scientific Officer",
    description: "Naman Guggilam is a visionary student-researcher exploring the frontiers of AI, neuroscience, and theoretical physics. He leads ARENDA with a mission to transform youth innovation into world-changing breakthroughs.",
    imageUrl: "/assets/images/Naman1.png",
    orientation: "right"
  },
  {
    id: 5,
    name: "Satya S. Gugliman",
    title: "Chief Scientific Officer",
    description: "My name is Satya Achanti and I am a sophomore at Bentonville High School. I am interested in medicine and want to pursue being a neurologist as my career. I love math and anything science related.",
    imageUrl: "/assets/images/Satya1.jpg",
    orientation: "left"
  },
  
  
  {
    id: 6,
    name: "Aaroosh Davalbhakta",
    title: "Position",
    description: "My name is Aaroosh Davalbhakta, and I am a senior at Haas Hall Academy Bentonville. I am looking to pursue a career in Chemical Engineering.",
    imageUrl: "/assets/images/Aaroosh1.jpeg",
    orientation: "right"
  }
];