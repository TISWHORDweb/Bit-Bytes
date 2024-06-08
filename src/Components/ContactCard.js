import React from 'react'

function ContactCard() {
    return (
        <div>
            <div className="container mt-5">
                <div className="middle mb-4 ">
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-4 ms-3">
                            <h4 className='blue'>Join to get free <br /> updates every <br /> week.</h4>
                        </div>
                        <div className="col-md-6 ms-3">
                            <div className="input">
                                <input type="search" placeholder='Email Address' />
                                <button className='host2 me-2'>Subscribe</button>
                            </div>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactCard