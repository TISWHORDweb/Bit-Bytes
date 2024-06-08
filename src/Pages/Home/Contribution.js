import React from 'react'
import Img1 from '../../Assets/image/Frame 163462.png'
import Img2 from '../../Assets/image/Frame 163462 (1).png'
import Img3 from '../../Assets/image/Frame 163462 (2).png'


function Features() {
    return (
        <div className="Features ">
            <div className="container ">
                <div className=" animate__animated animate__backInUp">
                    <div className="row mb-3">
                        <div className="col-md-4 mb-3">
                            <div className="cardd">
                                <img src={Img1} alt="" />
                                <h4>In-Depth Analysis of Technology Trends.</h4>
                                <p>Favour Ojika conducts thorough analyses of emerging t trends  As a software engineer, she provides deep insights into vulnerabilities, attack vectors, and mitigation strategies. By examining real-world cyber incidents, she equips her audience with the knowledge to enhance their defensive capabilities and resilience against cyber threats.</p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <div className="cardd">
                                <img src={Img2} alt="" />
                                <h4>Practical Guidance on Secure Software Development.</h4>
                                <p>Understanding the importance of secure software development, Favour shares best practices for integrating security into the software development lifecycle. Her episodes cover threat modeling, secure coding techniques, penetration testing, and code review methodologies, empowering fellow engineers to prioritize security and build resilient applications from the outset.</p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <div className="cardd">
                                <img src={Img3} alt="" />
                                <h4>Community Building and Knowledge Sharing.</h4>
                                <p>Beyond information dissemination, "The Bits and Bytes Podcast" fosters community building and knowledge sharing within the cyber security ecosystem. Through interactive Q&A sessions, listener feedback segments, and online forums, Favour creates a collaborative environment where audience members can share ideas, experiences, and best practices, enriching the collective knowledge of the tech community.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features