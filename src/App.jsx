import { Routes, Route } from 'react-router-dom'

import MaybeShowNavbarFooter from './components/MaybeShowComponent/MaybeShowNavbarFooter'
import NavbarComponent from './components/NavbarComponent'
import FooterComponent from './components/FooterComponent'

import HomePage from './pages/HomePage'
import CoursePage from './pages/CoursePage'
import BlogPage from './pages/BlogPage'
import TestimoniPage from './pages/TestimoniPage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import CommunityPage from './pages/CommunityPage'
import PaymentPage from './pages/PaymentPage'

function App() {
  return (
    <div>
      <MaybeShowNavbarFooter>
        <NavbarComponent />
      </MaybeShowNavbarFooter> 
        <Routes>              
          <Route path="/" Component={HomePage} />
          <Route path="/course" Component={CoursePage} />
          <Route path="/blog" Component={BlogPage} />
          <Route path="/testimoni" Component={TestimoniPage} />
          <Route path="/payment" Component={PaymentPage} />
          <Route path="/communityPage" Component={CommunityPage} />
          <Route path="/login" Component={LoginPage} />
          <Route path="/signup" Component={SignupPage} />
        </Routes>
      <MaybeShowNavbarFooter>
        <FooterComponent />
      </MaybeShowNavbarFooter>
    </div>
  )
}

export default App
