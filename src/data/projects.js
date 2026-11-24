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
 *  - links     { repo, demo, paper? } — null/absent hides the button.
 *  - images    gallery; public paths. images[0] is the card cover.
 *  - metrics   [{ value, label: { es, en } }] — headline numbers. [] if none.
 *  - team      team size (1 = solo, 0 = team of unknown size). Credit line.
 *  - focus     fullstack | backend | data-ai | mobile (archive filter).
 *  - order     position among the 4 featured cards on the home page.
 *  - hidden    true keeps the entry out of the site.
 *  - badge     'paper' (published) | 'review' (under review).
 *  - card      { es, en } → { problem, solution, part, result, flow[3] }
 *  - status    optional: 'production' shows an "in production" badge.
 *  - pipeline  optional (AI): ordered stages, string or { es, en }.
 *  - content   { es, en } → { title, tagline, overview, role, features[] }
 *              overview = what the project is · role = my contribution
 */
export const projects = [
  {
    id: 'brunexa-inversiones',
    focus: 'fullstack',
    order: 1,
    team: 0,
    category: 'fullstack',
    featured: true,
    period: { es: 'Sep 2026', en: 'Sep 2026' },
    stack: ['Java', 'Spring Boot', 'React', 'TypeScript', 'PostgreSQL', 'JUnit'],
    links: { repo: 'https://github.com/DavidJosueP2/Banking-Credit-Investment-Simulator', demo: null },
    images: ['/projects/brunexa-inversiones/1.webp', '/projects/brunexa-inversiones/2.webp', '/projects/brunexa-inversiones/3.webp', '/projects/brunexa-inversiones/4.webp', '/projects/brunexa-inversiones/5.webp'],
    metrics: [],
    card: {
      es: {
        problem: 'El cliente no sabe cuánto gana realmente después de la tasa por monto y plazo y la retención del impuesto.',
        solution: 'Un simulador que calcula el rendimiento real con tasas, retención y costos, y entrega el detalle en PDF.',
        part: 'Me encargué del módulo completo: los cálculos financieros, la configuración de productos, el reporte descargable y la pantalla del cliente.',
        result: 'El banco cambia tasas y productos sin programar, y cada cálculo está cubierto por pruebas.',
        flow: ['Monto y plazo', 'Tasas e impuestos', 'Rendimiento real'],
      },
      en: {
        problem: 'Customers can’t tell how much they really earn once rates by amount and term and income-tax withholding apply.',
        solution: 'A simulator that computes the real return with rates, withholding and fees, and delivers the breakdown as a PDF.',
        part: 'I owned the whole module: the financial calculations, product configuration, the downloadable report and the customer screen.',
        result: 'The bank changes rates and products without coding, and every calculation is covered by tests.',
        flow: ['Amount and term', 'Rates and taxes', 'Real return'],
      },
    },
    content: {
      es: {
        title: 'Brunexa: banca en línea',
        tagline: 'Banca en línea con simuladores de crédito e inversión y registro con verificación de identidad. Mi parte: el módulo de inversiones.',
        overview:
          'Brunexa es una banca en línea desarrollada en equipo. El módulo de inversiones permite a un cliente simular cuánto ganaría con un producto a plazo: la tasa depende del monto y del plazo, se descuentan la retención del impuesto a la renta y los costos adicionales, y el resultado se entrega como una tabla de pagos y un reporte en PDF. El banco configura sus productos, rangos de tasas y retenciones desde un panel de administración, sin tocar código.',
        role: 'Desarrollé el módulo de inversiones completo, del cálculo a la pantalla del cliente.',
        features: [
          'Motor de cálculo con tasas por rangos de monto y plazo, retención del impuesto a la renta y costos adicionales.',
          'Simulación por meta: el cliente indica cuánto quiere reunir y el sistema le muestra si el plan lo permite.',
          'Tabla de pagos y reporte descargable en PDF.',
          'Panel para que el administrador configure productos, tasas y retenciones, con validaciones que evitan rangos incompletos o superpuestos.',
          'Pruebas unitarias del motor de cálculo.',
        ],
      },
      en: {
        title: 'Brunexa: online banking',
        tagline: 'An online bank with credit and investment simulators and sign-up with identity verification. My part: the investment module.',
        overview:
          'Brunexa is an online bank built as a team. Its investment module lets a customer simulate how much a term product would earn: the rate depends on amount and term, income-tax withholding and extra fees are deducted, and the result comes as a payment schedule and a PDF report. The bank configures its products, rate ranges and withholdings from an admin panel, without touching code.',
        role: 'I built the whole investment module, from the calculations to the customer screen.',
        features: [
          'Calculation engine with rates by amount and term ranges, income-tax withholding and extra fees.',
          'Goal-based simulation: the customer sets how much they want to reach and the system shows whether the plan allows it.',
          'Payment schedule and downloadable PDF report.',
          'Admin panel to configure products, rates and withholdings, with validations that block incomplete or overlapping ranges.',
          'Unit tests for the calculation engine.',
        ],
      },
    },
  },
  {
    id: 'procesamiento-imagenes',
    focus: 'data-ai',
    team: 0,
    category: 'ai',
    featured: false,
    period: { es: 'Abr 2026', en: 'Apr 2026' },
    stack: ['Python', 'NumPy', 'OpenCV'],
    links: { repo: 'https://github.com/JoelBonillaG/procesamiento_imagenes', demo: null },
    images: ['/projects/procesamiento-imagenes/1.webp', '/projects/procesamiento-imagenes/2.webp', '/projects/procesamiento-imagenes/3.webp'],
    metrics: [],
    content: {
      es: {
        title: 'Procesamiento digital de imágenes',
        tagline: 'App de escritorio que muestra cada etapa del procesamiento, de la foto original a las regiones detectadas.',
        overview:
          'Una aplicación de escritorio que recorre todo el procesamiento digital de una imagen: escala de grises, ruido, suavizado, realce, umbralización, bordes y extracción de regiones. Cada etapa es un panel interactivo y los filtros están programados desde cero, para ver qué hace cada uno por dentro en lugar de usarlo como una caja negra. Es la base transparente de un sistema de reconocimiento de placas.',
        role: 'Programé los filtros de suavizado desde cero, sin depender de una librería.',
        features: [
          'Implementé los filtros de suavizado con una convolución 2D escrita a mano.',
          'Los integré en el pipeline interactivo, donde cambiar un parámetro recalcula todas las etapas siguientes.',
        ],
      },
      en: {
        title: 'Digital image processing',
        tagline: 'Desktop app that shows every processing stage, from the raw photo to the detected regions.',
        overview:
          'A desktop application that walks the full digital image processing pipeline: grayscale, noise, smoothing, sharpening, thresholding, edges and region extraction. Every stage is an interactive panel and the filters are written from scratch, so you can see what each one does inside instead of using it as a black box. It is the transparent groundwork of a plate recognition system.',
        role: 'I wrote the smoothing filters from scratch, without relying on a library.',
        features: [
          'Implemented the smoothing filters with a hand-written 2D convolution.',
          'Integrated them into the interactive pipeline, where changing a parameter recomputes every later stage.',
        ],
      },
    },
  },
  {
    id: 'textflow',
    focus: 'fullstack',
    team: 0,
    category: 'fullstack',
    featured: false,
    period: { es: 'Ago 2026 – Nov 2026', en: 'Aug 2026 – Nov 2026' },
    stack: ['Angular', 'Spring Boot', 'PostgreSQL', 'Docker'],
    links: { repo: null, demo: null },
    images: ['/projects/textflow/1.webp', '/projects/textflow/2.webp', '/projects/textflow/3.webp', '/projects/textflow/4.webp'],
    metrics: [],
    content: {
      es: {
        title: 'TextFlow · editor LaTeX seguro',
        tagline: 'Editor web de documentos LaTeX con compilación aislada y seguridad en cada capa.',
        overview:
          'TextFlow es un editor web para escribir, compilar y compartir documentos LaTeX, construido en equipo con la seguridad como prioridad: cada documento se compila en un contenedor aislado, los datos viajan y se guardan cifrados, y el acceso se valida por rol en cada proyecto.',
        role: 'Creé el repositorio base y la primera versión de la sección de proyectos, y di soporte al equipo durante el desarrollo.',
        features: [
          'Inicialicé el repositorio y la estructura base del proyecto.',
          'Construí la primera versión de la sección de proyectos del editor.',
          'Apoyé al equipo en la coordinación y en el seguimiento del avance.',
        ],
      },
      en: {
        title: 'TextFlow · secure LaTeX editor',
        tagline: 'Web LaTeX editor with isolated compilation and security at every layer.',
        overview:
          'TextFlow is a web editor to write, compile and share LaTeX documents, built as a team with security first: every document compiles in an isolated container, data travels and is stored encrypted, and access is checked by role on each project.',
        role: 'I set up the base repository and the first version of the projects section, and supported the team during development.',
        features: [
          'Initialized the repository and the project’s base structure.',
          'Built the first version of the editor’s projects section.',
          'Supported the team with coordination and progress tracking.',
        ],
      },
    },
  },
  {
    id: 'deteccion-vehicular',
    badge: 'paper',
    focus: 'data-ai',
    order: 4,
    card: {
      es: {
        title: 'Monitoreo UTA: lectura de placas con IA',
        problem: 'El control vehicular en accesos es manual, lento y no deja registro.',
        solution: 'Un sistema que reconoce el vehículo con una cámara, lee su placa y propone una sanción explicable según velocidad y reincidencia.',
        part: 'Entrené los modelos que leen cada carácter de la placa y diseñé las reglas que proponen la sanción.',
        result: '94.59 % de placas leídas completas en 74 vehículos reales.',
        flow: ['Cámara', 'Lee la placa', 'Sugiere sanción'],
      },
      en: {
        title: 'Monitoreo UTA: AI license plate reading',
        problem: 'Vehicle access control is manual, slow and leaves no record.',
        solution: 'A system that spots the vehicle on camera, reads its plate and suggests an explainable penalty based on speed and repeat offenses.',
        part: 'I trained the models that read each plate character and designed the rules that suggest the penalty.',
        result: '94.59% of plates read in full across 74 real vehicles.',
        flow: ['Camera', 'Reads the plate', 'Suggests a penalty'],
      },
    },
    team: 2,
    pipeline: ['Cámara', 'YOLOv11', 'U-Net', 'CNN', 'Mamdani'],
    category: 'ai',
    featured: true,
    period: { es: 'May 2026 – Jun 2026', en: 'May 2026 – Jun 2026' },
    stack: ['Python', 'PyTorch', 'TensorFlow', 'YOLOv11', 'U-Net', 'CNN', 'OpenCV', 'FastAPI', 'React'],
    links: { repo: 'https://github.com/JoelBonillaG/Plate_Detection_Segmentation_OCR', demo: null, paper: 'https://doi.org/10.63957/arksis.v1i2.0011' },
    images: ['/projects/deteccion-vehicular/1.webp', '/projects/deteccion-vehicular/2.webp', '/projects/deteccion-vehicular/3.webp', '/projects/deteccion-vehicular/4.webp'],
    metrics: [
      { value: '94.59%', label: { es: 'lectura completa de placa', en: 'full-plate reading' } },
      { value: '96.13%', label: { es: 'mAP50 del detector (equipo)', en: 'detector mAP50 (team)' } },
      { value: '91.42%', label: { es: 'precisión por carácter', en: 'per-character accuracy' } },
      { value: '74', label: { es: 'vehículos reales evaluados', en: 'real vehicles tested' } },
    ],
    content: {
      es: {
        title: 'Reconocimiento de Placas y Monitoreo Vehicular',
        tagline: 'Visión por computador para detectar, leer y sancionar placas vehiculares en tiempo real.',
        overview:
          'Sistema de visión por computador de extremo a extremo para el control vehicular en accesos y vías internas. Toma el video de una cámara, detecta cada vehículo con YOLOv11, recorta la placa y la lee carácter por carácter combinando una U-Net que segmenta los caracteres y una CNN que los clasifica, con un post-procesamiento que descarta falsos positivos como tornillos o regiones espurias. A partir de la velocidad estimada y la reincidencia, un motor difuso Mamdani propone una sanción graduada e interpretable —no una caja negra—. Todo el flujo se integra en una aplicación web de monitoreo en tiempo real y se evaluó sobre vehículos reales en vía.',
        role: 'Entrené los modelos de visión (U-Net y CNN), diseñé el sistema difuso de sanciones y construí la interfaz del operador.',
        features: [
          'Entrené los modelos de segmentación (U-Net) y clasificación óptica (CNN) para el reconocimiento de caracteres, alcanzando 91.42% de precisión por carácter y 94.59% de lectura completa de placa en 74 vehículos reales.',
          'Diseñé el sistema de sanciones basado en lógica difusa: clasifica la severidad de la infracción según velocidad y reincidencia para proponer días de suspensión según normativa vial.',
          'Construí la interfaz del operador en React con streaming en tiempo real, visualización del proceso de detección y OCR por placa, y panel de revisión de eventos.',
        ],
      },
      en: {
        title: 'License Plate Recognition & Vehicle Monitoring',
        tagline: 'Computer vision to detect, read and penalize vehicle plates in real time.',
        overview:
          'An end-to-end computer-vision system for vehicle control at entrances and internal roads. It takes a camera feed, detects each vehicle with YOLOv11, crops the plate and reads it character by character by combining a U-Net that segments the characters and a CNN that classifies them, with post-processing that discards false positives such as screws or spurious regions. From the estimated speed and recurrence, a Mamdani fuzzy engine proposes a graded, interpretable sanction — not a black box. The whole flow is wrapped in a real-time web monitoring application and was evaluated on real vehicles on the road.',
        role: 'I trained the vision models (U-Net and CNN), designed the fuzzy sanction system and built the operator interface.',
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
    badge: 'review',
    focus: 'data-ai',
    order: 5,
    card: {
      es: {
        title: 'Riesgo materno: IA explicable para el embarazo',
        problem: 'El personal de salud necesita clasificar el riesgo de un embarazo sin depender de una caja negra.',
        solution: 'Un sistema que clasifica el riesgo en tres niveles a partir de seis signos vitales y explica cada resultado.',
        part: 'Diseñé el motor que razona con las reglas clínicas y el algoritmo que aprende esas reglas a partir de datos reales.',
        result: '159 reglas aprendidas de 8.640 posibles, validadas frente a RIPPER y PRISM.',
        flow: ['Signos vitales', 'Reglas clínicas', 'Riesgo explicado'],
      },
      en: {
        title: 'Maternal risk: explainable AI for pregnancy',
        problem: 'Health staff need to classify pregnancy risk without relying on a black box.',
        solution: 'A system that classifies risk into three levels from six vital signs and explains every result.',
        part: 'I designed the engine that reasons with clinical rules and the algorithm that learns those rules from real data.',
        result: '159 rules learned out of 8,640 possible, validated against RIPPER and PRISM.',
        flow: ['Vital signs', 'Clinical rules', 'Explained risk'],
      },
    },
    team: 3,
    pipeline: [{ es: 'Signos vitales', en: 'Vital signs' }, { es: 'Fuzzificación', en: 'Fuzzification' }, { es: 'Alg. genético', en: 'Genetic alg.' }, { es: 'Riesgo explicable', en: 'Explainable risk' }],
    category: 'ai',
    featured: true,
    period: { es: 'Abr 2026 – Jun 2026', en: 'Apr 2026 – Jun 2026' },
    stack: ['Python', 'FastAPI', 'React', 'TypeScript', 'Fuzzy Logic', 'Genetic Algorithms'],
    links: { repo: 'https://github.com/JoelBonillaG/Fuzzy-Genetic-Maternal-Risk-Assessment', demo: null },
    images: ['/projects/riesgo-materno/1.webp', '/projects/riesgo-materno/2.webp', '/projects/riesgo-materno/3.webp', '/projects/riesgo-materno/4.webp'],
    metrics: [
      { value: '159', label: { es: 'reglas aprendidas (de 8.640)', en: 'learned rules (of 8,640)' } },
      { value: '3', label: { es: 'niveles de riesgo', en: 'risk levels' } },
      { value: '6', label: { es: 'signos vitales de entrada', en: 'vital-sign inputs' } },
      { value: '20', label: { es: 'corridas de validación', en: 'validation runs' } },
    ],
    content: {
      es: {
        title: 'Evaluación de Riesgo Materno (Difuso-Genético)',
        tagline: 'Sistema difuso optimizado con algoritmos genéticos para clasificar el riesgo materno de forma explicable.',
        overview:
          'Sistema de apoyo a la decisión clínica que estima si un embarazo es de riesgo bajo, medio o alto a partir de seis signos vitales rutinarios. Cada variable se modela con curvas de pertenencia difusas y un motor de inferencia Mamdani fusiona las reglas activas para producir un resultado que puede leerse y auditarse regla por regla, en lugar de un número sin explicación. La parte central es que las reglas no se escriben a mano: un algoritmo genético (enfoque Michigan) las aprende automáticamente, y se comparan de forma honesta contra RIPPER y PRISM evaluados dentro del mismo motor. El backend está en Python con FastAPI y el frontend en React, pensado para que el personal de salud entienda el porqué de cada predicción.',
        role: 'Implementé el motor de inferencia difusa, el algoritmo genético que aprende las reglas y la interfaz clínica.',
        features: [
          'Implementé el motor de inferencia difusa Mamdani para clasificar el riesgo materno en tres niveles, con variables clínicas configurables y un resultado explicable por las reglas activas.',
          'Desarrollé el algoritmo genético binario que aprende automáticamente la base de reglas difusas, reduciendo un espacio de 8.640 reglas candidatas a una base compacta de 159 reglas, validado estadísticamente contra RIPPER y PRISM en 20 corridas independientes.',
          'Construí la interfaz clínica interactiva en React con sliders por variable, visualización en tiempo real de las curvas de pertenencia y panel de diagnóstico explicable.',
        ],
      },
      en: {
        title: 'Maternal Risk Assessment (Fuzzy-Genetic)',
        tagline: 'A fuzzy system optimized with genetic algorithms to classify maternal risk explainably.',
        overview:
          'A clinical decision-support system that estimates whether a pregnancy is at low, mid or high risk from six routine vital signs. Each variable is modelled with fuzzy membership curves and a Mamdani inference engine combines the active rules into a result that can be read and audited rule by rule, instead of an unexplained number. The key part is that the rules are not written by hand: a genetic algorithm (Michigan approach) learns them automatically, and they are compared honestly against RIPPER and PRISM evaluated inside the same engine. The backend is Python with FastAPI and the frontend is React, designed so health staff understand the reason behind each prediction.',
        role: 'I implemented the fuzzy inference engine, the genetic algorithm that learns the rules and the clinical interface.',
        features: [
          'Implemented the Mamdani fuzzy inference engine to classify maternal risk into three levels, with configurable clinical variables and an output explainable by the active rules.',
          'Developed the binary genetic algorithm that automatically learns the fuzzy rule base, shrinking a space of 8,640 candidate rules into a compact base of 159 rules, statistically validated against RIPPER and PRISM over 20 independent runs.',
          'Built the interactive React clinical interface with per-variable sliders, real-time membership curves and an explainable diagnosis panel.',
        ],
      },
    },
  },
  {
    id: 'petsafe',
    focus: 'fullstack',
    order: 2,
    card: {
      es: {
        title: 'PetSafe: clínica veterinaria web y móvil',
        problem: 'Una clínica veterinaria lleva citas, historiales y avisos a los dueños por canales separados y a mano.',
        solution: 'Una plataforma web para el personal y una app móvil para los dueños: citas, cola de atención, historial clínico y avisos al instante.',
        part: 'Desarrollé la app móvil de los dueños, las notificaciones en web y móvil, el código QR de cada mascota y la cola de atención.',
        result: '9 flujos de la app probados de forma automática, de principio a fin.',
        flow: ['El dueño pide cita', 'La clínica atiende', 'Aviso al instante'],
      },
      en: {
        title: 'PetSafe: web and mobile vet clinic',
        problem: 'A vet clinic handles appointments, records and owner notices through separate, manual channels.',
        solution: 'A web platform for staff and a mobile app for owners: appointments, care queue, medical history and instant notices.',
        part: 'I built the owners’ mobile app, web and mobile notifications, each pet’s QR code and the care queue.',
        result: '9 app flows tested automatically, end to end.',
        flow: ['Owner books', 'Clinic attends', 'Instant notice'],
      },
    },
    category: 'fullstack',
    featured: true,
    period: { es: 'Mar 2026 – May 2026', en: 'Mar 2026 – May 2026' },
    stack: ['NestJS', 'Angular', 'Flutter', 'TypeScript', 'Dart', 'PostgreSQL', 'FCM', 'Docker', 'CI/CD'],
    links: { repo: 'https://github.com/JoelBonillaG/petsafe_movil_app', demo: 'https://pet-safe-six.vercel.app/login' },
    images: ['/projects/petsafe/1.webp', '/projects/petsafe/2.webp', '/projects/petsafe/3.webp', '/projects/petsafe/4.webp', '/projects/petsafe/5.webp', '/projects/petsafe/6.webp'],
    metrics: [
      { value: '9', label: { es: 'flujos E2E automatizados (Maestro)', en: 'automated E2E flows (Maestro)' } },
    ],
    content: {
      es: {
        title: 'Gestión de Clínica Veterinaria (PetSafe)',
        tagline: 'Plataforma veterinaria web y móvil con notificaciones push y cola de atención.',
        overview:
          'Plataforma integral para operar una clínica veterinaria de principio a fin: dueños y mascotas, solicitudes y agenda de citas, cola de atención en vivo, consultas médicas con adjuntos y seguimientos, vacunas, código QR por mascota y hasta un flujo de adopciones. Centraliza todo detrás de una API REST en NestJS organizada en capas limpias sobre PostgreSQL, con WebSockets para la cola y las notificaciones en tiempo real, y una interfaz Angular para el personal. Los dueños cuentan además con una aplicación móvil en Flutter. Todo el stack se conteneriza con Docker y se despliega mediante CI/CD a un VPS.',
        role: 'Desarrollé la aplicación móvil, el módulo de notificaciones full-stack y los módulos de código QR y cola de atención.',
        features: [
          'Desarrollé la aplicación móvil en Flutter: autenticación, perfil e historial de mascotas, notificaciones push con Firebase Cloud Messaging y una suite de pruebas E2E con Maestro (9 flujos automatizados).',
          'Implementé el módulo de notificaciones full-stack (NestJS + Angular): registro de dispositivos, gestión de lectura y conteo de pendientes, consumido desde web y móvil.',
          'Construí el módulo de código QR por mascota y la cola de atención en Angular, integrados con sus respectivos endpoints en NestJS.',
        ],
      },
      en: {
        title: 'Veterinary Clinic Management (PetSafe)',
        tagline: 'A web + mobile veterinary platform with push notifications and an attention queue.',
        overview:
          'An all-in-one platform to run a veterinary clinic from end to end: owners and pets, appointment requests and scheduling, a live attention queue, medical encounters with attachments and follow-ups, vaccinations, a per-pet QR code and even an adoption flow. Everything is centralized behind a NestJS REST API organized in clean layers over PostgreSQL, with WebSockets for the real-time queue and notifications, and an Angular interface for the staff. Owners also get a Flutter mobile app. The whole stack is containerized with Docker and shipped through CI/CD to a VPS.',
        role: 'I built the mobile app, the full-stack notifications module and the QR & attention-queue modules.',
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
    focus: 'backend',
    order: 6,
    card: {
      es: {
        title: 'H&Q Hospital: gestión hospitalaria',
        problem: 'Un hospital con varios centros necesita gestionar pacientes y consultas sin que una falla detenga todo el sistema.',
        solution: 'Una plataforma dividida en servicios independientes para autenticación, administración, consultas y reportes, detrás de una sola puerta de entrada.',
        part: 'Construí desde cero el servicio de consultas médicas y el módulo de pacientes en la interfaz.',
        result: '4 servicios independientes que se descubren y comunican entre sí.',
        flow: ['Paciente', 'Consulta médica', 'Reporte'],
      },
      en: {
        title: 'H&Q Hospital: hospital management',
        problem: 'A multi-site hospital needs to manage patients and consultations without one failure stopping the whole system.',
        solution: 'A platform split into independent services for auth, administration, consultations and reports, behind a single entry point.',
        part: 'I built the medical consultations service from scratch and the patients module in the interface.',
        result: '4 independent services that discover and talk to each other.',
        flow: ['Patient', 'Consultation', 'Report'],
      },
    },
    team: 4,
    category: 'backend',
    featured: true,
    period: { es: 'Sep 2025 – Oct 2025', en: 'Sep 2025 – Oct 2025' },
    stack: ['Spring Boot 3', 'Java 17', 'Spring Cloud', 'Eureka', 'API Gateway', 'OpenFeign', 'PostgreSQL', 'React', 'Docker'],
    links: { repo: 'https://github.com/JosueGarciaAbata/hospital-management-system', demo: null },
    images: ['/projects/hospital/1.webp', '/projects/hospital/2.webp', '/projects/hospital/3.webp', '/projects/hospital/4.webp', '/projects/hospital/5.webp'],
    metrics: [
      { value: '4', label: { es: 'microservicios tras el gateway', en: 'microservices behind the gateway' } },
    ],
    content: {
      es: {
        title: 'Sistema de Gestión Hospitalaria',
        tagline: 'Arquitectura de microservicios para la gestión de pacientes y consultas médicas.',
        overview:
          'Plataforma de gestión hospitalaria construida como un sistema de microservicios con Spring Cloud. Un único API Gateway enruta y asegura cada petición, mientras un registro Eureka permite que los servicios de autenticación, administración, consultas y reportería se descubran entre sí. Los datos viven en PostgreSQL y, para escalar, pueden distribuirse con Citus particionando por centro médico, con las APIs documentadas en OpenAPI/Swagger y un frontend en React. Es un proyecto pensado para mostrar resiliencia, escalabilidad y separación de responsabilidades en un dominio real.',
        role: 'Construí el microservicio de consultas desde cero y el módulo de pacientes en el frontend.',
        features: [
          'Desarrollé el microservicio de consultas desde cero en una arquitectura Spring Cloud: gestión de pacientes y consultas médicas con paginación, control de acceso por rol y documentación OpenAPI.',
          'Implementé la comunicación entre servicios con OpenFeign para enriquecer las respuestas con datos de otros microservicios.',
          'Construí el módulo de pacientes y consultas en el frontend con paginación controlada desde el backend.',
        ],
      },
      en: {
        title: 'Hospital Management System',
        tagline: 'A microservices architecture for managing patients and medical consultations.',
        overview:
          'A hospital management platform built as a Spring Cloud microservices system. A single API Gateway routes and secures every request, while a Eureka registry lets the authentication, administration, consultation and reporting services discover one another. Data lives in PostgreSQL and, to scale, can be distributed with Citus sharded per medical center, with APIs documented in OpenAPI/Swagger and a React frontend. The project is designed to show resilience, scalability and separation of concerns in a real domain.',
        role: 'I built the consultation microservice from scratch and the patients module on the frontend.',
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
    focus: 'backend',
    order: 3,
    card: {
      es: {
        title: 'FuelQ: control inteligente de combustible',
        problem: 'Una flota no sabe cuánto combustible consume cada viaje frente a lo que debería consumir.',
        solution: 'Una plataforma que compara el consumo real de cada viaje con el que debería tener.',
        part: 'Desarrollé de punta a punta la gestión de usuarios y la de rutas y viajes.',
        result: 'La flota ve la eficiencia de cada viaje y detecta desvíos de consumo.',
        flow: ['Viaje', 'Consumo real', 'Desvío detectado'],
      },
      en: {
        title: 'FuelQ: smart fuel control',
        problem: 'A fleet has no idea how much fuel each trip burns compared with what it should.',
        solution: 'A platform that compares each trip’s real fuel use with the expected one.',
        part: 'I built user management and route and trip management end to end.',
        result: 'The fleet sees each trip’s efficiency and spots consumption deviations.',
        flow: ['Trip', 'Real usage', 'Deviation found'],
      },
    },
    team: 4,
    category: 'backend',
    featured: true,
    period: { es: 'Oct 2025 – Dic 2025', en: 'Oct 2025 – Dec 2025' },
    stack: ['NestJS', 'TypeScript', 'gRPC', 'Protobuf', 'PostgreSQL', 'Prisma', 'React', 'RabbitMQ', 'Docker'],
    links: { repo: 'https://github.com/DavidJosueP2/Distributed-Gasoline-System', demo: null },
    images: ['/projects/sistema-gasolina/1.webp', '/projects/sistema-gasolina/2.webp', '/projects/sistema-gasolina/3.webp', '/projects/sistema-gasolina/4.webp', '/projects/sistema-gasolina/5.webp'],
    metrics: [],
    content: {
      es: {
        title: 'Sistema Distribuido de Gestión de Combustible',
        tagline: 'Microservicios comunicados por gRPC para gestionar flotas, rutas y consumo de combustible.',
        overview:
          'Plataforma distribuida para gestionar una flota y su consumo de combustible, construida como microservicios independientes —conductores, vehículos, usuarios, rutas, combustible, correo y logging— que se comunican por gRPC detrás de un API Gateway y se registran en Eureka. Por cada viaje calcula el consumo real frente al estimado y un puntaje de eficiencia, trazado sobre el mapa de la ruta para detectar sobreconsumos. Usa RabbitMQ para eventos asíncronos, PostgreSQL para los datos y un frontend React con vistas de mapa, con toda la infraestructura contenerizada con Docker.',
        role: 'Desarrollé los microservicios de usuarios y rutas/viajes, y sus módulos en el frontend.',
        features: [
          'Desarrollé los microservicios de usuarios y rutas/viajes con comunicación gRPC: gestión de usuarios, CRUD de rutas y ciclo de vida completo de viajes (asignación de conductor, seguimiento de ubicación, validación por tipo de licencia y cálculo de consumo de combustible estimado y real).',
          'Construí los módulos de usuarios, rutas y viajes en el frontend: vistas de gestión, formularios con validación y consumo del API gateway.',
        ],
      },
      en: {
        title: 'Distributed Fuel Management System',
        tagline: 'gRPC-connected microservices to manage fleets, routes and fuel consumption.',
        overview:
          'A distributed platform to manage a fleet and its fuel usage, built as independent microservices — drivers, vehicles, users, routes, fuel, email and logging — that communicate over gRPC behind an API Gateway and register with Eureka. For each trip it computes actual versus estimated fuel use and an efficiency score, plotted over the route map to surface overconsumption. It uses RabbitMQ for asynchronous events, PostgreSQL for data and a React frontend with map views, with all infrastructure containerized with Docker.',
        role: 'I developed the users and routes/trips microservices, plus their frontend modules.',
        features: [
          'Developed the users and routes/trips microservices over gRPC: user management, route CRUD and a full trip lifecycle (driver assignment, location tracking, license-type validation and estimated-vs-actual fuel calculation).',
          'Built the users, routes and trips modules on the frontend: management views, validated forms and API-gateway consumption.',
        ],
      },
    },
  },
  {
    id: 'marketplace',
    focus: 'fullstack',
    team: 4,
    category: 'fullstack',
    featured: false,
    period: { es: 'Oct 2025 – Dic 2025', en: 'Oct 2025 – Dec 2025' },
    stack: ['Spring Boot', 'Java', 'React', 'TypeScript', 'PostgreSQL', 'Docker'],
    links: { repo: 'https://github.com/DavidJosueP2/Marketplace_Link', demo: null },
    images: ['/projects/marketplace/1.webp', '/projects/marketplace/2.webp', '/projects/marketplace/3.webp', '/projects/marketplace/4.webp'],
    metrics: [
      { value: '90%', label: { es: 'cobertura de pruebas (equipo)', en: 'test coverage (team)' } },
    ],
    content: {
      es: {
        title: 'Marketplace Link: compra y venta cerca de ti',
        tagline: 'Marketplace con publicaciones geolocalizadas y moderación automática de contenido.',
        overview:
          'Marketplace full-stack donde los usuarios publican productos, descubren lo que se vende cerca mediante consultas geoespaciales y un equipo de moderación mantiene el catálogo confiable. El backend en Spring Boot expone una API REST documentada con OpenAPI, con seguridad JWT y control de acceso por rol, paginación y moderación de contenido; el frontend está en React con TypeScript. La calidad está integrada en el pipeline —cobertura de pruebas, E2E y análisis estático— y la plataforma se despliega en la nube con almacenamiento de imágenes gestionado.',
        role: 'Desarrollé el módulo de publicaciones full-stack y sus pruebas E2E.',
        features: [
          'Desarrollé el módulo de publicaciones full-stack: CRUD completo, carga y gestión de imágenes, filtros por distancia, precio y categoría, moderación automática de contenido peligroso y suspensión automática programada.',
          'Implementé pruebas E2E con Playwright para los flujos principales del módulo de publicaciones.',
        ],
      },
      en: {
        title: 'Marketplace Link: buy and sell nearby',
        tagline: 'A marketplace with geolocated listings and automatic content moderation.',
        overview:
          'A full-stack marketplace where users publish products, discover what is for sale nearby via geospatial queries and a moderation team keeps the catalog trustworthy. The Spring Boot backend exposes a REST API documented with OpenAPI, with JWT security and role-based access control, pagination and content moderation; the frontend is React with TypeScript. Quality is built into the pipeline — test coverage, E2E and static analysis — and the platform is deployed to the cloud with managed image storage.',
        role: 'I developed the full-stack publications module and its E2E tests.',
        features: [
          'Developed the full-stack publications module: full CRUD, image upload and management, filters by distance, price and category, automatic moderation of unsafe content and a scheduled auto-suspension task.',
          'Implemented E2E tests with Playwright for the main publication flows.',
        ],
      },
    },
  },
  {
    id: 'cliniccare',
    focus: 'fullstack',
    order: 7,
    card: {
      es: {
        title: 'ClinicCare: agenda médica en línea',
        problem: 'Un consultorio agenda citas a mano y no controla quién accede a la información de los pacientes.',
        solution: 'Una plataforma con agenda de citas, historiales y vistas distintas para administradores y médicos, con acceso seguro por rol.',
        part: 'Desarrollé el inicio de sesión y la recuperación de contraseña de punta a punta, y la agenda de citas en la interfaz.',
        result: 'Cada rol ve solo lo que le corresponde, y la agenda exporta sus reportes a PDF.',
        flow: ['Inicio seguro', 'Agenda la cita', 'Reporte PDF'],
      },
      en: {
        title: 'ClinicCare: online medical scheduling',
        problem: 'A clinic books appointments by hand and has no control over who sees patient data.',
        solution: 'A platform with an appointment calendar, records and separate views for admins and doctors, with role-based secure access.',
        part: 'I built sign-in and password recovery end to end, and the appointment calendar in the interface.',
        result: 'Each role sees only what it should, and the calendar exports its reports to PDF.',
        flow: ['Secure sign-in', 'Book', 'PDF report'],
      },
    },
    team: 4,
    category: 'fullstack',
    featured: true,
    period: { es: 'Sep 2025 – Oct 2025', en: 'Sep 2025 – Oct 2025' },
    stack: ['Spring Boot', 'Java 21', 'React', 'PostgreSQL', 'JWT', 'Spring Mail', 'Docker'],
    links: { repo: 'https://github.com/DRTX2/clinic', demo: null },
    images: ['/projects/cliniccare/1.webp', '/projects/cliniccare/2.webp', '/projects/cliniccare/3.webp', '/projects/cliniccare/4.webp', '/projects/cliniccare/5.webp'],
    metrics: [],
    content: {
      es: {
        title: 'Sistema de Gestión Clínica (ClinicCare)',
        tagline: 'Plataforma clínica para la gestión de citas y usuarios con autenticación segura.',
        overview:
          'Sistema de gestión clínica full-stack para coordinar la operación de un consultorio: agenda de citas, historiales médicos, usuarios y roles. El backend en Spring Boot sigue arquitectura limpia con seguridad por roles mediante JWT y recuperación de contraseña por correo; el frontend en React ofrece vistas diferenciadas para administradores y médicos, con calendario interactivo y exportación de reportes a PDF. El foco estuvo en la integridad de los datos, la seguridad y una experiencia clara tanto para el personal como para los pacientes.',
        role: 'Desarrollé el módulo de autenticación (full-stack) y el de citas (frontend).',
        features: [
          'Desarrollé el módulo de autenticación full-stack: login con JWT, rutas protegidas por rol y recuperación de contraseña por email con tokens de un solo uso y flujo OTP para el cliente móvil.',
          'Construí el módulo de citas en el frontend: calendario interactivo, formulario de creación con validación, vistas diferenciadas por rol (administrador/médico) y exportación de reportes a PDF.',
        ],
      },
      en: {
        title: 'Clinic Management System (ClinicCare)',
        tagline: 'A clinical platform for appointment and user management with secure authentication.',
        overview:
          'A full-stack clinic management system to coordinate a practice’s operation: appointment scheduling, medical records, users and roles. The Spring Boot backend follows clean architecture with role-based security via JWT and email password recovery; the React frontend offers role-specific views for admins and doctors, with an interactive calendar and PDF report export. The focus was on data integrity, security and a clear experience for both staff and patients.',
        role: 'I built the authentication module (full-stack) and the appointments module (frontend).',
        features: [
          'Developed the full-stack authentication module: JWT login, role-protected routes and email password recovery with single-use tokens and an OTP flow for the mobile client.',
          'Built the appointments module on the frontend: interactive calendar, validated creation form, role-specific views (admin/doctor) and PDF report export.',
        ],
      },
    },
  },
  {
    id: 'iron-zone',
    focus: 'backend',
    order: 8,
    card: {
      es: {
        title: 'Iron Zone: gestión de gimnasio',
        problem: 'Un gimnasio maneja su web, membresías, clases y facturación con herramientas desconectadas.',
        solution: 'Un solo sistema que reúne sitio web, tienda, membresías con cobro recurrente, clases y facturación electrónica.',
        part: 'Desarrollé el módulo de guías de ejercicio, con contenido según el plan de cada socio, y preparé el entorno del proyecto para el equipo.',
        result: '11 módulos a medida integrados en una sola plataforma.',
        flow: ['Socio', 'Plan y guías', 'Factura'],
      },
      en: {
        title: 'Iron Zone: gym management',
        problem: 'A gym runs its website, memberships, classes and invoicing on disconnected tools.',
        solution: 'One system that brings together website, store, recurring memberships, classes and e-invoicing.',
        part: 'I built the exercise guides module, with content by each member’s plan, and set up the project environment for the team.',
        result: '11 custom modules integrated into one platform.',
        flow: ['Member', 'Plan & guides', 'Invoice'],
      },
    },
    team: 7,
    category: 'backend',
    featured: false,
    period: { es: 'Abr 2026 – Jun 2026', en: 'Apr 2026 – Jun 2026' },
    stack: ['Odoo 18', 'Python', 'PostgreSQL', 'Docker', 'XML'],
    links: { repo: 'https://github.com/JoelBonillaG/iron_zone_odoo_das', demo: null },
    images: ['/projects/iron-zone/1.webp', '/projects/iron-zone/2.webp', '/projects/iron-zone/3.webp', '/projects/iron-zone/4.webp'],
    metrics: [
      { value: '11', label: { es: 'módulos a medida sobre Odoo', en: 'custom Odoo modules' } },
    ],
    content: {
      es: {
        title: 'Iron Zone — Gestión de Gimnasio',
        tagline: 'Módulo a medida sobre Odoo 18 para gestión de contenido y membresías de un gimnasio.',
        overview:
          'Plataforma de gestión integral para un gimnasio y centro deportivo, construida como una solución a medida sobre Odoo 18. En lugar de herramientas desconectadas, reúne en un solo sistema el sitio web público, la tienda en línea, las membresías y suscripciones con facturación recurrente, el catálogo de guías de ejercicio, el inventario, las clases y eventos, y la facturación electrónica con sus retenciones e impuestos. Las apps nativas de Odoo se extienden con módulos personalizados, y clientes, entrenadores, ventas y facturas se administran desde vistas con permisos por rol. Se empaqueta con Docker Compose sobre PostgreSQL.',
        role: 'Desarrollé el módulo personalizado de guías de ejercicio y la infraestructura del proyecto.',
        features: [
          'Desarrollé el módulo personalizado de guías de ejercicio: catálogo con control de acceso por rol (entrenador/administrador), integración con el sistema de membresías para restringir contenido premium por plan y portal web para socios.',
          'Configuré la infraestructura del proyecto con Docker Compose y scripts de carga de datos de demostración para el equipo.',
        ],
      },
      en: {
        title: 'Iron Zone — Gym Management',
        tagline: 'A custom Odoo 18 module for managing a gym’s content and memberships.',
        overview:
          'An all-in-one management platform for a gym and sports center, built as a custom Odoo 18 solution. Instead of disconnected tools, it brings into a single system the public website, the online store, memberships and subscriptions with recurring billing, the exercise-guide catalog, inventory, classes and events, and electronic invoicing with its withholdings and taxes. Odoo’s native apps are extended with custom modules, and customers, trainers, sales and invoices are managed from role-permissioned views. It is packaged with Docker Compose over PostgreSQL.',
        role: 'I developed the custom exercise-guide module and the project infrastructure.',
        features: [
          'Developed the custom exercise-guide module: catalog with role-based access (trainer/admin), integration with the membership system to gate premium content per plan, and a member web portal.',
          'Set up the project infrastructure with Docker Compose and demo-data seeding scripts for the team.',
        ],
      },
    },
  },
  {
    id: 'microplus',
    focus: 'mobile',
    team: 1,
    category: 'mobile',
    featured: false,
    period: { es: '2025', en: '2025' },
    stack: ['Flutter', 'Dart', 'Firebase Cloud Messaging', 'Provider', 'REST API'],
    links: { repo: null, demo: null },
    images: [],
    metrics: [],
    content: {
      es: {
        title: 'Monitoreo Móvil de Facturación Electrónica',
        tagline: 'App móvil real, en producción, que alerta sobre el estado de comprobantes electrónicos ante el SRI.',
        overview:
          'Aplicación móvil que resuelve una limitación real de Microplus SQL, un sistema contable de escritorio muy usado en Ecuador: al ser de escritorio, no avisa fuera del programa cuando el SRI autoriza o rechaza un comprobante electrónico, y el personal debía revisarlo manualmente. La app consume la API de Microplus, monitorea el estado de los comprobantes y envía notificaciones push en tiempo real cuando una factura cambia de estado. Incluye configuración del servidor, autenticación JWT con refresco automático de token, monitoreo de conectividad y un dashboard de comprobantes filtrable por tipo y fecha. Está desplegada en producción para una empresa (cliente confidencial).',
        role: 'Proyecto individual de principio a fin para una empresa (cliente confidencial).',
        features: [
          'Desarrollé de forma individual una aplicación móvil en Flutter para una empresa, que resuelve la ausencia de alertas en tiempo real de un sistema contable de escritorio: consulta el estado de autorización de comprobantes electrónicos ante el SRI y notifica al instante cuando una factura es autorizada o rechazada.',
          'Implementé la configuración dinámica del servidor, autenticación JWT con refresco automático de token, monitoreo de conectividad en tiempo real y un dashboard con resumen de comprobantes filtrable por tipo y fecha.',
        ],
      },
      en: {
        title: 'Mobile E-Invoicing Monitoring',
        tagline: 'A real, production mobile app that alerts on the authorization status of e-invoices with the tax authority.',
        overview:
          'A mobile app that solves a real limitation of Microplus SQL, a desktop accounting system widely used in Ecuador: being desktop-based, it gives no alert outside the program when the tax authority (SRI) approves or rejects an electronic invoice, so staff had to check it manually. The app consumes the Microplus API, monitors the status of invoices and sends real-time push notifications when one changes state. It includes server configuration, JWT authentication with automatic token refresh, connectivity monitoring and an invoice dashboard filterable by type and date. It is deployed in production for a company (confidential client).',
        role: 'Solo project, end to end, for a company (confidential client).',
        features: [
          'Single-handedly built a Flutter mobile app for a company that fills a desktop accounting system’s lack of real-time alerts: it checks the authorization status of electronic invoices with the tax authority (SRI) and notifies instantly when one is approved or rejected.',
          'Implemented dynamic server configuration, JWT authentication with automatic token refresh, real-time connectivity monitoring and a dashboard summarizing invoices, filterable by type and date.',
        ],
      },
    },
  },
  {
    id: 'simulador-ahorro',
    focus: 'fullstack',
    team: 4,
    category: 'fullstack',
    featured: false,
    period: { es: 'Abr 2025', en: 'Apr 2025' },
    stack: ['Laravel', 'PHP', 'React', 'PostgreSQL', 'JWT'],
    links: { repo: 'https://github.com/JosueGarciaAbata/savings_financial_goals', demo: null },
    images: [],
    metrics: [],
    content: {
      es: {
        title: 'Simulador de Metas de Ahorro',
        tagline: 'Aplicación de metas de ahorro con autenticación, notificaciones y reportes.',
        overview:
          'Aplicación full-stack para planificar metas de ahorro: el usuario crea metas, registra aportes y sigue su progreso con un panel, recordatorios y reportes. El backend en Laravel expone la lógica de negocio con autenticación JWT y el frontend en React arma la experiencia. Se diseñó y entregó de extremo a extremo en un único sprint de competencia.',
        role: 'Desarrollé la autenticación en el backend y el sistema de notificaciones y reportes.',
        features: [
          'Implementé el módulo de autenticación en el backend con JWT: registro, login, gestión de perfil y cierre de sesión.',
          'Desarrollé el sistema de notificaciones por email y la generación de reportes PDF: alertas de inactividad, recordatorios con monto semanal recomendado y reportes de progreso por meta, categoría y estado.',
        ],
      },
      en: {
        title: 'Savings Goals Simulator',
        tagline: 'A savings-goals app with authentication, notifications and reports.',
        overview:
          'A full-stack app to plan savings goals: users create goals, log contributions and track progress through a dashboard, reminders and reports. The Laravel backend exposes the business logic with JWT authentication and the React frontend builds the experience. It was designed and shipped end to end in a single competition sprint.',
        role: 'I built the backend authentication and the notifications & reporting system.',
        features: [
          'Implemented the backend authentication module with JWT: registration, login, profile management and logout.',
          'Developed the email notification system and PDF report generation: inactivity alerts, reminders with a recommended weekly amount and progress reports by goal, category and status.',
        ],
      },
    },
  },
  {
    id: 'mantenimiento-equipos',
    focus: 'fullstack',
    team: 3,
    category: 'fullstack',
    featured: false,
    period: { es: 'Dic 2024 – Ene 2025', en: 'Dec 2024 – Jan 2025' },
    stack: ['Laravel', 'PHP', 'React', 'PostgreSQL', 'JWT'],
    links: { repo: 'https://github.com/JosueGarciaAbata/agiles-proyecto', demo: null },
    images: ['/projects/mantenimiento-equipos/1.webp'],
    metrics: [],
    content: {
      es: {
        title: 'Gestión de Mantenimiento de Equipos',
        tagline: 'Plataforma para gestionar activos, proveedores y el mantenimiento de equipos.',
        overview:
          'Plataforma full-stack para que una organización gestione sus activos físicos y el mantenimiento de equipos: activos, categorías, ubicaciones, proveedores, responsables e ingresos, con reportes. El backend está en Laravel y el frontend en React, con autenticación JWT y control de acceso por rol. Se construyó en equipo trabajando bajo metodología Scrum.',
        role: 'Desarrollé los módulos de inventario y la autenticación con control de acceso.',
        features: [
          'Desarrollé los módulos de activos, categorías, ubicaciones, proveedores e ingresos en el backend: CRUD completo con validaciones, relaciones entre modelos y datos iniciales.',
          'Implementé la autenticación con JWT y el control de acceso por rol en las rutas de la API.',
        ],
      },
      en: {
        title: 'Equipment Maintenance Management',
        tagline: 'A platform to manage assets, suppliers and equipment maintenance.',
        overview:
          'A full-stack platform for an organization to manage its physical assets and equipment maintenance: assets, categories, locations, suppliers, owners and income, with reports. The backend is Laravel and the frontend React, with JWT authentication and role-based access control. It was built as a team working under Scrum.',
        role: 'I developed the inventory modules and authentication with access control.',
        features: [
          'Developed the assets, categories, locations, suppliers and income modules on the backend: full CRUD with validations, model relationships and initial data.',
          'Implemented JWT authentication and role-based access control on the API routes.',
        ],
      },
    },
  },
  {
    id: 'data-warehouse-hefesto',
    focus: 'data-ai',
    category: 'data',
    featured: false,
    period: { es: '2025', en: '2025' },
    stack: ['SQL Server', 'SSIS', 'SSAS', 'MDX', 'Excel'],
    links: { repo: null, demo: null },
    images: [],
    metrics: [],
    content: {
      es: {
        title: 'Data Warehouse con Metodología Hefesto',
        tagline: 'Solución de inteligencia de negocios end to end: del modelo dimensional al dashboard.',
        overview:
          'Solución de inteligencia de negocios de extremo a extremo sobre la base AdventureWorks 2022, aplicando la metodología Hefesto, que parte de las preguntas de negocio para llegar al modelo dimensional. Incluye el diseño del esquema estrella, el pipeline ETL en SSIS que puebla el Data Warehouse, un cubo OLAP multidimensional en SSAS y un dashboard analítico en Excel conectado al cubo. Permite analizar las ventas por vendedor, producto, territorio, moneda y período.',
        role: 'Diseño del modelo dimensional, ETL, cubo OLAP y dashboard.',
        features: [
          'Diseñé e implementé un Data Warehouse sobre AdventureWorks 2022 aplicando la metodología Hefesto: modelo estrella con tablas de hechos de ventas y dimensiones de productos, vendedores, fechas, territorios y monedas.',
          'Construí el pipeline ETL con SSIS para poblar el DW, desplegué un cubo OLAP multidimensional en SSAS y un dashboard analítico en Excel conectado al cubo.',
        ],
      },
      en: {
        title: 'Data Warehouse with Hefesto Methodology',
        tagline: 'An end-to-end business-intelligence solution: from the dimensional model to the dashboard.',
        overview:
          'An end-to-end business-intelligence solution over the AdventureWorks 2022 database, applying the Hefesto methodology, which starts from the business questions to reach the dimensional model. It covers the star-schema design, the SSIS ETL pipeline that populates the Data Warehouse, a multidimensional OLAP cube in SSAS and an analytical Excel dashboard connected to the cube. It enables sales analysis by salesperson, product, territory, currency and period.',
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
    focus: 'fullstack',
    hidden: true,
    team: 3,
    category: 'other',
    featured: false,
    period: { es: 'Jun 2025 – Jul 2025', en: 'Jun 2025 – Jul 2025' },
    stack: ['Unity', 'C#', 'Zenject', 'SQLite', 'Clean Architecture'],
    links: { repo: 'https://github.com/DRTX2/PatternsProject', demo: null },
    images: ['/projects/unity-game/1.webp'],
    metrics: [],
    content: {
      es: {
        title: 'Videojuego 2D con Arquitectura Limpia',
        tagline: 'Juego 2D en Unity que aplica arquitectura limpia, inyección de dependencias y persistencia local.',
        overview:
          'Videojuego 2D en Unity concebido para demostrar que los principios de arquitectura de software empresarial también aplican al desarrollo de juegos. Separa la lógica del motor en capas (dominio, aplicación, infraestructura y presentación), usa inyección de dependencias con Zenject y persiste el estado con SQLite, manteniendo el código testeable y mantenible. Combina mecánicas de juego con patrones de diseño y un sistema completo de cuentas y guardado de partida.',
        role: 'Sistema de autenticación y persistencia, y todas las pantallas del juego.',
        features: [
          'Implementé el sistema de autenticación y persistencia del juego: login, registro y guardado/carga de partida con SQLite bajo arquitectura limpia con inyección de dependencias (Zenject).',
          'Desarrollé todas las pantallas del juego: menú principal, pausa, game over y login/registro, con la lógica desacoplada de la interfaz.',
        ],
      },
      en: {
        title: '2D Game with Clean Architecture',
        tagline: 'A 2D Unity game applying clean architecture, dependency injection and local persistence.',
        overview:
          'A 2D Unity game conceived to prove that enterprise software-architecture principles also apply to game development. It separates game logic from the engine into layers (domain, application, infrastructure and presentation), uses dependency injection with Zenject and persists state with SQLite, keeping the code testable and maintainable. It blends game mechanics with design patterns and a complete accounts and save-game system.',
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
    focus: 'fullstack',
    hidden: true,
    team: 5,
    category: 'other',
    featured: false,
    period: { es: 'Oct 2024', en: 'Oct 2024' },
    stack: ['Laravel', 'PHP', 'Blade', 'Tailwind CSS', 'MySQL'],
    links: { repo: 'https://github.com/JoelBonillaG/Pagina_Votaciones_UTA', demo: null },
    images: ['/projects/pagina-votaciones/1.webp'],
    metrics: [],
    content: {
      es: {
        title: 'Sitio Web de Campaña Electoral',
        tagline: 'Plataforma electoral con información de candidatos, propuestas, eventos y estadísticas.',
        overview:
          'Plataforma web de campaña para una elección universitaria que reúne en un solo sitio la presentación del candidato, sus propuestas, eventos, noticias y estadísticas de votación. Construida con Laravel y Blade sobre MySQL, incluye una página de inicio dinámica con misión y visión, propuestas destacadas, próximos eventos, cuenta regresiva y un contador de apoyos en tiempo real alimentado desde la base de datos.',
        role: 'Estructura base del sitio y página de inicio con datos dinámicos.',
        features: [
          'Construí la estructura base del sitio (header, navbar, footer) e implementé la página de inicio completa con datos dinámicos: presentación del candidato, misión/visión, propuestas, próximos eventos y cuenta regresiva con contador de apoyos en tiempo real.',
          'Integré la base de datos en la página de inicio para mostrar de forma dinámica la información del partido, candidatos, propuestas y votos registrados.',
        ],
      },
      en: {
        title: 'Electoral Campaign Website',
        tagline: 'An electoral platform with candidate info, proposals, events and statistics.',
        overview:
          'A campaign web platform for a university election that gathers in a single site the candidate presentation, proposals, events, news and voting statistics. Built with Laravel and Blade over MySQL, it includes a dynamic home page with mission and vision, featured proposals, upcoming events, a countdown and a real-time support counter fed from the database.',
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
    focus: 'fullstack',
    hidden: true,
    team: 4,
    category: 'other',
    featured: false,
    period: { es: 'Mar 2024 – Abr 2024', en: 'Mar 2024 – Apr 2024' },
    stack: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    links: { repo: 'https://github.com/JosueGarciaAbata/proyecto-mds', demo: null },
    images: ['/projects/creative-portfolio/1.webp'],
    metrics: [],
    content: {
      es: {
        title: 'Plataforma de Portafolios Creativos',
        tagline: 'Aplicación web sin frameworks con autenticación completa y área de usuario.',
        overview:
          'Plataforma web para que cualquier persona cree su portafolio personal y publique su trabajo, con registro, inicio de sesión, recuperación de contraseña y un área de usuario. Construida sin frameworks (PHP puro sobre MySQL) como proyecto de fundamentos, poniendo el foco en entender desde cero la autenticación, la seguridad de contraseñas y la estructura de una aplicación web.',
        role: 'Estructura base de la aplicación y módulo de autenticación.',
        features: [
          'Desarrollé la estructura base de la aplicación: landing page, navegación, layout del área autenticada y páginas de error.',
          'Implementé el módulo de autenticación completo (registro, login, recuperación de contraseña por email con PHPMailer y edición de perfil) con cifrado de contraseñas y validaciones.',
        ],
      },
      en: {
        title: 'Creative Portfolio Platform',
        tagline: 'A framework-free web app with complete authentication and a user area.',
        overview:
          'A web platform for anyone to create their personal portfolio and publish their work, with registration, login, password recovery and a user area. Built without frameworks (vanilla PHP over MySQL) as a fundamentals project, focusing on understanding authentication, password security and the structure of a web application from scratch.',
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
  'mobile',
  'data',
  'other',
]
