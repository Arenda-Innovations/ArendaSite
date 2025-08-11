
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
    description: "A new operating system that is designed to be a more efficient and implement AI from its core",
    imageURL: "https://picsum.photos/400/300?random=1",
    author: "Arjun Paradkar",
    includesAI: true,
    includesEngineering: false,
    includesSI: false
  },
  {
    id: 2,
    title: "BrAIn",
    description: "A novel AI architecture that is more efficient and cheaper than the current state of the art",
    imageURL: "https://picsum.photos/400/300?random=2",
    author: "Arjun Paradkar",
    includesAI: true,
    includesEngineering: true,
    includesSI: false
  },
  {
    id: 3,
    title: "Allergy App",
    description: "A mobile app that utilizes AI to detect allergies through images and provide personalized recommendations for food and other products",
    imageURL: "https://picsum.photos/400/300?random=3",
    author: "Arjun, Satya, Nischal, Naman",
    includesAI: true,
    includesEngineering: false,
    includesSI: true
  },
  {
    id: 4,
    title: "AI-Powered RC Plane",
    description: "An RC plane that is powered by AI to fly autonomously and avoid obstacles",
    imageURL: "https://picsum.photos/400/300?random=4",
    author: "Arjun Paradkar",
    includesAI: true,
    includesEngineering: true,
    includesSI: false
  },
  {
    id: 5,
    title: "AI-Driven exploration for Alzheimer’s Biomarkers",
    description: "Using new unused AI Architectures to find new RNA biomarkers through data analysis",
    imageURL: "https://picsum.photos/400/300?random=5",
    author: "Naman S. Guggilam",
    includesAI: true,
    includesEngineering: false,
    includesSI: true
  },
  {
    id: 6,
    title: "AI-Integrated Void One Glasses",
    description: "Void One Glasses with D. One OS turn any display into an AI-controlled, voice-driven workspace. It’s the “Android for AI wearables” — sleek, adaptive, and always learning",
    imageURL: "https://picsum.photos/400/300?random=6",
    author: "Arham Shah",
    includesAI: true,
    includesEngineering: true,
    includesSI: true
  },
  {
    id: 7,
    title: "Enhanced Detection of Rare and Misdiagnosed Cancers in Histopathology Images",
    description: "This project aims to develop a convolutional neural network (CNN)-based classification system specialized in identifying rare and frequently misdiagnosed cancers from digitized histopathology slides." ,
    imageURL: "https://picsum.photos/400/300?random=7",
    author: "Naman S. Guggilam",
    includesAI: true,
    includesEngineering: false,
    includesSI: true
  },
  {
    id: 8,
    title: "AlzRate: Multimodal AI for Predicting Individual Alzheimer’s Progression Rate",
    description: "AlzRate uses integrated blood ncRNA expression, baseline neuroimaging features (e.g., hippocampal volume), genetic deposition, and clinical data to predict an individual’s future rate of cognitive decline and time-to-AD conversion",
    imageURL: "https://picsum.photos/400/300?random=8",
    author: "Naman S. Guggilam",
    includesAI: true,
    includesEngineering: true,
    includesSI: true
  },
  {
    id: 9,
    title: " Optimizing Topical Drug Delivery in Eczema Treatment",
    description: "Optimizing drug formulations for better skin penetration or targeted delivery, reducing systemic exposure. Using adjuvants or enhancers that increase drug absorption locally.",
    imageURL: "https://picsum.photos/400/300?random=9",
    author: "Naman S. Gugliman",
    includesAI: true,
    includesEngineering: true,
    includesSI: true
  },
  {
    id: 10,
    title: "NeuroSnap",
    description: "AI-Based Emotion Recognition from EEG Snapshots for Mental Health Insights",
    imageURL: "https://picsum.photos/400/300?random=10",
    author: "Arya Devanath",
    includesAI: true,
    includesEngineering: false,
    includesSI: true
  },
  {
    id: 11,
    title: "GenieTrack",
    description: "A revolutionary educational platform that uniquely utilizes AI and various teaching methods to effectively help students improve in various fields",
    imageURL: "https://picsum.photos/400/300?random=11",
    author: "Reva",
    includesAI: true,
    includesEngineering: true,
    includesSI: true
  },
  {
    id: 12,
    title: "AI-Enhanced Insulin Dosing for Pregnant Women with Type-2 Diabetes",
    description: "This project explores how individualized, AI-driven insulin dosing can optimize blood sugar control and reduce hypoglycemia risk in pregnant patients with Type-2 diabetes, compared to standard treatment methods. The goal is to design or propose a system that adapts to each patient’s unique hormonal and metabolic changes during pregnancy",
    imageURL: "https://picsum.photos/400/300?random=12",
    author: "Sifa Siraj",
    includesAI: true,
    includesEngineering: false,
    includesSI: false
 },
  
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
    name: "Naman S. Guggilam",
    title: "Chief Scientific Officer",
    description: "Naman Guggilam is a visionary student-researcher exploring the frontiers of AI, neuroscience, and theoretical physics. He leads ARENDA with a mission to transform youth innovation into world-changing breakthroughs. He is also a Founder of the ISEF club and Philosophy club at Bentonville High School.",
    imageUrl: "/assets/images/Naman1.png",
    orientation: "right"
  },
  {
    id: 5,
    name: "Satya Achanti",
    title: "Chief Scientific Officer",
    description: "Satya Achanti is a sophomore at Bentonville High School interested in medicine and want to pursue being a neurologist as his career. He loves math and science.",
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