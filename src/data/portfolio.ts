import type {
  Experience,
  Game,
  GenAiItem,
  Hobby,
  IntroImage,
  NavItem,
  Project,
  SkillGroup,
  SocialLink,
  Stat,
  Testimonial,
} from "./types"

/**
 * Real portfolio content for Aditya Bahl, sourced from the previous
 * github-portfolio project. Everything the UI renders lives here — swap a
 * value (or wire it to an API later) without touching the components.
 */

export const profile = {
  firstName: "ADITYA",
  lastName: "BAHL",
  role: "FULL STACK DEVELOPER",
  location: "Dehradun, India",
  availability: "AVAILABLE / 2026",
  tagline: "Java • React • Python • Cloud",
  email: "adityabahl12345@gmail.com",
  resumeUrl:
    "https://drive.google.com/file/d/1rs2wCbVAkA4aw-NGKeYxUTpSgAxq53-z/view?usp=drive_link",
  portrait: "/assets/Portrait.png",
  intro:
    "I build bold, fast, and scalable digital experiences with Java, React, and Python. Currently a Software Engineer Analyst at Accenture. Clean code by day, neon dreams by night.",
  about:
    "I'm Aditya, a full stack developer from Dehradun, India. I turn ambitious ideas into reliable, intuitive products — from polished React interfaces to robust Java and Spring Boot backends. I've shipped features used by 1000+ users, helped win client contracts, and mentored juniors along the way. When I'm off the clock, I play games and make music as OG Ideology.",
}

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Career", href: "#career" },
  { label: "Work", href: "#work" },
  { label: "GenAI", href: "#genai" },
  { label: "Hobbies", href: "#hobbies" },
]

export const stats: Stat[] = [
  { value: "7+", label: "Roles played" },
  { value: "1000+", label: "Users served" },
  { value: "8+", label: "Projects shipped" },
]

/** Headline skill bars shown in the "Arsenal" section. */
export const skills: { name: string; value: number }[] = [
  { name: "Java / Spring Boot", value: 90 },
  { name: "React.js", value: 92 },
  { name: "Python / ML", value: 80 },
  { name: "Cloud & DevOps", value: 78 },
]

/** Full tech stack, grouped, shown on the About / detail context. */
export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    items: ["Java", "JavaScript", "C++", "Python", "R", "Kotlin"],
  },
  {
    category: "Web",
    items: ["React", "Node.js", "Express", "Django", "MongoDB", "PHP"],
  },
  {
    category: "Cloud & Tools",
    items: ["AWS", "GCP", "Salesforce", "Docker", "Kubernetes", "Jenkins"],
  },
  {
    category: "Databases",
    items: ["MySQL", "MongoDB", "PostgreSQL"],
  },
]

/** MAIN MISSIONS — career experiences. */
export const experiences: Experience[] = [
  {
    slug: "accenture-analyst",
    number: "01",
    company: "Accenture",
    role: "Packaged App Development Analyst",
    date: "Feb 2026 - Present",
    color: "from-[#a100ff] to-[#6251f1]",
    logo: "/assets/Accenture.png",
    highlights: [
      "Got an early promotion due to performance.",
      "Built functionalities used by 1000+ internal users & clients.",
    ],
    summary:
      "Promoted early on the back of strong delivery. I design and ship packaged-application features that reach over a thousand internal users and clients, owning work end to end across backend services and integrations.",
    companyUrl: "https://www.accenture.com/in-en",
    workUrl:
      "https://drive.google.com/drive/folders/1gcgYudt5Qg0m_6myskfn6iJ07nkJvvwI?usp=sharing",
    workLabel: "Visit",
    location: "India",
  },
  {
    slug: "accenture-associate",
    number: "02",
    company: "Accenture",
    role: "Packaged App Development Associate",
    date: "July 2024 - Feb 2026",
    color: "from-[#a100ff] to-[#c954dd]",
    logo: "/assets/Accenture.png",
    highlights: [
      "Developed 25+ scalable backend APIs using Spring Boot & SQL.",
      "Helped win a contract for a reputed cosmetic brand client.",
    ],
    summary:
      "Built 25+ scalable backend APIs with Spring Boot and SQL, powering critical client workflows. My contributions to a client pitch helped win a contract with a well-known cosmetics brand.",
    companyUrl: "https://www.accenture.com/in-en",
    workUrl:
      "https://drive.google.com/drive/folders/1gcgYudt5Qg0m_6myskfn6iJ07nkJvvwI?usp=sharing",
    workLabel: "Visit",
    location: "India",
  },
  {
    slug: "inlabs-global",
    number: "03",
    company: "InLabs Global",
    role: "Software Engineering Intern",
    date: "Dec 2023 - April 2024",
    color: "from-[#1f8eab] to-[#62d7bb]",
    logo: "/assets/InLabs.png",
    highlights: [
      "Developed a marketplace product using Flutter.",
      "Utilised various backend and frontend technologies.",
    ],
    summary:
      "Built a cross-platform marketplace product with Flutter, working across both frontend and backend layers to deliver a cohesive shopping experience.",
    companyUrl: "https://inlabsglobal.com/",
    workUrl: "https://github.com/AdityaBahl/InLabsGlobal/",
    workLabel: "See Work",
  },
  {
    slug: "algoninjas",
    number: "04",
    company: "AlgoNinjas",
    role: "Software Engineering Intern",
    date: "Sept 2023 - Nov 2023",
    color: "from-[#ff5ca8] to-[#ff875b]",
    logo: "/assets/Alg.svg",
    highlights: [
      "Developed the product and the main website using MERN.",
      "Utilised SDLC, DevOps and Cloud Computing.",
    ],
    summary:
      "Owned the product and marketing website on the MERN stack, following the full SDLC and applying DevOps and cloud practices to ship reliably.",
    companyUrl: "https://algoninjas.com/",
    workUrl:
      "https://drive.google.com/drive/folders/1o2kaVXc_L7NgfhR6g9Ldd-0ZR9dInbJH",
    workLabel: "See Work",
  },
  {
    slug: "graphic-era-university",
    number: "05",
    company: "Graphic Era University",
    role: "Full Stack Web Development Intern",
    date: "July 2023 - Sept 2023",
    color: "from-[#6251f1] to-[#c954dd]",
    logo: "/assets/GEU.png",
    highlights: [
      "B2C marketplace platform made using MERN.",
      "Part of a team of four members.",
    ],
    summary:
      "Collaborated in a four-person team to build a B2C marketplace platform on the MERN stack, contributing across the frontend and backend.",
    companyUrl: "https://grocery-store-frontend-gamma.vercel.app/",
    workUrl:
      "https://drive.google.com/file/d/1NEwCGspnsVMfXpmW3tcvypNjKC_PrRew/view?usp=sharing",
    workLabel: "See Work",
  },
  {
    slug: "mls-classes",
    number: "06",
    company: "MLS Classes",
    role: "Full Stack Web Development Intern",
    date: "June 2023 - Aug 2023",
    color: "from-[#ff875b] to-[#ffd56c]",
    logo: "/assets/mlslogo.png",
    highlights: [
      "Developed the main website with SEO optimisation.",
      "Utilised Cloud Computing and HubSpot (CRM).",
    ],
    summary:
      "Built the company's main website with a strong focus on SEO, and integrated cloud services and the HubSpot CRM to support marketing operations.",
    companyUrl: "https://mlsclasses.com/",
    workUrl:
      "https://drive.google.com/drive/folders/1ZCKfskE1rQ9FoJwkCpp7lS8Fz1OISlzq?usp=sharing",
    workLabel: "See Work",
  },
  {
    slug: "proyouth",
    number: "07",
    company: "ProYouth.in",
    role: "Front End Web Development Intern",
    date: "Feb 2023 - May 2023",
    color: "from-[#1f8eab] to-[#6251f1]",
    logo: "/assets/ProYouth.png",
    highlights: [
      "Migrated the website from legacy technology to React.",
      "Hands-on experience with SEO optimisations on a website.",
    ],
    summary:
      "Led the migration of a legacy website to a modern React codebase and applied practical SEO improvements to boost the site's reach.",
    companyUrl: "https://proyouth.in/",
    workUrl:
      "https://drive.google.com/drive/folders/1MubHYG64JYVJTo2rsKJzDVQ4ythERnqt?usp=sharing",
    workLabel: "See Work",
  },
]

/** SIDE MISSIONS — featured projects. */
export const projects: Project[] = [
  {
    slug: "sigmamandi",
    number: "01",
    title: "SigmaMandi",
    type: "B2C vegetable marketplace",
    stack: "MERN",
    color: "from-[#62d7bb] to-[#1f8eab]",
    logo: "/assets/Whitebasket.png",
    date: "July 2023 - Sept 2023",
    description: "B2C vegetable marketplace platform made using MERN.",
    summary:
      "A B2C vegetable marketplace built on the MERN stack that connects local sellers with buyers. Delivered as part of a four-person team, covering catalog, cart, and order flows.",
    highlights: [
      "B2C vegetable marketplace platform made using MERN.",
      "Part of a team of four members.",
    ],
    role: "Full-stack development",
    year: "2023",
    repoUrl: "https://github.com/AdityaBahl/Vegetable-Marketplace",
    liveUrl: "https://grocery-store-frontend-gamma.vercel.app/",
    liveLabel: "Deployed",
  },
  {
    slug: "face-detection",
    number: "02",
    title: "Face Detection Application",
    type: "Computer vision",
    stack: "Python / OpenCV / CNN",
    color: "from-[#ff5ca8] to-[#6251f1]",
    logo: "/assets/FaceDetection.png",
    date: "Jan 2023 - March 2023",
    description: "Detects faces using CNN with 3 different modes.",
    summary:
      "A computer-vision app that detects faces using a CNN with three operating modes. I also used it to mentor junior students on the fundamentals of machine learning.",
    highlights: [
      "Detects faces using CNN with 3 different modes.",
      "Mentored junior students on ML with this project.",
    ],
    role: "ML development & mentoring",
    year: "2023",
    repoUrl: "https://github.com/AdityaBahl/Face-Detection-using-OpenCV",
    liveUrl:
      "https://github.com/AdityaBahl/Face-Detection-using-OpenCV/blob/master/README.md",
    liveLabel: "Documentation",
  },
  {
    slug: "academia",
    number: "03",
    title: "Academia",
    type: "Student record system",
    stack: "PHP / MySQL",
    color: "from-[#c954dd] to-[#ff5ca8]",
    logo: "/assets/Academia.png",
    date: "Apr 2023 - June 2023",
    description: "Student Record Maintenance System.",
    summary:
      "A student record maintenance system — a full CRUD web application built with PHP and MySQL to manage student data cleanly and reliably.",
    highlights: [
      "Student Record Maintenance System.",
      "CRUD web software made using PHP, MySQL.",
    ],
    role: "Full-stack development",
    year: "2023",
    repoUrl:
      "https://github.com/AdityaBahl/Student-Record-Maintenance-System-Web-App",
    liveUrl:
      "https://github.com/AdityaBahl/Student-Record-Maintenance-System-Web-App/blob/main/README.md",
    liveLabel: "Documentation",
  },
  {
    slug: "shippro",
    number: "04",
    title: "ShipPro",
    type: "Courier management",
    stack: "MERN",
    color: "from-[#ff875b] to-[#ffd56c]",
    logo: "/assets/ShipPro.png",
    date: "July 2023 - Sept 2023",
    description: "Courier Management System using MERN stack.",
    summary:
      "A courier management system on the MERN stack that covers the full delivery lifecycle — from booking and tracking to delivery confirmation.",
    highlights: [
      "Courier Management System using MERN stack.",
      "Covers all aspects of the courier delivery lifecycle.",
    ],
    role: "Full-stack development",
    year: "2023",
    repoUrl: "https://github.com/AdityaBahl/Courier-Management-System",
    liveUrl:
      "https://github.com/AdityaBahl/Courier-Management-System/blob/main/Report_CourierManagementSystem_6th_sem.pdf",
    liveLabel: "Documentation",
  },
  {
    slug: "disaster-buddy",
    number: "05",
    title: "Disaster Buddy 🤖",
    type: "Disaster management",
    stack: "MERN / ML",
    color: "from-[#1f8eab] to-[#62d7bb]",
    logo: "/assets/Weather.png",
    date: "July 2023 - Sept 2023",
    description: "Disaster Management System using MERN stack.",
    summary:
      "A disaster management platform combining weather forecasts, ML-based prediction, live news updates, and safety tips to help communities prepare and respond.",
    highlights: [
      "Disaster Management System using MERN stack.",
      "Weather forecast, ML prediction, news updates and tips.",
    ],
    role: "Full-stack & ML development",
    year: "2023",
    repoUrl: "https://github.com/AdityaBahl/Disaster-Management-System",
    liveUrl:
      "https://github.com/AdityaBahl/Disaster-Management-System/blob/main/README.md",
    liveLabel: "Documentation",
  },
  {
    slug: "pan-card-authenticator",
    number: "06",
    title: "Pan Card Authenticator",
    type: "Image tampering detection",
    stack: "Python / Flask / ML",
    color: "from-[#6251f1] to-[#c954dd]",
    logo: "/assets/PanCard.png",
    date: "July 2023 - Sept 2023",
    description: "PAN card tampering detection application.",
    summary:
      "A machine-learning application that detects tampering in PAN card images, wrapped in a simple Flask UI for quick verification.",
    highlights: [
      "PAN card tampering detection application.",
      "Machine learning application with a Flask UI.",
    ],
    role: "ML development",
    year: "2023",
    repoUrl:
      "https://github.com/AdityaBahl/Pan-Card-Image-Tampering-Detection-Flask-App",
    liveUrl:
      "https://github.com/AdityaBahl/Pan-Card-Image-Tampering-Detection-Flask-App/blob/main/README.md",
    liveLabel: "Documentation",
  },
  {
    slug: "twitter-sentiment",
    number: "07",
    title: "Twitter Sentiment Analysis",
    type: "NLP / data",
    stack: "Python / Twitter API / ML",
    color: "from-[#1f8eab] to-[#6251f1]",
    logo: "/assets/Twitter.png",
    date: "July 2023 - Sept 2023",
    description: "Analyzes Twitter sentiments from the latest tweets.",
    summary:
      "A machine-learning application that analyzes sentiment from live Twitter data via the Twitter API, surfacing trends from the latest tweets.",
    highlights: [
      "Analyzes Twitter sentiments based on latest Twitter data.",
      "Machine learning application, utilizes the Twitter API.",
    ],
    role: "ML development",
    year: "2023",
    repoUrl: "https://github.com/AdityaBahl/Twitter_Sentimental_Analysis",
    liveUrl:
      "https://github.com/AdityaBahl/Twitter_Sentimental_Analysis/blob/main/Readme.md",
    liveLabel: "Documentation",
  },
  {
    slug: "android-calculator",
    number: "08",
    title: "Android Calculator",
    type: "Android app",
    stack: "Kotlin / Gradle",
    color: "from-[#ffd56c] to-[#ff875b]",
    logo: "/assets/Calc.png",
    date: "July 2023 - Sept 2023",
    description: "Basic Android calculator made using Kotlin and Gradle.",
    summary:
      "A clean, no-frills Android calculator built with Kotlin and Gradle. Installed and used by 50+ people who appreciate its simplicity.",
    highlights: [
      "Basic Android calculator made using Kotlin and Gradle.",
      "Installed and used by 50+ people for its simplicity.",
    ],
    role: "Android development",
    year: "2023",
    repoUrl: "https://github.com/AdityaBahl/Calculator-Android-App",
    liveUrl:
      "https://github.com/AdityaBahl/Calculator-Android-App/blob/main/app/release/app-release.apk",
    liveLabel: "Install",
  },
]

export const testimonials: Testimonial[] = [
  {
    name: "Ritik Mittal",
    role: "Founder of AlgoNinjas",
    quote:
      "I am confident that Aditya would be an asset to any team. He is a highly skilled and experienced developer with a strong work ethic and a positive attitude. I highly recommend him.",
    avatar: "/assets/testimonials/Ritik.png",
  },
  {
    name: "Rahul Banarjee",
    role: "Founder of ProYouth.in",
    quote:
      "Aditya consistently exceeded expectations, showing sharp analytical skills and an ability to find innovative solutions. His attention to detail and time management was commendable.",
    avatar: "/assets/ProYouth.png",
  },
  {
    name: "James",
    role: "Founder of MLS Classes",
    quote:
      "I am confident that Aditya would be an asset to any team. He is a highly skilled and experienced developer with a strong work ethic and a positive attitude.",
    avatar: "/assets/mlslogo.png",
  },
  {
    name: "Aryan Yadav",
    role: "UI/UX Designer",
    quote:
      "Aditya is always eager to challenge the unknown and does not let technical barriers cage his potential. I can easily recommend him to anyone seeking a talented developer who pushes boundaries.",
    avatar: "/assets/testimonials/Aryan.png",
  },
  {
    name: "Kartikeya Saxena",
    role: "Software Engineer",
    quote:
      "I know Aditya as an excellent developer who's always keen on taking initiatives to solve problems irrespective of how complex they are — projects, queries, or workflow optimisation.",
    avatar: "/assets/testimonials/Kartikey.png",
  },
  {
    name: "Apoorva Priya",
    role: "Software Engineer at Genpact",
    quote:
      "I've had the pleasure of knowing Aditya both personally and professionally and can confidently say he's an exceptional software engineer, always striving for excellence.",
    avatar: "/assets/testimonials/Apoorva.png",
  },
  {
    name: "Pratyaksh Bharadwaj",
    role: "Software Engineer at Salesforce",
    quote:
      "I've worked very closely with Aditya, and can tell he's one of the most hardworking people, striving for perfection in everything he does.",
    avatar: "/assets/testimonials/PB.png",
  },
  {
    name: "Viraat Kumar",
    role: "Software Engineer",
    quote:
      "During our web development internship, I closely collaborated with Aditya, a dedicated developer who effectively tackled challenges. His passion and positive attitude greatly benefited our team.",
    avatar: "/assets/testimonials/Viraat.png",
  },
  {
    name: "Bhakti Vaidya",
    role: "Software Engineer",
    quote:
      "Aditya's dedication and collaborative spirit at MLS Classes were inspiring. His meticulous problem-solving and innovative ideas greatly enhanced our team's productivity.",
    avatar: "/assets/testimonials/Bhakti.png",
  },
  {
    name: "Muhammad Musaib",
    role: "Software Engineer",
    quote:
      "Aditya's name shall always remind me of a proactive go-getter. His attitude toward work is nice and calm — such an idealistic person to have on a team.",
    avatar: "/assets/testimonials/musaib.png",
  },
  {
    name: "Lamha Chaturvedi",
    role: "UI/UX Designer",
    quote:
      "Working alongside Aditya was an absolute pleasure. Not once did he hesitate to accommodate revisions, always striving to exceed expectations. I highly recommend him.",
    avatar: "/assets/testimonials/Lamha.png",
  },
  {
    name: "Mayank Kumar",
    role: "ML Engineer at starX91",
    quote:
      "Aditya is a passionate programmer who constantly seeks ways to overcome problems and comes up with solutions for projects, full-stack development queries, or resume building.",
    avatar: "/assets/testimonials/Mayank.png",
  },
]

/** HOBBIES — music released as OG Ideology. */
export const hobbies: Hobby[] = [
  {
    title: "Cut Throat",
    desc: "My personal favourite track.",
    link: "https://youtu.be/QMnSfOTshog?si=SzHe6ESZyAdgf8ES",
    cover: "/assets/CutThroat.jpeg",
    tag: "Rap",
  },
  {
    title: "Burnt",
    desc: "My first decent try at beatmaking.",
    link: "https://youtu.be/vHOWo_D7rag?si=pbNC1fT5PFWmLemL",
    cover: "/assets/Burnt.png",
    tag: "Beatmaking",
  },
  {
    title: "Sin City",
    desc: "Lofi track, commentary on society.",
    link: "https://youtu.be/Iwm6R7Dyy2c?si=5sYBjnIWiOHgXSqL",
    cover: "/assets/sinCity.png",
    tag: "Lofi",
  },
  {
    title: "Running",
    desc: "My first track on YouTube. EVER.",
    link: "https://youtu.be/og0wvez-qPo?si=Ldq90EPCYMmxZMfk",
    cover: "/assets/running.png",
    tag: "Rap",
  },
  {
    title: "Check out more...",
    desc: "Everything I've released as OG Ideology.",
    link: "https://www.youtube.com/@ogideology",
    cover: "/assets/og_ideology.png",
    tag: "Channel",
  },
]

/** GEN-AI — how I build with generative AI. Edit freely. */
export const genAi: GenAiItem[] = [
  {
    title: "AI-Assisted Development",
    tag: "Workflow",
    desc: "I ship faster by pairing with AI coding agents — scaffolding features, refactoring, and writing tests while keeping a human in the loop for review.",
    tools: ["GitHub Copilot", "Cursor", "Claude", "ChatGPT"],
  },
  {
    title: "LLM App Integration",
    tag: "Engineering",
    desc: "Wiring large language models into real products: prompt design, function/tool calling, streaming responses, and guardrails against bad output.",
    tools: ["OpenAI API", "Gemini", "LangChain", "Function calling"],
  },
  {
    title: "RAG & Embeddings",
    tag: "Retrieval",
    desc: "Grounding models in private data with retrieval-augmented generation — chunking, embeddings, and vector search for accurate, source-backed answers.",
    tools: ["Vector DBs", "Embeddings", "Semantic search"],
  },
  {
    title: "Prompt Engineering",
    tag: "Craft",
    desc: "Designing reliable prompts and evaluations — few-shot examples, structured output, and iterative testing to make AI features consistent.",
    tools: ["Few-shot", "Structured output", "Evals"],
  },
]

/** GAMING — favourite games, shown as a subsection of Hobbies. */
export const games: Game[] = [
  {
    title: "KCD 1 · Kingdom Come: Deliverance",
    platform: "PC / PlayStation / Xbox",
    genre: "Historical RPG",
    imageUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/379430/header.jpg",
    color: "from-[#8b5e3c] to-[#2b1a16]",
  },
  {
    title: "KCD 2 · Kingdom Come: Deliverance II",
    platform: "PC / PlayStation / Xbox",
    genre: "Historical RPG",
    imageUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/1771300/header.jpg",
    color: "from-[#c98c52] to-[#3a2016]",
  },
  {
    title: "GTA V",
    platform: "PC / PlayStation / Xbox",
    genre: "Open world",
    imageUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/271590/header.jpg",
    color: "from-[#ff5ca8] to-[#ff875b]",
  },
  {
    title: "God of War II",
    platform: "PlayStation",
    genre: "Action-adventure",
    imageUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/1593500/header.jpg",
    color: "from-[#c43a3a] to-[#201014]",
  },
  {
    title: "The Last of Us Part II",
    platform: "PlayStation",
    genre: "Action-adventure",
    imageUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/2531310/header.jpg",
    color: "from-[#65735d] to-[#1b2823]",
  },
  {
    title: "Horizon Zero Dawn",
    platform: "PC / PlayStation",
    genre: "Action RPG",
    imageUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/1151640/header.jpg",
    color: "from-[#4a9bc0] to-[#1b3047]",
  },
  {
    title: "Inside",
    platform: "PC / PlayStation / Xbox / Switch",
    genre: "Puzzle-platformer",
    imageUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/304430/header.jpg",
    color: "from-[#5c6e7d] to-[#101820]",
  },
  {
    title: "Limbo",
    platform: "PC / Console",
    genre: "Puzzle-platformer",
    imageUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/48000/header.jpg",
    color: "from-[#5d5d5d] to-[#090909]",
  },
  {
    title: "Fallout 4",
    platform: "PC / PlayStation / Xbox",
    genre: "Open-world RPG",
    imageUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/377160/header.jpg",
    color: "from-[#69a89c] to-[#182a28]",
  },
  {
    title: "The Witcher 3",
    platform: "PC / PlayStation / Xbox / Switch",
    genre: "Open-world RPG",
    imageUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/292030/header.jpg",
    color: "from-[#6251f1] to-[#1c182d]",
  },
  {
    title: "Resident Evil 7: Biohazard",
    platform: "PC / PlayStation / Xbox",
    genre: "Survival horror",
    imageUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/418370/header.jpg",
    color: "from-[#6c8a7c] to-[#101817]",
  },
  {
    title: "Dying Light",
    platform: "PC / PlayStation / Xbox",
    genre: "Survival action",
    imageUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/239140/header.jpg",
    color: "from-[#e07835] to-[#25202b]",
  },
  {
    title: "Tekken 7",
    platform: "PC / PlayStation / Xbox",
    genre: "Fighting",
    imageUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/389730/header.jpg",
    color: "from-[#db3d30] to-[#21142f]",
  },
  {
    title: "Ghost of Tsushima",
    platform: "PC / PlayStation",
    genre: "Open-world action",
    imageUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/2215430/header.jpg",
    color: "from-[#d18672] to-[#282e45]",
  },
  {
    title: "Max Payne",
    platform: "PC / PlayStation / Xbox",
    genre: "Noir action",
    imageUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/12140/header.jpg",
    color: "from-[#6d7585] to-[#10121a]",
  },
  {
    title: "Max Payne 2: The Fall of Max Payne",
    platform: "PC / PlayStation / Xbox",
    genre: "Noir action",
    imageUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/12150/header.jpg",
    color: "from-[#9b6d78] to-[#17131c]",
  },
  {
    title: "Max Payne 3",
    platform: "PC / PlayStation / Xbox",
    genre: "Third-person shooter",
    imageUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/204100/header.jpg",
    color: "from-[#c8a06a] to-[#281b1b]",
  },
  {
    title: "Wolfenstein: The New Order",
    platform: "PC / PlayStation / Xbox",
    genre: "Alternate-history FPS",
    imageUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/201810/header.jpg",
    color: "from-[#b6503a] to-[#171b24]",
  },
]

/** Collage shown in the animated intro overlay. */
export const introImages: IntroImage[] = [
  {
    src: "/assets/Portrait.png",
    alt: "Portrait of Aditya Bahl",
    className: "intro-panel intro-panel-1",
  },
  {
    src: "/assets/Accenture.png",
    alt: "Accenture",
    className: "intro-panel intro-panel-2",
  },
  {
    src: "/assets/Whitebasket.png",
    alt: "SigmaMandi project",
    className: "intro-panel intro-panel-3",
  },
  {
    src: "/assets/FaceDetection.png",
    alt: "Face Detection project",
    className: "intro-panel intro-panel-4",
  },
  {
    src: "/assets/og_ideology.png",
    alt: "OG Ideology music",
    className: "intro-panel intro-panel-5",
  },
]

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/AdityaBahl" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/aditya-bahl-22334819b/" },
  { label: "LeetCode", href: "https://leetcode.com/adityabahl/" },
  { label: "YouTube", href: "https://www.youtube.com/@ogideology" },
  { label: "Buy Me A Coffee", href: "https://www.buymeacoffee.com/adityabahl" },
]

/** Lookup helpers used by the detail routes. */
export const getProjectBySlug = (slug: string | undefined) =>
  projects.find((project) => project.slug === slug)

export const getExperienceBySlug = (slug: string | undefined) =>
  experiences.find((experience) => experience.slug === slug)
