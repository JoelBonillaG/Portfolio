# Portafolio — Fernando Joel Bonilla

Portafolio personal de un Ingeniero de Software. SPA en React con tema
claro/oscuro automático, internacionalización ES/EN y una arquitectura modular
pensada para crecer: añadir un proyecto es agregar un objeto a un archivo de
datos.

## ✨ Características

- 🎨 **Tema claro/oscuro** que sigue la preferencia del sistema y recuerda la
  elección manual (sin parpadeo gracias a un script previo al render).
- 🌐 **Bilingüe ES/EN** con detección automática del idioma del navegador.
- 🧩 **Contenido orientado a datos**: proyectos, habilidades y perfil viven en
  `src/data`, separados de la interfaz.
- 🎬 **Animaciones** de entrada y micro-interacciones con Framer Motion,
  respetando `prefers-reduced-motion`.
- ♿ **Accesibilidad**: navegación por teclado, roles ARIA en el modal,
  `Esc` para cerrar y bloqueo de scroll.
- 📱 **Responsive** de móvil a escritorio.

## 🛠️ Stack

| Rol          | Tecnología                |
| ------------ | ------------------------- |
| Framework    | React 19 + Vite           |
| Estilos      | Tailwind CSS v4           |
| Animaciones  | Framer Motion             |
| Iconos       | lucide-react              |
| Despliegue   | Vercel                    |

## 📁 Estructura

```
src/
├── assets/            # imágenes (foto de perfil)
├── components/
│   ├── layout/        # Navbar, Footer
│   └── ui/            # primitivos reutilizables (Button, Badge, Section…)
├── data/              # ← CONTENIDO: projects, skills, profile, nav
├── hooks/             # useActiveSection, useScrolled, useCopyToClipboard…
├── i18n/              # proveedor de idioma + diccionarios (es / en)
├── lib/               # utilidades (cn, resolución de iconos)
├── sections/          # Hero, Projects, Skills, Contact (una carpeta por sección)
├── theme/             # proveedor de tema (claro/oscuro)
└── App.jsx            # composición de la página
```

La interfaz (`sections`, `components`) está separada del contenido (`data`).
Para tocar *qué* se muestra, edita `data`; para tocar *cómo* se ve, edita los
componentes.

## ➕ Añadir un proyecto

Agrega un objeto al array de `src/data/projects.js`. No hay que tocar nada más:

```js
{
  id: 'mi-proyecto',
  category: 'fullstack', // fullstack | backend | ai | mobile | data | other
  featured: false,
  period: { es: 'Ene 2026', en: 'Jan 2026' },
  stack: ['React', 'Node.js'],
  links: { repo: 'https://github.com/…', demo: 'https://…' }, // null para ocultar
  images: [], // ver abajo
  content: {
    es: { title: '…', tagline: '…', role: '…', features: ['…', '…'] },
    en: { title: '…', tagline: '…', role: '…', features: ['…', '…'] },
  },
}
```

## 🖼️ Añadir imágenes a un proyecto

1. Coloca las imágenes en `public/projects/<id>/` (p. ej. `public/projects/mi-proyecto/1.webp`).
2. Referéncialas en el campo `images` del proyecto:

```js
images: ['/projects/mi-proyecto/1.webp', '/projects/mi-proyecto/2.webp'],
```

Mientras `images` esté vacío se muestra un marcador elegante en su lugar.

## 🚀 Scripts

```bash
npm run dev      # servidor de desarrollo
npm run build    # build de producción → dist/
npm run preview  # previsualizar el build
npm run lint     # ESLint
```

## ☁️ Despliegue

**Vercel** (recomendado): importa el repo, framework *Vite*, y listo.
El build (`npm run build`) genera `dist/`.

Para **GitHub Pages** como sitio de proyecto, define la base en
`vite.config.js` (`base: '/<repo>/'`) antes de construir.
