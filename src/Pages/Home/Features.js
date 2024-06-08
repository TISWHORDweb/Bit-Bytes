import React from 'react'
import Pod from '../../Assets/image/New1.png'


function Features() {
    return (
        <div>
            <div className="container mt-5">
                <div className="animate__animated animate__backInUp">
                    <div class="container margin50">
                        <div class="section1">

                            <div class="row">
                                <div class="col-md-4 mb-3">
                                    <img className='w100' src={Pod} alt="" />
                                </div>
                                <div class="col-md-1"></div>
                                <div class="col-md-7">
                                    <div class="set2">
                                        <h3><b className='blue'>The Bits and Bytes Podcast..</b></h3>
                                        <p>It is a platform that goes beyond conventional tech discussions. Through insightful conversations, expert interviews, and practical advice, it guides tech professionals and talks about various aspects of Artificial Intelligence and Technology, offering strategies, success stories, and resources essential for thriving in the tech world.
                                            It's designed to disseminate knowledge, promote best practices, and foster community engagement, leveraging Favour's technical expertise and passion for technology to educate and inspire audiences across the USA.</p>
                                        <ul className="p-0">
                                            <li>Host : <b>Favour Ojika</b></li>
                                        </ul>
                                        <p>Software Engineer II BestBuy, Technology enthusiast, educator, and AI advocate with over 7 years of experience in the tech industry.</p>
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

export default Features