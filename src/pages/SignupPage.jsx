import React from 'react'

import logo from '../assets/logo.png'
import gmail from '../assets/gmail.png'
import apple from '../assets/apple.png'

const SignupPage = () => {
  return (
    <div className='wrapper'>
      <div className="container main">
        <div className="row">
          <div className="col-md-6 side-image">
            <img src={logo} alt="" />
          </div>
          <div className="col-md-6 right">
            {/* nav */}
            <div className='nav-login'>
              <div>
                <a href='/' className='text-white'>Home</a>
              </div>
              <div className='d-flex justify-content-center align-items-center gap-4'>
                <a href='/login' className='text-white'>Login</a>
                <a href='/signup' className='text-white'>Sign Up</a>
              </div>
            </div>
            {/* box */}
            <div className="input-box-sign">
              <header className='text-white'>Sign Up</header>
              <div className='name gap-3'>
                <div className="name-input">
                  <label htmlFor="firstname" className='text-white'>First Name</label>
                  <input type="text" className="input-sign text-white" id="email" required autoComplete='off' />
                </div>
                <div className="name-input">
                  <label htmlFor="lastname" className='text-white'>Last Name</label>
                  <input type="text" className="input-sign text-white" id="email" required autoComplete='off' />
                </div>
              </div>

              <div className="input-field-sign">
                <label htmlFor="email" className='text-white'>Email</label>
                <input type="text" className="input-sign text-white" id="email" required autoComplete='off' />
              </div>
              <div className="input-field-sign">
                <label htmlFor="password" className='text-white'>Password</label>
                <input type="password" className="input-sign text-white" id="password" required />
              </div>

              <div className="input-field-sign-submit">
                <button href='/' type="submit" className="submit text-white">
                  <a href='#'> <img src={gmail} alt="" /> Continue With Gmail</a>
                </button>
                <button href='/' type="submit" className="submit text-white">
                  <a href='#'> <img src={apple} alt="" /> Continue with Apple</a>
                </button>
              </div>

              <div className='text-white'>
                <p>Already have an account? <a href="/login">Login</a> </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignupPage