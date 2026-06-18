/**
 * Technical skills grouped by category and soft skills.
 *
 * `icon` is a lucide-react icon name resolved in the Skills section.
 * Category names are bilingual; soft-skill copy lives in the i18n files
 * (referenced here by `key`).
 */
export const skillCategories = [
  {
    id: 'languages',
    icon: 'Code2',
    name: { es: 'Lenguajes', en: 'Languages' },
    items: ['Java', 'TypeScript', 'JavaScript', 'Python', 'C#', 'Dart', 'PHP', 'SQL'],
  },
  {
    id: 'frontend',
    icon: 'LayoutDashboard',
    name: { es: 'Frontend', en: 'Frontend' },
    items: ['React', 'Angular', 'Tailwind CSS', 'HTML', 'CSS', 'Vite'],
  },
  {
    id: 'backend',
    icon: 'Server',
    name: { es: 'Backend', en: 'Backend' },
    items: [
      'Spring Boot',
      'Spring Cloud',
      'NestJS',
      'Node.js',
      'Laravel',
      'FastAPI',
      '.NET',
    ],
  },
  {
    id: 'mobile',
    icon: 'Smartphone',
    name: { es: 'Móvil', en: 'Mobile' },
    items: ['Flutter', 'Firebase Cloud Messaging'],
  },
  {
    id: 'databases',
    icon: 'Database',
    name: { es: 'Bases de datos', en: 'Databases' },
    items: ['PostgreSQL', 'MySQL', 'SQL Server', 'SQLite', 'Oracle'],
  },
  {
    id: 'ai-data',
    icon: 'BrainCircuit',
    name: { es: 'IA & Datos', en: 'AI & Data' },
    items: [
      'PyTorch',
      'TensorFlow',
      'OpenCV',
      'scikit-learn',
      'pandas',
      'NumPy',
      'SSIS',
      'SSAS',
    ],
  },
  {
    id: 'devops',
    icon: 'Cloud',
    name: { es: 'DevOps & Cloud', en: 'DevOps & Cloud' },
    items: ['Docker', 'Kubernetes', 'CI/CD', 'GitHub Actions', 'Nginx', 'Azure'],
  },
  {
    id: 'architecture',
    icon: 'Network',
    name: { es: 'Arquitectura', en: 'Architecture' },
    items: [
      'REST APIs',
      'Microservicios',
      'gRPC',
      'WebSockets',
      'JWT',
      'Clean Architecture',
      'SOLID',
    ],
  },
  {
    id: 'testing',
    icon: 'FlaskConical',
    name: { es: 'Testing & Calidad', en: 'Testing & Quality' },
    items: ['JUnit', 'Playwright', 'Selenium', 'Maestro', 'SonarQube', 'Postman'],
  },
  {
    id: 'tools',
    icon: 'Wrench',
    name: { es: 'Herramientas & Métodos', en: 'Tools & Methods' },
    items: ['Git', 'Linux', 'Scrum', 'Odoo', 'Jira', 'Notion'],
  },
]

/** Soft skills — copy comes from i18n (`soft.<key>.title/desc`). */
export const softSkills = [
  { key: 'teamwork', icon: 'Users' },
  { key: 'proactivity', icon: 'Lightbulb' },
  { key: 'communication', icon: 'MessagesSquare' },
  { key: 'learning', icon: 'GraduationCap' },
  { key: 'responsibility', icon: 'ShieldCheck' },
  { key: 'problemSolving', icon: 'Puzzle' },
]
