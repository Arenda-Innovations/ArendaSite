
import {
  highlightFirstVideo,
  highlightFourthVideo,
  highlightSecondVideo,
  highlightThirdVideo,
} from "../utils";

export const navLists = ["Home","Projects", "Founders", "Contact"];

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
    title: "BlurOS",
    description: "An efficient new operating system with AI integrated at its core.",
    imageURL: "https://picsum.photos/400/300?random=1",
    author: "Arjun Paradkar, Nischal Keshav, Arham Shah",
    includesAI: true,
    includesEngineering: false,
    includesSI: false
  },
  {
    id: 2,
    title: "BrAIn",
    description: "A novel AI architecture designed for greater efficiency and reduced cost.",
    imageURL: "https://picsum.photos/400/300?random=2",
    author: "Arjun Paradkar",
    includesAI: true,
    includesEngineering: true,
    includesSI: false
  },
  {
    id: 3,
    title: "Allergy App",
    description: "A mobile app using AI to detect allergies from images and provide personalized recommendations.",
    imageURL: "https://picsum.photos/400/300?random=3",
    author: "Arjun Paradkar, Satya Achanti, Nischal Keshav, Naman S. Guggilam",
    includesAI: true,
    includesEngineering: false,
    includesSI: true
  },
  {
    id: 4,
    title: "AI-Powered RC Plane",
    description: "An autonomous RC plane that uses AI to fly and avoid obstacles.",
    imageURL: "https://f005.backblazeb2.com/b2api/v1/b2_download_file_by_id?fileId=4_z046a387b608e935e9c8c0319_f10395aee86af1630_d20250811_m201006_c005_v0501035_t0017_u01754943006488",
    author: "Arjun Paradkar",
    includesAI: true,
    includesEngineering: true,
    includesSI: false
  },
  {
    id: 5,
    title: "AI-Driven exploration for Alzheimer’s Biomarkers",
    description: "A project using new AI architectures to identify novel RNA biomarkers for Alzheimer's.",
    imageURL: "https://picsum.photos/400/300?random=5",
    author: "Naman S. Guggilam",
    includesAI: true,
    includesEngineering: false,
    includesSI: true
  },
  {
    id: 6,
    title: "AI-Integrated Void One Glasses",
    description: "Wearable glasses that transform any display into an AI-controlled, voice-driven workspace.",
    imageURL: "https://picsum.photos/400/300?random=6",
    author: "Arham Shah",
    includesAI: true,
    includesEngineering: true,
    includesSI: true
  },
  {
    id: 7,
    title: "Enhanced Detection of Rare and Misdiagnosed Cancers in Histopathology Images",
    description: "A CNN-based system for detecting rare and commonly misdiagnosed cancers from pathology slides.",
    imageURL: "https://picsum.photos/400/300?random=7",
    author: "Naman S. Guggilam",
    includesAI: true,
    includesEngineering: false,
    includesSI: true
  },
  {
    id: 8,
    title: "AlzRate: Multimodal AI for Predicting Individual Alzheimer’s Progression Rate",
    description: "A multimodal AI model that predicts Alzheimer’s progression using genetic, imaging, and clinical data.",
    imageURL: "https://picsum.photos/400/300?random=8",
    author: "Naman S. Guggilam",
    includesAI: true,
    includesEngineering: true,
    includesSI: true
  },
  {
    id: 9,
    title: "Optimizing Topical Drug Delivery in Eczema Treatment",
    description: "A system for improving eczema drug formulations to increase targeted skin absorption.",
    imageURL: "https://picsum.photos/400/300?random=9",
    author: "Naman S. Guggilam",
    includesAI: true,
    includesEngineering: true,
    includesSI: true
  },
  {
    id: 10,
    title: "NeuroSnap",
    description: "An AI tool that interprets EEG snapshots to detect emotions for mental health insights.",
    imageURL: "https://picsum.photos/400/300?random=10",
    author: "Arya Devanath",
    includesAI: true,
    includesEngineering: false,
    includesSI: true
  },
  {
    id: 11,
    title: "GenieTrack",
    description: "An AI-powered educational platform that adapts teaching methods for individual student improvement.",
    imageURL: "https://picsum.photos/400/300?random=11",
    author: "Reva Paradkar",
    includesAI: true,
    includesEngineering: true,
    includesSI: true
  },
  {
    id: 12,
    title: "AI-Enhanced Insulin Dosing for Pregnant Women with Type-2 Diabetes",
    description: "An adaptive AI system for optimizing insulin dosing in pregnant women with Type-2 diabetes.",
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
    orientation: "right"
  },
  
  {
    id: 3,
    name: "Nischal Keshav",
    title: "Head of Technology",
    description: "Nischal Keshav is the Technical Lead at Arenda Innovations and built this website. He is a Junior at Bentonville High School and is interested in pursuing a career in Computer Science. He is also a Founder of the ISEF club at Bentonville High School.",
    imageUrl: "/assets/images/Nischal1.jpg",
    orientation: "left"
  },
  {
    id: 4,
    name: "Naman S. Guggilam",
    title: "Head of Research",
    description: "Naman co-founded ARENDA Innovations with a mission to push the boundaries of science and technology. A physicist and neuroscientist in training, he explores questions that bridge the fundamental laws of the universe with the complexities of the human brain. His current focus is on pioneering the discovery of novel non-coding RNA biomarkers for Alzheimer’s disease — blending advanced machine learning with deep biological insight to enable earlier detection and intervention. Through ARENDA, Naman works to create technologies that unite the precision of physics, the power of AI, and the promise of biology to shape the future of human health and intelligence.",
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
    title: "ARENDA Mentor",
    description: "My name is Aaroosh Davalbhakta, and I am a senior at Haas Hall Academy Bentonville. I am looking to pursue a career in Chemical Engineering.",
    imageUrl: "/assets/images/Aaroosh1.jpeg",
    orientation: "right"
  }
];