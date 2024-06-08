import React, { useState } from 'react'
import Img from '../../Assets/image/Group-6631.svg'

function Contact() {
    const [spin, setSpin] = useState(false)
    return (
        <div>
            <div className="contact mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <img src={Img} alt="" className=' w100' />
                        </div>
                        <div className="col-md-6 mb-3">
                        <h2><b className='blue '>Contact us</b></h2>
                            <form action="" className='mt-3'>
                                <div class="form-floating mb-3">
                                    <input type="text" class="form-control inputts" id="floatingInput11" placeholder="John Doe" />
                                    <label for="floatingInput">Full Name</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <input type="email" class="form-control inputts" id="floatingInput22" placeholder="john@gmail.com" />
                                    <label for="floatingInput">Email</label>
                                </div>
                                <textarea name="" cols="30" rows="5" placeholder='Message' class="form-control bord bordBlack" id="floatingInput33" ></textarea>
                                <button type="submit" class="btn host w-100 m-0 mt-4" onClick={() => setSpin(true)} >
                                    {spin ? <span class="spinner-border spinner-border-sm me-2" aria-hidden="true"></span> : <span></span>}
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact