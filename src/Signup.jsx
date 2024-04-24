import React from 'react'
import './Signup.css'
import {Link} from 'react-router-dom'

function Signup() {
    return (
        <>
            <div className='container-fluid cont1' style={{height:"100vh"}}>
                <div className="row ro1 d-flex justify-content-center align-items-center">
                    <div className="col-4 cole">
                        <h5 className='h5'>Signup Form</h5>
                        <form>
                            <div class="mb-1">
                                <label for="fullName" class="form-label">Full Name</label>
                                <input type="text" class="form-control" placeholder="Enter your name" aria-label="fullName" />
                            </div>
                            <div class="mb-1">
                                <label for="contact" class="form-label">Contact</label>
                                <input type="text" class="form-control" placeholder="Enter your Mobile number" aria-label="contact" />
                                <button type="submit" class="btn b b1">Verify</button>
                            </div>

                            <div class="mb-1">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div class="mb-1">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" />
                            </div>
                            <div class="mb-2">
                                <label for="dob" class="form-label">Date of Birth</label>
                                <input type="date" class="form-control" aria-label="dob" />
                            </div>
                            <div class="mb-2 form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1">I accepts all terms & conditions</label>
                            </div>
                            <button type="submit" class="btn b b2"> Sign up</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup