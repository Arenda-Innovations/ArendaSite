
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
    title: "Neural Network Optimization",
    description: "Advanced AI algorithms for optimizing neural network architectures and improving training efficiency across multiple domains.",
    imageURL: "https://picsum.photos/400/300?random=1",
    includesAI: true,
    includesEngineering: false,
    includesSI: false
  },
  {
    id: 2,
    title: "Computer Vision System",
    description: "Real-time computer vision system capable of object detection, facial recognition, and scene understanding for autonomous applications.",
    imageURL: "https://picsum.photos/400/300?random=2",
    includesAI: true,
    includesEngineering: true,
    includesSI: false
  },
  {
    id: 3,
    title: "Natural Language Processing",
    description: "Advanced NLP models for sentiment analysis, text generation, and language understanding with multilingual support.",
    imageURL: "https://picsum.photos/400/300?random=3",
    includesAI: true,
    includesEngineering: false,
    includesSI: false
  },
  {
    id: 4,
    title: "Reinforcement Learning Framework",
    description: "Custom reinforcement learning framework for training AI agents in complex environments with multi-agent coordination.",
    imageURL: "https://picsum.photos/400/300?random=4",
    includesAI: true,
    includesEngineering: true,
    includesSI: false
  },
  {
    id: 5,
    title: "Distributed Systems Architecture",
    description: "Scalable distributed systems design for handling millions of concurrent users with high availability and fault tolerance.",
    imageURL: "https://picsum.photos/400/300?random=5",
    includesAI: false,
    includesEngineering: true,
    includesSI: false
  },
  {
    id: 6,
    title: "IoT Platform Development",
    description: "Comprehensive IoT platform for connecting and managing smart devices with real-time data processing and analytics.",
    imageURL: "https://picsum.photos/400/300?random=6",
    includesAI: true,
    includesEngineering: true,
    includesSI: false
  },
  {
    id: 7,
    title: "Blockchain Infrastructure",
    description: "Enterprise-grade blockchain infrastructure for secure, transparent, and scalable decentralized applications.",
    imageURL: "https://picsum.photos/400/300?random=7",
    includesAI: false,
    includesEngineering: true,
    includesSI: false
  },
  {
    id: 8,
    title: "Cloud Computing Solutions",
    description: "Advanced cloud computing solutions with auto-scaling, load balancing, and cost optimization for modern applications.",
    imageURL: "https://picsum.photos/400/300?random=8",
    includesAI: false,
    includesEngineering: true,
    includesSI: false
  },
  {
    id: 9,
    title: "Educational Technology Platform",
    description: "Innovative educational technology platform designed to bridge the digital divide and provide quality education to underserved communities.",
    imageURL: "https://picsum.photos/400/300?random=9",
    includesAI: true,
    includesEngineering: true,
    includesSI: true
  },
  {
    id: 10,
    title: "Healthcare Access System",
    description: "Digital healthcare access system that connects remote communities with medical professionals and healthcare resources.",
    imageURL: "https://picsum.photos/400/300?random=10",
    includesAI: true,
    includesEngineering: true,
    includesSI: true
  },
  {
    id: 11,
    title: "Environmental Monitoring",
    description: "Environmental monitoring system using AI and IoT to track climate change, pollution levels, and natural resource management.",
    imageURL: "https://picsum.photos/400/300?random=11",
    includesAI: true,
    includesEngineering: true,
    includesSI: true
  },
  {
    id: 12,
    title: "Community Development App",
    description: "Mobile application for community development that facilitates local initiatives, volunteer coordination, and resource sharing.",
    imageURL: "https://picsum.photos/400/300?random=12",
    includesAI: false,
    includesEngineering: true,
    includesSI: true
  }
];

export const founders = [
  {
    id: 1,
    name: "Arjun Paradkar",
    title: "CEO & Co-Founder",
    description: "Dr. Chen is a visionary entrepreneur and former Stanford professor with over 15 years of experience in artificial intelligence and machine learning. He has published over 50 research papers and holds 12 patents in AI technology. Prior to founding Arenda, he led AI research teams at Google and OpenAI, where he developed breakthrough algorithms that are now used by millions of users worldwide.",
    imageUrl: "https://i.pravatar.cc/300?img=1",
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
    description: "Marcus leads our research initiatives with a focus on emerging technologies and breakthrough innovations. With a PhD in Quantum Computing from MIT and experience at NASA's Jet Propulsion Laboratory, he brings a unique perspective to solving complex technical challenges. His work has been published in Nature and Science, and he has been recognized as one of the top 100 innovators under 35 by MIT Technology Review.",
    imageUrl: "https://i.pravatar.cc/300?img=3",
    orientation: "left"
  },
  {
    id: 4,
    name: "Satya S. Gugliman",
    title: "Chief Scientific Officer",
    description: "Dr. Watson is a renowned neuroscientist and AI researcher who specializes in brain-computer interfaces and cognitive computing. Her groundbreaking research on neural networks has been instrumental in developing AI systems that can understand and process human emotions. She has received numerous awards for her contributions to the field, including the prestigious Turing Award for her work on emotional AI.",
    imageUrl: "https://i.pravatar.cc/300?img=4",
    orientation: "right"
  },
  {
    id: 5,
    name: "Naman S. Gugliman",
    title: "VP of Engineering",
    description: "David is a seasoned engineering leader with expertise in building and scaling high-performance software systems. He has led engineering teams at companies like Netflix and Uber, where he was responsible for architecting systems that serve billions of requests daily. His passion for clean code and scalable architecture has been instrumental in building Arenda's robust technical foundation.",
    imageUrl: "https://i.pravatar.cc/300?img=5",
    orientation: "left"
  }
];