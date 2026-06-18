import { ThemeProvider } from '@/theme/ThemeContext.jsx'
import { LanguageProvider } from '@/i18n/LanguageContext.jsx'
import { Navbar } from '@/components/layout/Navbar.jsx'
import { Footer } from '@/components/layout/Footer.jsx'
import { Hero } from '@/sections/Hero/Hero.jsx'
import { Projects } from '@/sections/Projects/Projects.jsx'

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Navbar />
        <main>
          <Hero />
          <Projects />
        </main>
        <Footer />
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App
