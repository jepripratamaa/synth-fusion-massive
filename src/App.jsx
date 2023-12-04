import { Routes, Route } from 'react-router-dom'

import NavbarComponent from './components/NavbarComponent'
// import FooterComponent from './components/FooterComponent'

import HomePage from './pages/HomePage'
import CoursePage from './pages/CoursePage'
import BlogPage from './pages/BlogPage'
import TestimoniPage from './pages/TestimoniPage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'

function App() {
  return (
    <div>
        <NavbarComponent />
        <Routes>              
          <Route path="/" Component={HomePage} />
          <Route path="/course" Component={CoursePage} />
          <Route path="/blog" Component={BlogPage} />
          <Route path="/testimoni" Component={TestimoniPage} />
          <Route path="/login" Component={LoginPage} />
          <Route path="/signup" Component={SignupPage} />
        </Routes>
      
        {/* <FooterComponent /> */}
      
    </div>
  )
}

export default App
