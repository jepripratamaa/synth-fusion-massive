import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import NavbarComponent from './components/NavbarComponent'
import FooterComponent from './components/FooterComponent'

import HomePage from './pages/HomePage'
import CoursePage from './pages/CoursePage'
import BlogPage from './pages/BlogPage'
import TestimoniPage from './pages/TestimoniPage'

function App() {
  return (
    <Router>
      <NavbarComponent />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/course" element={<CoursePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/testimoni" element={<TestimoniPage />} />
      </Routes>

      <FooterComponent />
    </Router>
  )
}

export default App
