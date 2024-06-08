import React from 'react'
import Mic from '../../Assets/image/188-microphone-recording-outline.gif'
// import Pod from '../../Assets/image/Podcaster-1d.png'
import Img1 from '../../Assets/image/Podcaster-42.jpeg'
import Img4 from '../../Assets/image/Group 2.png'
import Img5 from '../../Assets/image/188-microphone-recording-outline 1.png'

function Banner() {
  return (
    <div>
      <div class="container ">
        <div class="banner mt-3">
          <div class="row">
            <div class="col-md-6">
              <div class="set2">
                <h2><b className='blue'><span>Welcome to Bits and Bytes</span> <br />
                  Exploring Technology and AI with Favour Ojika</b></h2>
                <p>Bits and Bytes" is a podcast dedicated to broadening opportunities in technology and AI. Hosted by Favour Ojika, each episode delves into the latest advancements and educational initiatives shaping the future.</p>
                <div class="micro margin30">
                  <img src={Mic} alt="" />
                  <p class="m-0">Listen Now</p>
                </div>
              </div>
            </div>
            <div className="col-md-1"></div>
            <div class="col-md-5">
              {/* <div className="mt-5">
              <img className='w100' src={Pod} alt="" />
              </div> */}
              <div class="set1">
                <div class="top">
                  <img src={Img1} alt="" />
                </div>
                <div className="down">
                  <div className="bottom">
                  <img src={Img5} alt="" />
                  <span>Favour Ojika </span>
                  </div>
                  <div class="min mb-3">
                      <p class="m-0 white"> <b className='white'>The Future of AI in Education</b></p>
                      <span>Join Favour Ojika as she discusses the transformative impact of AI on educational systems with guest Damilola Longe, Security Engineering Leader Amazon Web Services (AWS)</span>
                    </div>
                  <div class="bottom">
                    <div class="play ms-3">
                      <img src={Img4} alt="" />
                    </div>
                    <span className='ms-3 white'>Listen Now</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner