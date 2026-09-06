import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills'
import Experience from './components/sections/Experience'
import ProjectDetails from './pages/ProjectDetails'
import Contact from './components/sections/Contact'

function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:projectId" element={<ProjectDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App