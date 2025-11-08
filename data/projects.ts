import { Project } from "@/components/ProjectCard";

export const projects: Project[] = [
  {
    title: "Tomato",
    subtitle: "Food Delivery App",
    type: "mobile",
    description:
      "Native Android food delivery app using Jetpack Compose with restaurant listing, live order tracking, push notifications, Firebase authentication, and Google Maps integration.",
    aspect: "9/16",
    image: "/tomato.png",
    tags: ["Jetpack Compose", "Room Database", "Ktor", "Firebase", "Google Maps"],
    ctas: [
      { label: "Live Demo", href: "", external: true },
      { label: "GitHub", href: "https://github.com/codex-yasxh/Tomato", external: true },
      { label: "Play Store", href: "https://play.google.com/store/apps/details?id=fittrack", external: true },
    ],
  },
  {
    title: "SkillForge",
    subtitle: "AI powered learning interface",
    type: "mobile",
    description:
      "AI-powered collaborative learning planner built natively in Android using Jetpack Compose, Room Database, Ktor backend, offline-first mode, and smart skill recommendations using ML.",
    aspect: "9/16",
    image: "/skillforge.png",
    tags: ["Jetpack Compose", "Room Database", "Ktor", "Firebase", "Google Maps"],
    ctas: [
      { label: "Live Demo", href: "", external: true },
      { label: "GitHub", href: "https://github.com/codex-yasxh/SkillForge", external: true },
      { label: "Play Store", href: "https://play.google.com/store/apps/details?id=fittrack", external: true },
    ],
  },
  {
    title: "WebSecVisualizer",
    subtitle: "SaaS Web Interface",
    type: "web",
    description:
      "Cyber threat visualization system with ML-based malware detection and real-time dashboards.",
    aspect: "16/9",
    image: "/websecvisualizer.png",
    tags: ["Next.js", "TailwindCSS", "Charts", "React", "TypeScript", "Redux Toolkit" , "python", "Django", "MongoDB" ],
    ctas: [
      { label: "Live Demo", href: "", external: true },
      { label: "GitHub", href: "https://github.com/codex-yasxh/CyberThreatAnalyzer", external: true },
    ],
  },
  {
    title: "Skill Swap Dashboard",
    subtitle: "SaaS Web Interface",
    type: "web",
    description:
      "A platform for skill exchange with matchmaking, chat, and recommendation engine.",
    aspect: "16/9",
    image: "/skillswap.png",
    tags: ["Next.js", "TailwindCSS", "Charts", "React", "TypeScript", "Redux Toolkit" , "python", "Flask" , "MongoDB"],
    ctas: [
      { label: "Live Demo", href: "", external: true },
      { label: "GitHub", href: "https://github.com/codex-yasxh/odoo25-shivam-aditya-anjishnu", external: true },
    ],
  },
  {
    title: "GeoLocator eComm App",
    subtitle: "Cab Booking Experience",
    type: "mobile",
    description:
      "Mobile commerce app with real-time geo-location product discovery, user auth, and payment gateway integration.",
    aspect: "9/16",
    image: "/geolocator.png",
    tags: ["Flutter", "Bloc", "Maps", "Firebase", "Stripe", "GetX"],
    ctas: [
      { label: "Live Demo", href: "", external: true },
      { label: "GitHub", href: "https://github.com/codex-yasxh/GeoLocator", external: true },
      { label: "Play Store", href: "https://play.google.com/store/apps/details?id=fittrack", external: true },
    ],

  },
];
