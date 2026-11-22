/**
 * Work experience, newest first. Copy is recruiter-facing: responsibilities
 * and impact; technologies live only in `stack`.
 */
export const experience = [
  {
    id: 'kronhos',
    company: 'Kronhos',
    logo: '/experience/kronhos.webp',
    period: { es: 'Ene 2026 – Jun 2026', en: 'Jan 2026 – Jun 2026' },
    stack: ['SQL Server', 'T-SQL', 'Power BI', 'Power Query', 'DAX'],
    content: {
      es: {
        role: 'Analista de Datos y BI',
        context: 'Empresa de software que desarrolla un ERP comercial',
        highlights: [
          'Desarrollé reportes para más de 5 empresas clientes de Kronhos que usan su ERP, para que sus equipos tomen decisiones con datos al día.',
          'Optimicé las consultas detrás de los reportes existentes y reduje su tiempo en un 60 % en promedio.',
          'Automaticé la preparación de los datos y definí los indicadores comerciales que usan los reportes.',
        ],
      },
      en: {
        role: 'Data & BI Analyst',
        context: 'Software company that builds a commercial ERP',
        highlights: [
          'Built reports for more than 5 Kronhos client companies running its ERP, so their teams decide with up-to-date data.',
          'Optimized the queries behind existing reports and cut their run time by 60% on average.',
          'Automated data preparation and defined the business KPIs the reports rely on.',
        ],
      },
    },
  },
  {
    id: 'vaz-sport',
    company: 'Vaz Sport',
    logo: '/experience/vazsport.webp',
    period: { es: 'Jul 2025 – Dic 2025', en: 'Jul 2025 – Dec 2025' },
    stack: ['PHP', 'Laravel', 'JavaScript', 'Angular', 'PostgreSQL'],
    content: {
      es: {
        role: 'Desarrollador y soporte de sistemas',
        context: 'Marca de ropa deportiva',
        highlights: [
          'Desarrollé el sistema de gestión de producción con el que la empresa coordina sus distintas áreas productivas, y mantuve sus aplicaciones internas.',
          'Administré los servidores de la empresa: respaldos, actualizaciones y monitoreo.',
          'Gestioné los usuarios y accesos, y di soporte técnico al personal.',
        ],
      },
      en: {
        role: 'Developer & systems support',
        context: 'Sportswear brand',
        highlights: [
          'Built the production management system the company uses to coordinate its production areas, and maintained its internal apps.',
          'Ran the company servers: backups, updates and monitoring.',
          'Managed users and access, and provided technical support to staff.',
        ],
      },
    },
  },
]
