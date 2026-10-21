export const profile = {
  name: 'Sahil Awari',
  role: 'Full Stack Developer',
  location: 'Pune, Maharashtra, India',
  email: 'sahilawari2@gmail.com',
  phone: '+91 9545048269',
  phoneHref: 'tel:+919545048269',
  github: 'https://github.com/awarisahil',
  linkedin: 'https://www.linkedin.com/in/sahil-awari-b42214254/',
  availability: 'open to full-stack roles & freelance work',
  aboutLead:
    'Full-stack developer with 1 year 7 months of professional experience, shipping web applications across defence training, smart infrastructure and AI-powered platforms.',
  aboutBody: [
    'I work across the whole stack — RESTful API design, WebSocket-based real-time systems, JWT authentication, Redis caching and SQL/NoSQL data modelling. From a containerised shooting range for the Indian Army to a live auction engine built for high-concurrency bids, I turn complex requirements into fast, secure, usable software.',
    'Strong foundation in OOP, MVC architecture, Agile methodologies and secure application development. Currently a Software Developer at Botplus LLP, Pune.',
  ],
};

export const navLinks = [
  { id: 'about', label: 'about' },
  { id: 'experience', label: 'experience' },
  { id: 'projects', label: 'projects' },
  { id: 'education', label: 'education' },
  { id: 'contact', label: 'contact' },
];

export const marqueeItems = [
  'Java', 'Spring Boot', 'React', 'Node.js', 'TypeScript', 'PostgreSQL',
  'MongoDB', 'Redis', 'WebSockets', 'MySQL', 'Express', 'Prisma',
];

export const stats = [
  { value: 1.7, decimals: 1, suffix: '+', label: 'Years of experience' },
  { value: 6, decimals: 0, suffix: '+', label: 'Projects delivered' },
  { value: 3, decimals: 0, suffix: '', label: 'Industry domains' },
  { value: 10000, decimals: 0, suffix: '+', label: 'Records engineered' },
];

export const experience = {
  role: 'Software Developer',
  company: 'Botplus LLP',
  place: 'Pune, Maharashtra',
  period: 'mar 2025 — sep 2026',
  duration: '1 yr 7 mos · full-time',
  note: 'Full-time product engineering across defence, smart-city and AI domains — owning features end to end, from schema to UI.',
  projects: [
    {
      num: '01',
      tag: 'Defence',
      title: 'Shooting Range Training System',
      sub: 'Indian Army — Containerised Mobile Shooting Range (10 m, 02 Lane)',
      points: [
        'Developed end-to-end software for recruit training using React.js and Spring Boot.',
        'Built a real-time operator dashboard — virtual target control, lane management, live shot visualisation and After-Action Review with shot-by-shot playback & score reporting.',
        'Implemented trainee management supporting 10,000+ records with session history, weapon assignment and multi-module training (CQB, Moving Targetry, Known-Distance Range).',
        'Designed RESTful APIs integrating software controls with hardware target systems — single-station command & control with wireless tablet PC support.',
      ],
    },
    {
      num: '02',
      tag: 'Smart Infrastructure',
      title: 'Smart Parking System',
      sub: 'Real-time slot management platform',
      points: [
        'Built a real-time system with React.js and Spring Boot — live slot availability tracking, automated allocation and JWT-based secure authentication.',
        'Designed RESTful APIs for slot reservation, status updates and usage reporting with role-based access control for admins, attendants and users.',
        'Developed an automated slot allocation engine that reduced manual intervention — improving parking turnover and user experience.',
      ],
    },
    {
      num: '03',
      tag: 'AI Platform',
      title: 'AI-Powered Campaign Planner',
      sub: 'Automated campaign creation & audience targeting',
      link: 'http://65.21.8.185:9751/',
      points: [
        'Developed an intelligent planner with React.js and an AI-powered Python backend for automated campaign creation and audience targeting recommendations.',
        'Integrated REST APIs bridging the React frontend with Python ML services — real-time analytics and audience segmentation workflows.',
        'Built campaign performance dashboards with visual analytics — track reach, engagement and conversion metrics in real time.',
      ],
    },
  ],
};

export const projects = [
  {
    name: 'walkAndTalkEvent',
    language: 'TypeScript',
    tech: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'JWT'],
    description:
      'Event management and ticket booking platform — role-based flows for admins and customers, ticket requests with approval and rejection, payment records with automatic ticket generation.',
    github: 'https://github.com/awarisahil/walkAndTalkEvent',
    live: 'http://65.21.8.185:5050/',
  },
  {
    name: 'proposal-making-system',
    language: 'TypeScript',
    tech: ['TypeScript'],
    description:
      'Tool for creating, managing and tracking proposals — turning ad-hoc documents into a structured, repeatable workflow.',
    github: 'https://github.com/awarisahil/proposal-making-system',
    live: null,
  },
  {
    name: 'ecommerce',
    language: 'JavaScript',
    tech: ['JavaScript', 'React'],
    description: 'E-commerce storefront — product catalog, cart and checkout flows. Deployed on Vercel.',
    github: 'https://github.com/awarisahil/ecommerce',
    live: 'https://ecommerce-gules-alpha-48.vercel.app',
  },
  {
    name: 'OnlineBookStore',
    language: 'Java',
    tech: ['Java'],
    description: 'Online bookstore application — browse and search the catalog, manage cart and orders.',
    github: 'https://github.com/awarisahil/OnlineBookStore',
    live: null,
  },
];

export const skills = [
  {
    title: 'Languages',
    items: ['Java', 'JavaScript (ES6+)', 'TypeScript', 'Python', 'C', 'C++'],
  },
  {
    title: 'Frontend',
    items: ['React.js', 'HTML5', 'CSS3', 'REST API Integration'],
  },
  {
    title: 'Backend',
    items: ['Spring Boot', 'Node.js', 'Express.js', 'Hibernate ORM', 'Prisma ORM', 'WebSockets', 'RESTful APIs', 'Zod'],
  },
  {
    title: 'Databases',
    items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis'],
  },
  {
    title: 'Tools & Practices',
    items: ['Git', 'JWT', 'Postman', 'MVC Architecture', 'Agile', 'RBAC', 'Real-time Systems', 'Secure Development'],
  },
];

export const education = [
  {
    years: '2023 — 2025',
    degree: 'M.Sc. Computer Science',
    institute: 'Modern College, Shivajinagar, Pune',
    score: 'CGPA 7.78 / 10 — 77.8%',
  },
  {
    years: '2020 — 2023',
    degree: 'B.Sc. Computer Science',
    institute: 'Nowrosjee Wadia College, Pune',
    score: 'CGPA 7.59 / 10 — 75.9%',
  },
];
