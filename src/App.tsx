import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './features/home/page'
import CurriculumVitae from './features/cv/page'
import Projects from './features/projects/page'
import Blog from './features/blog/page'
import Hobby from './features/hobby/page'
import Clarity from './features/projects/clarity/page'
import ScrollToTop from './components/layout/ScrollToTop'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cv" element={<CurriculumVitae />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/clarity" element={<Clarity parentUrl="/projects" />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/hobby" element={<Hobby />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App


