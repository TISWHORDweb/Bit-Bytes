import React from 'react'
import ContactCard from './ContactCard'
import Logo from '../Assets/image/bb.png'

function Footer() {
    return (
        <div className=''>
            <hr className='m-0' />
            <div class="footer">
                <div class="container">
                    <center>
                        <a class="navbar-brand" href="/">
                            <img src={Logo} alt="" />
                            <span className='blue'> BIT&BYTES</span>
                        </a>
                        <div class=" ">
                            <ul>
                                <li>Take charge of your Empowering Your Mind and Future in Technology and AI</li>
                            </ul>
                        </div>
                    </center>
                    <ContactCard />
                    <div class="row">

                        <div class="col-md-4">
                            <ul>
                                <li>Explore Episodes</li>
                            </ul>
                        </div>
                        <div class="col-md-4">
                            <ul>
                                <li>Resources</li>
                            </ul>
                        </div>
                        <div class="col-md-4">
                            <ul>
                                <li>Privacy & Support</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer