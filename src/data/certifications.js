/** Education, publications, certifications and languages. */
export const education = {
  logo: '/logos/uta.webp',
  degree: { es: 'Ingeniería en Software', en: 'Software Engineering' },
  institution: 'Universidad Técnica de Ambato',
  period: { es: '2022 – actualidad', en: '2022 – present' },
}

export const publication = {
  title:
    'Vehicle monitoring system for automobiles through license plate character recognition and sanction assessment using Mamdani fuzzy',
  venue: 'ARKSIS Journal, vol. 1, n.º 2, 2026',
  doi: '10.63957/arksis.v1i2.0011',
  url: 'https://doi.org/10.63957/arksis.v1i2.0011',
  cover: '/about/arksis-cover.webp',
}

export const paperUnderReview = {
  es: 'Artículo sobre la evaluación del riesgo materno con lógica difusa y algoritmos genéticos.',
  en: 'Paper on maternal risk assessment with fuzzy logic and genetic algorithms.',
}

/** `url`: public link to the certificate (null hides it). `links`: several certificates in one card. */
export const certifications = [
  {
    id: 'saylor-cs205',
    logo: '/logos/saylor.webp',
    brand: '#1F3B57',
    name: { es: 'Building with Artificial Intelligence', en: 'Building with Artificial Intelligence' },
    issuer: 'Saylor Academy',
    year: 2026,
    url: 'https://drive.google.com/file/d/1o9uOTbzNDgp0FU-RvXwF6KEFf0E6V_cc/view?usp=drive_link',
  },
  {
    id: 'cisco-data-science',
    logo: '/logos/cisco.webp',
    brand: '#049FD9',
    name: { es: 'Data Science Essentials with Python', en: 'Data Science Essentials with Python' },
    issuer: 'Cisco Networking Academy',
    year: 2026,
    url: 'https://drive.google.com/file/d/16m1EO9EohlfvYUejCUGlxziC1_su0Vrt/view?usp=sharing',
  },
  {
    id: 'csei-2023',
    logo: '/logos/uta.webp',
    brand: '#9E1B32',
    name: {
      es: 'Emerging Research Frontiers in Computer Science (40 h)',
      en: 'Emerging Research Frontiers in Computer Science (40 h)',
    },
    issuer: 'Universidad Técnica de Ambato',
    year: 2023,
    url: 'https://drive.google.com/file/d/1dWe30A7BZ1DsjYRZvEFYETIjPgK29EfY/view?usp=sharing',
  },
  {
    id: 'kaspersky',
    logo: '/logos/kaspersky.webp',
    brand: '#00A88E',
    name: {
      es: 'Ciberseguridad (4 cursos)',
      en: 'Cybersecurity (4 courses)',
    },
    issuer: 'Kaspersky',
    year: 2024,
    url: null,
    /** Several certificates under one card. */
    links: [
      { label: { es: 'Seguridad de servidores', en: 'Server security' }, url: 'https://drive.google.com/file/d/1N7fHnkwmheMauwabUA3HP_WXv_WcZjit/view?usp=sharing' },
      { label: { es: 'Active Directory', en: 'Active Directory' }, url: 'https://drive.google.com/file/d/1PqabxktlafwNnkqiXZS0REuDuiQEyL5X/view?usp=sharing' },
      { label: { es: 'PUP y exploits', en: 'PUPs & exploits' }, url: 'https://drive.google.com/file/d/1WiGFGVtaALeVF2JOQ-mTfuGTgNBmIPOx/view?usp=sharing' },
      { label: { es: 'Phishing y OSINT', en: 'Phishing & OSINT' }, url: 'https://drive.google.com/file/d/14RMIy3cbGij8-p9jkMl9DISo15Wf85TE/view?usp=sharing' },
    ],
  },
]

export const languages = {
  es: 'Español nativo, inglés B2',
  en: 'Spanish (native), English (B2)',
}
