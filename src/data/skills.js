/** Hero logo row: the 7 technologies Joel can defend best, backend first. */
export const heroStack = ['Python', 'Spring Boot', 'TypeScript', 'React', 'Angular', 'SQL Server', 'Docker']

/** Technical skills as plain rows (keywords a recruiter scans for). */
export const technicalSkills = [
  { label: { es: 'Lenguajes', en: 'Languages' }, items: ['Python', 'Java', 'TypeScript', 'PHP', 'Dart'] },
  { label: { es: 'Backend', en: 'Backend' }, items: ['Spring Boot', 'NestJS', 'FastAPI', 'Laravel', 'gRPC'] },
  { label: { es: 'Frontend y móvil', en: 'Frontend & mobile' }, items: ['React', 'Angular', 'Flutter'] },
  { label: { es: 'Datos', en: 'Data' }, items: ['SQL Server', 'PostgreSQL', 'Power BI'] },
  { label: { es: 'Calidad y entrega', en: 'Quality & delivery' }, items: ['Docker', 'GitHub Actions', 'JUnit', 'Playwright', 'Git'] },
  { label: { es: 'Metodologías', en: 'Methodologies' }, items: ['Scrum', 'XP'] },
]

/** Soft skills, each with one line of proof. */
/** Soft skills: `stat` is the checkable figure shown big above each one. */
export const softSkills = [
  {
    es: { title: 'Resolución de problemas', stat: { value: '15', label: 'proyectos desarrollados' }, proof: 'Busco la causa de un problema antes de resolverlo y compruebo que la solución funcione.' },
    en: { title: 'Problem solving', stat: { value: '15', label: 'projects built' }, proof: 'I look for the root cause before fixing a problem and check that the fix works.' },
  },
  {
    es: { title: 'Trabajo en equipo', stat: { value: '7', label: 'integrantes en mi equipo más grande' }, proof: 'Me organizo bien en equipos ágiles: cumplo mis tareas, comunico avances y apoyo a mis compañeros cuando lo necesitan.' },
    en: { title: 'Teamwork', stat: { value: '7', label: 'members in my largest team' }, proof: 'I work well in agile teams: I deliver my tasks, share progress and help teammates when they need it.' },
  },
  {
    es: { title: 'Comunicación', stat: { value: '2', label: 'idiomas de trabajo: español e inglés B2' }, proof: 'Explico ideas técnicas de forma clara, tanto a perfiles técnicos como de negocio.' },
    en: { title: 'Communication', stat: { value: '2', label: 'working languages: Spanish and English B2' }, proof: 'I explain technical ideas clearly to both technical and business people.' },
  },
  {
    es: { title: 'Aprendizaje continuo', stat: { value: '7', label: 'certificados' }, proof: 'Me adapto rápido a nuevas tecnologías y herramientas, y las aplico en proyectos reales.' },
    en: { title: 'Continuous learning', stat: { value: '7', label: 'certificates' }, proof: 'I adapt quickly to new technologies and tools, and apply them in real projects.' },
  },
]
