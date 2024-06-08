import React from 'react'
import Img1 from '../../Assets/image/pexels-charlotte-may-5965896.jpg'
import Img2 from '../../Assets/image/pexels-cottonbro-studio-6686455.jpg'
import Img3 from '../../Assets/image/pexels-rdne-stock-project-4910947.jpg'
import Img4 from '../../Assets/image/Group 2.png'

function Discover() {
    return (
        <div>
            <div class="container ">
                <div class="section2">
                    <div class="text">
                        <div class="col-md-8">
                            <h3><b className='blue'>Latest podcast episodes</b></h3>
                            <p>It's designed to disseminate knowledge, promote best practices, and foster community engagement, leveraging Favour's technical expertise and passion for technology to educate and inspire audiences across the USA.</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4 p-4">
                            <div class="set1">
                                <div class="top">
                                    <img src={Img1} alt="" />
                                </div>
                                <div class="bottom">
                                    <div class="play">
                                        <img src={Img4} alt="" />
                                    </div>
                                    <div class="min">
                                        <p class="m-0">Insightful conversations</p>
                                        <span>20 MIN</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 p-4">
                            <div class="set1">
                                <div class="top">
                                    <img src={Img2} alt="" />
                                </div>
                                <div class="bottom">
                                    <div class="play">
                                        <img src={Img4} alt="" />
                                    </div>
                                    <div class="min">
                                        <p class="m-0">Expert interviews</p>
                                        <span>56 MIN</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 p-4">
                            <div class="set1">
                                <div class="top">
                                    <img src={Img3} alt="" />
                                </div>
                                <div class="bottom">
                                    <div class="play">
                                        <img src={Img4} alt="" />
                                    </div>
                                    <div class="min">
                                        <p class="m-0">Practical advice</p>
                                        <span>82 MIN</span>
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

export default Discover