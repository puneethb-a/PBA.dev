import { ThemeProvider } from './context/ThemeContext'
import CursorSpotlight from './components/CursorSpotlight'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

export default function App() {
  return (
    <ThemeProvider>
      <CursorSpotlight />
      <Navbar />
      <Hero />
      <Stats />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Education />
      <Contact />
      <Footer />
      <BackToTop />
    </ThemeProvider>
  )
}
