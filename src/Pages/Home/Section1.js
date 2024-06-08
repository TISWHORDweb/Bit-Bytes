import React from 'react'
import Img from '../../Assets/image/Podcaster-2b.png'

function Section1() {
    return (
        <div>
            <div class="section3 mt-5 mb-5">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 ">
                            <div class="text">
                                <span>Get Started</span>
                                <h3><b>Introduction</b></h3>
                                <p>"Bits and Bytes" is a podcast dedicated to broadening opportunities in technology and AI. Hosted by Favour Ojika, each episode delves into the latest advancements and educational initiatives shaping the future.</p>
                                <button>Get started</button>
                            </div>
                        </div>
                        <div class="col-md-1"></div>
                        <div class="col-md-5 pt-5 mb-4">
                            <img src={Img} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section1