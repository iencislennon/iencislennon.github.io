// All site content lives here; no component needs to change when it does.

export type LinkItem = { label: string; href: string };

export type Experience = {
  period: string;
  title: string;
  company: string;
  href?: string; // company website; the title is plain text when omitted
  image?: string; // shown under the dates, e.g. "/experience/one.svg"
  previousTitles?: string[];
  description: string[]; // one bullet point per string
  links?: LinkItem[];
  tech: string[];
};

export type Project = {
  title: string;
  href?: string;
  description: string[]; // one bullet point per string
  image?: string; // path under /public, e.g. "/projects/one.png"
  links?: LinkItem[];
  tech?: string[];
};

export type Post = {
  year: string;
  title: string;
  href: string;
  image?: string;
};

export const site = {
  name: "Ansar Tleubayev",
  role: "AI Engineer",
  tagline: "I build multi-agent systems and LLM pipelines for real-world data.",

  // Sections listed in the left-hand navigation (ids must match the page).
  nav: [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
  ],

  socials: [
    { icon: "github", label: "GitHub", href: "https://github.com/iencislennon" },
    {
      icon: "linkedin",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ansar-tleubayev/",
    },
  ] as { icon: "github" | "linkedin"; label: string; href: string }[],

  // Each string is one paragraph. Wrap text in [label](url) to make a link.
  about: [
    "I'm an AI engineer based in Almaty, Kazakhstan. I work on multi-agent systems, LLM orchestration and retrieval pipelines, mostly in Python with LangChain and LangGraph, and I like taking them all the way from a first prototype to a deployed, monitored service.",
    "I'm studying Information Systems at [SDU University](https://sdu.edu.kz) on a full tuition grant, graduating in 2029, and I'm a member of SDU AI LAB. Alongside my degree I've worked as an AI engineer at Tyin.ai and on Protocol Control Bot, and as an ML engineer at CAIR.",
    "Outside of work I play chess and football, and I'm interested in AI safety and in what happens when AI meets hardware. I speak English, Kazakh and Russian.",
  ],

  experience: [
    {
      period: "Apr — Jun 2026",
      title: "AI Engineer",
      company: "Tyin.ai",
      image: "/experience/tyin.svg",
      description: [
        "Architected generative components for a multi-agent pipeline, cutting manual validation time by 40%.",
        "Built scraping and LLM-orchestration pipelines that lifted recommendation accuracy by 25% across 23+ products.",
        "Led evaluation of AI model outputs and tuned agent memory and planning modules for higher accuracy.",
      ],
      tech: ["Python", "LangChain", "LangGraph", "Multi-agent systems"],
    },
    {
      period: "Jun 2026",
      title: "AI Engineer",
      company: "Protocol Control Bot",
      image: "/experience/protocol-bot.svg",
      description: [
        "Deployed an AI Telegram assistant that automated government workflows, cutting request latency by 60%.",
        "Designed PostgreSQL-based multi-tenant data ingestion pipelines for diverse real-world data.",
        "Owned the full deployment lifecycle: CI/CD, infrastructure configuration, and monitoring.",
      ],
      tech: ["Python", "PostgreSQL", "Telegram", "CI/CD"],
    },
    {
      period: "Sep 2025 — Oct 2026",
      title: "ML Engineer",
      company: "CAIR",
      image: "/experience/cair.svg",
      description: [
        "Fine-tuned GLM-4-9B with LoRA (AdaptBook) on GPUs via RunPod.",
        "Secured 6th place in the CYCNET Capture The Flag (CTF) cybersecurity competition.",
        "Reached ~0.85 public score on a Freedom data challenge over large JSON datasets, top ~8% of participants.",
      ],
      tech: ["Python", "LoRA", "GLM-4-9B", "RunPod"],
    },
  ] as Experience[],

  resume: {
    label: "Download Résumé",
    href: "/resume.pdf",
    download: "Ansar_Tleubayev_CV.pdf",
  },

  projects: [
    {
      title: "Personalized Nanoparticle Drug Delivery System",
      image: "/projects/nanoparticle.png",
      href: "https://github.com/iencislennon/Nanoparticle-Drug-Delivery-System-Using-Multi-Agent-Reinforcement-Learning",
      description: [
        "Built a cancer drug-delivery simulator combining biophysics with 5-agent reinforcement learning.",
        "Trained a 6.4M-parameter Vision Transformer on TCGA data (1,084 patients), reaching AUROC 0.79.",
        "Raised cancer cell hit rate from 0.5% to 3.2% (+540%) over baseline.",
      ],
      tech: ["Multi-agent RL", "Vision Transformer", "Python"],
    },
    {
      title: "Global Food & Energy Security Simulator",
      image: "/projects/food-energy.png",
      description: [
        "Built a 5-agent system (Farmer, Logistics, Energy, Market, Regulator) for food-security simulation.",
        "Implemented a RAG pipeline on ChromaDB grounded in FAO/USDA data.",
        "Automated PDF reports (FastAPI, WeasyPrint) with human-in-the-loop escalation for critical risks.",
      ],
      tech: ["Multi-agent systems", "RAG", "ChromaDB", "FastAPI", "WeasyPrint"],
    },
    {
      title: "ClearMind: Multi-Agent Information Overload Shield",
      image: "/projects/clearmind.png",
      href: "https://github.com/iencislennon/cleanmind",
      description: [
        "Google/Kaggle AI Agents Intensive capstone: designed a 4-agent system on A2A/MCP to detect information overload.",
        "Built an MCP server that parses real device data to generate personalized digital detox plans.",
        "Added a Guard agent with human-in-the-loop escalation and consent gates.",
      ],
      tech: ["A2A", "MCP", "FastAPI", "Python"],
    },
  ] as Project[],

  projectArchive: {
    label: "View Full Project Archive",
    href: "https://github.com/iencislennon?tab=repositories",
  },

  // Empty list hides the Writing section.
  writing: [] as Post[],

  footer:
    "Built with Next.js and Tailwind CSS. All text is set in the Inter typeface.",
};
