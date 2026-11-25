export type Link = {
  label: string;
  href: string;
  external?: boolean;
};

export type Project = {
  id: string;
  index: string;
  title: string;
  category: string;
  description: string;
  contribution: string;
  stack: string[];
  status: string;
  statusTone?: "live" | "research" | "neutral";
  links: Link[];
};

export type ResearchItem = {
  id: string;
  type: string;
  title: string;
  meta: string;
  description: string;
  links: Link[];
};

export type ExperienceItem = {
  period: string;
  role: string;
  organisation: string;
  location: string;
  description: string;
  footnote?: string;
};

export const identity = {
  name: "Srinadh Chintakindi",
  shortName: "S. Chintakindi",
  role: "Founder & Junior AI Product Engineer",
  brand: "Thridha Labs",
  location: "Hyderabad, India",
  headline: "Building practical AI systems and full-stack products.",
  intro:
    "I build practical AI systems, ship full-stack products, and deliver client work through an independent AI-first brand — documenting architecture, tradeoffs, and limitations along the way.",
  descriptors: ["AI Systems Builder", "Full-Stack Engineer", "Independent Researcher"],
  availability: "Open to engineering roles, AI/product collaborations, and client projects.",
  resumeUrl: "/resume.html",
  github: "https://github.com/Srinadhch07",
  linkedin: "https://www.linkedin.com/in/srinadhch07",
  thridha: "https://thridhalabs.in/",
};

export const navItems = [
  { label: "Work", href: "#work" },
  { label: "Research", href: "#research" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const projects: Project[] = [
  {
    id: "thridha-platform",
    index: "01",
    title: "Thridha Labs Platform",
    category: "Software & Product Engineering",
    description:
      "The platform behind Thridha Labs: public-facing pages, administrative tooling, content APIs, and client/project presentation.",
    contribution:
      "Founder; product design, full-stack engineering, and platform operations.",
    stack: ["FastAPI", "MongoDB", "React 19", "TypeScript", "Vite"],
    status: "Live platform",
    statusTone: "live",
    links: [
      { label: "Visit site", href: "https://thridhalabs.in/", external: true },
      {
        label: "GitHub",
        href: "https://github.com/Srinadhch07/thridhalabs-platform",
        external: true,
      },
    ],
  },
  {
    id: "echomind",
    index: "02",
    title: "EchoMind",
    category: "AI / ML & Agentic AI",
    description:
      "An agentic AI system with persistent organizational memory — a recall, reason, retain loop for customer-support experiences.",
    contribution:
      "Designed and built the system: FastAPI backend, React dashboard, Groq reasoning, and Hindsight memory.",
    stack: ["Python", "FastAPI", "React", "Groq", "Hindsight"],
    status: "Ready to use · not deployed",
    statusTone: "neutral",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Srinadhch07/EchoMind--Agentic-AI-with-Organizational-Memory",
        external: true,
      },
    ],
  },
  {
    id: "query-guardrail",
    index: "03",
    title: "Query Guardrail Framework",
    category: "Research & Open Source",
    description:
      "A three-layer input pipeline that filters out-of-domain queries before they reach a stateless LLM API.",
    contribution:
      "Co-author and independent researcher; designed the word-level filter, semantic classifier, and guardrail prompt pipeline.",
    stack: ["fastText", "GloVe", "LLM guardrails", "Python"],
    status: "Independent preprint · not peer-reviewed",
    statusTone: "research",
    links: [
      {
        label: "DOI",
        href: "https://doi.org/10.5281/zenodo.19571805",
        external: true,
      },
      {
        label: "Code",
        href: "https://github.com/Srinadhch07/multi-layer-query-guard-framework",
        external: true,
      },
    ],
  },
  {
    id: "client-platforms",
    index: "04",
    title: "Client Platforms",
    category: "Client Projects",
    description:
      "Three live client sites delivered through Thridha Labs: beauty and wellness, dermatology, and automotive accessories.",
    contribution:
      "Client project development and delivery through Thridha Labs.",
    stack: ["React", "TypeScript", "Responsive web"],
    status: "3 live sites",
    statusTone: "live",
    links: [
      { label: "Manu Makeovers", href: "https://manumakeovers.in", external: true },
      { label: "Dr. Imarankazmi", href: "https://drimrankazmi.in/", external: true },
      { label: "SLG Car Decors", href: "https://slgcardecors.in/", external: true },
    ],
  },
  {
    id: "llama-cpp-python-win",
    index: "05",
    title: "llama-cpp-python-win",
    category: "Research & Open Source",
    description:
      "Prebuilt Windows wheels for llama-cpp-python, removing a painful local build step for Windows users.",
    contribution: "Maintainer and package publisher.",
    stack: ["Python", "llama.cpp", "Windows wheels", "PyPI"],
    status: "PyPI · v0.3.21",
    statusTone: "neutral",
    links: [
      {
        label: "PyPI",
        href: "https://pypi.org/project/llama-cpp-python-win/",
        external: true,
      },
      {
        label: "GitHub",
        href: "https://github.com/Srinadhch07/llama-cpp-python-wheels",
        external: true,
      },
    ],
  },
];

export const researchItems: ResearchItem[] = [
  {
    id: "guardrail-paper",
    type: "Paper",
    title:
      "A Multi-Layer Query Guardrail Framework for Stateless LLM Deployments",
    meta: "2026 · DOI 10.5281/zenodo.19571805",
    description:
      "An independent preprint proposing a word-level filter, a fastText/GloVe intent classifier, and an LLM guardrail prompt to reduce domain drift and unnecessary API cost.",
    links: [
      {
        label: "DOI",
        href: "https://doi.org/10.5281/zenodo.19571805",
        external: true,
      },
      {
        label: "Code",
        href: "https://github.com/Srinadhch07/multi-layer-query-guard-framework",
        external: true,
      },
    ],
  },
  {
    id: "llama-package",
    type: "Package",
    title: "llama-cpp-python-win",
    meta: "PyPI · v0.3.21 · Maintained",
    description:
      "Windows wheels for llama-cpp-python, packaged so local inference works without a full C++ build toolchain.",
    links: [
      {
        label: "PyPI",
        href: "https://pypi.org/project/llama-cpp-python-win/",
        external: true,
      },
      {
        label: "GitHub",
        href: "https://github.com/Srinadhch07/llama-cpp-python-wheels",
        external: true,
      },
    ],
  },
  {
    id: "brundha",
    type: "Model",
    title: "Brundha",
    meta: "Ollama · 6.0 · Local inference",
    description:
      "A maintained local conversational model distributed through Ollama, with a 986 MB build and a 32K context window on the public model page.",
    links: [
      {
        label: "Ollama",
        href: "https://ollama.com/srinadhch07/brundha_fast",
        external: true,
      },
    ],
  },
  {
    id: "garden",
    type: "Research in progress",
    title: "Garden",
    meta: "In development · Public artifacts pending",
    description:
      "An ongoing research framework exploring reproducible AI experiments. Methodology and experiments are reproducible; public paper and code are not yet published.",
    links: [],
  },
  {
    id: "python-packages",
    type: "Packages",
    title: "pyarcS · srinadhch07",
    meta: "PyPI · Maintained",
    description:
      "Two maintained Python packages: a database task helper (pyarcS) and an AI desktop assistant (srinadhch07).",
    links: [
      { label: "pyarcS", href: "https://pypi.org/project/pyarcS/", external: true },
      {
        label: "srinadhch07",
        href: "https://pypi.org/project/srinadhch07/",
        external: true,
      },
    ],
  },
];

export const experience: ExperienceItem[] = [
  {
    period: "Nov 2026 — Present",
    role: "Founder & Junior AI Product Engineer",
    organisation: "Thridha Labs",
    location: "Hyderabad · Independent brand",
    description:
      "Building AI products, the Thridha Labs platform, and client projects across product design, full-stack engineering, and technical research.",
  },
  {
    period: "Oct 2024 — May 2025",
    role: "AI Analyst",
    organisation: "Outlier",
    location: "India",
    description:
      "Worked on RLHF for large language models, evaluation frameworks, and feedback loops.",
  },
  {
    period: "Dec 2024 — Aug 2025",
    role: "Founder",
    organisation: "Skill Link",
    location: "Hyderabad · Self-employed",
    description:
      "Founded a student-led skill-services initiative; selected for the Udyamotsav 2025 startup list.",
    footnote: "Public profile dates; not personally reconfirmed.",
  },
  {
    period: "Sep 2024 — Feb 2025",
    role: "Java Full Stack Developer",
    organisation: "Skillencio Pvt. Ltd",
    location: "Jangaon, Telangana",
    description:
      "Full-stack development at an education and project-based learning company.",
    footnote: "Public profile dates.",
  },
];

export const education = {
  degree: "B.Tech, Computer Science and Engineering",
  institution: "Christu Jyothi Institute of Technology and Science (CJITS)",
  cgpa: "7.79 / 10",
  dates: "2021 — 2025",
  note: "Graduated. Dates as publicly listed.",
};

export const interests = [
  "Agentic memory",
  "LLM guardrails",
  "Local inference",
  "AI product systems",
];

export const credentials = [
  {
    title: "Software Engineer Intern",
    issuer: "HackerRank",
    detail: "Score 100 · Sep 2024",
  },
  {
    title: "Machine Learning Explainability",
    issuer: "Kaggle",
    detail: "Sep 2024",
  },
  {
    title: "Pandas",
    issuer: "Kaggle",
    detail: "Apr 2024",
  },
  {
    title: "Udyamotsav 2025",
    issuer: "Ministry of Education / AICTE",
    detail: "Selected startup · Skill Link",
  },
];

export const about = {
  paragraphs: [
    "I’m Srinadh Chintakindi, the founder of Thridha Labs and a junior AI product engineer. I completed my B.Tech in Computer Science and Engineering with a CGPA of 7.79 / 10.",
    "My work sits between AI engineering and product development: agentic memory, LLM guardrails, local inference, and the full-stack systems that make them usable. I care about clear architecture, honest constraints, and shipping things that work outside a demo.",
  ],
  approach: [
    "Start from the real constraint, not the demo.",
    "Document the architecture and the tradeoffs.",
    "Keep the system small enough to understand and maintain.",
  ],
};

export const contact = {
  heading: "Let’s build something useful.",
  body: "I’m open to engineering opportunities, AI and product collaborations, and selected client projects. The fastest way to reach me is LinkedIn.",
};
