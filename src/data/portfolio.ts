// ─────────────────────────────────────────────────────────────
// All portfolio content lives here. Edit freely — the UI updates automatically.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Utkarsh Tripathi",
  first: "Utkarsh",
  last: "Tripathi",
  location: "Bengaluru, Karnataka",
  email: "tripathiraj117@gmail.com",
  phone: "+91-7224976274",
  github: "https://github.com/Tripathiraj1",
  linkedin: "https://www.linkedin.com/in/tripathiii/",
  roles: ["Machine Learning Engineer", "Backend Developer", "MLOps Practitioner", "GenAI & LLM Builder"],
  summary:
    "Machine Learning Engineer building production-ready AI solutions, scalable backend services, analytical dashboards, and end-to-end ML pipelines. I care about the full path — from raw data and feature engineering to tracked experiments, deployed APIs, and dashboards people actually use.",
  passions: ["Generative AI", "LLMs", "MLOps", "Data Science"],
};

export const stats = [
  { value: 7, suffix: "+", label: "Production Projects Shipped", decimals: 0 },
  { value: 3, suffix: "", label: "Engineering Roles", decimals: 0 },
  { value: 100, suffix: "%", label: "End-to-End Pipeline Ownership", decimals: 0 },
  { value: 0.5, prefix: "Top ", suffix: "%", label: "Math Coders on Naukri", decimals: 1 },
];

export type Chapter = {
  date: string;
  title: string;
  org: string;
  place: string;
  story: string;
  details: string[];
  tags: string[];
  accent: string;
};

export const journey: Chapter[] = [
  {
    date: "2021",
    title: "The Spark",
    org: "Lakshmi Narain College of Technology",
    place: "Bhopal",
    story: "Started B.Tech in Artificial Intelligence & Machine Learning — mastering core algorithms, data structures, and statistical modeling.",
    details: [
      "Built strong foundations in DSA, OOP, linear algebra, and core ML.",
      "Earned Python, Java, and Web Development certifications from Coding Ninjas.",
    ],
    tags: ["Python", "Java", "DSA"],
    accent: "#7c6cff",
  },
  {
    date: "Feb 2023 — May 2023",
    title: "Teaching Assistant Intern",
    org: "Sunrise Mentors Pvt. Ltd.",
    place: "Remote",
    story: "Mentored aspiring developers in DSA, OOP, and logical problem solving.",
    details: [
      "Mentored students in Python, Java, Data Structures, Algorithms, and OOP.",
      "Reviewed code, debugged complex logic, and guided interview preparation.",
    ],
    tags: ["Mentoring", "Python", "Java", "OOP"],
    accent: "#22d3ee",
  },
  {
    date: "Mar 2024 — May 2024",
    title: "Data Analytics Intern",
    org: "Unified Mentor",
    place: "Remote",
    story: "Engineered data cleaning, EDA, and PostgreSQL queries to extract business insights.",
    details: [
      "Built EDA and automated visualization pipelines using Python and SQL.",
      "Designed analytical reporting dashboards for business intelligence trends.",
      "Worked extensively with Pandas, NumPy, Matplotlib, and PostgreSQL datasets.",
    ],
    tags: ["SQL", "Pandas", "PostgreSQL", "EDA"],
    accent: "#34d399",
  },
  {
    date: "Dec 2025 — Present",
    title: "Machine Learning Engineer",
    org: "ADA Global",
    place: "Bengaluru",
    story: "Building ML systems that move business numbers — forecasting, prediction and analytics in production.",
    details: [
      "Production ML pipelines for demand forecasting, buyer prediction and analytics.",
      "Backend APIs in Django and FastAPI for AI-driven applications.",
      "Optimised PostgreSQL queries powering analytical dashboards.",
      "MLflow for experiment tracking, model versioning and reproducibility.",
      "Lag, rolling, cyclical and encoded feature engineering; tuned Gradient Boosting & XGBoost.",
      "Docker, Git, Bitbucket and Linux production deployment workflows.",
    ],
    tags: ["XGBoost", "MLflow", "FastAPI", "Django", "Docker"],
    accent: "#f472b6",
  },
  {
    date: "Now",
    title: "Production Backend & APIs",
    org: "ADA Global · Django & FastAPI",
    place: "In progress",
    story: "Building high-performance backend services and REST APIs with Django and FastAPI alongside our Python ML stack.",
    details: [
      "Designing and building backend services and REST APIs using Django and FastAPI.",
      "Focusing on clean API contracts, ORM performance, logging and environment configuration.",
      "Integrating LLMs and ML pipelines with web services for real-time inference.",
    ],
    tags: ["Django", "FastAPI", "REST APIs", "PostgreSQL"],
    accent: "#a78bfa",
  },
];

export type Project = {
  id: string;
  title: string;
  tagline: string;
  category: string;
  accent: string;
  accent2: string;
  image?: string;
  summary: string;
  highlights: string[];
  stack: string[];
  link?: { label: string; href: string };
  live?: boolean;
};

export const projects: Project[] = [
  {
    id: "gyaanwise",
    title: "Gyaanwise",
    tagline: "Live platform · gyaanwise.com",
    category: "Live Product",
    accent: "#fbbf24",
    accent2: "#f97316",
    summary: "Contributed to the development of gyaanwise.com — a live platform in production, serving real users.",
    highlights: [
      "Contributed features and improvements to a live production web platform.",
      "Worked through the full loop: build, test, debug and release.",
      "Collaborated with the team to keep the product fast and reliable.",
    ],
    stack: ["Web Development", "Production", "Collaboration"],
    link: { label: "Visit gyaanwise.com", href: "https://gyaanwise.com" },
    live: true,
  },
  {
    id: "backend-apis",
    title: "AI & Analytics Backend APIs",
    tagline: "Django & FastAPI at ADA Global",
    category: "Backend · Production",
    accent: "#a78bfa",
    accent2: "#6366f1",
    summary: "Building production-ready backend services and REST APIs using Django and FastAPI at ADA Global, powering AI applications and analytical dashboards.",
    highlights: [
      "Designing REST APIs and backend services with Django and FastAPI.",
      "Optimised PostgreSQL queries and ORM pipelines for fast data delivery.",
      "Built for high reliability, security, and production deployment workflows.",
    ],
    stack: ["Django", "FastAPI", "Python", "PostgreSQL", "Docker"],
    live: true,
  },
  {
    id: "voucher",
    title: "Voucher Buyer Prediction",
    tagline: "Who will convert? Predicted.",
    category: "Machine Learning",
    accent: "#7c6cff",
    accent2: "#22d3ee",
    image: "/images/projects/ml-pipeline.jpg",
    summary: "A production-ready model that predicts voucher buyer conversion, powered by advanced feature engineering.",
    highlights: [
      "Advanced feature engineering on behavioural and transactional signals.",
      "MLflow experiment tracking, model versioning and reproducibility.",
      "Hyperparameter optimisation of XGBoost for production performance.",
    ],
    stack: ["Python", "XGBoost", "MLflow", "Feature Engineering"],
  },
  {
    id: "forecast",
    title: "Demand Forecasting System",
    tagline: "Seeing sales before they happen",
    category: "Time Series",
    accent: "#6366f1",
    accent2: "#a855f7",
    image: "/images/projects/forecast-dashboard.jpg",
    summary: "Forecasts demand from historical sales, discounts and seasonality.",
    highlights: [
      "Lag, rolling and cyclical features for strong seasonal signal.",
      "Improved prediction quality through ensemble learning.",
      "Gradient Boosting & XGBoost tuned with systematic hyperparameter search.",
    ],
    stack: ["Python", "Time Series", "XGBoost", "Gradient Boosting"],
  },
  {
    id: "signal",
    title: "AI Signal Platform",
    tagline: "Revenue, ads & product — one lens",
    category: "Analytics · Backend",
    accent: "#f59e0b",
    accent2: "#ec4899",
    image: "/images/projects/signal-dashboard.jpg",
    summary: "Analytical dashboards for product, advertising and revenue performance.",
    highlights: [
      "Interactive dashboards built with Django and Plotly.",
      "High-performance SQL reporting queries for business intelligence.",
      "Optimised PostgreSQL powering fast, reliable analytics.",
    ],
    stack: ["Django", "PostgreSQL", "Plotly", "SQL"],
  },
  {
    id: "whatsapp",
    title: "AI WhatsApp Assistant",
    tagline: "LLMs, on the app everyone uses",
    category: "Generative AI",
    accent: "#10b981",
    accent2: "#14b8a6",
    image: "/images/projects/whatsapp-assistant.jpg",
    summary: "An AI-powered WhatsApp chatbot automating customer interactions with context-aware LLM responses.",
    highlights: [
      "WhatsApp Business API + FastAPI with secure webhook verification.",
      "LLM integration for context-aware, conversational responses.",
      "Scalable REST backend with logging and env-based configuration.",
    ],
    stack: ["Python", "FastAPI", "WhatsApp Business API", "LLMs"],
  },
  {
    id: "birdstrike",
    title: "Bird Strike Damage Prediction",
    tagline: "Safer skies through data",
    category: "Predictive Analytics",
    accent: "#38bdf8",
    accent2: "#0ea5e9",
    summary: "Modelled bird-strike risk across airports and flight phases to support preventive planning.",
    highlights: [
      "Analysed wildlife, airport geography and flight-phase datasets.",
      "Identified operational risk patterns across airports.",
      "Built predictive models to estimate bird-strike risk.",
    ],
    stack: ["Python", "Machine Learning", "Data Analytics"],
  },
];

export const gallery = [
  { src: "/images/projects/ml-pipeline.jpg", title: "End-to-end ML pipeline", caption: "PostgreSQL → features → XGBoost → MLflow → FastAPI / Django → dashboards", tall: true },
  { src: "/images/projects/forecast-dashboard.jpg", title: "Demand forecasting", caption: "Actual vs predicted with confidence bands and seasonal drivers" },
  { src: "/images/projects/whatsapp-assistant.jpg", title: "AI WhatsApp Assistant", caption: "Webhook → FastAPI → LLM → WhatsApp Business API", tall: true },
  { src: "/images/projects/signal-dashboard.jpg", title: "AI Signal Platform", caption: "Revenue, advertising and product performance analytics" },
];

export const skillGroups = ["All", "ML & AI", "Backend", "Data", "Tools"] as const;
export type SkillGroup = (typeof skillGroups)[number];

export const skills: { name: string; group: Exclude<SkillGroup, "All"> }[] = [
  { name: "Python", group: "Backend" },
  { name: "SQL", group: "Data" },
  { name: "Java", group: "Backend" },
  { name: "Scikit-Learn", group: "ML & AI" },
  { name: "XGBoost", group: "ML & AI" },
  { name: "Gradient Boosting", group: "ML & AI" },
  { name: "Random Forest", group: "ML & AI" },
  { name: "Feature Engineering", group: "ML & AI" },
  { name: "Time Series Forecasting", group: "ML & AI" },
  { name: "Hyperparameter Tuning", group: "ML & AI" },
  { name: "MLflow", group: "ML & AI" },
  { name: "LLMs", group: "ML & AI" },
  { name: "Prompt Engineering", group: "ML & AI" },
  { name: "Ollama", group: "ML & AI" },
  { name: "MLOps", group: "ML & AI" },
  { name: "Django", group: "Backend" },
  { name: "FastAPI", group: "Backend" },
  { name: "Flask", group: "Backend" },
  { name: "REST APIs", group: "Backend" },
  { name: "PostgreSQL", group: "Data" },
  { name: "MySQL", group: "Data" },
  { name: "Pandas", group: "Data" },
  { name: "NumPy", group: "Data" },
  { name: "Matplotlib", group: "Data" },
  { name: "Plotly", group: "Data" },
  { name: "Docker", group: "Tools" },
  { name: "Git", group: "Tools" },
  { name: "Bitbucket", group: "Tools" },
  { name: "Linux", group: "Tools" },
  { name: "DBeaver", group: "Tools" },
  { name: "VS Code", group: "Tools" },
  { name: "Cursor", group: "Tools" },
];

export const certifications = [
  "Python Excellence Certificate — Coding Ninjas",
  "Java Excellence Certificate — Coding Ninjas",
  "Web Development Certification — Coding Ninjas",
  "Teaching Assistant Internship Certificate — Sunrise Mentors",
];
