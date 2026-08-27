export const profile = {
  name: 'Vasanth',
  fullName: 'Vasanth Kumar',
  role: 'Software Developer · Frontend Developer',
  roleLine: 'React Developer · Full-Stack Web Developer',
  phone: '+91 9786183898',
  email: 'iamvasanth2k4@gmail.com',
  github: 'https://github.com/vasanth-void-0x',
  linkedin: 'https://linkedin.com/in/vasanth-2k4',
  portfolio: 'https://github.com/vasanth-void-0x/VASANTH-Portfolio-FE',
  location: 'India',
  education: 'MCA',
  focus: 'Software & Web Development',
  status: 'Available for Work',
  intro:
    'I build responsive web applications, reusable React interfaces, REST API integrations, and full-stack software with a focus on clean user experiences, reliable backend services, and secure development.',
}

export const stats = [
  { label: 'Projects', value: 9, suffix: '+' },
  { label: 'Experience', value: 30, suffix: 'd', note: 'internship' },
  { label: 'Technologies', value: 20, suffix: '+' },
  { label: 'Full-Stack Apps', value: 4, suffix: '+' },
]

export const skillGroups = [
  {
    title: 'Frontend Engineering',
    items: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'TypeScript', 'Tailwind CSS', 'Responsive UI'],
  },
  {
    title: 'Backend & APIs',
    items: ['Node.js', 'Express.js', 'FastAPI', 'REST APIs', 'WebSockets', 'JWT', 'SQLite'],
  },
  {
    title: 'AI & Agentic Systems',
    items: ['LLM Integration', 'RAG', 'MCP', 'Groq API', 'Prompt Engineering', 'Agentic AI'],
  },
  {
    title: 'Automation & Cloud',
    items: ['n8n', 'Vercel', 'Cloudflare Workers', 'GitHub Actions', 'Docker', 'Render'],
  },
  {
    title: 'Programming & Data',
    items: ['Python', 'JavaScript', 'TypeScript', 'SQL', 'SQLite', 'MongoDB', 'JSON'],
  },
  {
    title: 'Developer Workflow',
    items: ['Git', 'GitHub', 'Vite', 'npm', 'Postman', 'VS Code', 'Chrome DevTools'],
  },
]

export const coreCompetencies = [
  'Software Development',
  'Frontend Development',
  'Responsive Web Design',
  'Reusable React Components',
  'REST API Integration',
  'Full-Stack Web Development',
  'Deployment & Hosting',
  'Version Control & CI/CD',
  'Debugging & Troubleshooting',
]

export const projects = [
  {
    id: 'aegisflow',
    name: 'AegisFlow',
    tagline: 'Live Full-Stack SOC Automation Platform',
    tech: ['React', 'TypeScript', 'FastAPI', 'Groq API', 'MCP', 'RAG', 'n8n', 'Vercel'],
    description:
      'Built and deployed a full-stack SOC platform with alert ingestion, threat-intelligence enrichment, AI triage, RAG-assisted investigation, MCP security tools, human approval workflows, simulated response, automated tests, and a modern live command center.',
    github: 'https://github.com/vasanth-void-0x/AegisFlow-SOC-Automation',
    live: 'https://aegisflow-soc-automation.vercel.app/',
    image: '/projects/aegisflow.webp',
  },
  {
    id: 'ragexploit',
    name: 'RAGExploit',
    tagline: 'Modular Python CLI Security Scanner',
    tech: ['Python', 'CLI', 'REST APIs', 'RAG', 'LLM Security', 'JSON Reporting'],
    description:
      'Designed a modular command-line application with structured scan workflows, target configuration, reusable testing modules, severity-based findings, remediation output, and extensible reporting for AI and retrieval applications.',
    github: 'https://github.com/vasanth-void-0x/RAGExploit',
    live: 'https://rag-exploit-scanner.vercel.app/',
    image: '/projects/ragexploit.webp',
  },
  {
    id: 'threatmart',
    name: 'ThreatMart — VOID Cyberstore',
    tagline: 'Full-Stack E-Commerce Web Application',
    tech: ['JavaScript', 'Node.js', 'Express.js', 'SQLite', 'JWT', 'REST API', 'HTML5', 'CSS3'],
    description:
      'Developed a complete e-commerce application with product search and filtering, authentication, persistent carts, checkout, order history, inventory management, protected admin access, product CRUD, and order-status workflows.',
    github: 'https://github.com/vasanth-void-0x/void-cyber-commerce',
    live: 'https://void-cyber-commerce.vercel.app/',
    image: '/projects/threatmart.webp',
  },
  {
    id: 'agentshield',
    name: 'AgentShield',
    tagline: 'Next.js AI Security Web Application',
    tech: ['Next.js', 'React', 'TypeScript', 'Cloudflare Workers', 'Cloudflare D1', 'Drizzle ORM', 'Groq API'],
    description:
      'Created and deployed a full-stack web application with interactive dashboards, prompt testing, approval workflows, audit views, API validation, role-based permissions, rate limiting, automated tests, and an edge-hosted database.',
    github: 'https://github.com/vasanth-void-0x/AgentShield---AI-Gateway',
    live: 'https://agent-shield.iamvasanth2k4.workers.dev/',
  },
  {
    id: 'private-media',
    name: 'V-PrivateMedia',
    tagline: 'Full-Stack Private Messaging & File-Sharing Platform',
    tech: ['React', 'FastAPI', 'WebSockets', 'SQLAlchemy', 'SQLite', 'JWT', 'Docker', 'GitHub Actions'],
    description:
      'Built a responsive multi-user communication platform with private and group messaging, real-time WebSocket delivery, persistent conversations, role-based group membership, secure file handling, JWT authentication, Docker packaging, and CI tests.',
    github: 'https://github.com/vasanth-void-0x/V--PrivateMedia',
    image: '/projects/v-private-media.webp',
  },
  {
    id: 'itrap',
    name: 'iTRAP',
    tagline: 'Data-Driven Streamlit Dashboard Application',
    tech: ['Python', 'Streamlit', 'SQLite', 'Plotly', 'REST APIs', 'PDF Reporting'],
    description:
      'Built and deployed an interactive dashboard application with multi-page navigation, data filtering, live and sample data modes, visual analytics, risk scoring, searchable incident workflows, and downloadable reports.',
    github: 'https://github.com/vasanth-void-0x/Identity-Threat-Response-Automation-Platform',
    live: 'https://itrap-soc-center.streamlit.app/',
    image: '/projects/itrap.png',
  },
  {
    id: 'dfir-copilot',
    name: 'DFIR Copilot',
    tagline: 'Python Desktop Software & Reporting Workbench',
    tech: ['Python', 'PySide6', 'SQLite', 'YARA-X', 'Groq API', 'PDF', 'HTML'],
    description:
      'Developed a local-first desktop application with case management, file processing, integrity verification, structured artifact analysis, searchable timelines, AI-assisted workflows, automated tests, and PDF/HTML/JSON exports.',
    github: 'https://github.com/vasanth-void-0x/DFIR-Copilot',
    image: '/projects/dfir-copilot.png',
  },
  {
    id: 'chainguard',
    name: 'ChainGuard',
    tagline: 'Automated DevSecOps CI/CD Pipeline',
    tech: ['GitHub Actions', 'Docker', 'Python', 'Gitleaks', 'Semgrep', 'Trivy', 'Syft'],
    description:
      'Implemented an automated CI/CD security pipeline that scans source code, secrets, dependencies, and container images, generates an SBOM, publishes security evidence, and blocks unsafe builds before deployment.',
    github: 'https://github.com/vasanth-void-0x/ChainGuard',
    image: '/projects/chainguard.webp',
  },
  {
    id: 'ai-red-team-agent',
    name: 'AI Red Team Agent',
    tagline: 'AI & LLM Security Red Teaming Platform',
    tech: ['AI Security', 'LLM', 'RAG', 'MCP', 'Prompt Injection', 'Agent Security'],
    description:
      'Designed an AI security red teaming platform concept for testing LLM applications, RAG pipelines, agent tools, APIs, prompt-injection resistance, sensitive-data leakage, jailbreaks, and evidence-driven attack analysis.',
    image: '/projects/ai-red-team-agent.webp',
  },

]

export const experience = [
  {
    role: 'Full Stack Development Intern',
    org: 'Livestream Technology, Coimbatore',
    duration: '30 Days',
    points: [
      'Developed responsive web applications using HTML, CSS, JavaScript, and React.js.',
      'Integrated REST APIs and built reusable UI components.',
      'Collaborated using Git and GitHub for version control.',
      'Assisted in testing, debugging, and optimizing web applications.',
    ],
  },
  {
    role: 'Software & Web Project Development',
    org: 'Independent',
    duration: 'Ongoing',
    points: [
      'Built full-stack applications using React, Next.js, Node.js, Express, FastAPI, SQLite, WebSockets, and REST APIs.',
      'Created responsive dashboards, e-commerce workflows, private messaging features, admin interfaces, authentication, and data-driven reporting.',
      'Deployed applications with Cloudflare Workers, Streamlit Cloud, Docker, Vercel-compatible frontend tooling, and GitHub Actions CI.',
    ],
  },
]

export const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    period: '2026 – 2028 (Pursuing)',
    institution: 'Madurai Kamaraj University',
  },
  {
    degree: 'B.Sc. Cybersecurity & Digital Forensics',
    period: '2023 – 2026',
    institution: 'Madurai Kamaraj University',
  },
]

export const strengths = [
  'Quick to Adapt to New Tools & Technologies',
  'Strong Problem-Solving Skills',
  'Responsive & User-Centric UI Development',
  'API Integration & Full-Stack Development',
  'Bug Fixing & Troubleshooting',
  'Continuous Learning',
]

export const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]
