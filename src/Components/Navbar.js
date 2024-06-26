import React from 'react'
import Logo from '../Assets/image/bb.png'

function Navbar() {
  return (
    <div>
      <div class="container ">
        <nav class="navbar navbar-expand-lg ">
          <div class="container-fluid">
            <a class="navbar-brand" href="/">
              <img src={Logo} alt="" />
             <span className='blue'> BIT&BYTES</span>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
              aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              </ul>
              <ul class="nav-list">
                <li>About us </li>
                <li>Podcast</li>
                <li>Resources</li>
                <li class="me-0 host">Explore Episodes</li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar