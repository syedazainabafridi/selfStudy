import React from 'react'
import './Login.css'
import {Link} from 'react-router-dom'
function Login() {
  return (
    <>
      <div className="container-fluid m-0 p-0 cont">
      {/* <img src={require('./chatbg.png') } className="img-fluid imgy" alt="" /> */}
        <div className="row ro flex-column align-items-center justify-content-center ">
      <div className="col-4 coli">
        <h4 className='text-center mt-2 h4'>Login</h4>
          <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control ip" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control ip" id="exampleInputPassword1" />
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
    <label class="form-check-label rmbr" for="exampleCheck1">Remember me</label>
    <span className='span1'>Forgot password?</span>
  </div>
  <span>
  <button type="submit" class="btn bt bt2" style={{height:"2rem",width:"5.2rem"}}>  <Link to="/chatscreen" className='l1'>  Sign in</Link></button>
  <button type="submit" class="btn bt bt1" style={{height:"2rem",width:"5rem"}}><Link to="/signup" className='l2'>Sign up</Link></button>
</span>
  
</form>
          </div>
        </div>

      </div>
</>
  )
}
export default Login