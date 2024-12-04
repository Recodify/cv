import { useState } from 'react'
import CurriculumVitae from './pages/cv'
import Projects from './pages/projects'
import Blog from './pages/blog'
import Hobby from './pages/hobby'
import TileLayout from './components/layout/TileLayout'
import Header from './components/layout/Header'
import { Tile } from './types/tiles'

type View = 'home' | 'cv' | 'projects' | 'blog' | 'hobby'

function App() {
  const [currentView, setCurrentView] = useState<View>('home')

  const tiles: Tile[] = [
    {
      title: "Resume",
      subtitle: "Professional Experience",
      description: "View my detailed professional background, skills, and achievements.",
      action: "View CV",
      onClick: () => setCurrentView('cv'),
      bgColor: "from-blue-900 to-slate-900",
      bgImage: "/images/cv-bg.jpg"
    },
    {
      title: "Projects",
      subtitle: "Portfolio",
      description: "Explore my work",
      action: "View Projects",
      onClick: () => setCurrentView('projects'),
      bgColor: "from-purple-900 to-slate-900",
      bgImage: "/images/projects-bg.jpg"
    },
    {
      title: "Blog",
      subtitle: "Tech Insights",
      description: "Read my thoughts",
      action: "Read More",
      onClick: () => setCurrentView('blog'),
      bgColor: "from-pink-900 to-slate-900",
      bgImage: "/images/blog-bg.jpg"
    },
    {
      title: "With my Hands",
      subtitle: "More than a geek",
      description: "Let's connect",
      action: "View More",
      onClick: () => setCurrentView('hobby'),
      bgColor: "from-green-900 to-slate-900",
      bgImage: "/images/contact-bg.jpg"
    }
  ]

  // Handle view rendering
  if (currentView === 'cv') {
    return <CurriculumVitae onBack={() => setCurrentView('home')} />
  }
  if (currentView === 'projects') {
    return <Projects onBack={() => setCurrentView('home')} />
  }
  if (currentView === 'blog') {
    return <Blog onBack={() => setCurrentView('home')} />
  }
  if (currentView === 'hobby') {
    return <Hobby onBack={() => setCurrentView('home')} />
  }

  return (
    <div className="min-h-screen bg-slate-900">
      <Header title="Recodify" tagline="Imagine, Build, Deliver" showTagline={true} showBackNav={false} />
      <div className="container mx-auto px-4 pt-24">
        <TileLayout tiles={tiles} />
      </div>
    </div>
  )
}

export default App


