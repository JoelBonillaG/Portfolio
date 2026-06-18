/**
 * Project catalog — the single source of truth for the Projects section.
 *
 * To add a project: append one object to the array below. Nothing else needs
 * to change. Each project is self-contained and bilingual.
 *
 * Fields
 *  - id        unique slug (also used for the image folder).
 *  - category  one of: fullstack | backend | ai | mobile | data | other
 *  - featured  highlight + sort to the front.
 *  - period    bilingual date range string.
 *  - stack     technology tags (language-independent).
 *  - links     { repo, demo } — null hides the button.
 *  - images    gallery; public paths, e.g. '/projects/<id>/1.webp'. [] for now.
 *  - content   { es, en } → { title, tagline, role, features[] }
 */
export const projects = [
  {
    id: 'deteccion-vehicular',
    category: 'ai',
    featured: true,
    period: { es: 'May 2026 – Jun 2026', en: 'May 2026 – Jun 2026' },
    stack: [
      'Python',
      'PyTorch',
      'TensorFlow',
      'YOLOv11',
      'U-Net',
      'CNN',
      'OpenCV',
      'FastAPI',
      'React',
    ],
    links: { repo: 'https://github.com/JoelBonillaG/Plate_Detection_Segmentation_OCR', demo: null },
    images: ['/projects/deteccion-vehicular/1.png', '/projects/deteccion-vehicular/2.png', '/projects/deteccion-vehicular/3.png', '/projects/deteccion-vehicular/4.png'],
    content: {
      es: {
        title: 'Reconocimiento de Placas y Monitoreo Vehicular',
        tagline:
          'Visión por computador para detectar, leer y sancionar placas vehiculares en tiempo real.',
        role: 'Entrenamiento de los modelos de visión, sistema difuso de sanciones e interfaz del operador.',
        features: [
          'Entrené los modelos de segmentación (U-Net) y clasificación óptica (CNN) para el reconocimiento de caracteres, alcanzando 91.42% de precisión por carácter y 94.59% de lectura completa de placa en 74 vehículos reales.',
          'Diseñé el sistema de sanciones basado en lógica difusa: clasifica la severidad de la infracción según velocidad y reincidencia para proponer días de suspensión según normativa vial.',
          'Construí la interfaz del operador en React con streaming en tiempo real, visualización del proceso de detección y OCR por placa, y panel de revisión de eventos.',
        ],
      },
      en: {
        title: 'License Plate Recognition & Vehicle Monitoring',
        tagline:
          'Computer vision to detect, read and penalize vehicle plates in real time.',
        role: 'Trained the vision models, designed the fuzzy penalty system and built the operator UI.',
        features: [
          'Trained the segmentation (U-Net) and optical classification (CNN) models for character recognition, reaching 91.42% per-character accuracy and 94.59% full-plate reading on 74 real vehicles.',
          'Designed the fuzzy-logic penalty system: it classifies infraction severity by speed and recurrence to suggest suspension days per traffic regulation.',
          'Built the React operator interface with real-time streaming, visualization of the detection and OCR process per plate, and an event review panel.',
        ],
      },
    },
  },
  {
    id: 'riesgo-materno',
    category: 'ai',
    featured: true,
    period: { es: 'Abr 2026 – Jun 2026', en: 'Apr 2026 – Jun 2026' },
    stack: [
      'Python',
      'FastAPI',
      'React',
      'TypeScript',
      'Fuzzy Logic',
      'Genetic Algorithms',
    ],
    links: { repo: 'https://github.com/JoelBonillaG/Fuzzy-Genetic-Maternal-Risk-Assessment', demo: 'https://med-maternal-risk.stratiumhub.com' },
    images: ['/projects/riesgo-materno/1.png', '/projects/riesgo-materno/2.png', '/projects/riesgo-materno/3.png'],
    content: {
      es: {
        title: 'Evaluación de Riesgo Materno (Difuso-Genético)',
        tagline:
          'Sistema difuso optimizado con algoritmos genéticos para clasificar el riesgo materno de forma explicable.',
        role: 'Motor de inferencia difusa, algoritmo genético e interfaz clínica.',
        features: [
          'Implementé el motor de inferencia difusa Mamdani para clasificar el riesgo materno en tres niveles, con variables clínicas configurables y un resultado explicable por las reglas activas.',
          'Desarrollé el algoritmo genético binario que aprende automáticamente la base de reglas difusas, validado estadísticamente contra algoritmos de referencia (RIPPER, PRISM) en 20 corridas independientes.',
          'Construí la interfaz clínica interactiva en React con sliders por variable, visualización en tiempo real de las curvas de pertenencia y panel de diagnóstico explicable.',
        ],
      },
      en: {
        title: 'Maternal Risk Assessment (Fuzzy-Genetic)',
        tagline:
          'A fuzzy system optimized with genetic algorithms to classify maternal risk explainably.',
        role: 'Fuzzy inference engine, genetic algorithm and clinical interface.',
        features: [
          'Implemented the Mamdani fuzzy inference engine to classify maternal risk into three levels, with configurable clinical variables and an output explainable by the active rules.',
          'Developed the binary genetic algorithm that automatically learns the fuzzy rule base, statistically validated against reference algorithms (RIPPER, PRISM) over 20 independent runs.',
          'Built the interactive React clinical interface with per-variable sliders, real-time membership curves and an explainable diagnosis panel.',
        ],
      },
    },
  },
  {
    id: 'petsafe',
    category: 'fullstack',
    featured: true,
    period: { es: 'Mar 2026 – May 2026', en: 'Mar 2026 – May 2026' },
    stack: [
      'NestJS',
      'Angular',
      'Flutter',
      'TypeScript',
      'Dart',
      'PostgreSQL',
      'FCM',
      'Docker',
      'CI/CD',
    ],
    links: { repo: 'https://github.com/JoelBonillaG/petsafe_movil_app', demo: 'https://pet-safe-six.vercel.app/login' },
    images: ['/projects/petsafe/1.webp'],
    content: {
      es: {
        title: 'Gestión de Clínica Veterinaria (PetSafe)',
        tagline:
          'Plataforma veterinaria web y móvil con notificaciones push y cola de atención.',
        role: 'Aplicación móvil, módulo de notificaciones full-stack y módulos de QR y cola de atención.',
        features: [
          'Desarrollé la aplicación móvil en Flutter: autenticación, perfil e historial de mascotas, notificaciones push con Firebase Cloud Messaging y una suite de pruebas E2E con Maestro (9 flujos automatizados).',
          'Implementé el módulo de notificaciones full-stack (NestJS + Angular): registro de dispositivos, gestión de lectura y conteo de pendientes, consumido desde web y móvil.',
          'Construí el módulo de código QR por mascota y la cola de atención en Angular, integrados con sus respectivos endpoints en NestJS.',
        ],
      },
      en: {
        title: 'Veterinary Clinic Management (PetSafe)',
        tagline:
          'A web + mobile veterinary platform with push notifications and an attention queue.',
        role: 'Mobile app, full-stack notifications module and the QR & attention-queue modules.',
        features: [
          'Developed the Flutter mobile app: authentication, pet profile and history, push notifications with Firebase Cloud Messaging and an E2E test suite with Maestro (9 automated flows).',
          'Implemented the full-stack notifications module (NestJS + Angular): device registration, read state and pending count, consumed from both web and mobile.',
          'Built the per-pet QR code module and the attention queue in Angular, integrated with their NestJS endpoints.',
        ],
      },
    },
  },
  {
    id: 'hospital',
    category: 'backend',
    featured: true,
    period: { es: 'Sep 2025 – Oct 2025', en: 'Sep 2025 – Oct 2025' },
    stack: [
      'Spring Boot 3',
      'Java 17',
      'Spring Cloud',
      'Eureka',
      'API Gateway',
      'OpenFeign',
      'PostgreSQL',
      'React',
      'Docker',
    ],
    links: { repo: 'https://github.com/JosueGarciaAbata/hospital-management-system', demo: null },
    images: ['/projects/hospital/1.png', '/projects/hospital/2.png', '/projects/hospital/3.png', '/projects/hospital/4.png', '/projects/hospital/5.png'],
    content: {
      es: {
        title: 'Sistema de Gestión Hospitalaria',
        tagline:
          'Arquitectura de microservicios para la gestión de pacientes y consultas médicas.',
        role: 'Microservicio de consultas desde cero y módulo de pacientes en el frontend.',
        features: [
          'Desarrollé el microservicio de consultas desde cero en una arquitectura Spring Cloud: gestión de pacientes y consultas médicas con paginación, control de acceso por rol y documentación OpenAPI.',
          'Implementé la comunicación entre servicios con OpenFeign para enriquecer las respuestas con datos de otros microservicios.',
          'Construí el módulo de pacientes y consultas en el frontend con paginación controlada desde el backend.',
        ],
      },
      en: {
        title: 'Hospital Management System',
        tagline:
          'A microservices architecture for managing patients and medical consultations.',
        role: 'Consultation microservice from scratch and the patients module on the frontend.',
        features: [
          'Built the consultation microservice from scratch in a Spring Cloud architecture: patient and consultation management with pagination, role-based access control and OpenAPI documentation.',
          'Implemented inter-service communication with OpenFeign to enrich responses with data from other microservices.',
          'Built the patients and consultations module on the frontend with backend-controlled pagination.',
        ],
      },
    },
  },
  {
    id: 'sistema-gasolina',
    category: 'backend',
    featured: true,
    period: { es: 'Oct 2025 – Dic 2025', en: 'Oct 2025 – Dec 2025' },
    stack: [
      'NestJS',
      'TypeScript',
      'gRPC',
      'Protobuf',
      'PostgreSQL',
      'Prisma',
      'React',
      'RabbitMQ',
      'Docker',
    ],
    links: { repo: 'https://github.com/DavidJosueP2/Distributed-Gasoline-System', demo: null },
    images: ['/projects/sistema-gasolina/1.png', '/projects/sistema-gasolina/2.png', '/projects/sistema-gasolina/3.png', '/projects/sistema-gasolina/4.png'],
    content: {
      es: {
        title: 'Sistema Distribuido de Gestión de Combustible',
        tagline:
          'Microservicios comunicados por gRPC para gestionar flotas, rutas y consumo de combustible.',
        role: 'Microservicios de usuarios y rutas/viajes, y sus módulos en el frontend.',
        features: [
          'Desarrollé los microservicios de usuarios y rutas/viajes con comunicación gRPC: gestión de usuarios, CRUD de rutas y ciclo de vida completo de viajes (asignación de conductor, seguimiento de ubicación, validación por tipo de licencia y cálculo de consumo de combustible estimado y real).',
          'Construí los módulos de usuarios, rutas y viajes en el frontend: vistas de gestión, formularios con validación y consumo del API gateway.',
        ],
      },
      en: {
        title: 'Distributed Fuel Management System',
        tagline:
          'gRPC-connected microservices to manage fleets, routes and fuel consumption.',
        role: 'Users and routes/trips microservices, plus their frontend modules.',
        features: [
          'Developed the users and routes/trips microservices over gRPC: user management, route CRUD and a full trip lifecycle (driver assignment, location tracking, license-type validation and estimated-vs-actual fuel calculation).',
          'Built the users, routes and trips modules on the frontend: management views, validated forms and API-gateway consumption.',
        ],
      },
    },
  },
  {
    id: 'marketplace',
    category: 'fullstack',
    featured: false,
    period: { es: 'Oct 2025 – Dic 2025', en: 'Oct 2025 – Dec 2025' },
    stack: ['Spring Boot', 'Java', 'React', 'TypeScript', 'PostgreSQL', 'Docker'],
    links: { repo: 'https://github.com/DavidJosueP2/Marketplace_Link', demo: 'https://marketplace.stratiumhub.com' },
    images: ['/projects/marketplace/1.png', '/projects/marketplace/2.png', '/projects/marketplace/3.png', '/projects/marketplace/4.png'],
    content: {
      es: {
        title: 'Gestión y Moderación de Publicaciones (Marketplace Link)',
        tagline:
          'Marketplace con publicaciones geolocalizadas y moderación automática de contenido.',
        role: 'Módulo de publicaciones full-stack y pruebas E2E.',
        features: [
          'Desarrollé el módulo de publicaciones full-stack: CRUD completo, carga y gestión de imágenes, filtros por distancia, precio y categoría, moderación automática de contenido peligroso y suspensión automática programada.',
          'Implementé pruebas E2E con Playwright para los flujos principales del módulo de publicaciones.',
        ],
      },
      en: {
        title: 'Publication Management & Moderation (Marketplace Link)',
        tagline:
          'A marketplace with geolocated listings and automatic content moderation.',
        role: 'Full-stack publications module and E2E tests.',
        features: [
          'Developed the full-stack publications module: full CRUD, image upload and management, filters by distance, price and category, automatic moderation of unsafe content and a scheduled auto-suspension task.',
          'Implemented E2E tests with Playwright for the main publication flows.',
        ],
      },
    },
  },
  {
    id: 'cliniccare',
    category: 'fullstack',
    featured: false,
    period: { es: 'Sep 2025 – Oct 2025', en: 'Sep 2025 – Oct 2025' },
    stack: [
      'Spring Boot',
      'Java 21',
      'React',
      'PostgreSQL',
      'JWT',
      'Spring Mail',
      'Docker',
    ],
    links: { repo: 'https://github.com/DRTX2/clinic', demo: null },
    images: ['/projects/cliniccare/1.png', '/projects/cliniccare/2.png', '/projects/cliniccare/3.png', '/projects/cliniccare/4.png', '/projects/cliniccare/5.png'],
    content: {
      es: {
        title: 'Sistema de Gestión Clínica (ClinicCare)',
        tagline:
          'Plataforma clínica para la gestión de citas y usuarios con autenticación segura.',
        role: 'Módulos de autenticación (full-stack) y citas (frontend).',
        features: [
          'Desarrollé el módulo de autenticación full-stack: login con JWT, rutas protegidas por rol y recuperación de contraseña por email con tokens de un solo uso y flujo OTP para el cliente móvil.',
          'Construí el módulo de citas en el frontend: calendario interactivo, formulario de creación con validación, vistas diferenciadas por rol (administrador/médico) y exportación de reportes a PDF.',
        ],
      },
      en: {
        title: 'Clinic Management System (ClinicCare)',
        tagline:
          'A clinical platform for appointment and user management with secure authentication.',
        role: 'Authentication (full-stack) and appointments (frontend) modules.',
        features: [
          'Developed the full-stack authentication module: JWT login, role-protected routes and email password recovery with single-use tokens and an OTP flow for the mobile client.',
          'Built the appointments module on the frontend: interactive calendar, validated creation form, role-specific views (admin/doctor) and PDF report export.',
        ],
      },
    },
  },
  {
    id: 'iron-zone',
    category: 'backend',
    featured: false,
    period: { es: 'Abr 2026 – Jun 2026', en: 'Apr 2026 – Jun 2026' },
    stack: ['Odoo 18', 'Python', 'PostgreSQL', 'Docker', 'XML'],
    links: { repo: 'https://github.com/JoelBonillaG/iron_zone_odoo_das', demo: 'https://iron-zone.stratiumhub.com' },
    images: ['/projects/iron-zone/1.png', '/projects/iron-zone/2.png', '/projects/iron-zone/3.png', '/projects/iron-zone/4.png', '/projects/iron-zone/5.png'],
    content: {
      es: {
        title: 'Iron Zone — Gestión de Gimnasio',
        tagline:
          'Módulo a medida sobre Odoo 18 para gestión de contenido y membresías de un gimnasio.',
        role: 'Módulo personalizado de guías de ejercicio e infraestructura del proyecto.',
        features: [
          'Desarrollé el módulo personalizado de guías de ejercicio: catálogo con control de acceso por rol (entrenador/administrador), integración con el sistema de membresías para restringir contenido premium por plan y portal web para socios.',
          'Configuré la infraestructura del proyecto con Docker Compose y scripts de carga de datos de demostración para el equipo.',
        ],
      },
      en: {
        title: 'Iron Zone — Gym Management',
        tagline:
          'A custom Odoo 18 module for managing a gym’s content and memberships.',
        role: 'Custom exercise-guide module and project infrastructure.',
        features: [
          'Developed the custom exercise-guide module: catalog with role-based access (trainer/admin), integration with the membership system to gate premium content per plan, and a member web portal.',
          'Set up the project infrastructure with Docker Compose and demo-data seeding scripts for the team.',
        ],
      },
    },
  },
  {
    id: 'microplus',
    category: 'mobile',
    featured: true,
    period: { es: '2025', en: '2025' },
    stack: ['Flutter', 'Dart', 'Firebase Cloud Messaging', 'Provider', 'REST API'],
    links: { repo: null, demo: null },
    images: [],
    content: {
      es: {
        title: 'Monitoreo Móvil de Facturación Electrónica',
        tagline:
          'App móvil real, en producción, que alerta sobre el estado de comprobantes electrónicos ante el SRI.',
        role: 'Proyecto individual de principio a fin para una empresa.',
        features: [
          'Desarrollé de forma individual una aplicación móvil en Flutter para una empresa, que resuelve la ausencia de alertas en tiempo real de un sistema contable de escritorio: consulta el estado de autorización de comprobantes electrónicos ante el SRI y notifica al instante cuando una factura es autorizada o rechazada.',
          'Implementé la configuración dinámica del servidor, autenticación JWT con refresco automático de token, monitoreo de conectividad en tiempo real y un dashboard con resumen de comprobantes filtrable por tipo y fecha.',
        ],
      },
      en: {
        title: 'Mobile E-Invoicing Monitoring',
        tagline:
          'A real, production mobile app that alerts on the authorization status of e-invoices with the tax authority.',
        role: 'Solo project, end to end, for a company.',
        features: [
          'Single-handedly built a Flutter mobile app for a company that fills a desktop accounting system’s lack of real-time alerts: it checks the authorization status of electronic invoices with the tax authority (SRI) and notifies instantly when one is approved or rejected.',
          'Implemented dynamic server configuration, JWT authentication with automatic token refresh, real-time connectivity monitoring and a dashboard summarizing invoices, filterable by type and date.',
        ],
      },
    },
  },
  {
    id: 'simulador-ahorro',
    category: 'fullstack',
    featured: false,
    period: { es: 'Abr 2025', en: 'Apr 2025' },
    stack: ['Laravel', 'PHP', 'React', 'PostgreSQL', 'JWT'],
    links: { repo: 'https://github.com/JosueGarciaAbata/savings_financial_goals', demo: null },
    images: [],
    content: {
      es: {
        title: 'Simulador de Metas de Ahorro',
        tagline:
          'Aplicación de metas de ahorro con autenticación, notificaciones y reportes.',
        role: 'Autenticación en el backend y sistema de notificaciones y reportes.',
        features: [
          'Implementé el módulo de autenticación en el backend con JWT: registro, login, gestión de perfil y cierre de sesión.',
          'Desarrollé el sistema de notificaciones por email y la generación de reportes PDF: alertas de inactividad, recordatorios con monto semanal recomendado y reportes de progreso por meta, categoría y estado.',
        ],
      },
      en: {
        title: 'Savings Goals Simulator',
        tagline:
          'A savings-goals app with authentication, notifications and reports.',
        role: 'Backend authentication and the notifications & reporting system.',
        features: [
          'Implemented the backend authentication module with JWT: registration, login, profile management and logout.',
          'Developed the email notification system and PDF report generation: inactivity alerts, reminders with a recommended weekly amount and progress reports by goal, category and status.',
        ],
      },
    },
  },
  {
    id: 'mantenimiento-equipos',
    category: 'fullstack',
    featured: false,
    period: { es: 'Dic 2024 – Ene 2025', en: 'Dec 2024 – Jan 2025' },
    stack: ['Laravel', 'PHP', 'React', 'PostgreSQL', 'JWT'],
    links: { repo: 'https://github.com/JosueGarciaAbata/agiles-proyecto', demo: null },
    images: ['/projects/mantenimiento-equipos/1.png'],
    content: {
      es: {
        title: 'Gestión de Mantenimiento de Equipos',
        tagline:
          'Plataforma para gestionar activos, proveedores y el mantenimiento de equipos.',
        role: 'Módulos de inventario y autenticación con control de acceso.',
        features: [
          'Desarrollé los módulos de activos, categorías, ubicaciones, proveedores e ingresos en el backend: CRUD completo con validaciones, relaciones entre modelos y datos iniciales.',
          'Implementé la autenticación con JWT y el control de acceso por rol en las rutas de la API.',
        ],
      },
      en: {
        title: 'Equipment Maintenance Management',
        tagline:
          'A platform to manage assets, suppliers and equipment maintenance.',
        role: 'Inventory modules and authentication with access control.',
        features: [
          'Developed the assets, categories, locations, suppliers and income modules on the backend: full CRUD with validations, model relationships and initial data.',
          'Implemented JWT authentication and role-based access control on the API routes.',
        ],
      },
    },
  },
  {
    id: 'data-warehouse-hefesto',
    category: 'data',
    featured: false,
    period: { es: '2025', en: '2025' },
    stack: ['SQL Server', 'SSIS', 'SSAS', 'MDX', 'Excel'],
    links: { repo: 'https://github.com/JoelBonillaG/Proyecto_Hefesto', demo: null },
    images: [],
    content: {
      es: {
        title: 'Data Warehouse con Metodología Hefesto',
        tagline:
          'Solución de inteligencia de negocios end to end: del modelo dimensional al dashboard.',
        role: 'Diseño del modelo, ETL, cubo OLAP y dashboard.',
        features: [
          'Diseñé e implementé un Data Warehouse sobre AdventureWorks 2022 aplicando la metodología Hefesto: modelo estrella con tablas de hechos de ventas y dimensiones de productos, vendedores, fechas, territorios y monedas.',
          'Construí el pipeline ETL con SSIS para poblar el DW, desplegué un cubo OLAP multidimensional en SSAS y un dashboard analítico en Excel conectado al cubo.',
        ],
      },
      en: {
        title: 'Data Warehouse with Hefesto Methodology',
        tagline:
          'An end-to-end business-intelligence solution: from the dimensional model to the dashboard.',
        role: 'Dimensional modeling, ETL, OLAP cube and dashboard.',
        features: [
          'Designed and implemented a Data Warehouse over AdventureWorks 2022 using the Hefesto methodology: a star schema with sales fact tables and product, salesperson, date, territory and currency dimensions.',
          'Built the ETL pipeline with SSIS to populate the DW, deployed a multidimensional OLAP cube in SSAS and an analytical Excel dashboard connected to the cube.',
        ],
      },
    },
  },
  {
    id: 'unity-game',
    category: 'other',
    featured: false,
    period: { es: 'Jun 2025 – Jul 2025', en: 'Jun 2025 – Jul 2025' },
    stack: ['Unity', 'C#', 'Zenject', 'SQLite', 'Clean Architecture'],
    links: { repo: 'https://github.com/DRTX2/PatternsProject', demo: null },
    images: [],
    content: {
      es: {
        title: 'Videojuego 2D con Arquitectura Limpia',
        tagline:
          'Juego 2D en Unity que aplica arquitectura limpia, inyección de dependencias y persistencia local.',
        role: 'Sistema de autenticación y persistencia, y todas las pantallas del juego.',
        features: [
          'Implementé el sistema de autenticación y persistencia del juego: login, registro y guardado/carga de partida con SQLite bajo arquitectura limpia con inyección de dependencias (Zenject).',
          'Desarrollé todas las pantallas del juego: menú principal, pausa, game over y login/registro, con la lógica desacoplada de la interfaz.',
        ],
      },
      en: {
        title: '2D Game with Clean Architecture',
        tagline:
          'A 2D Unity game applying clean architecture, dependency injection and local persistence.',
        role: 'Authentication & persistence system and all game screens.',
        features: [
          'Implemented the game’s authentication and persistence system: login, registration and save/load with SQLite under clean architecture with dependency injection (Zenject).',
          'Developed all the game screens: main menu, pause, game over and login/registration, with logic decoupled from the UI.',
        ],
      },
    },
  },
  {
    id: 'pagina-votaciones',
    category: 'other',
    featured: false,
    period: { es: 'Oct 2024', en: 'Oct 2024' },
    stack: ['Laravel', 'PHP', 'Blade', 'Tailwind CSS', 'MySQL'],
    links: { repo: 'https://github.com/JoelBonillaG/Pagina_Votaciones_UTA', demo: null },
    images: ['/projects/pagina-votaciones/1.jpeg'],
    content: {
      es: {
        title: 'Sitio Web de Campaña Electoral',
        tagline:
          'Plataforma electoral con información de candidatos, propuestas, eventos y estadísticas.',
        role: 'Estructura base del sitio y página de inicio con datos dinámicos.',
        features: [
          'Construí la estructura base del sitio (header, navbar, footer) e implementé la página de inicio completa con datos dinámicos: presentación del candidato, misión/visión, propuestas, próximos eventos y cuenta regresiva con contador de apoyos en tiempo real.',
          'Integré la base de datos en la página de inicio para mostrar de forma dinámica la información del partido, candidatos, propuestas y votos registrados.',
        ],
      },
      en: {
        title: 'Electoral Campaign Website',
        tagline:
          'An electoral platform with candidate info, proposals, events and statistics.',
        role: 'Base site structure and the data-driven home page.',
        features: [
          'Built the base site structure (header, navbar, footer) and implemented the full home page with dynamic data: candidate presentation, mission/vision, proposals, upcoming events and a voting countdown with a real-time support counter.',
          'Integrated the database into the home page to dynamically display party, candidate, proposal and vote information.',
        ],
      },
    },
  },
  {
    id: 'creative-portfolio',
    category: 'other',
    featured: false,
    period: { es: 'Mar 2024 – Abr 2024', en: 'Mar 2024 – Apr 2024' },
    stack: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    links: { repo: 'https://github.com/JosueGarciaAbata/proyecto-mds', demo: null },
    images: [],
    content: {
      es: {
        title: 'Plataforma de Portafolios Creativos',
        tagline:
          'Aplicación web sin frameworks con autenticación completa y área de usuario.',
        role: 'Estructura base de la aplicación y módulo de autenticación.',
        features: [
          'Desarrollé la estructura base de la aplicación: landing page, navegación, layout del área autenticada y páginas de error.',
          'Implementé el módulo de autenticación completo (registro, login, recuperación de contraseña por email con PHPMailer y edición de perfil) con cifrado de contraseñas y validaciones.',
        ],
      },
      en: {
        title: 'Creative Portfolio Platform',
        tagline:
          'A framework-free web app with complete authentication and a user area.',
        role: 'Base application structure and the authentication module.',
        features: [
          'Developed the base application structure: landing page, navigation, authenticated-area layout and error pages.',
          'Implemented the complete authentication module (registration, login, email password recovery with PHPMailer and profile editing) with password hashing and validations.',
        ],
      },
    },
  },
]

/** Filter categories in display order. Labels come from i18n. */
export const projectCategories = [
  'all',
  'fullstack',
  'backend',
  'ai',
  'mobile',
  'data',
  'other',
]
