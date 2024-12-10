import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import CurriculumVitae from './pages/cv'
import Projects from './pages/projects'
import Blog from './pages/blog'
import Hobby from './pages/hobby'
import TileLayout from './components/layout/TileLayout'
import Header from './components/layout/Header'
import { Tile } from './types/tiles'

function Home() {
  const navigate = useNavigate()

  const tiles: Tile[] = [
    {
      title: "Resume",
      subtitle: "Professional Experience",
      description: "View my detailed professional background, skills, and achievements.",
      action: "View CV",
      onClick: () => navigate('/cv'),
      bgColor: "from-blue-900 to-slate-900",
      bgImage: "/images/cv-bg.jpg"
    },
    {
      title: "Projects",
      subtitle: "Portfolio",
      description: "Explore my work",
      action: "View Projects",
      onClick: () => navigate('/projects'),
      bgColor: "from-purple-900 to-slate-900",
      bgImage: "/images/projects-bg.jpg"
    },
    {
      title: "Blog",
      subtitle: "Tech Insights",
      description: "Read my thoughts",
      action: "Read More",
      onClick: () => navigate('/blog'),
      bgColor: "from-pink-900 to-slate-900",
      bgImage: "/images/blog-bg.jpg"
    },
    {
      title: "With my Hands",
      subtitle: "More than a geek",
      description: "Let's connect",
      action: "View More",
      onClick: () => navigate('/hobby'),
      bgColor: "from-green-900 to-slate-900",
      bgImage: "/images/contact-bg.jpg"
    }
  ]

  return (
    <div className="min-h-screen bg-slate-900">
      <Header title="Recodify" tagline="Imagine, Build, Deliver" showTagline={true} showBackNav={false} />
      <div className="container mx-auto px-4 pt-24">
        <TileLayout tiles={tiles} />
      </div>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cv" element={<CurriculumVitae />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/hobby" element={<Hobby />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App


