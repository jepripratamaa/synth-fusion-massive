import React from 'react'

import logo from '../assets/logo.png'

const LoginPage = () => {
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
            <div className="input-box">
              <header className='text-white'>Login to your account</header>
              <div className="input-field">
                <label htmlFor="email" className='text-white'>Username</label>
                <input type="text" className="input text-white" id="email" required autoComplete='off' />
              </div>
              <div className="input-field">
                <label htmlFor="password" className='text-white'>Password</label>
                <input type="password" className="input text-white" id="password" required />
              </div>
              <div className="input-field-submit">
                <button href='/' type="submit" className="submit text-white">
                  <a href='/course'>Login</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage