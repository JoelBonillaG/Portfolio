import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from '@/theme/ThemeProvider.jsx'
import { LanguageProvider } from '@/i18n/LanguageProvider.jsx'
import { Header } from '@/components/layout/Header.jsx'
import { Footer } from '@/components/layout/Footer.jsx'
import { RobotCompanion } from '@/components/layout/RobotCompanion.jsx'
import { ScrollManager } from '@/components/layout/ScrollManager.jsx'
import { Home } from '@/pages/Home.jsx'
import { ProjectDetail } from '@/pages/ProjectDetail.jsx'

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <BrowserRouter>
          <ScrollManager />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/proyectos" element={<Navigate to="/#proyectos" replace />} />
            <Route path="/proyectos/:id" element={<ProjectDetail />} />
            <Route path="*" element={<Home />} />
          </Routes>
          <Footer />
          <RobotCompanion />
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App
